const promptSync = require('prompt-sync');
const prompt = promptSync();

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
    } else {
        return "Erro: Divisão por zero";
    }
}

while (true) {
    let escolha = prompt("Escolha a operação: 1. Soma, 2. Subtração, 3. Multiplicação, 4. Divisão, 5. Potência, 6. Raiz quadrada, 7. Tangente, 8. Cosseno, 9. Seno, 10. Sair. Qual a escolha? : ");

    if (escolha === "10") {
        console.log("Saindo");
        break;
    }

    if (escolha >= "1" && escolha <= "5") {
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
    } else if (escolha >= "6" && escolha <= "9") {
        let num1 = parseFloat(prompt("Digite o número: "));

        if (escolha === "6") {
            console.log("Resultado: ", Math.sqrt(num1));
        } else if (escolha === "7") {
            let radiano = num1 * Math.PI / 180; // Converte graus para radianos
            console.log("Resultado: ", Math.tan(radiano));
        } else if (escolha === "8") {
            let radiano = num1 * Math.PI / 180; 
            console.log("Resultado: ", Math.cos(radiano));
        } else if (escolha === "9") {
            let radiano = num1 * Math.PI / 180; 
            console.log("Resultado: ", Math.sin(radiano));
        }
    } else {
        console.log("Escolha inválida");
    }
}