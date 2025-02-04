function calcularMedia() {
    let nota1 = parseFloat(document.getElementById("nota1").value);
    let nota2 = parseFloat(document.getElementById("nota2").value);
    let nota3 = parseFloat(document.getElementById("nota3").value);
    
    let resultado = document.getElementById("resultado");

    if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3)) {
        resultado.textContent = "Por favor, insira todas as notas corretamente!";
        resultado.style.color = "red";
        return;
    }

    let media = (nota1 + nota2 + nota3) / 3;

    if (media >= 6) {
        resultado.textContent = `Média: ${media.toFixed(1)} - Aprovado`;
        resultado.style.color = "green";
    } else if (media >= 4) {
        resultado.textContent = `Média: ${media.toFixed(1)} - Recuperação`;
        resultado.style.color = "orange";
    } else {
        resultado.textContent = `Média: ${media.toFixed(1)} - Reprovado`;
        resultado.style.color = "red";
    }
}
