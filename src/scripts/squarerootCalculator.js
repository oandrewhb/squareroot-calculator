

const parametroInicial = 1260

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

    const divisores = []
    const dividendos = []

    while(dividendoAtual > 1){
        while(dividendoAtual % divisorAtual != 0){
            divisorAtual++
        }
        divisores.push(divisorAtual)
        dividendos.push(dividendoAtual)
        dividendoAtual = dividendoAtual / divisorAtual
    }

    return {
        divisores: divisores,
        dividendos: dividendos,
    }
}
const fatorarObj = fatorar(parametroInicial)


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

    return {
        numerosForaDaRaiz: numerosForaDaRaiz,
        numerosDentroDaRaiz: numerosDentroDaRaiz,
    }
}
const separarParesObj = separarPares(fatorarObj.divisores)

function resultadoFinal(parametro){
    let numeroForaDaRaiz = 1
    let numeroDentroDaRaiz = 1

    for(const num of parametro.numerosForaDaRaiz){
        numeroForaDaRaiz *= num
    }
    for(const num of parametro.numerosDentroDaRaiz){
        numeroDentroDaRaiz *= num
    }

    return {
        numeroForaDaRaiz: numeroForaDaRaiz,
        numeroDentroDaRaiz: numeroDentroDaRaiz,
        resultadoStr: numeroForaDaRaiz+"√"+numeroDentroDaRaiz
    }
}
const resultadoFinalObj = resultadoFinal(separarParesObj)