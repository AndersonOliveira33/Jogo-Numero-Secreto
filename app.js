alert ('Boas-vindas ao jogo do Número Secreto');
let numeroMaximo = 10;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
console.log(numeroSecreto);
let chute;
let tentativas = 1;
let pontos = 100;

// enquanto chute não for igual ao n.s.
while (chute != numeroSecreto){
    chute = prompt(`Escolha um numero entre 1 e ${numeroMaxnumimo}`);
    // se chute for igual ao número secretro
    if (chute == numeroSecreto) {
        alert(`${pontos}, Parabéns você Venceu`);
        break;
    } else {
    if (chute > numeroSecreto) {
        alert (`O número secreto é menor que ${chute}`);
    } else {
        alert(`O número secreto é maior que ${chute}`);
    }
    //tentativas = tentativas +1
    tentativas++;
    }
}