let pontos = 0;
let nomeJogador = "";
const ingredientes = ['🥚', '🥛', '🍓', '🍫', '🥣'];

function iniciarFase() {
    const inputNome = document.querySelector('#tela-login input');
    nomeJogador = inputNome.value || "Anônimo";
    
    document.getElementById('exibir-nome').innerText = nomeJogador;
    document.getElementById('tela-login').classList.add('hidden');
    document.getElementById('tela-jogo').classList.remove('hidden');

    gerarIngrediente();
}

function gerarIngrediente() {
    if (pontos >= 10) {
        finalizarJogo();
        return;
    }

    const campo = document.getElementById('campo-batalha');
    const item = document.createElement('div');
    
    item.className = 'ingrediente';
    item.innerText = ingredientes[Math.floor(Math.random() * ingredientes.length)];
    
    // Posição aleatória
    const x = Math.random() * (window.innerWidth - 50);
    const y = Math.random() * (window.innerHeight - 200);
    
    item.style.left = `${x}px`;
    item.style.top = `${y}px`;

    item.onclick = function() {
        pontos++;
        document.getElementById('pontos').innerText = pontos;
        this.remove(); // Remove o item clicado
        gerarIngrediente(); // Gera o próximo
    };

    campo.appendChild(item);
}

function finalizarJogo() {
    alert("Parabéns! Você completou o bolo!");
    salvarRanking(nomeJogador, pontos);
    mostrarRanking();
}

function salvarRanking(nome, score) {
    let ranking = JSON.parse(localStorage.getItem('rankingBolo')) || [];
    ranking.push({ nome, score });
    // Ordena do maior para o menor
    ranking.sort((a, b) => b.score - a.score);
    // Salva apenas os 5 melhores
    localStorage.setItem('rankingBolo', JSON.stringify(ranking.slice(0, 5)));
}

function mostrarRanking() {
    document.getElementById('tela-jogo').classList.add('hidden');
    document.getElementById('tela-ranking').classList.remove('hidden');
    
    const lista = document.getElementById('lista-ranking');
    const dados = JSON.parse(localStorage.getItem('rankingBolo')) || [];
    
    lista.innerHTML = dados.map(item => `<li>${item.nome}: ${item.score} pts</li>`).join('');
}
