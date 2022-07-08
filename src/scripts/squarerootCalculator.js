

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

function resultadoFinal(parametro){
    let numeroForaDaRaiz = 1
    let numeroDentroDaRaiz = 1

    for(const num of parametro.numerosForaDaRaiz){
        numeroForaDaRaiz = numeroForaDaRaiz * num
    }
    for(const num of parametro.numerosDentroDaRaiz){
        numeroDentroDaRaiz = numeroDentroDaRaiz * num
    }

    return {
        numeroForaDaRaiz: numeroForaDaRaiz,
        numeroDentroDaRaiz: numeroDentroDaRaiz,
        resultadoStr: numeroForaDaRaiz == 1 ? "√"+numeroDentroDaRaiz : numeroDentroDaRaiz == 1 ? numeroForaDaRaiz : numeroForaDaRaiz+"√"+numeroDentroDaRaiz
    }
}

function squarerootCalculator(parametroInicial, log=false){

    const consoleLog = (param) => {if(log){console.log(param)}}

    const fatorarObj = fatorar(parametroInicial)
    consoleLog("fatorarObj:")
    consoleLog(fatorarObj)

    const separarParesObj = separarPares(fatorarObj.divisores)
    consoleLog("separarParesObj:")
    consoleLog(separarParesObj)

    const resultadoFinalObj = resultadoFinal(separarParesObj)
    consoleLog("resultadoFinalObj:")
    consoleLog(resultadoFinalObj)

    consoleLog("-----")



    if(parametroInicial <= 1){
        return parametroInicial
    } else {
        return {
            fatoracao: fatorarObj,
            numerosDentroDaRaiz: separarParesObj.numerosDentroDaRaiz,
            numerosForaDaRaiz: separarParesObj.numerosForaDaRaiz,
            resultadoFinal: resultadoFinalObj,
            resultadoFinalStr: resultadoFinalObj.resultadoStr,
            raizJaSimplificada: resultadoFinalObj.numeroDentroDaRaiz == parametroInicial
        }
    }

}

// console.log(squarerootCalculator(1000))

for (let i = 0; i <= 1000; i++){
    console.log(i + " = " + squarerootCalculator(i).resultadoFinalStr + " - " + squarerootCalculator(i).raizJaSimplificada)
    // console.log(squarerootCalculator(i).resultadoFinalStr)
}