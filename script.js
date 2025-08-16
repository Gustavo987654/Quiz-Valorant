const quizContainer = document.getElementById('quiz-container');
const startBtn = document.getElementById('start-btn');

const questions = [
  { question: 'Qual personagem possui a habilidade "Paranoia"?', answers: ["Omen", "Jett", "Sova", "Cypher"], correct: "Omen" },
  { question: 'De qual personagem é a frase: "Eu sou PROMETEU! E você, só um deus"?', answers: ["Phoenix", "Cypher", "Reyna", "Brimstone"], correct: "Cypher" },
  { question: 'De qual personagem é a frase: "Eu tenho a impressão que a Reyna me persegue. Mais alguém acha isso? Não? Sério mesmo?"', answers: ["Killjoy", "Sage", "Jett", "Viper"], correct: "KillJoy" },
  { question: 'De qual personagem é a frase: "Quem é aquele sujeito elegante do outro lado? Ah é, o outro eu"?', answers: ["Chamber", "Cypher", "Omen", "Phoenix"], correct: "Chamber" },
  { question: 'O que é um round eco?', answers: ["Economizar dinheiro", "Comprar armas", "Morrer rápido", "Defusar a spike"], correct: "Economizar dinheiro" },
  { question: 'Dinheiro necessário para uma Vandal e Escudo Completo?', answers: ["3900", "4000", "4200", "3800"], correct: "3900" },
  // Perguntas de mapas com imagens
  { question: 'Qual mapa desses mapas tem o bomb A, B e C?', answers: ["Haven", "Bind", "Split", "Icebox"], correct: "Haven"},
  { question: 'Killjoy precisa estar próxima de suas habilidades para funcionarem?', answers: ["Sim", "Não"], correct: "Sim" },
  { question: 'Qual é o maior mapa do jogo?', answers: ["Breeze", "Bind", "Haven", "Icebox"], correct: "Breeze" },
  { question: 'Em qual mapa você encontra o local Hookah?', answers: ["Bind", "Haven", "Split", "Icebox"], correct: "Bind" },
  { question: 'Quanto de vida a Reyna recupera?', answers: ["50", "100", "75", "60"], correct: "50" },
  { question: 'Qual arma tem o dano de HeadShot igual ou superior a 150?', answers: ["Sheriff", "Odin", "Phantom", "Bulldog"], correct: "Sheriff" },
  { question: 'Qual arma é capaz de atirar enquanto recarrega?', answers: ["Marshall", "Operator", "Vandal", "Sheriff"], correct: "Marshall" },
  { question: 'Qual personagem usa bombas como arma?', answers: ["Raze", "Phoenix", "Jett", "Breach"], correct: "Raze" },
  { question: 'A Sage fornece quanto de cura para os aliados?', answers: ["100", "50", "75", "80"], correct: "100" }
];

let currentQuestionIndex = 0;
let score = 0;

startBtn.addEventListener('click', startQuiz);

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  showQuestion();
}

function showQuestion() {
  if (currentQuestionIndex >= questions.length) {
    showResult();
    return;
  }

  const q = questions[currentQuestionIndex];
  quizContainer.innerHTML = `
    <h2>${q.question}</h2>
    ${q.image ? `<img src="${q.image}" alt="Mapa" class="map-image">` : ''}
    ${q.answers.map(ans => `<button class="answer-btn">${ans}</button>`).join('')}
  `;

  document.querySelectorAll('.answer-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      if (btn.textContent === q.correct) score++;
      currentQuestionIndex++;
      showQuestion();
    });
  });
}

function showResult() {
  let message = "";
  let title = "";

  if (score >= 14) {
    title = "Radiante";
    message = "Você domina Valorant como um verdadeiro campeão! Poucos chegam a esse nível.";
  } else if (score >= 10) {
    title = "Diamante";
    message = "Você tem muito conhecimento e habilidade no jogo. Está quase no topo!";
  } else if (score >= 7) {
    title = "Platina";
    message = "Bom trabalho! Você conhece bem os personagens e mapas, mas ainda há espaço para melhorar.";
  } else if (score >= 4) {
    title = "Ouro";
    message = "Precisa treinar mais. Você sabe algumas coisas, mas ainda comete erros importantes.";
  } else {
    title = "Ferro";
    message = "Novato em Valorant! É hora de aprender o básico e se divertir no processo.";
  }

  quizContainer.innerHTML = `
    <h2>Resultado Final</h2>
    <p>Você acertou ${score} de ${questions.length} perguntas.</p>
    <h3>${title}</h3>
    <p class="result">${message}</p>
    <button class="restart-btn" id="restart-btn">Jogar Novamente</button>
  `;

  document.getElementById('restart-btn').addEventListener('click', startQuiz);
}
