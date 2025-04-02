let botao = document.getElementById("meuBotao");

botao.style.left = "50%";
botao.style.top = "50%";

document.addEventListener("mousemove", function(event) {
    let mouseX = event.clientX;
    let mouseY = event.clientY;

    let botaoX = botao.offsetLeft;
    let botaoY = botao.offsetTop;

    let distanciaX = mouseX - botaoX;
    let distanciaY = mouseY - botaoY;
    
    if (distanciaX < 100 && distanciaX > -100 && 
        distanciaY < 100 && distanciaY > -100) {

        let novoX = Math.random() * (window.innerWidth - 100);
        let novoY = Math.random() * (window.innerHeight - 100);
        
        botao.style.left = novoX + "px";
        botao.style.top = novoY + "px";
    }
});