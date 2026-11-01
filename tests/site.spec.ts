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
 for(const width of [360,390,768,1024,1536]){await page.setViewportSize({width,height:900});for(const route of ['/','/servicos/','/servicos/conferencia-da-excentricidade-das-estacas/','/sobre/','/aplicacoes/','/contato/']){await page.goto(route);expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1),`${width} ${route}`).toBe(true);}}
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
test('menu de serviços fecha quando o foco sai pelo teclado',async({page})=>{
 await page.setViewportSize({width:1366,height:768});await page.goto('/');await page.locator('.services-menu summary').focus();await page.keyboard.press('Enter');await expect(page.locator('.mega-menu')).toBeVisible();
 for(let i=0;i<30&&await page.evaluate(()=>document.querySelector('.services-menu')!.contains(document.activeElement));i++)await page.keyboard.press('Tab');
 await expect(page.locator('.services-menu')).not.toHaveAttribute('open','');await expect(page.locator('.mega-menu')).toBeHidden();
});
test('rolagem percorre as quatro etapas com permanência legível e detalhe visível',async({page})=>{
 for(const [width,height] of [[1536,1024],[1366,768],[1280,720]]){await page.setViewportSize({width,height});await page.emulateMedia({reducedMotion:'no-preference'});await page.goto('/');
  const {top,size}=await page.evaluate(()=>{const s=document.querySelector<HTMLElement>('[data-windows]')!;return {top:s.getBoundingClientRect().top+scrollY,size:s.offsetHeight};});const seen=new Map<number,number>();
  for(let y=top-200;y<top+size;y+=40){await page.evaluate(y=>scrollTo({top:y,behavior:'instant'}),y);await page.waitForTimeout(40);const state=await page.evaluate(()=>({stage:[...document.querySelectorAll('[data-stage]')].findIndex(b=>b.getAttribute('aria-pressed')==='true'),bottom:document.querySelector('.window-detail:not([hidden])')!.getBoundingClientRect().bottom}));if(state.stage>0){seen.set(state.stage,(seen.get(state.stage)||0)+40);expect(state.bottom,`${width}x${height}`).toBeLessThanOrEqual(height);}}
  expect([...seen.keys()].sort(),`${width}x${height}`).toEqual([1,2,3]);for(const [stage,distance] of seen)expect(distance,`${width}x${height} etapa ${stage}`).toBeGreaterThanOrEqual(height*.2);}
});
test('nenhuma página gerada produz rolagem horizontal em 360 px',async({page})=>{
 await page.setViewportSize({width:360,height:740});for(const route of htmlRoutes()){await page.goto(route);expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1),route).toBe(true);}
});
test('formulário explica em português o que falta e não copia resumo vazio',async({page})=>{
 await page.goto('/contato/');const submit=page.getByRole('button',{name:'Preparar solicitação'});const message=(selector:string)=>page.locator(selector).evaluate(e=>(e as HTMLInputElement).validationMessage);
 await page.getByRole('button',{name:'Copiar resumo'}).click();await expect(page.getByRole('status')).toContainText('Preencha ao menos um campo');
 await submit.click();await expect(page.locator('#nome')).toBeFocused();expect(await message('#nome')).toBe('Informe seu nome.');
 await page.locator('#nome').fill('Pessoa de teste');expect(await message('#nome')).toBe('');await page.locator('#email').fill('teste');await submit.click();expect(await message('#email')).toContain('Confira o e-mail');
 await page.locator('#email').fill('teste@example.com');await page.locator('#descricao').fill('Registrar o ambiente.');await submit.click();expect(await message('input[name="privacidade"]')).toBe('Confirme que leu as informações de privacidade.');
});
test('link de etapa do serviço abre o corte na etapa correspondente e âncoras ficam abaixo do cabeçalho',async({page})=>{
 await page.setViewportSize({width:1366,height:768});await page.emulateMedia({reducedMotion:'no-preference'});await page.goto('/servicos/as-built-mep/');
 for(const anchor of ['#execucao','#duvidas']){await page.locator(`.service-content aside a[href="${anchor}"]`).click();await expect.poll(()=>page.locator(anchor).evaluate(e=>Math.round(e.getBoundingClientRect().top))).toBe(110);}
 await page.locator('#quando a.text-link').click();await expect(page).toHaveURL(/\?etapa=3#janelas$/);await expect(page.locator('#stage-detail-2')).toBeVisible();await expect(page.getByRole('button',{name:/03 Instalações/})).toHaveAttribute('aria-pressed','true');
 const bottom=await page.locator('#stage-detail-2').evaluate(e=>e.getBoundingClientRect().bottom);expect(bottom).toBeLessThanOrEqual(768);
});
test('comparação responde ao teclado e ao toque no celular sem rolar a página',async({browser})=>{
 const context=await browser.newContext({viewport:{width:390,height:844},hasTouch:true,isMobile:true,reducedMotion:'reduce'});const page=await context.newPage();await page.goto('http://127.0.0.1:4321/');const slider=page.getByRole('slider');const hero=page.locator('[data-hero]');
 await slider.focus();await page.keyboard.press('End');await expect(slider).toHaveValue('100');await expect(hero).toHaveCSS('--scan-edge','0%');await page.keyboard.press('Home');await expect(slider).toHaveValue('0');await page.keyboard.press('ArrowRight');await expect(slider).toHaveValue('1');
 const box=(await slider.boundingBox())!;expect(box.height).toBeGreaterThanOrEqual(24);const scroll=await page.evaluate(()=>scrollY);
 await page.touchscreen.tap(box.x+box.width-4,box.y+box.height/2);await expect.poll(async()=>Number(await slider.inputValue())).toBeGreaterThan(80);
 await page.touchscreen.tap(box.x+4,box.y+box.height/2);await expect.poll(async()=>Number(await slider.inputValue())).toBeLessThan(20);expect(await page.evaluate(()=>scrollY)).toBe(scroll);
 await context.close();
});
test('contato traz as dúvidas gerais sem repetir o preparo da solicitação',async({page})=>{
 await page.goto('/contato/');const faq=page.locator('.faq-list details');await expect(faq).toHaveCount(4);await expect(page.locator('.faq-list')).not.toContainText('O que ajuda a preparar');
 await faq.first().locator('summary').focus();await page.keyboard.press('Enter');await expect(faq.first().locator('p')).toBeVisible();
});
test('captura real só carrega o visualizador externo depois do clique',async({page})=>{
 const external:string[]=[];await page.route('**/viewer.holobuilder.com/**',route=>{external.push(route.request().url());return route.fulfill({contentType:'text/html',body:'<title>visualizador</title>'});});
 await page.setViewportSize({width:1366,height:900});await page.goto('/');const section=page.locator('[data-capture]');await section.scrollIntoViewIfNeeded();await expect(section.locator('iframe')).toHaveCount(0);await page.waitForTimeout(300);expect(external).toEqual([]);
 await section.getByRole('button',{name:'Explorar a captura'}).click();const frame=section.locator('iframe');await expect(frame).toHaveAttribute('src',/viewer\.holobuilder\.com\/project\//);await expect(frame).toHaveAttribute('title',/captura real/);await expect.poll(()=>external.length).toBeGreaterThan(0);
 await page.setViewportSize({width:390,height:844});await page.goto('/');await expect(page.locator('[data-capture]').getByRole('button',{name:'Explorar a captura'})).toBeHidden();await expect(page.locator('[data-capture-external]')).toBeVisible();
});
test('Home filtra serviços por finalidade e volta à lista completa',async({page})=>{
 await page.goto('/');const finder=page.locator('.finder');const rows=finder.locator('[data-service-row]:visible');await expect(rows).toHaveCount(9);
 const documentar=finder.getByRole('button',{name:/Documentar/});await documentar.focus();await page.keyboard.press('Enter');await expect(documentar).toHaveAttribute('aria-pressed','true');await expect(rows).toHaveCount(2);await expect(finder.locator('[data-filter-count]')).toHaveText('2 serviços encontrados');
 await expect(rows.filter({hasText:'As-built e infraestrutura MEP'})).toHaveCount(1);await expect(rows.filter({hasText:'Locação das linhas de eixo das estacas'})).toHaveCount(0);
 await finder.getByRole('button',{name:/Apresentar/}).click();await expect(rows).toHaveCount(1);await expect(rows.first()).toContainText('Tour virtual decorado');
 await finder.getByRole('button',{name:/Todas/}).click();await expect(rows).toHaveCount(9);await expect(documentar).toHaveAttribute('aria-pressed','false');
});
test('diretório combina público, finalidade e busca, com estado vazio',async({page})=>{
 await page.goto('/servicos/');const rows=page.locator('[data-service-row]:visible');const goal=page.getByLabel('Finalidade');
 await goal.selectOption('apresentar');await expect(rows).toHaveCount(1);
 await page.getByRole('button',{name:'Para empresas',exact:true}).click();await expect(rows).toHaveCount(0);await expect(page.getByText('Nenhum serviço encontrado.')).toBeVisible();
 await page.getByRole('button',{name:'Todos os serviços',exact:true}).click();await goal.selectOption('conferir');await expect(rows).toHaveCount(2);
 await page.getByLabel('Buscar por serviço ou necessidade').fill('estacas executadas');await expect(rows).toHaveCount(1);await expect(rows.first()).toContainText('Conferência da excentricidade');
});
test('sem JavaScript a Home mostra os nove serviços e esconde os filtros',async({browser})=>{
 const context=await browser.newContext({javaScriptEnabled:false});const page=await context.newPage();await page.goto('http://127.0.0.1:4321/');
 await expect(page.locator('.finder [data-service-row]:visible')).toHaveCount(9);await expect(page.locator('[data-goal-filters]')).toBeHidden();
 await page.goto('http://127.0.0.1:4321/servicos/');await expect(page.locator('[data-goal-field]')).toBeHidden();await context.close();
});
test('página de serviço resume, compara, separa fontes e explica relacionados',async({page})=>{
 await page.goto('/servicos/conferencia-da-excentricidade-das-estacas/');const facts=page.getByLabel('Resumo do serviço');await expect(facts).toContainText('As estacas estão onde as linhas de eixo do projeto previam?');await expect(facts).toContainText('Antes da execução ou com as estacas executadas');
 const table=page.locator('#comparacao table');await expect(table.locator('thead')).toContainText('Locação das linhas de eixo das estacas');await expect(table.locator('tbody tr')).toHaveCount(3);await expect(table).toContainText('Onde ficam, em campo, as linhas de eixo que posicionam as estacas do projeto?');
 await expect(page.locator('#alcance')).toHaveCount(0);await expect(page.locator('aside').getByRole('link',{name:'O que o registro alcança'})).toHaveCount(0);
 await expect(page.locator('.related .service-row').first()).toContainText('A locação materializa as linhas de eixo');
 await page.goto('/servicos/as-built-mep/');await expect(page.locator('#alcance')).toContainText('Captura direta');await expect(page.locator('#alcance')).toContainText('Trechos já cobertos por forro, parede ou piso.');await expect(page.locator('#solicitacao .checklist li')).toHaveCount(4);
 await page.locator('#solicitacao').getByRole('link',{name:'Preparar uma solicitação'}).click();await expect(page.getByLabel('Serviço de interesse')).toHaveValue('as-built-mep');
 await page.goto('/servicos/escaneamento-de-fachada/');await expect(page.locator('#comparacao')).toHaveCount(0);
 await page.setViewportSize({width:360,height:740});await page.goto('/servicos/levantamento-de-interiores/');await expect(page.locator('#comparacao td').first()).toBeVisible();expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1)).toBe(true);
});
test('etapa da obra entra no resumo copiado',async({page,context})=>{
 await context.grantPermissions(['clipboard-read','clipboard-write']);await page.goto('/contato/?servico=as-built-mep');
 await page.getByLabel('Nome',{exact:true}).fill('Pessoa de teste');await page.getByLabel('Etapa da obra ou do projeto').selectOption('Instalações aparentes, antes dos fechamentos');
 await page.getByRole('button',{name:'Copiar resumo'}).click();const text=await page.evaluate(()=>navigator.clipboard.readText());expect(text).toContain('Etapa: Instalações aparentes, antes dos fechamentos');expect(text).toContain('Serviço: As-built e infraestrutura MEP');
});
test('capturas reais substituem a imagem conceitual só nos serviços com material aprovado',async({page})=>{
 const real=['as-built-mep','escaneamento-de-fachada','conferencia-da-excentricidade-das-estacas','locacao-das-linhas-de-eixo-das-estacas','levantamento-de-interiores'];
 for(const slug of real){await page.goto(`/servicos/${slug}/`);const figure=page.locator('[data-real-image]');await expect(figure).toContainText('Captura real da UNION3D');await expect(page.getByText('Imagem conceitual de contexto')).toHaveCount(0);
  const img=figure.locator('img');await expect(img).toHaveAttribute('alt',/.{40,}/);expect(await img.evaluate((el:HTMLImageElement)=>el.complete&&el.naturalWidth>0)).toBe(true);
  const json=JSON.parse(fs.readFileSync(path.join('public',(await img.getAttribute('src'))!+'.json'),'utf8'));expect(json.source).toContain('drive.google.com');}
 await page.goto('/servicos/as-built-mep/');const detail=page.locator('#finalidade figure img');await detail.scrollIntoViewIfNeeded();expect(await detail.evaluate((el:HTMLImageElement)=>el.complete&&el.naturalWidth>0)).toBe(true);
 for(const slug of ['conferencia-de-topografia','mapeamento-aereo-com-drone','tour-virtual-decorado']){await page.goto(`/servicos/${slug}/`);await expect(page.locator('[data-real-image]')).toHaveCount(0);await expect(page.getByText('Imagem conceitual de contexto')).toBeVisible();}
});
test('Home liga cada problema ao serviço e reorganiza a lista no celular',async({page})=>{
 await page.setViewportSize({width:1366,height:900});await page.goto('/');const items=page.locator('.problem-list a');await expect(items).toHaveCount(4);
 for(const href of await items.evaluateAll(links=>links.map(a=>a.getAttribute('href')))){expect(href).toMatch(/^\/servicos\/[a-z-]+\/$/);}
 const tops=await items.evaluateAll(links=>links.map(a=>Math.round(a.getBoundingClientRect().top)));expect(tops[0]).toBe(tops[1]);
 await page.setViewportSize({width:390,height:844});await page.goto('/');const mobile=await page.locator('.problem-list a').evaluateAll(links=>links.map(a=>a.getBoundingClientRect().top));expect(mobile[1]).toBeGreaterThan(mobile[0]);
 const hero=await page.evaluate(()=>{const p=document.querySelector('.hero-copy p')!;return p.scrollWidth<=p.clientWidth;});expect(hero).toBe(true);
 await page.locator('.capture-next').click();await expect(page).toHaveURL(/\/contato\/$/);
});
