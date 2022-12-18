/*5. Crie uma função que recebe um vetor de inteiros e um número
inteiro e retorne verdadeiro se o número faz parte do vetor ou falso
se não faz parte.*/

let vetor = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let num = 10;

function verify(vetor, num){
    for(i = 0; i < vetor.length; i++){
        if( num == vetor[i]){
            console.log('contém');
            return true;
        } else {
            console.log("Não contém");
            return false;
        }
    }
}
verify(vetor, num);