const perguntas = [
    {
        enunciado: "Qual sua estação do ano favorita??",
        alternativas: [
            { texto: "verão", pontuacao: 1 },
            { texto: "inverno", pontuacao: 2 }
        ]
    },
    {
        enunciado: "você prefere chá ou café?",
        alternativas: [
            { texto: "chá", pontuacao: 2 },
            { texto: "café", pontuacao: 1 }
        ]
    },
    {
        enunciado: "Você gosta mais de ler livros ou assistir filmes?",
        alternativas: [
            { texto: "livros", pontuacao: 2 },
            { texto: "filmes", pontuacao: 1 }
        ]
    },
    {
        enunciado: "Você prefere viajar para a praia ou para a montanha?",
        alternativas: [
            { texto: "praia", pontuacao: 1 },
            { texto: "montanha", pontuacao: 2 }
        ]
    },
    {
        enunciado: "Você prefere trabalhar em equipe ou de forma independente?",
        alternativas: [
            { texto: "equipe", pontuacao: 1 },
            { texto: "independente", pontuacao: 2 }
        ]
    }
];

let atual = 0;
let pontuacao = 0; // Variável para armazenar a pontuação
let perguntaAtual;
const caixaPerguntas = document.getElementById('caixaPerguntas');
const alternativasContainer = document.getElementById('alternativas');

function mostraPergunta() {
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    alternativasContainer.innerHTML = '';
    perguntaAtual.alternativas.forEach((alternativa) => {
        const button = document.createElement('button');
        button.textContent = alternativa.texto;
        button.addEventListener('click', () => {
            pontuacao += alternativa.pontuacao; // Incrementa a pontuação com base na alternativa selecionada
            atual++;
            if (atual < perguntas.length) {
                mostraPergunta();
            } else {
                exibePontuacaoFinal(); // Chama função para exibir a pontuação final
            }
        });
        alternativasContainer.appendChild(button);
    });
}

function exibePontuacaoFinal() {
    caixaPerguntas.textContent = `Você completou o questionário! Sua pontuação final é: ${pontuacao}`;
    alternativasContainer.innerHTML = ''; // Limpa as alternativas
}

mostraPergunta(); // Inicia o questionário mostrando a primeira pergunta
