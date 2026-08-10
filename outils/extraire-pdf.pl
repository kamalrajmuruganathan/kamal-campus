#!/usr/bin/perl
# Extracteur PDF v2 — exploite les tables ToUnicode (CMap) pour retrouver les
# caractères que la version précédente perdait (lettres accentuées, symboles
# mathématiques, indices). Fusionne toutes les CMap du document.
use strict;
use warnings;
use Compress::Zlib;
binmode(STDOUT, ':utf8');

my $file = shift or die "usage: extract2.pl fichier.pdf\n";
open my $fh, '<:raw', $file or die $!;
local $/;
my $pdf = <$fh>;
close $fh;

# ── 1. collecte des flux décompressés ───────────────────────────────────────
my @streams;
while ($pdf =~ /stream\r?\n?(.*?)endstream/gs) {
    my $raw = $1;
    my $d = Compress::Zlib::uncompress($raw);
    $d = $raw unless defined $d;
    push @streams, $d;
}

# ── 2. table de correspondance code → caractère, fusionnée ──────────────────
my %map;
for my $s (@streams) {
    next unless $s =~ /beginbfchar|beginbfrange/;

    # bfchar : <src> <dst>
    while ($s =~ /beginbfchar(.*?)endbfchar/gs) {
        my $bloc = $1;
        while ($bloc =~ /<([0-9A-Fa-f]+)>\s*<([0-9A-Fa-f]+)>/g) {
            my ($src, $dst) = (hex($1), $2);
            $map{$src} = decode_dst($dst);
        }
    }
    # bfrange : <lo> <hi> <dst>  ou  <lo> <hi> [<d1> <d2> ...]
    while ($s =~ /beginbfrange(.*?)endbfrange/gs) {
        my $bloc = $1;
        while ($bloc =~ /<([0-9A-Fa-f]+)>\s*<([0-9A-Fa-f]+)>\s*(<[0-9A-Fa-f]+>|\[[^\]]*\])/g) {
            my ($lo, $hi, $dst) = (hex($1), hex($2), $3);
            if ($dst =~ /^\[/) {
                my @items = ($dst =~ /<([0-9A-Fa-f]+)>/g);
                for my $i (0 .. $#items) {
                    $map{$lo + $i} = decode_dst($items[$i]);
                }
            } else {
                (my $base = $dst) =~ s/[<>]//g;
                my $start = hex($base);
                for my $c ($lo .. $hi) {
                    $map{$c} = chr($start + $c - $lo);
                }
            }
        }
    }
}

sub decode_dst {
    my $hex = shift;
    $hex =~ s/[<>]//g;
    my $out = '';
    # les destinations sont en UTF-16BE, éventuellement plusieurs caractères
    my @cps;
    for (my $i = 0; $i + 3 < length($hex) + 1; $i += 4) {
        push @cps, hex(substr($hex, $i, 4));
    }
    # recombine les paires de surrogates UTF-16 (mathematiques italiques, etc.)
    for (my $k = 0; $k <= $#cps; $k++) {
        my $cp = $cps[$k];
        next unless $cp;
        if ($cp >= 0xD800 && $cp <= 0xDBFF && $k < $#cps) {
            my $lo = $cps[$k+1];
            if ($lo >= 0xDC00 && $lo <= 0xDFFF) {
                $out .= chr(0x10000 + (($cp - 0xD800) << 10) + ($lo - 0xDC00));
                $k++; next;
            }
        }
        next if $cp >= 0xD800 && $cp <= 0xDFFF;   # surrogate isole : ignore
        $out .= chr($cp);
    }
    return $out;
}

print STDERR "table ToUnicode : " . scalar(keys %map) . " entrées\n";

# ── 3. extraction du texte, en appliquant la table ──────────────────────────
my $out = '';
for my $d (@streams) {
    next unless $d =~ /(Tj|TJ)/;
    for my $line (split /\n/, $d) {
        if ($line =~ /\[(.*)\]\s*TJ/) {
            my $arr = $1;
            while ($arr =~ /(<[0-9A-Fa-f]+>)|(\((?:[^()\\]|\\.)*\))|(-?[\d.]+)/g) {
                if (defined $1) { $out .= hexstring($1) }
                elsif (defined $2) { $out .= litstring($2) }
                elsif (defined $3 && $3 <= -100) { $out .= ' ' }
            }
        }
        elsif ($line =~ /(<[0-9A-Fa-f]+>)\s*Tj/) { $out .= hexstring($1) }
        elsif ($line =~ /(\((?:[^()\\]|\\.)*\))\s*Tj/) { $out .= litstring($1) }
        $out .= "\n" if $line =~ /(Td|TD|T\*|ET)\s*$/;
    }
}

# chaîne hexadécimale : codes de 2 octets, résolus par la table
sub hexstring {
    my $h = shift;
    $h =~ s/[<>]//g;
    my $r = '';
    for (my $i = 0; $i + 1 < length($h); $i += 4) {
        my $code = hex(substr($h, $i, 4));
        $r .= exists $map{$code} ? $map{$code} : '';
    }
    return $r;
}

# chaîne littérale : octets simples, résolus par la table si possible
sub litstring {
    my $s = shift;
    $s =~ s/^\(|\)$//g;
    $s =~ s/\\([()\\])/$1/g;
    my $r = '';
    for my $ch (split //, $s) {
        my $code = ord($ch);
        $r .= exists $map{$code} ? $map{$code} : $ch;
    }
    return $r;
}

$out =~ s/[ \t]+/ /g;
$out =~ s/\n{3,}/\n\n/g;
print $out;
