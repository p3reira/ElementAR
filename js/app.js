const { elementos } = window.TABELA;
const cena   = document.getElementById('cena');
const painel = document.getElementById('painel');
const dica   = document.getElementById('dica');
const $ = id => document.getElementById(id);

let atual = null;

function mostrarPainel(el) {
  painel.style.setProperty('--cor', el.cor);
  $('p-simbolo').textContent  = el.simbolo;
  $('p-nome').textContent     = el.nome;
  $('p-familia').textContent  = el.familiaNome;
  $('p-numero').textContent   = el.numero;
  $('p-massa').textContent    = el.massaAtomica.toLocaleString('pt-BR');
  $('p-fase').textContent     = el.fase;
  $('p-grupo').textContent    = el.grupo;
  $('p-periodo').textContent  = el.periodo;
  $('p-camadas').textContent  = el.camadas.join('-');
  $('p-descricao').textContent = el.descricao;
  $('p-aviso').textContent = el.propriedadesPrevistas
    ? 'Algumas propriedades deste elemento são apenas previstas, não medidas.'
    : '';
  painel.classList.add('visivel');
  dica.classList.add('oculta');
}

function esconderPainel() {
  painel.classList.remove('visivel');
  dica.classList.remove('oculta');
}

// O índice no array = targetIndex no targets.mind (H = 0, He = 1, ... Og = 117)
elementos.forEach((el, i) => {
  const num = String(el.numero).padStart(3, '0');

  const alvo = document.createElement('a-entity');
  alvo.setAttribute('mindar-image-target', `targetIndex: ${i}`);

  const modelo = document.createElement('a-gltf-model');
  modelo.setAttribute('scale', '0.5 0.5 0.5');
  modelo.setAttribute('animation', 'property: rotation; to: 0 360 0; loop: true; dur: 12000; easing: linear');
  alvo.appendChild(modelo);

  // Anel na cor da família, por baixo do modelo
  const anel = document.createElement('a-ring');
  anel.setAttribute('radius-inner', '0.42');
  anel.setAttribute('radius-outer', '0.48');
  anel.setAttribute('color', el.cor);
  anel.setAttribute('material', 'shader: flat; opacity: 0.9; transparent: true');
  alvo.appendChild(anel);

  alvo.addEventListener('targetFound', () => {
    if (!modelo.getAttribute('gltf-model')) {
      modelo.setAttribute('gltf-model', `url(./assets/models/${num}_${el.simbolo}.glb)`);
    }
    atual = el.numero;
    mostrarPainel(el);
  });

  alvo.addEventListener('targetLost', () => {
    if (atual === el.numero) { atual = null; esconderPainel(); }
  });

  cena.appendChild(alvo);
});
