var aprovados = 0;

while (true) {
 var nota1 = parseFloat(prompt("Digite a primeira nota: "));
 var nota2 = parseFloat(prompt("Digite a segunda nota: "));

 var media = (nota1 + nota2) / 2;

 if (media > 9.5) {
   aprovados++;
   alert("Aprovado");
 } else {
   alert("Reprovado");
 }


 var continuar = prompt("Calcular a média de outro aluno Sim/Não?");

 if (continuar.toUpperCase() === "N") {
   break;
 }
}

alert("Quantidade de alunos aprovados: " + aprovados);
