// 1) Cálculo do valor final da variável SOMA
console.log("QUESTÃO 1 - Cálculo do valor final da variável SOMA:");
let INDICE = 13;
let SOMA = 0;
let K = 0;

while (K < INDICE) {
    K++;
    SOMA += K;
}

console.log("Valor final da SOMA:", SOMA);

// 2) Verificação de número na sequência de Fibonacci
console.log("QUESTÃO 2 - Verificação de número na sequência de Fibonacci:");
function pertenceFibonacci(numero) {
    let a = 0, b = 1;
    while (b <= numero) {
        if (b === numero) {
            return true;
        }
        [a, b] = [b, a + b];
    }
    return false;
}

const prompt = require("prompt-sync")();
const numero = parseInt(prompt("Informe um número: "));
if (pertenceFibonacci(numero)) {
    console.log(`O número ${numero} pertence à sequência de Fibonacci.`);
} else {
    console.log(`O número ${numero} não pertence à sequência de Fibonacci.`);
}

// 3) Cálculo de faturamento diário
console.log("QUESTÃO 3 - Cálculo de faturamento diário:");
const dadosFaturamento = {
    faturamento_diario: [
        1000, 2000, 0, 1500, 3000, 0, 0, 4000, 500, 600, 0, 700, 0, 200
    ]
};

const faturamento = dadosFaturamento.faturamento_diario.filter(valor => valor > 0);

const menorValor = Math.min(...faturamento);
const maiorValor = Math.max(...faturamento);
const mediaMensal = faturamento.reduce((acc, val) => acc + val, 0) / faturamento.length;

const diasAcimaMedia = faturamento.filter(valor => valor > mediaMensal).length;

console.log("Menor valor de faturamento:", menorValor);
console.log("Maior valor de faturamento:", maiorValor);
console.log("Dias com faturamento acima da média:", diasAcimaMedia);

// 4) Percentual de faturamento por estado
console.log("QUESTÃO 4 - Percentual de faturamento por estado:");
const faturamentoEstados = {
    SP: 67836.43,
    RJ: 36678.66,
    MG: 29229.88,
    ES: 27165.48,
    Outros: 19849.53
};

const faturamentoTotal = Object.values(faturamentoEstados).reduce((acc, val) => acc + val, 0);

console.log("Percentual de representação por estado:");
for (const [estado, valor] of Object.entries(faturamentoEstados)) {
    const percentual = (valor / faturamentoTotal) * 100;
    console.log(`${estado}: ${percentual.toFixed(2)}%`);
}

// 5) Inversão de uma string
console.log("QUESTÃO 5 - Inversão de uma string:");
function inverterString(s) {
    let invertida = "";
    for (let i = s.length - 1; i >= 0; i--) {
        invertida += s[i];
    }
    return invertida;
}

const string = prompt("Informe uma string: ");
const invertida = inverterString(string);
console.log("String invertida:", invertida);
