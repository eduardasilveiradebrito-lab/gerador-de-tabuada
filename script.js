const formulario = document.getElementById("formulario");
const campoNumero = document.getElementById("numero");
const resultado = document.getElementById("resultado");
const mensagem = document.getElementById("mensagem");

formulario.addEventListener("submit", function(event) {
    event.preventDefault();

    const numero = Number(campoNumero.value);

    resultado.innerHTML = "";
    mensagem.textContent = "";

    if (!Number.isInteger(numero) || numero < 1 || numero > 10) {
        mensagem.textContent = "Digite um número inteiro entre 1 e 10.";
        return;
    }

    const titulo = document.createElement("h2");
    titulo.textContent = "Tabuada do " + numero;
    resultado.appendChild(titulo);

    for (let multiplicador = 1; multiplicador <= 10; multiplicador++) {
        const linha = document.createElement("p");
        const produto = numero * multiplicador;

        linha.textContent = numero + " x " + multiplicador + " = " + produto;
        resultado.appendChild(linha);
    }
});
