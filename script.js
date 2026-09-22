const button = document.querySelector("button")
const salario = document.getElementById("salario")
const paragrafoResultado = document.getElementById("resultado")

button.addEventListener("click", calcularSalario)

function calcularSalario(){
    const valorSalario = salario.valueAsNumber

    if(salario.value === ""){
        alert("Digite o salário atual!")
        return
    }

    let porcentagem

    if(valorSalario <= 1000){
        porcentagem = 20
    }
    else if (valorSalario <= 3000){
        porcentagem = 15
    }
    else if(valorSalario <= 8000){
        porcentagem = 10
    }
    else{
        porcentagem = 5
    }

    const aumento = valorSalario * porcentagem / 100
    const novoSa = valorSalario + aumento

    const novoSalario = novoSa.toLocaleString("pt-br", {
        style: "currency",
        currency: "BRL"
    })

    paragrafoResultado.textContent = `
        Novo Salário = ${novoSalario}
        Aumento = ${aumento}
        Porcentagem = ${porcentagem}
    `

    salario.value = ""
}

