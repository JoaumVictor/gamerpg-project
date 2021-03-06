  
  // arquivos importados
  let spriteDoGuerreiro = "https://i.pinimg.com/originals/30/d4/9b/30d49b65ee7bf655a4bfbfa957d02d68.gif";
  let spriteDoMago = "https://i.pinimg.com/originals/b6/40/30/b64030bf5b203da3e619dedfa0180f33.gif";
  
  //ARQUIVOS DO GAME
  const magoBase = {
    nome: 'mago',
    vida: 130,
    inteligencia: 45,
    forca: 5,
    mana: 125,
    equipamentos: {
      cajado: { danoAP: 2},
    },
  };
  const guerreiroBase = {
    nome: 'guerreiro',
    vida: 200,
    inteligencia: 5,
    forca: 30,
    equipamentos: {
      espada: { danoAD: 2 },
      escudo: { resistencia: 7 },
    },
  };
  const dragBase = {
    vida: 350,
    inteligencia: 25,
    forca: 50,
    habilidades: {
      bolaDeFogo: { danoAP: 3 },
      investida: { danoAD: 2 },
    },
  };
  let meuPersonagem;
  
  // LINHA DO TEMPO
  const fraseBeta = document.getElementsByClassName('frase-beta')[0];
  const fraseDaDeusa = document.getElementsByClassName('frase-da-deusa')[0];

  const botaoStart = document.getElementsByClassName('botao-start')[0];
  const boxStart = document.getElementsByClassName('start-content')[0];

  const botaoGuerreiro = document.getElementsByClassName('btn-guerreiro')[0];
  const botaoMago = document.getElementsByClassName('btn-mago')[0];
  const boxEscolhaDeDuelista = document.getElementsByClassName('escolha-de-duelista')[0];

  const guerreiroSelect = document.getElementsByClassName('guerreiro-select')[0];
  const magoSelect = document.getElementsByClassName('mago-select')[0];

  const continueGuerreiro = document.getElementsByClassName('continue-guerreiro')[0]; 
  const continueMago = document.getElementsByClassName('continue-mago')[0];

// ATO 0
// ATO 1 - FRASE DE BOAS VINDAS
  const comecar = () => {
    fraseBeta.innerHTML = '';
    boxStart.style.display = 'none';
    boxEscolhaDeDuelista.style.display = 'flex';
    fraseDaDeusa.innerHTML = 'Para começar, escolha seu duelista!';
  };

// ATO 2 - GUERREIRO
  const selecionaGuerreiro = () => {
    fraseDaDeusa.innerHTML = "Você escolheu o Guerreiro! Um duelista que usará sua força e constituição para vencer a batalha!";
    boxEscolhaDeDuelista.style.display = 'none';
    meuPersonagem = Object.assign({}, guerreiroBase);
    guerreiroSelect.style.display = 'flex';
  };

// ATO 2 - MAGO
  const selecionaMago = () => {
    fraseDaDeusa.innerHTML = "Você escolheu o Mago! Um duelista que usará sua inteligência e sabedoria para vencer a batalha!";
    boxEscolhaDeDuelista.style.display = 'none';
    meuPersonagem = Object.assign({}, magoBase);
    magoSelect.style.display = 'flex';
  };

//ATO 3
  const mudaDisplay = () => {
    guerreiroSelect.style.display = 'none';
    magoSelect.style.display = 'none';
    fraseDaDeusa.innerHTML = "Fim da beta 1.0"
    console.log(meuPersonagem);
};

// CRIAR BOTOES SEMPRE DEPOIS DO CÓDIGO
  botaoGuerreiro.addEventListener("click", selecionaGuerreiro);
  botaoMago.addEventListener("click", selecionaMago);
  botaoStart.addEventListener("click", comecar);
  continueGuerreiro.addEventListener("click", mudaDisplay);
  continueMago.addEventListener("click", mudaDisplay);
