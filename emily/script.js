const perguntas = document.querySelectorAll(".perguntaResposta");

perguntas.forEach(pergunta => {
    pergunta.addEventListener("click", () => {
        pergunta.classList.toggle("active");
    });
});
