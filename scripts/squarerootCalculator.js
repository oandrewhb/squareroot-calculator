

const parametroInicial = 296

function fatorar(parametro){
    /*
    1 x 3
    3 x 3
    9 x 3
    27 x 2
    54 x 2
    108 x 2
    216

    216 / 2
    108 / 2
    54  / 2
    27  / 3
    9   / 3
    3   / 3
    1
    */

    let dividendoAtual = parametro
    let divisorAtual = 2

    while(dividendoAtual > 1){
        while(dividendoAtual % divisorAtual != 0){
            divisorAtual++
        }
        console.log(dividendoAtual + " / " + divisorAtual)
        dividendoAtual = dividendoAtual / divisorAtual
    }
}
fatorar(parametroInicial)


const teste = [2, 2, 2, 37]
function separarPares(parametro){
    /*
    1260 / 2
    630  / 2
    315  / 3
    105  / 3
    35   / 5
    7    / 7
    1
    */
    let numeros = parametro
    let numerosForaDaRaiz = []
    let numerosDentroDaRaiz = []

    while(numeros.length){
        if(numeros[0] == numeros[1]){
            numerosForaDaRaiz.push(numeros[0])
            numeros = numeros.slice(2)
        } else {
            numerosDentroDaRaiz.push(numeros[0])
            numeros = numeros.slice(1)
        }
    }

    console.log(numeros)
    console.log(numerosForaDaRaiz)
    console.log(numerosDentroDaRaiz)
}
// separarPares(teste)

