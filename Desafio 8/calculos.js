alert('Digite dois números para que sejam realizados calculos matemáticos!');

let numberOne = prompt('Digite o primeiro número:');
let numberTwo = prompt('Digite o segundo número:');

let n1 = Number(numberOne);
let n2 = Number(numberTwo);
let parOrImpar, result;

const sum = (n1, n2) => {
  return n1 + n2;
}

const sub = (n1, n2) => {
  return n1 - n2;
}

const mult = (n1, n2) => {
  return n1 * n2;
}

const div = (n1, n2) => {
  return (n1 / n2).toFixed(2);
}

const restDiv = (n1, n2) => {
  return (n1 % n2).toFixed(2);
}

if (restDiv(n1, n2) == 0) {
  parOrImpar = 'par'
  } else {
  parOrImpar = 'ímpar'
}

if (n1 == n2) {
  result = 'Os números digitados foram iguais!'
  } else {
  result = 'Os números digitados foram diferentes!'
}



alert(`
- Resultado da soma: ${sum(n1, n2)};

- Resultado da subtração: ${sub(n1, n2)};

- Resultado da multiplicação: ${mult(n1, n2)};

- Resultado da divisão: ${div(n1, n2)};

- Resultado do resto da divisão: ${restDiv(n1, n2)};

- O resultado é um número ${parOrImpar};

- ${result};
`);
