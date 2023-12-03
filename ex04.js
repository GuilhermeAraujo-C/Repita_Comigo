var soma = 0;
var totalNumeros = 0;

for (var i = 15; i <= 100; i++) {
    
    soma += i;
    
    totalNumeros++;
}


var media = soma / totalNumeros;

alert("A média aritmética dos números de 15 a 100 é: " + media.toFixed(2));
