

function pertenceSequenciaFibonacci(numero) {
    let fibonacci = [0, 1];
    while (fibonacci[fibonacci.length - 1] < numero) {
        fibonacci.push(fibonacci[fibonacci.length - 1] + fibonacci[fibonacci.length - 2]);
    }
    return fibonacci.includes(numero);
}


const numero = 32;

if (pertenceSequenciaFibonacci(numero)) {
    console.log(`O número ${numero} pertence à sequência de Fibonacci.`);
} else {
    console.log(`O número ${numero} não pertence à sequência de Fibonacci.`);
}