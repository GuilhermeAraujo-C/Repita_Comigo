let i = 0
let number = parseInt(prompt("Digite o valor desejado: "))
while(number <= 0){
    number = parseInt(prompt("Erro!! Por favor, digite novamente: "))
}
if(number > 0){
    while(i < number){
        i += 1
        alert(i + " ")
    }
}