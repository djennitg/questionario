const perguntas = [
    {
    enunciado: "Qual você prefere?",
    alternativas: [
    "Inverno",
    "Verão"
    ]
},
    {
    enunciado: "Qual vc prefere?",
    alternativas: [
    "cidade",
    "Campo"
    ]
    },
    {
    enunciado: "Qual vc prefere?",
    alternativas: [
    "rosa",
    "roxo"
    ]
    },
    {
    enunciado: "Vc prefere:?",
    alternativas: [
    "Ler",
    "Escrever"
    ]
    
    },
    {
    enunciado: "Sobre animais, escolha um:",
    alternativas: [
    "Gato",
    "Cachorro"
    ]
    }
    ];
    let atual = 0;
    let perguntaAtual;
    const caixaPerguntas = document.getElementById('caixaPerguntas');
    const alternativasContainer = document.getElementById('alternativas');
    function mostraPergunta() {
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    alternativasContainer.innerHTML = '';
    perguntaAtual.alternativas.forEach((alternativa, index) => {
    const button = document.createElement('button');
    button.textContent = alternativa;
    button.addEventListener('click', () => {
    atual++;
    if (atual < perguntas.length) {
    mostraPergunta();
    } else {
    caixaPerguntas.textContent = 'Você completou o questionário!';
    alternativasContainer.innerHTML = '';
    }
    });
    alternativasContainer.appendChild(button);
    });
    }
    mostraPergunta();
