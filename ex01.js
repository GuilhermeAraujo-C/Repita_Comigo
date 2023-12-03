let numero1 = parseInt(prompt("Informe o primeiro valor"));

for(let tentativa = 0; tentativa <= 3; tentativa++){
    let numero2 = parseInt(prompt("Informe o segundo valor")); 

    if(numero2 <= 0){
        alert("Numero invalido")
    }else{
        let divisao = (numero1/numero2);
        alert("Resultado é: " + divisao);
        break;
    }
}



