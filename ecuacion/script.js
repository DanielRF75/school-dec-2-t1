for (let a = -5; a < 6; a++){
    for(let b = -3; b < 4; b++){
        for(let c = 0; c < 5; c++){
            console.log
            (`a:${a} b:${b} c:${c} = ` +
            ecuacion2(a, b, c)
            )
        }
    }
}
function ecuacion2(a, b, c){
    const sqrt = Math.sqrt((Math.pow(b, 2)) + (-4 * a * c))
    const denominador = 2 * a

    if(sqrt >= 0){
        const r1 = (-b + sqrt) / denominador
        const r2 = (-b - sqrt) / denominador

        const resultado = []
        if (!isNaN(r1) && isFinite(r1)){
            resultado.push(r1)
        }

        if (!isNaN(r2) && isFinite(r2) && r1 !== r2){
            resultado.push(r2)
        }

        return resultado
    }else {
        return []
    }
}




function ecuacion(a, b, c){
    const raiz = Math.sqrt(Math.pow(b, 2) -4 * a * c)
    const resultados = []
    if(raiz >= 0){
        resultados.push((-b + raiz) / (2 * a))
        resultados.push((-b - raiz) / (2 * a))

    }
    return resultados
}
