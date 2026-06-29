/* ╔══════════════════════════════════════════════════════════════════════════╗
   ║                                                                          ║
   ║   📋  DADOS DA RECEITA  ·  Lucca Cafés Especiais                          ║
   ║                                                                          ║
   ║   Este é o ÚNICO arquivo que você precisa editar para trocar de café.    ║
   ║   Mude o texto, os números e as fotos aqui embaixo — a página se monta   ║
   ║   sozinha. Não precisa mexer no index.html nem no script.js.             ║
   ║                                                                          ║
   ╠══════════════════════════════════════════════════════════════════════════╣
   ║                                                                          ║
   ║   ✍️  COMO FORMATAR O TEXTO (vale em qualquer campo de texto):            ║
   ║                                                                          ║
   ║     *palavra*        →  destaque itálico terracota (a assinatura)        ║
   ║     **palavra**      →  negrito                                          ║
   ║     (apertar Enter)  →  quebra de linha na tela                          ║
   ║                                                                          ║
   ║   Ex.: 'Uma das fazendas\n*mais premiadas do Brasil.*'  vira duas linhas ║
   ║        com a 2ª em itálico terracota.                                    ║
   ║                                                                          ║
   ║   🔢  TOKENS QUE SE ATUALIZAM SOZINHOS (só nos passos do preparo):        ║
   ║                                                                          ║
   ║     {cafe}   →  gramas de café da dose      (ex.: 12,5g)                 ║
   ║     {bloom}  →  gramas da pré-infusão       (ex.: 35g)                   ║
   ║     {main}   →  gramas do despejo principal (ex.: 165g)                  ║
   ║     {total}  →  gramas de água no total     (ex.: 200g)                  ║
   ║                                                                          ║
   ║   Eles mudam de valor quando a pessoa mexe no controle de dose.          ║
   ║   ⚠️  Os alvos intermediários (110g, 160g) são fixos da receita calibrada ║
   ║      em 12,5g — por isso ficam como número, não como token.              ║
   ║                                                                          ║
   ║   Nas mensagens de feedback dá pra usar {nomeCafe} e {metodo}.           ║
   ║                                                                          ║
   ╚══════════════════════════════════════════════════════════════════════════╝ */

const RECIPE = {

  /* ─────────────────────────────────────────────────────────────────────────
     1) IDENTIFICAÇÃO  ·  o básico do projeto
     ───────────────────────────────────────────────────────────────────────── */
  coffeeName: 'Maragogipe Frutado',          // nome do café (usado em mensagens)
  whatsapp:   '554187627267',                // número do WhatsApp (só dígitos, com DDI 55)

  // ── Estratégia / captura (versão BLOQUEADA para o Instagram) ──────────────
  // Página do produto (botão "comprar" da versão bloqueada):
  product: {
    url: 'https://luccacafesespeciais.com.br/cafes/',   // ⚠️ TROCAR pela página deste café
  },
  // Cartão de bloqueio — aparece SÓ quando a URL termina em ?ig
  // (ex.: .../lucca-receita-/?ig). No link normal/limpo a receita fica liberada.
  lock: {
    eyebrow:  'Receita exclusiva',
    title:    'A receita completa é\n*de quem leva o café.*',
    text:     'O sensorial está aí em cima. Os parâmetros, os tempos e o passo a passo no V60 ficam liberados para quem leva este Maragogipe. Garanta o seu — ou chame a gente.',
    buyLabel: 'Quero o Maragogipe',
    wppLabel: 'Falar no WhatsApp',
    wppMsg:   'Oi! Vi o Maragogipe Frutado no Instagram e quero saber mais sobre o café e a receita.',
  },

  // Aparece na aba do navegador e quando o link é compartilhado:
  pageTitle:       'Receita V60 · Maragogipe Frutado — Lucca Cafés Especiais',
  pageDescription: 'Receita Lucca Lab para o Maragogipe fermentado da Fazenda Santa Mônica (Alta Mogiana) no método V60. Parâmetros, timer e passo a passo.',

  /* ─────────────────────────────────────────────────────────────────────────
     2) TOPO / MENU
     ───────────────────────────────────────────────────────────────────────── */
  nav: {
    brand:     'Lucca Cafés Especiais',
    brandHref: 'https://luccacafesespeciais.com.br/cafes/',
    cta:       { label: 'A receita', href: '#receita' },

    // Menu lateral de bolinhas (índice). 'dark: true' nas seções de fundo
    // escuro, para as bolinhas trocarem de cor e ficarem sempre visíveis.
    sections: [
      { id: 'hero',      label: 'Início',    dark: true  },
      { id: 'lote',      label: 'O lote',    dark: false },
      { id: 'sensorial', label: 'Na xícara', dark: false },
      { id: 'receita',   label: 'A receita', dark: false },
      { id: 'lucca-lab', label: 'Lucca Lab', dark: true  },
      { id: 'closing',   label: 'Feedback',  dark: false },
    ],
  },

  /* ─────────────────────────────────────────────────────────────────────────
     3) HERO  ·  a abertura em tela cheia
     ───────────────────────────────────────────────────────────────────────── */
  hero: {
    eyebrow: 'Receita Lucca Lab · Método V60',
    image:   'https://i.imgur.com/ZewSTWw.jpeg',  // hero — composição de produto (terracota)

    // Título grande. Uma linha por item. Use *...* na que deve ficar terracota.
    titleLines: [
      'Maragogipe',
      '*Frutado.*',
    ],

    // Frase sensorial curta embaixo do título:
    sub: 'Flor de laranjeira, maracujá\ne um final de **crème brûlée.**',

    // Três números de destaque (valor em negrito + complemento):
    meta: [
      { value: '1.200 m', rest: '· Alta Mogiana' },
      { value: 'SCA 89',  rest: '· Fermentado' },
      { value: '1:16',    rest: '· V60' },
    ],
  },

  /* ─────────────────────────────────────────────────────────────────────────
     4) O LOTE  ·  origem + dossiê do produtor
     ───────────────────────────────────────────────────────────────────────── */
  lote: {
    index:    '/ O lote · **Alta Mogiana**',
    headline: 'Maragogipe fermentado\n*da Alta Mogiana.*',
    lede:     'Na *Fazenda Santa Mônica*, em Ibiraci (MG), Jean Vilhena Faleiros conduz um *Maragogipe* a 1.200 m com processo *fermentado* — o grão graúdo e a fermentação que constroem o perfil floral e frutado deste lote.',

    photo: {
      image: 'https://i.imgur.com/yyTwYWn.jpeg',          // foto do produtor Jean Vilhena Faleiros
      stamp: 'Jean Vilhena Faleiros',                     // selo (canto superior)
      tag:   '1.200 m · Alta Mogiana · MG',                // legenda (canto inferior)
    },

    producer: {
      eyebrow: 'Quem cultivou',
      name:    'Jean Vilhena\n*Faleiros.*',
      quote:   'Na *Fazenda Santa Mônica*, em Ibiraci, Jean Vilhena Faleiros conduz o Maragogipe com processo fermentado — a fermentação que assina o perfil floral e frutado deste lote.',
    },

    specsLabel: 'Ficha técnica',
    // Tabela da ficha técnica — pares [rótulo, valor]. Pode ter mais ou menos linhas.
    specs: [
      ['Produtor',    'Jean Vilhena Faleiros'],
      ['Propriedade', '*Fazenda Santa Mônica*'],
      ['Região',      '*Alta Mogiana*'],
      ['Município',   'Ibiraci · MG'],
      ['Altitude',    '1.200 m'],
      ['Variedade',   '*Maragogipe*'],
      ['Processo',    '*Fermentado*'],
      ['Pontuação',   'SCA 89'],
    ],

    score: {
      num:   '89',
      label: 'Pontuação SCA',
      note:  'Fermentado · Maragogipe',
    },
  },

  /* ─────────────────────────────────────────────────────────────────────────
     5) SENSORIAL  ·  o que se sente na xícara
     ───────────────────────────────────────────────────────────────────────── */
  sensorial: {
    index:    '/ Na xícara',
    headline: 'Maracujá, baunilha\n*e flor de laranjeira.*',
    lede:     'Aroma de *flor de laranjeira, baunilha e mel delicado*. Na boca, maracujá maduro com *acidez cítrica e málica* e corpo suculento; retrogosto longo de *crème brûlée*. À medida que esfria, o copo abre: flor de laranjeira a 60–65°C, maracujá fresco a 50–55°C e crème brûlée com baunilha e açúcar caramelizado a 40–45°C.',

    // Três cartões de sabor. 'cue' (opcional) liga a nota ao momento/temperatura da xícara.
    flavors: [
      { rank: 'Sabor principal', name: 'Maracujá maduro',      desc: 'Maracujá com acidez cítrica e málica, frescor suculento em cada gole.', cue: 'Centro · 50–55°C' },
      { rank: 'Aroma',           name: 'Flor de Laranjeira',   desc: 'Flor de laranjeira, baunilha e mel delicado — um perfume refrescante.',  cue: 'Aroma · 60–65°C' },
      { rank: 'Retrogosto',      name: 'Crème Brûlée',         desc: 'Baunilha e açúcar caramelizado que selam a experiência, retrogosto longo.', cue: 'Final · 40–45°C' },
    ],

    // Perfil sensorial — notas de 0 a 5 (vira barras na seção "Na xícara").
    profileLabel: 'Perfil sensorial',
    profile: [
      { label: 'Aroma',      value: 5 },
      { label: 'Sabor',      value: 5 },
      { label: 'Acidez',     value: 5 },
      { label: 'Corpo',      value: 4 },
      { label: 'Doçura',     value: 4 },
      { label: 'Retrogosto', value: 4 },
    ],
  },

  /* ─────────────────────────────────────────────────────────────────────────
     6) BANDA EDITORIAL  ·  a frase grande sobre foto
     ───────────────────────────────────────────────────────────────────────── */
  band: {
    image: 'https://i.imgur.com/x3RQt0W.jpeg',   // ⚠️ TROCAR — placeholder; foto do lote/fazenda
    quote: 'Ibiraci, 1.200 metros de Alta Mogiana. No processo *fermentado*, a Fazenda Santa Mônica constrói um Maragogipe de flor de laranjeira, maracujá e crème brûlée.',
    cite:  '— Lucca Lab · sobre o lote Fazenda Santa Mônica',
  },

  /* ─────────────────────────────────────────────────────────────────────────
     7) A RECEITA  ·  textos de apresentação do método
     ───────────────────────────────────────────────────────────────────────── */
  recipe: {
    index:    '/ Lucca Lab · A receita',
    headline: 'O V60 revela.\nO floral *aparece.*',
    lede:     'O *V60* é percolação: a água passa pelo café e escorre na hora, sem ficar de molho. Com a moagem média-fina e os despejos no tempo, ele preserva a *delicadeza floral* nos primeiros goles e revela a acidez vibrante do maracujá no centro da degustação.',

    // Os três motivos "por que esse método":
    why: [
      { title: 'Percolação contínua', desc: 'A água atravessa o leito e drena na hora. Você controla o sabor pela moagem e pelos despejos.' },
      { title: 'Xícara limpa',        desc: 'O filtro de papel retém os óleos pesados e entrega clareza para o floral e o frutado aparecerem.' },
      { title: 'Infusões em camadas', desc: 'Bloom e três despejos crescentes: floral primeiro, maracujá no centro, doçura e crème brûlée no fim.' },
    ],

    stepsIndex:    '/ Passo a passo',
    stepsHeadline: 'Bloom, infusões\n*e finalização.*',

    // Caixa de dica no fim (uma linha por parágrafo):
    tip: [
      '**Calibração.** Drenou antes de 2:40 → moa um pouco mais fino. Passou de 3:00 ou travou → mais grosso.',
      'As **duas rotações leves** (no bloom e na finalização) fazem parte da receita: molham o café por igual e nivelam o leito.',
    ],
  },

  /* ─────────────────────────────────────────────────────────────────────────
     8) MÉTODO  ·  números do preparo, controle de dose e timer
     ───────────────────────────────────────────────────────────────────────── */
  method: {
    name:       'V60',        // nome do método (aparece em vários lugares)
    ratio:      16,           // proporção água:café (1:16). Água = café × ratio
    ratioLabel: '1 : 16',
    ideal:      12.5,         // dose ideal de café, em gramas
    step:       0.5,          // passo do slider (0,5g — permite a dose fracionada de 12,5g)
    min:        10,           // mínimo do controle deslizante
    max:        16,           // máximo do controle deslizante
    bloomMult:  2.8,          // pré-infusão = café × este número (2,8 → 12,5g = 35g)

    tempDisplay: '92°C',      // temperatura (painel de parâmetros)
    grind:       'Média-fina',// moagem (painel de parâmetros)
    bloomTemp:   '92°C',      // temperatura da água (grade de água)
    mainTemp:    '92°C',      // temperatura da água (grade de água)

    // start/end = segundos no timer (a barra de progresso e a linha do tempo usam isso).
    steps: [
      {
        num: '01', title: 'Preparo', badge: 'antes',
        img: 'https://i.imgur.com/W0xssO7.mp4', alt: 'Preparo',
        time: 'Antes de iniciar o timer', start: 0, end: 0,
        text: 'Moa **média-fina**. Coloque o filtro de papel no **V60 02** e **escalde com água quente** para tirar o gosto de papel; descarte essa água. Adicione {cafe} de café e nivele o leito.',
      },
      {
        num: '02', title: 'Bloom', badge: '+{bloom}',
        img: 'https://i.imgur.com/aUTWD2K.mp4', alt: 'Bloom / pré-infusão',
        time: '0:00 — 0:35', start: 0, end: 35,
        text: 'Inicie o timer e despeje {bloom} de água molhando **todo o café de maneira uniforme**. Faça uma **leve rotação** no porta-filtro. Objetivo: liberar o CO₂ e preservar os aromas florais. Deixe até **0:35**.',
      },
      {
        num: '03', title: 'Primeira infusão', badge: 'até 110 g',
        img: 'https://i.imgur.com/Tcx3HIi.mp4', alt: 'Primeira infusão',
        time: '0:35 — 1:10', start: 35, end: 70,
        text: 'Aos **0:35**, complete até **110 g** com fluxo **fino e contínuo**. Objetivo: destacar a vivacidade do maracujá.',
      },
      {
        num: '04', title: 'Segunda infusão', badge: 'até 160 g',
        img: 'https://i.imgur.com/0MHgkQg.mp4', alt: 'Segunda infusão',
        time: '1:10 — 1:45', start: 70, end: 105,
        text: 'Aos **1:10**, complete até **160 g** mantendo o **fluxo constante**. Objetivo: desenvolver doçura e textura.',
      },
      {
        num: '05', title: 'Finalização', badge: 'até {total}',
        img: 'https://i.imgur.com/ZyTFPlA.mp4', alt: 'Finalização',
        time: '1:45 — 2:05 · Total: {total}', start: 105, end: 125,
        text: 'Aos **1:45**, complete até **{total}** e nivele o leito com uma **leve rotação**. Deixe escoar: a extração deve **terminar entre 2:40 e 3:00**.',
      },
    ],
  },

  /* ─────────────────────────────────────────────────────────────────────────
     9) LUCCA LAB  ·  a assinatura por trás da receita (branding, sem foco em pessoa)
     ───────────────────────────────────────────────────────────────────────── */
  curator: {
    // Fundo da seção inteira (imagem):
    background: 'https://i.imgur.com/nT1PjRw.png',   // fundo do explicativo do Lucca Lab
    role:     'Receita desenvolvida no',
    name:     'Lucca\n*Lab.*',
    bio:      'O **Lucca Lab** é o laboratório sensorial da **Lucca Cafés Especiais**: onde nossa equipe de baristas prova, calibra e assina cada receita antes de ela chegar até você. Não é uma pessoa — é o nosso método.',
    quote:    `Cada receita Lucca Lab nasce de várias sessões de prova até encontrar o ponto que evidencia aquilo que torna os cafés especiais tão fascinantes: a *transparência dos sabores*, a doçura natural e a expressão única da origem.

Para este Maragogipe, ajustamos os parâmetros para preservar a *delicadeza floral* nos primeiros goles, revelar a acidez vibrante do maracujá no centro da degustação e finalizar com a *doçura cremosa de crème brûlée* que marcou nossas provas.`,

    // No lugar de "formações" de um curador, vai o canal da marca.
    coursesLabel: 'Onde acompanhar',
    courses: [
      { label: 'Instagram', href: 'https://www.instagram.com/luccacafes/' },
    ],
  },

  /* ─────────────────────────────────────────────────────────────────────────
     10) FECHAMENTO  ·  pedido de feedback + botão final
     ───────────────────────────────────────────────────────────────────────── */
  closing: {
    index:    '/ Conta pra gente',
    headline: 'Como ficou\n*sua xícara?*',
    lede:     'Ajustou a moagem, mudou algo? A Lucca Lab lê todas.',

    // Botões de feedback (abrem o WhatsApp). {nomeCafe} e {metodo} entram sozinhos.
    feedback: [
      { label: 'No ponto',    sub: 'Ficou como descrito', msg: 'Oi! Fiz o {nomeCafe} no {metodo} e ficou no ponto. Quis contar como foi.' },
      { label: 'Mais ácido',  sub: 'Faltou doçura',       msg: 'Oi! Fiz o {nomeCafe} no {metodo} mas ficou mais ácido do que esperava. Pode me ajudar a calibrar?' },
      { label: 'Mais amargo', sub: 'Passou do ponto',     msg: 'Oi! Fiz o {nomeCafe} no {metodo} mas ficou mais amargo do que esperava. Pode me ajudar a calibrar?' },
    ],

    cta: { label: 'Ver outros cafés', href: 'https://luccacafesespeciais.com.br/cafes/' },
  },

  /* ─────────────────────────────────────────────────────────────────────────
     11) RODAPÉ
     ───────────────────────────────────────────────────────────────────────── */
  footer: {
    brand: 'Lucca Cafés Especiais',
    meta:  'Receita Lucca Lab · V60 · Maragogipe',
  },

};

// Deixa o conteúdo disponível para a página. (não precisa mexer nesta linha)
window.RECIPE = RECIPE;
