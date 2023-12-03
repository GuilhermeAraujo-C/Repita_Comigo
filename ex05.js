var num1 = parseInt(prompt("Digite o primeiro número inteiro: "));
var num2 = parseInt(prompt("Digite o segundo número inteiro: "));

var soma_total = 0;

for(var i = num1; i <= num2; i++) {
 var media = (i + i + 1) / 2;
 soma_total += media;
}

alert("A média aritmética dos números entre " + num1 + " e " + num2 + " é " + (soma_total / (num2 - num1 + 1)));
alert("A soma total das médias aritméticas entre " + num1 + " e " + num2 + " é " + soma_total);
