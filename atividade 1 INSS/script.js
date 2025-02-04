function calcularDesconto() {
    
    let item = document.getElementById("item").value;
    let preco = parseFloat(document.getElementById("preco").value);
    let resultado = document.getElementById("resultado");

   
    if (isNaN(preco) || preco <= 0) {
        resultado.textContent = "Por favor, insira um preço válido para a peça!";
        resultado.style.color = "red";
        return;
    }

    let desconto = 0;
    let precoFinal;

 
    if (item === "camisa") {
        desconto = 0.20;
    } else if (item === "bermuda") {
        desconto = 0.10; 
    } else if (item === "calca") {
        desconto = 0.15; 
    }

    precoFinal = preco - (preco * desconto);

    
    resultado.textContent = `Preço final: R$ ${precoFinal.toFixed(2)} (Desconto de ${desconto * 100}%)`;
    resultado.style.color = "green";
}
