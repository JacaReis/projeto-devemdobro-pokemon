const botaoAlterarTema = document.getElementById("botao-alterar-tema");
const body = document.querySelector("body");
const imagemBotao = document.querySelector(".imagem-botao");

botaoAlterarTema.addEventListener("click", () => {

    if(body.classList.contains("modo-escuro")) {
        imagemBotao.setAttribute("src", "./images/sun.png");
    } else {
        imagemBotao.setAttribute("src", "./images/moon.png");
    }
    
    body.classList.toggle("modo-escuro");
});
