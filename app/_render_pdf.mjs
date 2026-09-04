import { chromium } from 'playwright';
const b = await chromium.launch();
const p = await b.newPage();
await p.goto('file:///tmp/recap-profs.html', { waitUntil: 'load' });
await p.pdf({ path: '/tmp/Kamal-Campus-Presentation-enseignants.pdf', format: 'A4', printBackground: true,
  margin: { top: '0', bottom: '0', left: '0', right: '0' } });
await b.close(); console.log('PDF généré');
