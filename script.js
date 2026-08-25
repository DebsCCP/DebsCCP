document.addEventListener("DOMContentLoaded", () => {
    const commandText = "$ whoami";
    const typeSpeed = 100; // Milissegundos por caractere
    let i = 0;
    const targetElement = document.getElementById("cmd-whoami");

    // Função que simula a digitação letra por letra
    function typeWriter() {
        if (i < commandText.length) {
            targetElement.innerHTML += commandText.charAt(i);
            i++;
            setTimeout(typeWriter, typeSpeed);
        } else {
            // Quando terminar de digitar, mostra as respostas e os outros comandos
            setTimeout(showOutputs, 500);
        }
    }

    // Função para revelar o restante do conteúdo da página
    function showOutputs() {
        document.getElementById("out-whoami").classList.remove("hide-initially");
        
        setTimeout(() => {
            document.getElementById("cmd-cat-block").classList.remove("hide-initially");
        }, 800);

        setTimeout(() => {
            document.getElementById("cmd-projects-block").classList.remove("hide-initially");
        }, 1600);
    }

    // Inicia a animação
    typeWriter();
});