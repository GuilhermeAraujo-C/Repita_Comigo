const numeroDeNotas = 6;
let notas = [];
let somaNotas = 0;

for (let i = 0; i < numeroDeNotas; i++) {
    let nota = parseFloat(prompt(`Digite a nota ${i + 1}:`));

    while (isNaN(nota) || nota < 0 || nota > 10) {
        alert("Por favor, digite uma nota válida entre 0 e 10.");
        nota = parseFloat(prompt(`Digite a nota ${i + 1}:`));
    }

    notas.push(nota);
    somaNotas += nota;
}

const media = somaNotas / numeroDeNotas;
alert(`A média do aluno é: ${media.toFixed(2)}`);
