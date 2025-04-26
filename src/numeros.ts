
//arreglos tipados
let numeros: number[] = [1, 2, 3, 4, 5]
numeros.push(6)

let nombres: Array<string> = ["Fernando", "Juan", "Pedro"]

//tuplas
let persona:[string,number,boolean] = ["Fernando", 25, true]
persona[2] = false

//Enums

enum ColorSemaforo {
    rojo, verde, amarillo
}
let estadoSemaforo: ColorSemaforo = ColorSemaforo.amarillo

console.log(estadoSemaforo)

function imprimir(valor: number | string) {
    console.log(valor)
}
function caluclarLongitud(valor: string | any[]) {
    return valor.length
}