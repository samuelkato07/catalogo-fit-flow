const catalogoProdutos = [
{ nome: 'Fit & Flow Whey Protein Isolado 900g', descricao: 'Suplemento proteico de alta absorção e pureza, ideal para recuperação muscular e ganho de massa.', imagem: 'imagens/1.jpeg', preco: 169.90, categoria: 'Suplementos' },
{ nome: 'Fit & Flow Creatina Monohidratada Pure 300g', descricao: 'Creatina de altíssima pureza para aumento de força, resistência e explosão nos treinos.', imagem: 'imagens/2.jpeg', preco: 89.90, categoria: 'Suplementos' },
{ nome: 'Fit & Flow Multivitamínico Daily Vitality', descricao: 'Fórmula diária essencial com vitaminas e minerais para imunidade e energia do dia a dia.', imagem: 'imagens/3.jpeg', preco: 69.90, categoria: 'Suplementos' },
{ nome: 'Fit & Flow Pre-Workout Supercharge 400g', descricao: 'Pré-treino de alta performance com cafeína e beta-alanina para máximo foco e energia.', imagem: 'imagens/4.jpeg', preco: 119.90, categoria: 'Suplementos' },
{ nome: 'Fit & Flow Sérum Facial Ácido Hialurônico', descricao: 'Sérum hidratante de alta penetração que combate o ressecamento e melhora a firmeza da pele.', imagem: 'imagens/5.jpeg', preco: 109.90, categoria: 'Skincare' },
{ nome: 'Fit & Flow Cleansing Oil Gel de Limpeza', descricao: 'Gel de limpeza facial leve que remove impurezas e maquiagem sem agredir a barreira cutânea.', imagem: 'imagens/6.jpeg', preco: 69.90, categoria: 'Skincare' },
{ nome: 'Fit & Flow Creme Anti-Idade Rejuvenescedor Pro', descricao: 'Creme facial noturno com retinol e peptídeos, reduz linhas de expressão e uniformiza o tom.', imagem: 'imagens/7.jpeg', preco: 129.90, categoria: 'Skincare' },
{ nome: 'Fit & Flow Máscara Facial Hidratante Glow', descricao: 'Máscara ultra-hidratante para renovação rápida da pele, proporcionando brilho natural.', imagem: 'imagens/8.jpeg', preco: 39.90, categoria: 'Skincare' },
{ nome: 'Fit & Flow Gotas de Melatonina & Magnésio Deep Sleep', descricao: 'Suplemento relaxante que induz ao sono profundo e melhora a qualidade do descanso noturno.', imagem: 'imagens/9.jpeg', preco: 59.90, categoria: 'Sono' },
{ nome: 'Fit & Flow Óleo Essencial de Lavanda', descricao: 'Óleo essencial puro para difusor, ideal para acalmar a mente e criar um ambiente relaxante.', imagem: 'imagens/10.jpeg', preco: 49.90, categoria: 'Sono' },
{ nome: 'Fit & Flow Kit Elásticos de Resistência Mini Bands', descricao: 'Conjunto de faixas elásticas de diferentes intensidades para treino completo de força em casa.', imagem: 'imagens/11.jpeg', preco: 59.90, categoria: 'Fitness em Casa' },
{ nome: 'Fit & Flow Tapete de Yoga & Pilates Anti-derrapante', descricao: 'Mat confortável e aderente, perfeito para exercícios de solo, alongamentos e meditação.', imagem: 'imagens/12.jpeg', preco: 79.90, categoria: 'Fitness em Casa' },
{ nome: 'Fit & Flow Glutamina Powder 300g', descricao: 'Aminoácido essencial para a saúde intestinal, recuperação muscular e fortalecimento da imunidade.', imagem: 'imagens/13.jpeg', preco: 159.90, categoria: 'Suplementos' },
{ nome: 'Fit & Flow Ômega 3 Ultra Pure 120 Cápsulas', descricao: 'Cápsulas de óleo de peixe concentrado com alta dosagem de EPA e DHA para saúde cardiovascular e cognitiva.', imagem: 'imagens/14.jpeg', preco: 189.90, categoria: 'Suplementos' },
{ nome: 'Fit & Flow Colágeno Verisol & Ácido Hialurônico', descricao: 'Suplemento em pó para firmeza da pele, fortalecimento de unhas e cabelos com sabor suave.', imagem: 'imagens/15.jpeg', preco: 179.00, categoria: 'Suplementos' },
{ nome: 'Fit & Flow Termogênico Natural Fire Clean', descricao: 'Fórmula à base de cafeína, chá verde e pimenta para aceleração do metabolismo e mais energia.', imagem: 'imagens/16.jpeg', preco: 139.90, categoria: 'Suplementos' },
{ nome: 'Fit & Flow ZMA Night Complex', descricao: 'Combinação de zinco, magnésio e vitamina B6 para otimização hormonal e recuperação muscular noturna.', imagem: 'imagens/17.jpeg', preco: 119.00, categoria: 'Suplementos' },
{ nome: 'Fit & Flow Probiótico Daily Balance', descricao: 'Suplemento probiótico em cápsulas para equilíbrio da flora intestinal e suporte digestivo diário.', imagem: 'imagens/18.jpeg', preco: 149.50, categoria: 'Suplementos' },
{ nome: 'Fit & Flow Protetor Solar Facial Fluido FPS 50', descricao: 'Filtro solar com toque seco, alta proteção contra raios UVA/UVB e ação antioxidante.', imagem: 'imagens/19.jpeg', preco: 98.90, categoria: 'Skincare' },
{ nome: 'Fit & Flow Esfoliante Facial Enzimático', descricao: 'Renovador celular suave que remove células mortas sem agredir a pele, deixando-a macia e luminosa.', imagem: 'imagens/20.jpeg', preco: 85.00, categoria: 'Skincare' },
{ nome: 'Fit & Flow Tônico Facial Calmante Cica & Camomila', descricao: 'Tônico sem álcool que reequilibra o pH da pele, acalma vermelhidões e hidrata suavemente.', imagem: 'imagens/21.jpeg', preco: 79.90, categoria: 'Skincare' },
{ nome: 'Fit & Flow Balm Labial Hidratante Repair', descricao: 'Protetor e restaurador labial com manteiga de karité e vitamina E contra o ressecamento.', imagem: 'imagens/22.jpeg', preco: 45.00, categoria: 'Skincare' },
{ nome: 'Fit & Flow Spray de Travesseiro Aromático Calma', descricao: 'Spray botânico com óleos essenciais que perfuma o ambiente e induz a um relaxamento profundo.', imagem: 'imagens/23.jpeg', preco: 69.90, categoria: 'Sono' },
{ nome: 'Fit & Flow Máscara de Dormir em Seda Blockout', descricao: 'Máscara tapa-olhos 100% seda que bloqueia a luz por completo e protege a região dos olhos.', imagem: 'imagens/24.jpeg', preco: 119.90, categoria: 'Sono' },
{ nome: 'Fit & Flow Chá Misto Herbal Good Night 100g', descricao: 'Infusão natural de camomila, melissa e capim-limão para desacelerar a mente antes de dormir.', imagem: 'imagens/25.jpeg', preco: 59.90, categoria: 'Sono' },
{ nome: 'Fit & Flow Anel Pilates & Yoga Toning Ring', descricao: 'Acessório flexível e resistente para fortalecimento do core, coxas, braços e alinhamento postural.', imagem: 'imagens/26.jpeg', preco: 129.90, categoria: 'Fitness em Casa' },
{ nome: 'Fit & Flow Corda de Saltar com Contador Digital', descricao: 'Corda ajustável com rolamento rápido e contador para treinos aeróbicos e queima de calorias.', imagem: 'imagens/27.jpeg', preco: 89.90, categoria: 'Fitness em Casa' },
{ nome: 'Fit & Flow Bloco de Yoga em EVA de Alta Densidade', descricao: 'Suporte estável e firme para auxiliar em posturas de yoga, alongamentos e treino de flexibilidade.', imagem: 'imagens/28.jpeg', preco: 49.90, categoria: 'Fitness em Casa' },
{ nome: 'Fit & Flow Par de Halteres Emborrachados 3kg', descricao: 'Halteres anatômicos com revestimento emborrachado para treinos de força e definição muscular.', imagem: 'imagens/29.jpeg', preco: 159.00, categoria: 'Fitness em Casa' },
{ nome: 'Fit & Flow Roda Exercitadora Abdominal Pro', descricao: 'Rolo para fortalecimento intenso do abdômen, lombar e ombros com pegada ergonômica.', imagem: 'imagens/30.jpeg', preco: 99.90, categoria: 'Fitness em Casa' }
];


const divCatalogo = document.getElementById('div-catalogo');
const formBusca = document.getElementById('form-busca');

function removerAcentos(texto) {
return texto.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

function formatarPreco(valor) {
return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

function criarCard(produto) {
const card = document.createElement('div');
card.classList.add('div-card');

const divImagem = document.createElement('div');
divImagem.classList.add('div-imagem');

const imagem = document.createElement('img');
imagem.alt = produto.nome;
imagem.loading = 'lazy';

// Foto real (.jpg) se existir; senão, a ilustração embutida
const chave = produto.imagem.split('/').pop().replace('.svg', '');
imagem.onerror = () => {
imagem.onerror = null;
imagem.src = ilustracoes[chave] || ilustracoes['sem-imagem'];
};
imagem.src = produto.imagem.replace('.svg', '.jpg');
divImagem.appendChild(imagem);

const corpo = document.createElement('div');
corpo.classList.add('card-corpo');

const titulo = document.createElement('h3');
titulo.textContent = produto.nome;

const descricao = document.createElement('p');
descricao.classList.add('p-descricao');
descricao.textContent = produto.descricao;

const categoria = document.createElement('span');
categoria.classList.add('span-categoria');
categoria.textContent = produto.categoria;

const rodape = document.createElement('div');
rodape.classList.add('card-rodape');

const preco = document.createElement('span');
preco.classList.add('span-preco');
preco.textContent = formatarPreco(produto.preco);

const botaoComprar = document.createElement('button');
botaoComprar.type = 'button';
botaoComprar.classList.add('btn-comprar');
botaoComprar.textContent = 'Comprar';

rodape.append(preco, botaoComprar);
corpo.append(titulo, descricao, categoria, rodape);
card.append(divImagem, corpo);
return card;
}

function mostrarCatalogoProdutos(event) {
if (event) event.preventDefault();

const filtro = removerAcentos(document.getElementById('filtro').value.trim().toLowerCase());

const produtosFiltrados = catalogoProdutos.filter(produto =>
removerAcentos(`${produto.nome} ${produto.descricao} ${produto.categoria}`.toLowerCase()).includes(filtro)
);

divCatalogo.innerHTML = '';

if (produtosFiltrados.length === 0) {
divCatalogo.innerHTML = '<p class="filtro-erro">Não encontramos nenhum produto com esse termo. Tente "sono", "skincare" ou "suplementos".</p>';
return;
}

produtosFiltrados.forEach(produto => divCatalogo.appendChild(criarCard(produto)));
}

formBusca.addEventListener('submit', mostrarCatalogoProdutos);
mostrarCatalogoProdutos();

