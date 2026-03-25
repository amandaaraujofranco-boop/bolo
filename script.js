// Inicia o carregamento assim que a página abre
window.onload = function() {
    const barra = document.getElementById('barra-progresso');
    const areaBolo = document.getElementById('area-bolo');

    // Força o início da transição da barra
    setTimeout(() => {
        barra.style.width = '100%';
    }, 100);

    // Após 5 segundos (5000ms), mostra o bolo
    setTimeout(() => {
        areaBolo.classList.remove('hidden');
    }, 5100);
};

function irParaLogin() {
    document.getElementById('tela-inicial').classList.add('hidden');
    document.getElementById('tela-login').classList.remove('hidden');
}

function iniciarFase() {
    alert("Prepare os ingredientes! O jogo vai começar...");
    // Aqui entraremos na lógica das fases e pontos
}
