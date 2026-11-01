import { test,expect } from '@playwright/test';
import fs from 'node:fs';
import path from 'node:path';
function htmlRoutes(dir='dist',prefix=''):string[]{return fs.readdirSync(dir,{withFileTypes:true}).flatMap(item=>item.isDirectory()?htmlRoutes(path.join(dir,item.name),`${prefix}/${item.name}`):item.name==='index.html'?[`${prefix}/`]:[]);}
test('todas as páginas geradas e os links internos respondem',async({page,request})=>{
 const errors:string[]=[];page.on('pageerror',e=>errors.push(e.message));
 const routes=htmlRoutes();expect(routes.length).toBeGreaterThanOrEqual(19);
 const links=new Set<string>();
 for(const route of routes){const response=await page.goto(route);expect(response?.status(),route).toBe(200);await expect(page.locator('h1'),route).toHaveCount(1);expect(await page.locator('html').getAttribute('lang')).toBe('pt-BR');for(const href of await page.locator('a[href^="/"]').evaluateAll(nodes=>nodes.map(n=>(n as HTMLAnchorElement).getAttribute('href')!)))links.add(href.split('#')[0].split('?')[0]||'/');}
 for(const link of links)expect((await request.get(link)).status(),link).toBe(200);
 expect(errors).toEqual([]);
});
test('diretório filtra público, busca e mostra recuperação sem resultados',async({page})=>{
 await page.goto('/servicos/');await page.getByRole('button',{name:'Para profissionais',exact:true}).click();await expect(page.locator('[data-service-row]:visible')).toHaveCount(2);
 await page.getByLabel('Buscar por serviço ou necessidade').fill('fachada');await expect(page.getByText('Nenhum serviço encontrado.')).toBeVisible();
 await page.getByRole('button',{name:'Todos os serviços',exact:true}).click();await expect(page.locator('[data-service-row]:visible')).toHaveCount(1);await page.getByRole('heading',{name:'Escaneamento de fachada para retrofit',exact:true}).click();await expect(page).toHaveURL(/escaneamento-de-fachada/);
});
test('contato preserva serviço e não anuncia nem realiza envio sem integração',async({page,context})=>{
 await context.grantPermissions(['clipboard-read','clipboard-write']);const posts:string[]=[];page.on('request',r=>{if(r.method()==='POST')posts.push(r.url());});
 await page.goto('/contato/?servico=as-built-mep');await expect(page.getByLabel('Serviço de interesse')).toHaveValue('as-built-mep');
 await page.getByLabel('Nome',{exact:true}).fill('Pessoa de teste');await page.getByLabel('E-mail',{exact:true}).fill('teste@example.com');await page.getByLabel('O que você precisa conhecer ou documentar?').fill('Registrar instalações visíveis antes do fechamento.');await page.locator('input[name="privacidade"]').check();
 await page.getByRole('button',{name:'Preparar solicitação'}).click();await expect(page.getByRole('status')).toContainText('Nenhuma solicitação foi enviada');expect(posts).toEqual([]);
 await page.getByRole('button',{name:'Copiar resumo'}).click();await expect(page.getByRole('status')).toContainText('Resumo copiado');expect(await page.evaluate(()=>navigator.clipboard.readText())).toContain('As-built e infraestrutura MEP');
});
test('menu móvel, teclado e páginas não produzem rolagem horizontal',async({page})=>{
 for(const width of [360,390,768,1024,1536]){await page.setViewportSize({width,height:900});for(const route of ['/','/servicos/','/servicos/conferencia-de-excentricidade/','/sobre/','/aplicacoes/','/contato/']){await page.goto(route);expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1),`${width} ${route}`).toBe(true);}}
 await page.setViewportSize({width:390,height:844});await page.goto('/');const toggle=page.getByRole('button',{name:'Menu',exact:true});await toggle.click();await expect(toggle).toHaveAttribute('aria-expanded','true');await page.locator('.services-menu summary').click();await expect(page.locator('.mega-menu')).toBeVisible();await page.keyboard.press('Escape');await expect(toggle).toHaveAttribute('aria-expanded','false');await expect(toggle).toBeFocused();
});
test('comparação e etapas funcionam com movimento reduzido',async({page})=>{
 await page.emulateMedia({reducedMotion:'reduce'});await page.goto('/');const slider=page.getByRole('slider');await expect(slider).toHaveValue('55');await slider.fill('20');await expect(page.locator('[data-hero]')).toHaveCSS('--scan-edge','80%');
 await page.getByRole('button',{name:/03 Instalações/}).click();await expect(page.locator('#stage-detail-2')).toBeVisible();await expect(page.locator('#stage-detail-2')).toContainText('elementos ocultos não são identificados');await expect(page.locator('#stage-detail-0')).toBeHidden();
});
test('animação inicial termina com a representação disponível',async({page})=>{
 await page.emulateMedia({reducedMotion:'no-preference'});await page.goto('/');await page.waitForTimeout(2500);await expect(page.getByRole('slider')).toHaveValue('55');await expect(page.locator('[data-hero]')).toHaveCSS('--scan-edge','45%');
});
test('navegação e conteúdo permanecem disponíveis sem JavaScript',async({browser})=>{
 const context=await browser.newContext({javaScriptEnabled:false,viewport:{width:390,height:844}});const page=await context.newPage();await page.goto('http://127.0.0.1:4321/');await expect(page.locator('#main-nav')).toBeVisible();await page.locator('.services-menu summary').click();await expect(page.locator('.mega-menu')).toBeVisible();await page.locator('.mega-menu').getByRole('link',{name:'Levantamento arquitetônico de interiores',exact:true}).click();await expect(page.locator('h1')).toContainText('O espaço existente');await page.goto('http://127.0.0.1:4321/contato/');await expect(page.getByRole('button',{name:'Preparar solicitação'})).toBeDisabled();await context.close();
});
