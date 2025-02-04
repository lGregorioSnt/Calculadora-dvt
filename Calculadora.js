// const prompt = require('prompt-sync')();

const promptSync = require('prompt-sync');
const prompt = promptSync();
let n = "\n"

function soma(a, b) {
    return a + b;
}

function subtracao(a, b) {
    return a - b;
}

function multiplicacao(a, b) {
    return a * b;
}

function divisao(a, b) {
    if (b !== 0) {
        return a / b;
    }
    else {
        return "Erro: Divisão por zero";
    }
}

while (true) {
    let escolha = prompt("Escolha a operação: 1. Soma, 2. Subtração, 3. Multiplicação, 4. divisão, 5. Potencia, 6. Raiz quadrada, 7. tan 8. cos 9. sen 10. sair, qual a escolha? : ", n);

    if (escolha === "10") {
        break;
    }

    let num1 = parseFloat(prompt("Digite o primeiro número: "));
    let num2 = parseFloat(prompt("Digite o segundo número: "));

    if (escolha === "1") {
        console.log("Resultado: ", soma(num1, num2));
    } else if (escolha === "2") {
        console.log("Resultado: ", subtracao(num1, num2));
    } else if (escolha === "3") {
        console.log("Resultado: ", multiplicacao(num1, num2));
    } else if (escolha === "4") {
        console.log("Resultado: ", divisao(num1, num2));
    } else if (escolha === "5") {
        console.log("Resultado: ", Math.pow(num1, num2));
    }
    else if (escolha === "6") {
        console.log("Resultado: ", Math.sqrt(num1))
    }
    else if (escolha === "5") {
        console.log("Resultado: ", Math.pow(num1, num2));
    }
    else if (escolha === "5") {
        console.log("Resultado: ", Math.pow(num1, num2));
    }


} 
  else { onsole.log("Escolha inválida");
}
