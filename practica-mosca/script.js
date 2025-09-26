const cancion = "Una mosca volava per la llum"
const letras = ["a", "e", "i", "o", "u"]
const cancionArry = cancion.split("")
console.log("Cancion: " + cancion)
for(let n = 0; n < letras.length; n++){
    const vocalSeleccionada = letras[n]
    for(let i = 0;cancionArry.length > i; i++){
        const letraInfo = esVocalMayuscula(cancionArry[i])
        if(letraInfo.vocal){
            cancionArry[i] = letraInfo.mayuscula ? vocalSeleccionada.toUpperCase() : vocalSeleccionada
        }
    }
    console.log(`cancion con [${vocalSeleccionada}]: ` + cancionArry.join(""))
}

function esVocalMayuscula(a){
    let vocal = false
    let mayuscula = false

    if(letras.includes(a.toLowerCase())){
        vocal = true
    }
    if(a === a.toUpperCase()){
        mayuscula = true
    }

    return {
        vocal: vocal,
        mayuscula: mayuscula
    }
}
