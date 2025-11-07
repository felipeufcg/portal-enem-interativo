// script.js

// --- Dados do Projeto (Conteúdo do Resumo e Questões) ---

const RESUMO_SECTIONS = [
    // Exemplo do primeiro item:
    {
      id: 1,
      icon: "tree-pine",
      title: "Ecossistemas",
      color: "from-green-500 to-green-700",
      topics: [
        {
          title: "O que são Ecossistemas?",
          content: "Ecossistemas são conjuntos formados por comunidades de seres vivos (fatores bióticos) que interagem entre si e com o ambiente físico (fatores abióticos). Incluem florestas, oceanos, desertos e até ambientes urbanos."
        },
        {
          title: "Componentes do Ecossistema",
          content: "• Fatores Bióticos: todos os seres vivos (plantas, animais, fungos, bactérias)\n• Fatores Abióticos: elementos não vivos (água, luz, temperatura, solo, gases)\n• A interação entre esses fatores determina as características de cada ecossistema"
        },
        {
            title: "Cadeias e Teias Alimentares",
            content: "As cadeias alimentares representam o fluxo de energia. Produtores (base) → Consumidores → Decompositores. As teias são um conjunto interligado de várias cadeias."
        },
      ]
    },
    {
        id: 2,
        icon: "droplets",
        title: "Ciclos Biogeoquímicos",
        color: "from-blue-500 to-blue-700",
        topics: [
          {
            title: "Ciclo do Carbono",
            content: "Envolve a troca de CO₂ entre a atmosfera, hidrosfera e biosfera. Os processos chave são fotossíntese (retira CO₂) e respiração/queima (libera CO₂)."
          },
          {
            title: "Ciclo do Nitrogênio",
            content: "Essencial para a produção de proteínas e ácidos nucleicos. Depende de bactérias para a fixação (N₂ atmosférico para amônia), nitrificação e desnitrificação."
          },
        ]
    },
    {
        id: 3,
        icon: "sun",
        title: "Relações Ecológicas",
        color: "from-yellow-500 to-yellow-700",
        topics: [
          {
            title: "Relações Harmônicas",
            content: "Beneficiam ou não prejudicam os envolvidos:\n• Mutualismo (obrigatório, +/+)\n• Protocooperação (não obrigatório, +/+)\n• Comensalismo (+/0)\n• Sociedade e Colônia (intraespecíficas, +/+)"
          },
          {
            title: "Relações Desarmônicas",
            content: "Prejudicam pelo menos um dos envolvidos:\n• Predatismo (+/-)\n• Parasitismo (+/-)\n• Competição (-/-)\n• Amensalismo (0/-)"
          },
        ]
    }
];

const QUIZ_QUESTIONS = [
    // Questão 1 (Original)
    {
      question: "Em uma cadeia alimentar terrestre, qual é a sequência correta dos níveis tróficos?",
      options: [
        "Produtores → Consumidores primários → Consumidores secundários → Decompositores",
        "Decompositores → Produtores → Consumidores primários → Consumidores secundários",
        "Consumidores primários → Produtores → Consumidores secundários → Decompositores",
        "Consumidores secundários → Consumidores primários → Produtores → Decompositores"
      ],
      correct: 0,
      explanation: "A sequência correta inicia com os produtores (plantas), que são consumidos pelos consumidores primários (herbívoros), seguidos pelos consumidores secundários (carnívoros), e por fim os decompositores que reciclam a matéria orgânica.",
      hint: "Pense em quem é a base da pirâmide alimentar e quem faz a reciclagem final da matéria."
    },
    // Questão 2 (Original)
    {
      question: "O ciclo do carbono é fundamental para a manutenção da vida na Terra. Qual processo RETIRA carbono da atmosfera?",
      options: [
        "Respiração celular dos animais",
        "Decomposição de matéria orgânica",
        "Fotossíntese realizada pelas plantas",
        "Queima de combustíveis fósseis"
      ],
      correct: 2,
      explanation: "A fotossíntese é o processo realizado por plantas, algas e algumas bactérias que absorve o dióxido de carbono (CO₂) da atmosfera para produzir glicose, funcionando como um 'sumidouro' de carbono.",
      hint: "Lembre-se do principal processo que as plantas utilizam para criar seu próprio alimento, consumindo CO2."
    },
    // Questão 3 (Original)
    {
      question: "Qual relação ecológica é caracterizada pelo benefício mútuo e obrigatório entre as espécies?",
      options: [
        "Comensalismo",
        "Mutualismo",
        "Protocooperação",
        "Parasitismo"
      ],
      correct: 1,
      explanation: "O mutualismo é uma relação harmônica em que ambos os organismos se beneficiam e a interação é essencial (obrigatória) para a sobrevivência de pelo menos uma das partes, ou de ambas.",
      hint: "A palavra-chave é 'obrigatório'. Procure a relação em que a ausência do outro parceiro é fatal."
    },
    // Questão 4 (Adicionada)
    {
        question: "Em um ecossistema, organismos decompositores como fungos e bactérias têm papel essencial para o ciclo da matéria. A ausência desses seres resultaria em:",
        options: [
            "Acúmulo de matéria orgânica morta no ambiente.",
            "Aumento da taxa de fotossíntese.",
            "Redução da cadeia alimentar.",
            "Crescimento populacional de herbívoros.",
            "Maior disponibilidade de nutrientes no solo."
        ],
        correct: 0,
        explanation: "Os decompositores são responsáveis por quebrar a matéria orgânica de organismos mortos. Sem eles, esta matéria se acumularia, e os nutrientes ficariam presos.",
        hint: "Pense no que aconteceria com as folhas caídas e os animais mortos se não houvesse reciclagem."
    },
    // Questão 5 (Adicionada)
    {
        question: "Em uma cadeia alimentar, a energia flui do produtor até os consumidores. Sobre esse processo, é correto afirmar que:",
        options: [
            "A energia aumenta a cada nível trófico.",
            "Os produtores dependem dos consumidores para produzir energia.",
            "Há perda de energia em forma de calor a cada transferência.",
            "A mesma quantidade de energia chega ao topo da cadeia.",
            "A energia é totalmente reciclada no ecossistema."
        ],
        correct: 2,
        explanation: "Em cada transferência de nível trófico, a maior parte da energia (cerca de 90%) é perdida para o ambiente, principalmente em forma de calor, restando apenas cerca de 10% para o nível seguinte.",
        hint: "Lembre-se da regra da energia na pirâmide trófica e qual é o principal 'subproduto' desse fluxo."
    },
    // Questão 6 (Adicionada)
    {
        question: "A eutrofização ocorre quando corpos d’água recebem excesso de nutrientes. Uma consequência direta desse fenômeno é:",
        options: [
            "Aumento da transparência da água.",
            "Crescimento excessivo de algas.",
            "Redução da decomposição bacteriana.",
            "Aumento da disponibilidade de oxigênio.",
            "Diminuição da concentração de matéria orgânica."
        ],
        correct: 1,
        explanation: "O excesso de nutrientes (principalmente nitrogênio e fósforo) leva a um crescimento explosivo de algas e cianobactérias, fenômeno conhecido como 'floração de algas'.",
        hint: "O que estimula o crescimento de plantas e micro-organismos em um ambiente aquático, como um lago ou rio?"
    },
    // Questão 7 (Adicionada)
    {
        question: "O desmatamento de florestas tropicais impacta diretamente o ciclo do carbono. Isso ocorre porque:",
        options: [
            "Árvores liberam carbono ao realizar fotossíntese.",
            "Árvores estocam carbono e sua queima libera CO₂.",
            "O desmatamento reduz a formação de solos férteis.",
            "Árvores absorvem carbono apenas à noite.",
            "O ciclo do carbono é independente da vegetação."
        ],
        correct: 1,
        explanation: "As florestas atuam como grandes 'reservatórios' ou sumidouros de carbono. O desmatamento, especialmente se seguido de queimadas, libera o CO₂ armazenado nessas árvores de volta para a atmosfera.",
        hint: "Pense na função de 'estoque' de carbono que as grandes massas de biomassa vegetal desempenham."
    },
    // Questão 8 (Adicionada)
    {
        question: "Espécies invasoras podem causar desequilíbrio ecológico porque:",
        options: [
            "Apresentam baixa capacidade reprodutiva.",
            "Facilitam a regeneração de ecossistemas.",
            "Competem com espécies nativas por recursos.",
            "Dependem exclusivamente das espécies locais.",
            "Diminui a variabilidade genética das nativas."
        ],
        correct: 2,
        explanation: "A principal ameaça das espécies invasoras é que, na ausência de seus predadores naturais, elas se proliferam rapidamente, competindo agressivamente com as espécies nativas por espaço, alimento e luz.",
        hint: "Qual tipo de interação ecológica é mais prejudicial às espécies que já ocupam o nicho?"
    },
    // Questão 9 (Adicionada)
    {
        question: "O efeito estufa é um fenômeno natural, porém intensificado por atividades humanas. Esse aumento está principalmente relacionado a:",
        options: [
            "Lançamento de oxigênio na atmosfera.",
            "Uso de fertilizantes orgânicos.",
            "Emissões de gases por queima de combustíveis fósseis.",
            "Aumento de áreas verdes nas cidades.",
            "Redução da emissão de metano por rebanhos."
        ],
        correct: 2,
        explanation: "A queima de combustíveis fósseis (carvão, petróleo, gás natural) é a principal fonte de emissão de dióxido de carbono (CO₂), o gás de efeito estufa mais abundante, intensificando o aquecimento global.",
        hint: "Pense na principal atividade industrial e de transporte que libera grandes quantidades de CO₂ que estava 'preso' no subsolo."
    },
    // Questão 10 (Adicionada)
    {
        question: "Em uma rede alimentar, a diminuição significativa de predadores pode resultar em:",
        options: [
            "Aumento de populações de presas.",
            "Extinção imediata dos produtores.",
            "Redução do número de herbívoros.",
            "Estabilidade dos níveis tróficos.",
            "Aumento da biodiversidade local."
        ],
        correct: 0,
        explanation: "A diminuição dos predadores remove a pressão de caça, o que geralmente leva a um crescimento descontrolado da população de suas presas diretas, desestabilizando o ecossistema.",
        hint: "Qual é a função básica de um predador no controle da população de outras espécies?"
    },
];


// --- 1. Lógica de Roteamento (Simulação de Página) ---

// Certifique-se de que a variável `pages` é inicializada DEPOIS que a página é carregada
const pages = document.querySelectorAll('.page');
const navLinks = document.querySelectorAll('.page-link');

function showPage(pageId) {
    const pageName = pageId.replace('page-', '');

    // 1. Esconde todas as páginas
    pages.forEach(p => p.classList.add('hidden'));

    // 2. Mostra a página desejada
    const targetPage = document.getElementById(pageId);
    if (targetPage) {
        targetPage.classList.remove('hidden');
        window.scrollTo({ top: 0, behavior: 'smooth' }); // Rola para o topo ao mudar de página
    }

    // 3. Atualiza a navegação ativa
    navLinks.forEach(link => {
        const linkPageName = link.getAttribute('data-page');
        const linkElement = link.closest('.nav-item-desktop') || link.closest('.nav-item-mobile');
        
        if (linkElement) {
            if (linkPageName === pageName) {
                linkElement.classList.add('active');
            } else {
                linkElement.classList.remove('active');
            }
        }
    });

    // 4. Se estiver na página de Questões, renderiza o quiz
    if (pageName === 'questoes') {
        renderQuiz();
    }
    // 5. Se estiver na página Resumo, renderiza o acordeão
    if (pageName === 'resumo') {
        renderResumoAcordeon();
    }
}

// Inicializa a navegação
// Adiciona o listener de carregamento para garantir que todos os elementos existam
window.addEventListener('load', () => {
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const pageName = e.currentTarget.getAttribute('data-page');
            // CORRIGIDO: Uso correto de template string.
            showPage(`page-${pageName}`); 
            
            // Fecha o menu mobile após clicar
            document.getElementById('mobile-menu').classList.add('hidden');
            document.getElementById('menu-icon-open').classList.remove('hidden');
            document.getElementById('menu-icon-close').classList.add('hidden');
        });
    });

    // Define a página inicial (Home) apenas depois de tudo carregado
    showPage('page-home');
});


// --- 2. Menu Mobile e Scroll Header ---

// Adiciona o listener de carregamento para garantir que os botões existam
window.addEventListener('load', () => {
    document.getElementById('mobile-menu-button').addEventListener('click', () => {
        const mobileMenu = document.getElementById('mobile-menu');
        const menuOpenIcon = document.getElementById('menu-icon-open');
        const menuCloseIcon = document.getElementById('menu-icon-close');

        mobileMenu.classList.toggle('hidden');
        menuOpenIcon.classList.toggle('hidden');
        menuCloseIcon.classList.toggle('hidden');
    });
});

window.addEventListener('scroll', () => {
    const header = document.getElementById('main-header');
    if (window.scrollY > 50) {
        header.classList.add('bg-black-main/90', 'backdrop-blur-sm', 'shadow-lg');
        header.classList.remove('bg-transparent');
    } else {
        header.classList.remove('bg-black-main/90', 'backdrop-blur-sm', 'shadow-lg');
        header.classList.add('bg-transparent');
    }
});


// --- 3. Lógica do Acordeão (Resumo) ---

function renderResumoAcordeon() {
    const container = document.getElementById('resumo-acordeao');
    if (!container) return;

    // Função para gerar o HTML de uma seção de resumo
    const generateSectionHtml = (section) => {
        // CORRIGIDO: Garantindo que `content` com `\n` seja tratado
        const topicsHtml = section.topics.map(topic => `
            <div class="bg-beige rounded-xl p-6 border-l-4 border-green-600">
                <h3 class="text-xl font-bold text-black-main mb-3">${topic.title}</h3>
                <p class="text-black-light leading-relaxed whitespace-pre-line">${topic.content}</p>
            </div>
        `).join('');

        return `
            <div class="acordeon-section bg-white rounded-2xl shadow-lg overflow-hidden" data-section-id="${section.id}">
                <button class="acordeon-header w-full p-6 flex items-center justify-between hover:bg-gray-50 transition-colors">
                    <div class="flex items-center gap-4">
                        <div class="w-14 h-14 bg-gradient-to-br ${section.color} rounded-xl flex items-center justify-center shadow-lg">
                            <i data-lucide="${section.icon}" class="w-7 h-7 text-white"></i>
                        </div>
                        <h2 class="text-2xl font-bold text-black-main text-left">${section.title}</h2>
                    </div>
                    <i data-lucide="chevron-down" class="w-6 h-6 text-green-600 transition-transform rotate-0"></i>
                </button>
                <div class="acordeon-content border-t border-gray-100" style="max-height: 0; overflow: hidden; transition: max-height 0.3s ease-out;">
                    <div class="p-6 space-y-6">
                        ${topicsHtml}
                    </div>
                </div>
            </div>
        `;
    };

    // Renderiza todas as seções
    const sectionsHtml = RESUMO_SECTIONS.map(generateSectionHtml).join('');
    container.innerHTML = sectionsHtml;
    
    // Converte os placeholders dos ícones para ícones SVG
    if (typeof lucide !== 'undefined' && lucide.createIcons) {
        lucide.createIcons();
    }

    // Adiciona o listener de clique
    container.querySelectorAll('.acordeon-header').forEach(header => {
        header.addEventListener('click', (e) => {
            const section = header.closest('.acordeon-section');
            const content = section.querySelector('.acordeon-content');
            const icon = section.querySelector('i[data-lucide^="chevron"]');

            // Alterna o estado de visibilidade baseado no max-height
            const isVisible = content.style.maxHeight !== '0px';

            // Fecha outros acordeões abertos
            container.querySelectorAll('.acordeon-section').forEach(otherSection => {
                if (otherSection !== section) {
                    const otherContent = otherSection.querySelector('.acordeon-content');
                    const otherIcon = otherSection.querySelector('i[data-lucide^="chevron"]');
                    otherContent.style.maxHeight = '0px';
                    if (otherIcon) {
                        otherIcon.setAttribute('data-lucide', 'chevron-down');
                        otherIcon.classList.remove('rotate-180');
                    }
                }
            });


            if (isVisible) {
                // Esconde
                content.style.maxHeight = '0px';
                icon.setAttribute('data-lucide', 'chevron-down');
                icon.classList.remove('rotate-180');
            } else {
                // Abre
                // Força o browser a calcular a altura real para a transição
                content.style.maxHeight = content.scrollHeight + 'px'; 
                icon.setAttribute('data-lucide', 'chevron-up'); // Se estiver usando 'chevron-down' com rotate-180, mantenha o original e use a classe.
                icon.classList.add('rotate-180');
                // Adiciona um listener para garantir que o max-height seja 'none' para ajustes de layout
                content.addEventListener('transitionend', function handler() {
                     if (content.style.maxHeight !== '0px') {
                        content.style.maxHeight = 'none'; // Apenas remove 'none' se não estiver fechando
                    }
                    content.removeEventListener('transitionend', handler);
                }, { once: true });
            }
            // Recria os ícones após a mudança de data-lucide
            if (typeof lucide !== 'undefined' && lucide.createIcons) {
                lucide.createIcons();
            }
        });
    });
}


// --- 4. Lógica do Quiz (Questões ENEM) ---

let currentQuestion = 0;
let selectedAnswer = null;
let showResult = false;
let score = 0;
let completed = false;

// Adiciona listener de carregamento para garantir que os elementos existam
let quizContainer;
let questionCounter;

window.addEventListener('load', () => {
    quizContainer = document.getElementById('quiz-container');
    questionCounter = document.getElementById('question-counter');
    // ... qualquer outra inicialização do quiz
});


// Função para renderizar a tela de resultados
function renderResultsScreen() {
    const totalQuestions = QUIZ_QUESTIONS.length;
    quizContainer.innerHTML = `
        <div class="bg-white rounded-2xl shadow-2xl p-10 text-center border-t-8 border-green-600">
            <i data-lucide="trophy" class="w-20 h-20 text-green-600 mx-auto mb-6"></i>
            <h2 class="text-3xl font-bold text-black-main mb-4">Quiz Concluído!</h2>
            <p class="text-xl text-black-light mb-8">
                Sua pontuação final é: <span class="text-green-600 font-extrabold text-4xl">${score} / ${totalQuestions}</span>
            </p>
            
            <button id="restart-quiz-button" class="px-8 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-full transition-all flex items-center gap-2 mx-auto">
                <i data-lucide="rotate-ccw" class="w-5 h-5"></i> Recomeçar o Quiz
            </button>
        </div>
    `;
    if (typeof lucide !== 'undefined' && lucide.createIcons) {
        lucide.createIcons();
    }
    document.getElementById('restart-quiz-button').addEventListener('click', restartQuiz);
}

// Função para renderizar a questão atual
function renderQuestion() {
    if (!questionCounter || !quizContainer) return; // Proteção para caso o DOM ainda não esteja pronto

    const currentQ = QUIZ_QUESTIONS[currentQuestion];
    const totalQuestions = QUIZ_QUESTIONS.length;
    const isCorrect = selectedAnswer === currentQ.correct;

    // CORRIGIDO: Uso correto de template string.
    questionCounter.textContent = `Teste seus conhecimentos: Questão ${currentQuestion + 1} de ${totalQuestions}`;

    // Estilo da opção
    const getOptionClasses = (index) => {
        if (!showResult) {
            return index === selectedAnswer ? 'bg-green-50 border-green-600 shadow-md' : 'bg-white border-gray-200 hover:bg-gray-50'; // CORRIGIDO: Usado green-600 para a borda selecionada
        } else {
            if (index === currentQ.correct) {
                return 'bg-green-100 border-green-600 text-green-800';
            } else if (index === selectedAnswer) {
                return 'bg-red-100 border-red-600 text-red-800';
            } else {
                return 'bg-gray-100 border-gray-300 text-black-light cursor-default';
            }
        }
    };

    // HTML das opções
    const optionsHtml = currentQ.options.map((option, index) => `
        <button 
            data-index="${index}"
            class="quiz-option w-full text-left p-4 rounded-xl transition-all border-2 
            ${getOptionClasses(index)}"
            ${showResult ? 'disabled' : ''}
        >
            <span class="font-semibold mr-2">${String.fromCharCode(65 + index)}.</span> ${option}
        </button>
    `).join('');

    // HTML da explicação
    const explanationHtml = showResult ? `
        <div class="mt-8 p-5 rounded-xl border-l-4 ${isCorrect ? 'bg-green-50 border-green-600' : 'bg-red-50 border-red-600'}">
            <div class="flex items-center gap-3 mb-3">
                <i data-lucide="${isCorrect ? 'check-circle' : 'x-circle'}" class="w-6 h-6 ${isCorrect ? 'text-green-600' : 'text-red-600'}"></i>
                <h4 class="text-xl font-bold">${isCorrect ? 'Resposta Correta!' : 'Resposta Incorreta.'}</h4>
            </div>
            <p class="text-black-light font-medium">Dica:</p>
            <p class="text-black-light">${currentQ.hint}</p>
            <p class="text-black-light font-medium mt-3">Explicação:</p>
            <p class="text-black-light">${currentQ.explanation}</p>
        </div>
    ` : '';

    // HTML da ação (Botão Verificar/Próxima)
    const actionButtonHtml = !showResult ? `
        <button id="check-answer-button" 
            class="px-6 py-3 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition-all ${selectedAnswer === null ? 'opacity-50 cursor-not-allowed' : ''}" 
            ${selectedAnswer === null ? 'disabled' : ''}>
            Verificar Resposta
        </button>
    ` : `
        <button id="next-question-button" 
            class="px-6 py-3 bg-green-600 text-white font-semibold rounded-full hover:bg-green-700 transition-all flex items-center gap-2">
            ${currentQuestion < QUIZ_QUESTIONS.length - 1 ? 'Próxima Questão' : 'Ver Resultado'} <i data-lucide="${currentQuestion < QUIZ_QUESTIONS.length - 1 ? 'arrow-right' : 'check-square'}" class="w-5 h-5"></i>
        </button>
    `;

    // Renderiza a questão
    quizContainer.innerHTML = `
        <div class="bg-white rounded-2xl shadow-2xl p-8 animate-fade-in-up">
            <h3 class="text-xl md:text-2xl font-bold text-black-main mb-6 border-b pb-4">
                ${currentQ.question}
            </h3>

            <div class="space-y-4">
                ${optionsHtml}
            </div>

            <div class="mt-8 flex justify-between items-center">
                <p class="font-medium text-lg text-black-light">
                    Pontuação: <span class="text-green-600 font-bold">${score}</span>
                </p>
                ${actionButtonHtml}
            </div>
            
            ${explanationHtml}
        </div>
    `;
    
    // Converte os placeholders dos ícones para ícones SVG
    if (typeof lucide !== 'undefined' && lucide.createIcons) {
        lucide.createIcons();
    }

    // Adiciona event listeners dinamicamente
    if (!showResult) {
        document.querySelectorAll('.quiz-option').forEach(button => {
            button.addEventListener('click', (e) => {
                handleAnswerSelect(parseInt(e.currentTarget.getAttribute('data-index')));
            });
        });
        const checkButton = document.getElementById('check-answer-button');
        if (checkButton) {
             checkButton.addEventListener('click', checkAnswer);
        }
    } else {
        const nextButton = document.getElementById('next-question-button');
        if (nextButton) {
            nextButton.addEventListener('click', nextQuestion);
        }
    }
}

// Lógica de seleção
function handleAnswerSelect(index) {
    if (showResult) return;
    selectedAnswer = index;
    renderQuestion(); // Re-renderiza para atualizar o estilo de seleção
}

// Lógica de verificação
function checkAnswer() {
    if (selectedAnswer === null) return;
    const currentQ = QUIZ_QUESTIONS[currentQuestion];

    if (selectedAnswer === currentQ.correct) {
        score++;
    }
    showResult = true;
    renderQuestion();
}

// Lógica de avançar
function nextQuestion() {
    showResult = false;
    selectedAnswer = null;

    if (currentQuestion < QUIZ_QUESTIONS.length - 1) {
        currentQuestion++;
        renderQuestion();
    } else {
        completed = true;
        renderResultsScreen();
    }
}

// Lógica de reiniciar
function restartQuiz() {
    currentQuestion = 0;
    selectedAnswer = null;
    showResult = false;
    score = 0;
    completed = false;
    renderQuestion();
}

// Inicializa o quiz na primeira vez que a página é acessada (chamado por showPage)
function renderQuiz() {
    // Garante que os elementos existam antes de tentar renderizar
    if (!document.getElementById('quiz-container') || !document.getElementById('question-counter')) {
        // Se os elementos não existirem, pode haver um problema no HTML ou no tempo de carregamento.
        // Neste caso, a função é apenas chamada, mas não faz nada.
        return; 
    }
    quizContainer = document.getElementById('quiz-container');
    questionCounter = document.getElementById('question-counter');

    // Garante que o quiz comece do estado correto
    if (completed) {
        renderResultsScreen();
    } else {
        renderQuestion();
    }
}