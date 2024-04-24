import fs from 'fs';
import path from 'path';

try {
  const data = await fs.promises.readFile('billsboards-63569-default-rtdb-export.json', 'utf8');
  const db = JSON.parse(data);
  const entries = Object.entries(db.db1);
  const sorted = entries.sort((a, b) => b[1] - a[1]);
  const top20 = sorted.slice(0, 20).map(([name, count]) => [name.replace(/_/g, '.'), count]);

  // print top 20
  const top20Str = top20.map(([name, count], index) => `${index + 1}. ${name} at ${count}`).join('\n');
  console.log(top20Str);

  // read siteTop
  const siteTopPath = path.join('src/components/siteTop.vue');
  let siteTopContent = await fs.promises.readFile(siteTopPath, 'utf8');

  // replace data
  const sitesDataStart = siteTopContent.indexOf('sites: [') + 'sites: ['.length;
  const sitesDataEnd = siteTopContent.indexOf('      ],', sitesDataStart);
  const newSitesData = top20.map(([name, count]) => `        { name: "${name}", count: ${count} },`).join('\n');
  siteTopContent = siteTopContent.slice(0, sitesDataStart) + '\n' + newSitesData + '\n' + siteTopContent.slice(sitesDataEnd);

  // write to file
  await fs.promises.writeFile(siteTopPath, siteTopContent);
  console.log('Completed! siteTop.vue updated');
} catch (error) {
  console.error('You fucked up lmaoo\n', error);
}