function estaNoIntervalo(valor) {
    return valor >= 24 && valor <= 42;
  }
  
  let dentroDoIntervalo = 0;
  let foraDoIntervalo = 0;
  
  for (let i = 0; i < 10; i++) {
    const valor = parseFloat(prompt(`Informe o valor ${i + 1}:`));
  
    if (!isNaN(valor)) {
      if (estaNoIntervalo(valor)) {
        dentroDoIntervalo++;
      } else {
        foraDoIntervalo++;
      }
    } else {
      alert("Por favor, informe um valor numérico.");
      i--; 
    }
  }
  
  alert(`Quantidade de valores dentro do intervalo: ${dentroDoIntervalo}\nQuantidade de valores fora do intervalo: ${foraDoIntervalo}`);
  