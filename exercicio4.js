/*4. Crie uma função que recebe 2 vetores de 10 elementos inteiros e que
retorne a união dos dois em um novo vetor.*/

let vetor1 = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
let vetor2 = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21];

function uniao(a1, a2){
    let vetor3 = a1.concat(02);
    vetor3.sort((a, b) => {
        if(a > b){
            return 1;
        } 
        if(a < b){
            return -1;
        }
        return 0;
    })
    return console.log(vetor3) 
}

uniao(vetor1, vetor2)