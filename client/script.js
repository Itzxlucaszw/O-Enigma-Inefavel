const startBtn = document.getElementById("startBtn");
const video = document.getElementById("videoMenu");
const fade = document.getElementById("fade");

startBtn.addEventListener("click", () => {

    startBtn.style.display = "none";

    // Zoom para simular entrar na porta
    video.style.transform = "scale(2)";

    // Escurece a tela
    setTimeout(() => {
        fade.style.opacity = "1";
    }, 2000);

    // Vai para o jogo
    setTimeout(() => {
        window.location.href = "game/jogo.html";
    }, 4000);

});