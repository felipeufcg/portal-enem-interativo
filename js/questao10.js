// Adiciona um "ouvinte de evento" (event listener) ao botão com id "btnVerificar"
// Quando o botão for clicado, executa a função abaixo
document.getElementById("btnVerificar").addEventListener("click", function() {
    
    // Obtém todos os elementos de input (radio buttons) com o nome "alternativa"
    const alternativas = document.getElementsByName("alternativa");

    // Variável para guardar qual alternativa o usuário selecionou
    let selecionada = null;

    // Percorre todas as alternativas (inputs do tipo radio)
    for (const alt of alternativas) {
        // Se encontrar uma alternativa marcada (checked), guarda o valor dela e interrompe o loop
        if (alt.checked) {
            selecionada = alt.value;
            break;
        }
    }

    // Obtém o elemento onde o feedback (mensagem de acerto/erro) será exibido
    const feedback = document.getElementById("feedback");

    // Se o usuário não selecionou nenhuma alternativa, mostra aviso e encerra a função
    if (!selecionada) {
        feedback.textContent = "⚠️ Selecione uma alternativa antes de verificar!";
        feedback.style.color = "orange"; // cor do texto de aviso
        return; // encerra a execução aqui
    }

    // Verifica se a resposta selecionada é a letra "e" (a correta)
    if (selecionada === "e") {
        // Mostra mensagem de sucesso e muda a cor do texto para verde
        feedback.textContent = "✅ Resposta correta! Adicionar uma cadeia normal ao invés da carbônica, o tornará biodegradável!";
        feedback.style.color = "green";
    } else {
        // Se a resposta for diferente de "e", mostra mensagem de erro em vermelho
        feedback.textContent = "❌ Resposta incorreta. Tente novamente!";
        feedback.style.color = "red";
    }
});
