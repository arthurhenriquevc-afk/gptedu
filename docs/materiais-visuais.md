# Proveniência dos materiais visuais

Os materiais de imagem são estudos gerados, com uma exceção: `captura-real-sala.webp`. Os estudos não representam projeto, execução, captura ou nuvem de pontos real da UNION3D. As legendas do website precisam acompanhar seu uso.

- `hero-physical.webp`: estado físico conceitual gerado a partir do panorama para permitir a transformação visual. Há pequenas diferenças entre imagens geradas; não é uma comparação de levantamento real.
- `hero-scan.webp`: arquitetura e representação geométrica conceituais, derivadas do estudo visual anterior.
- `construction-section.webp`: corte arquitetônico ilustrativo para explicar janelas de acesso, sem função de desenho executivo.
- `interior.webp`: ambiente interior conceitual para a área de profissionais e aplicações.
- `captura-real-sala.webp`: único material real. Recorte de uma tela do visualizador FARO Sphere XG, em uma captura da própria UNION3D (ponto Scan_005, 11/03/2025, modo Fotografia). O recorte exclui o nome do projeto, as barras de ferramentas e o banner de cookies. Serve de prévia da seção "Captura real" da Home. Origem registrada em `captura-real-sala.webp.json`.

Arquivos PNG de origem permanecem em `assets/plates/` e `/workspace/generated_images/`. A conversão para WebP preserva as dimensões e reduz o peso sem introduzir elementos novos. O motor da Impeccable registrou os prompts em sidecars `.webp.json`, por não suportar metadados embutidos nesse formato.

A identidade usa o logotipo oficial da UNION3D, recebido em vetor com a documentação de marca. O site aplica a assinatura horizontal azul e escura (`public/marca/union3d-horizontal.svg`) no cabeçalho e no rodapé; a versão branca fica reservada a fundos em tinta. O favicon é o símbolo oficial sobre um quadrado claro, para continuar visível em abas escuras. As dez versões recebidas estão em `docs/marca/`.
