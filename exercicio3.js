/*3. Desenvolva um algoritmo que preenche um vetor com os 4
primeiros números perfeitos.*/

const array = []

for(let num = 1; array.length < 4; num++){
    perfeito(num)
}

function perfeito(num) {

    let soma = 0;
    for (let i = 1; i < num; i++) {
        if (num % i == 0) {
        soma += i
        }
    }
    if (soma == num) {                
        array.push(num)
    }
        
}

for(let index = 0; index < array.length; index++){
    console.log(array[index])
}

// outra forma
function inteiro(value){
    let soma = 0;
    for(i = 1; i < value; i++){
        if(value % i == 0){
            soma = soma + i;
        }
    }
    if(soma == value){
        return value
    }
    return null
}

let numerosPerfeitos = []

for (let numeroAtual = 0; numeroAtual < Number.MAX_SAFE_INTEGER; numeroAtual++) {
    if(numerosPerfeitos.length == 4) break

    const possivelNumPerfeito = inteiro(numeroAtual)
    if(possivelNumPerfeito) {
        numerosPerfeitos.push(possivelNumPerfeito)
    }
}

console.log(numerosPerfeitos)