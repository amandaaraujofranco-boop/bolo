window.onload = function() {
    const progressBar = document.getElementById('progress-bar');
    const bigCake = document.getElementById('big-cake');
    const splashScreen = document.getElementById('splash-screen');
    const loginScreen = document.getElementById('login-screen');
    
    let width = 0;
    const duration = 5000; // 5 segundos
    const intervalTime = 50; // Atualiza a cada 50ms
    const step = (intervalTime / duration) * 100;

    const interval = setInterval(() => {
        width += step;
        progressBar.style.width = width + '%';

        if (width >= 100) {
            clearInterval(interval);
            // Mostrar o bolo
            bigCake.style.display = 'block';
            
            // Esperar 1.5s com o bolo na tela e ir para o login
            setTimeout(() => {
                splashScreen.classList.add('hidden');
                loginScreen.classList.remove('hidden');
            }, 1500);
        }
    }, intervalTime);
};

function startGame() {
    const name = document.getElementById('username').value;
    if (name.trim() !== "") {
        document.getElementById('login-screen').classList.add('hidden');
        document.getElementById('game-screen').classList.remove('hidden');
        console.log("Iniciando jogo para: " + name);
    } else {
        alert("Por favor, digite seu nome!");
    }
}
