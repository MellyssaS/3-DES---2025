function calcularINSS() {
    let salario = Number(document.getElementById("salario").value);
    let desconto = 0;
    let teto = 7087.22;
    
    if (salario <= 1212) {
        desconto = salario * 7.5 / 100;
    } else if (salario <= 2427) {
        desconto = salario * 9 / 100;
    } else if (salario <= 3641) {
        desconto = salario * 12 / 100;
    } else if (salario <= teto) {
        desconto = salario * 14 /100;
    } else {
        desconto = teto * 14 /100;
    }
    
    let salarioFinal = salario - desconto;
    document.getElementById("resultado").innerHTML = `Desconto do INSS: R$ ${desconto.toFixed(2)}<br>Salário líquido: R$ ${salarioFinal.toFixed(2)}`;
}
