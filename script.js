function calcularINSS() {
    let salario = Number(document.getElementById("salario").value);
    let desconto = 0;
    let teto = 7087.22;
    
    if (salario <= 1212.00) {
        desconto = salario * 0.075;
    }  if (salario <= 2427.35) {
        desconto = salario * 0.09;
    }  if (salario <= 3641.03) {
        desconto = salario * 0.12;
    }  if (salario <= teto) {
        desconto = salario * 0.14;
    } else {
        desconto = teto * 0.14;
    }
    
    let salarioFinal = salario - desconto;
    document.getElementById("resultado").innerHTML = `Desconto do INSS: R$ ${desconto.toFixed(2)}<br>Salário líquido: R$ ${salarioFinal.toFixed(2)}`;
}