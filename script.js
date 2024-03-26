document.getElementById("meuFormulario").addEventListener("submit", function(event) {
    event.preventDefault(); 

    var campoA = parseFloat(document.getElementById("campoA").value);
    var campoB = parseFloat(document.getElementById("campoB").value);

    var mensagemElemento = document.getElementById("mensagem");
    
    if (campoB > campoA) {
        mensagemElemento.textContent = "Formulário válido: B é maior que A.";
        mensagemElemento.style.color = "green";
    } else {
        mensagemElemento.textContent = "Formulário inválido: B deve ser maior que A.";
        mensagemElemento.style.color = "red";
    }
});
