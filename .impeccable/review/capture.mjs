import {chromium} from '@playwright/test';
import fs from 'node:fs/promises';
const browser=await chromium.launch({executablePath:'/usr/bin/chromium',args:['--no-sandbox']});
const names=[];const issues=[];
for(const [name,width,height] of [['desktop',1536,1024],['tablet',768,1024],['mobile',390,844]]){
 const page=await browser.newPage({viewport:{width,height},reducedMotion:'reduce'});
 const captures=[['home','/'],['service','/servicos/as-built-mep/'],['professionals','/servicos/profissionais/'],['contact','/contato/'],['about','/sobre/']];
 for(const [routeName,route]of captures){await page.goto('http://127.0.0.1:4321'+route);await page.evaluate(async()=>{document.querySelectorAll('img').forEach(img=>img.loading='eager');await Promise.all([...document.images].map(img=>img.decode().catch(()=>{})));await document.fonts.ready;});await page.screenshot({path:`.impeccable/review/${name}-${routeName}.png`,fullPage:true});names.push(`${name}-${routeName}.png`);if(routeName==='home')await page.screenshot({path:`.impeccable/review/${name}.png`});const over=await page.evaluate(()=>[...document.querySelectorAll('body *')].filter(el=>el.getBoundingClientRect().right>innerWidth+1).map(el=>({tag:el.tagName,cls:el.className})));if(over.length)issues.push({name,route,over});}
 await page.close();
}
await fs.writeFile('.impeccable/review/capture-results.json',JSON.stringify({files:names,overflow:issues},null,2));
await browser.close();console.log(JSON.stringify({captures:names.length+3,overflow:issues}));
