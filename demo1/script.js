function a(){
/*
* const x = 4
* const y = 4.5
* const z = "4"
*
* + - * / % ^
*
* < > >= <=
* == === != !==
*
* x + y
* x + y + z
* x - y
* x - y - z
* x == z
* x === z
* x != z
* x !== z
* x < y
* y < z
* */
    const x = 4
    const y = 4.5
    const z = "4"


    console.log(x + y)
    console.log(x + y + z)
    console.log(x - y)
    console.log(x - y - z)
    console.log(x == z)
    console.log(x === z)
    console.log(x != z)
    console.log(x !== z)
    console.log(x < y)
    console.log(y < z)
}
//a();
function b(){
    //Los objetos de js son prototipicos(prototype)
    const o = {
        nombre: "Daniel",
        apellido: "Rodriguez",
        ojos: 3,
    }
    console.log(o.nombre, o.apellido)
    o.apellido2 = "Ferrer"
    console.log(o.nombre, o.apellido, o.apellido2)

    //se puede sobreescribir funcinoes del motor??
    alert("Mundo")
    window.alert = function(x) {console.log("Hola " + x)}
    alert("Mundo")
}
//b();
function c(){
    //Arrays
    const arr = ["Tomeu", "Maria", "Tomas",{x:99,y:145}]
    arr.length
    console.log(arr[3].x + 1)
    const j = arr[2]

    //agrregar elemento
    arr.push("Yolanda")
    //eliminar elemento
    arr.pop()

}
//c();
function d(){
    //Functions
    //LAS FUNCIONES SON VALORES!!!!!!!!!!!!

    //Funcinoes ANONIMAS
    const f = function(){
        return "Hola mundo"
    }
    console.log(f, f())

    //Funciones con NOMBRE
    function sumar(a, b){
        return a + b
    }
    console.log(sumar(3, 4))
}
d()