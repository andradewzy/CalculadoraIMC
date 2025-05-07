const form = document.getElementById('imc-form');
const resultado = document.getElementById('resultado');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const peso = parseFloat(document.getElementById('peso').value);
  const altura = parseFloat(document.getElementById('altura').value);

  if (peso > 0 && altura > 0) {
    const imc = peso / (altura * altura);
    let classificacao = '';

    if (imc < 18.5) {
      classificacao = 'Abaixo do peso';
    } else if (imc >= 18.5 && imc < 24.9) {
      classificacao = 'Peso normal';
    } else if (imc >= 25 && imc < 29.9) {
      classificacao = 'Sobrepeso';
    } else if (imc >= 30 && imc < 34.9) {
      classificacao = 'Obesidade grau 1';
    } else if (imc >= 35 && imc < 39.9) {
      classificacao = 'Obesidade grau 2';
    } else {
      classificacao = 'Obesidade grau 3 (mórbida)';
    }

    resultado.innerHTML = `Seu imc é ${imc.toFixed(2)} - ${classificacao}`;
  } else {
    resultado.innerHTML = 'Preencha os campos corretamente.';
  }
});