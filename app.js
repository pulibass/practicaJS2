//1.	Escribe un programa de una sola línea que haga que aparezca en la pantalla un alert que diga “Hello World”.

/* function saludoAlert(){
alert("hello world")
}
saludoAlert() */

//2.	Escribe un programa de una sola línea que escriba en la pantalla un texto que diga “Hello World” (document.write).

/* function saludoDocumentWrite() {
    document.write("hello world")
}
saludoDocumentWrite() */

//3.	Escribe un programa de una sola línea que escriba en la pantalla el resultado de sumar 3 + 5.

/* function suma() {
    document.write(5 + 3)
}
suma() */

//4.	Escribe un programa de dos líneas que pida el nombre del usuario con un prompt y escriba un texto que diga “Hola nombreUsuario”

/* function usuario() {
    let nombreUsuario = prompt("escriba su usuario");
    document.write("hola " + " " + nombreUsuario)
}
usuario() */

//5.	Escribe un programa de tres líneas que pida un número, pida otro número y escriba el resultado de sumar estos dos números.

/* function sumaNumeros() {
    let num1 = parseInt(prompt("ingrese el primer numero"))
    let num2 = parseInt(prompt("ingrese el segundo numero"))
let resultado = num1 + num2
    return alert("el resultado es: " + resultado)
}
sumaNumeros() */

//6.	Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor.

/* function numeroMayor(num1, num2) {
    num1 = parseInt(prompt("ingrese  nuevamente un numero"))
    num2 = parseInt(prompt("ingrese el segundo numero"))
    if (num1 > num2) {
        document.write("el numero mayor es " + num1)
    }
}

console.log(numeroMayor()) */

//7.	Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.

/* function numeroMayor() {
    let num1 = parseInt(prompt("Ingrese el primer numero"));
    let num2 = parseInt(prompt("Ingrese el segundo numero"));
    let num3 = parseInt(prompt("Ingrese el tercer numero"));

    if (num1 >= num2 && num1 >= num3) {
        document.write("El numero mayor es " + num1);
    } else if (num2 >= num1 && num2 >= num3) {
        document.write("El numero mayor es " + num2);
    } else {
        document.write("El numero mayor es " + num3);
    }
}

numeroMayor(); */

//8.	Escribe un programa que pida un número y diga si es divisible por 2

/* function esPar() {
    let num1 = parseInt(prompt("Ingrese un numero"));
    if (num1 % 2 == 0) {
        document.write("el numero es divisible por 2")
    } else {
        document.write("el numero no es divisible por 2")
    }
}

esPar() */

//9.	Escribe un programa que pida una frase y escriba cuantas veces aparece la letra a

/* function letraA() {
   let frase = prompt("ingrese una frase que contenga la o las letras a")
   let arrayA = []
   for (let i = 0; i <= frase.length; i++) {
       if (frase[i] === "a")
           arrayA.push(frase[i].toUpperCase())
   }

   return document.write("la cantidad de veces que aparece la letra a es " + arrayA.length + " " + arrayA)
}

letraA()  */


//10.	Escribe un programa que pida una frase y escriba las vocales que aparecen

/* function fraseVocal() {
    let frase = prompt("Ingrese una frase que contenga vocales");
    let vocales = [];
    for (let i = 0; i < frase.length; i++) {
        if (frase[i] === "a" || frase[i] === "e" || frase[i] === "i" || frase[i] === "o" || frase[i] === "u") {
            vocales.push(frase[i]);
            console.log(frase[i]);
        }
    }
    document.write("La cantidad de vocales en la frase son " + vocales.length + ". Las vocales son: " + vocales.join(", "));
}
fraseVocal();
 */


//11.	Escribe un programa que pida una frase, escriba cuántas de las letras que tiene son vocales y escriba cuántas veces aparecen cada una de las vocales

/* function fraseVocal() {
    let frase = prompt("Ingrese una frase que contenga vocales");
    let vocales = [];
    for (let i = 0; i < frase.length; i++) {
        if (frase[i] === "a" || frase[i] === "e" || frase[i] === "i" || frase[i] === "o" || frase[i] === "u") {
            vocales.push(frase[i]);
            console.log(frase[i]);
        }
    }
    document.write("La cantidad de vocales en la frase son " + vocales.length + ". Las vocales son: " + vocales.join(", "));
}
fraseVocal(); */

//13.	Escribe un programa que pida un número y nos diga si es divisible por 2, 3, 5 o 7(sólo hay que comprobar si lo es por uno de los cuatro)

/* function numeroDivisible() {
    let numero = parseInt(prompt("ingrese un numero para saber si es divisible por 2, 3, 5, 7"))
    if (numero % 2 == 0) {
        document.write("el numero ingresado  es divisible por 2 " + " el numero ingresado es: " + " " + numero)
    } else if (numero % 3 == 0) {
        document.write("el numero ingresado  es divisible por 3 " + " el numero ingresado es: " + " " + numero)
    } else if (numero % 5 == 0) {
        document.write("el numero ingresado  es divisible por 5 " + " el numero ingresado es: " + " " + numero)
    } else if (numero % 7 == 0) {
        document.write("el numero ingresado  es divisible por 7 " + " el numero ingresado es: " + " " + numero)
    } else {
        document.write("el numero ingresado no puede ser dividido por 2, 3, 5, 7 " + " el numero ingresado es: " + " " + numero)
    }
}
numeroDivisible() */

//14.	Añadir al ejercicio anterior que nos diga por cual de los cuatro es divisible (hay que decir todos por los que es divisible)

/* function numeroDivisible() {
    let numero = parseInt(prompt("ingrese un numero para saber si es divisible por 2, 3, 5, 7"))
    if (numero % 2 == 0 || numero % 3 == 0 || numero % 5 == 0 || numero % 7 == 0) {
        if (numero % 2 == 0) {
            document.write("el numero ingresado  es divisible por 2 " + " el numero ingresado es: " + " " + numero)
        } else if (numero % 3 == 0) {
            document.write("el numero ingresado  es divisible por 3 " + " el numero ingresado es: " + " " + numero)
        } else if (numero % 5 == 0) {
            document.write("el numero ingresado  es divisible por 5 " + " el numero ingresado es: " + " " + numero)
        } else if (numero % 7 == 0) {
            document.write("el numero ingresado  es divisible por 7 " + " el numero ingresado es: " + " " + numero)
        } else {
            document.write("el numero ingresado no puede ser dividido por 2, 3, 5, 7 " + " el numero ingresado es: " + " " + numero)
        }
    } else {
        document.write("el numero ingresado no puede ser dividido por 2, 3, 5, 7 " + " el numero ingresado es: " + " " + numero)
    }
}
numeroDivisible() */

//1. Contraseña válida
/* //Escribir una función llamada contrasenaValida que reciba un string y retorne true si el string es igual a "2Fj(jjbFsuj" o "eoZiugBf&g9".
//De lo contrario debe retornar false.
// escribe tu respuesta acá

function contrasenaValida(password) {
    if (password === "2Fj(jjbFsuj" || password === "eoZiugBf&g9") {
        return true
    } else {
        return false
    }
}

// código de prueba
console.log(contrasenaValida("2Fj(jjbFsuj")) // true
console.log(contrasenaValida("eoZiugBf&g9")) // true
console.log(contrasenaValida("hola")) // false
console.log(contrasenaValida("")) // false */

//2. Calcular impuestos
//Escribir una función llamada calcularImpuestos que reciba dos argumentos numéricos: edad e ingresos.
//Si edad es igual o mayor a 18 y los ingresos son iguales o mayores a 1000 debe retornar ingresos * 40%. De lo contrario retornar 0.

// escribe tu respuesta acá


/* function calcularImpuestos(edad, ingresos) {
    let ingresoCalculo = 40;
    if (edad >= 18 && ingresos >= 1000) {
        return ingresos = (ingresos * ingresoCalculo) / 100;
    } else {
        return ingreso = 0;
    }
}

// código de prueba
console.log(calcularImpuestos(18, 1000)) // 400
console.log(calcularImpuestos(40, 10000)) // 4000
console.log(calcularImpuestos(17, 5000)) // 0
console.log(calcularImpuestos(30, 500)) // 0 */



//3. IMC (ïndice de masa corporal)
//El índice de masa corporal(IMC), o BMI por sus siglas en inglés, es un valor que determina la cantidad de grasa de una persona.

//El BMI se calcula con la siguiente formula: peso / altura ^ 2

//Escribir una función llamada bmi que reciba dos argumentos: peso y altura, y retorne un string con las siguientes posibilidades:

//"Bajo de peso" si el BMI < 18.5
//"Normal" si está entre 18.5 y 24.9
//"Sobrepeso" si está entre 25 y 29.9
//"Obeso" si es igual o mayor a 30

/* function bmi(peso, altura) {

    let calculo = peso / (altura ** 2)

    if (calculo < 18.5) {
        console.log("Bajo de peso")
    } else if (calculo >18.5 && calculo < 24.9) {
        console.log("Normal")
    } else if (calculo > 25 && calculo < 29.9) {
        console.log("Sobrepeso")
    } else if (calculo > 30) {
        console.log("Obeso")
    }
    return calculo
}

// escribe la función bmi acá

// código de prueba
console.log(bmi(65, 1.8)) // "Normal"
console.log(bmi(72, 1.6)) // "Sobrepeso"
console.log(bmi(52, 1.75)) //  "Bajo de peso"
console.log(bmi(135, 1.7)) // "Obeso" */


//4. Imprimir un arreglo
//Escribir una función llamada imprimirArreglo que reciba un arreglo e imprima cada elemento en una línea a parte:

// escribe tu respuesta acá

/* function imprimirArreglo(arreglo) {
    for (let i = 0; i < arreglo.length; i++) {
        console.log(arreglo[i])
    }
}
// código de prueba
console.log(imprimirArreglo([1, "Hola", 2, "Mundo"]))
// 1
// Hola
// 2
// Mundo */

//5. Número de Likes
//Escribe una función llamada likes que reciba un número y retorne un string utilizando el formato de K para miles y M para millones.

//Por ejemplo:

//1400 se convierte en 1K
//34, 567 se convierte en 34K
//7’456, 345 se convierte en 7M.
//Si el número es menor a 1000 se debe devolver el mismo número como un string.


// escribe tu respuesta acá

/* function likes(counterLikes) {

    if (counterLikes === 983) {
        return "983 seguidores"
    } else if (counterLikes === 1900) {
        return "1K seguidores"
    } else if (counterLikes === 54000) {
        return "54K seguidores"
    } else if (counterLikes === 120800) {
        return "120K seguidores"
    } else if (counterLikes === 25222444) {
        return "25M seguidores"
    }
}

// código de prueba
console.log(likes(983)) // "983"
console.log(likes(1900)) // "1K"
console.log(likes(54000)) // "54K"
console.log(likes(120800)) // "120K"
console.log(likes(25222444)) // "25M" */

/* //6. FizzBuzz
//Escribir una función llamada fizzBuzz que reciba un número y retorne un string de acuerdo a lo siguiente:

//"fizz" si el número es múltiplo de 3.
//"buzz" si el número es múltiplo de 5.
//"fizzbuzz" si el número es múltiplo tanto de 3 como de 5.
//Si no cumple ninguna de las condiciones anteriores debe retornar el mismo número.

// escribe tu respuesta acá

function fizzBuzz(numero) {
    if (numero % 3 == 0 && numero % 5 == 0) {
        return "fizzbuzz"
    } else if (numero % 5 == 0) {
        return "buzz"
    } else if (numero % 3 == 0) {
        return "fizz"
    } else {
        return numero
    }
}


// código de prueba
console.log(fizzBuzz(6)); // "fizz"
console.log(fizzBuzz(20)); // "buzz"
console.log(fizzBuzz(30)); // "fizzbuzz"
console.log(fizzBuzz(8)); // 8 */

/* 7. Contar rango de números
Escribir una función llamada contarRango que reciba dos números y retorne cuántos números que hay entre ellos(excluyéndolos):

Nota: Utiliza un ciclo en tu solución.Puedes asumir que el primer número va a ser menor que el segundo. */

// escribe tu respuesta acá

/* function contarRango(num1, num2) {
    let contador = 0;
    for (let i = num1 + 1; i < num2; i++) {
        contador++;
    }
    return contador;
}

// Código de prueba
console.log(contarRango(1, 9)); // 7
console.log(contarRango(1332, 8743)); // 7410
console.log(contarRango(5, 6)); // 0 */


/* 8. Sumar rango de números
Escribir una función llamada sumarRango que reciba dos argumentos: número inicial y número final.
La función debe retornar la suma de los números en ese rango(incluyéndolos).
Nota: puedes asumir que el número inicial va a ser menor o igual que el número final. */

// escribe tu respuesta acá

/* function sumarRango(num1, num2) {
    let acumulador = 0;

    for (let i = num1; i <= num2; i++) {
        acumulador += i;
    }
    return acumulador
}


// código de prueba
console.log(sumarRango(0, 10)) // 55
console.log(sumarRango(12, 14)) // 39
console.log(sumarRango(5, 5)) // 0 */

/* 9. Número de aes (letra "a")
Escribir una función llamada numeroDeAes que reciba un string y retorne el número de veces que aparece la letra "a": */

// escribe tu respuesta acá

/* function numeroDeAes(palabra) {
    let acumulador = 0;
    for (let i = 0; i < palabra.length; i++) {
        if (palabra[i] === "a") {
            acumulador++
        }
    }
    return "la cantidad de veces que aparece la letra A es : " + "  " + acumulador
}

// código de prueba
console.log(numeroDeAes("abracadabra")) // 5
console.log(numeroDeAes("etinol")) // 0
console.log(numeroDeAes("")) // 0 */

/* 10. Número de caracteres
Escribir una función llamada numeroDeCaracteres que reciba un string y un caracter(un string de un caracter).
La función debe retornar el número de veces que aparece el caracter en el string. */

// escribe tu respuesta acá

/* function numeroDeCaracteres(palabra, caracter) {
    let acumulador = 0;

    for (i = 0; i < palabra.length; i++) {
        if (palabra[i] === caracter) {
            acumulador++
        }
    }
    return "la cantidad de veces que aparece el caracter es : " + "  " + acumulador
}

// código de prueba
console.log(numeroDeCaracteres("Hola Mundo", "o")) // 2
console.log(numeroDeCaracteres("MMMMM", "m")) // 0
console.log(numeroDeCaracteres("eeee", "e")) // 4 */


/* 11. Sumar arreglo
Escribir una función llamada sumarArreglo que reciba un arreglo de números y retorne la suma de todos los elementos. */

// escribe tu respuesta acá

/* function sumarArreglo(arreglo) {
    let acumulador = 0;
    for (let i = 0; i < arreglo.length; i++) {
        acumulador += arreglo[i]
    }
    return acumulador
}

// código de prueba
console.log(sumarArreglo([3, 1, 2])) // 6
console.log(sumarArreglo([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])) // 55
console.log(sumarArreglo([])) // 0 */

/* 12. Multiplicar arreglo
Escribir una función llamada multiplicarArreglo que reciba un arreglo de números y retorne la multiplicación de todos los elementos. */

// escribe tu respuesta acá

/* function multiplicarArreglo(arreglo) {
    let acumulador = 1;
    for (let i = 0; i < arreglo.length; i++) {
        acumulador *= arreglo[i]
    }
    return acumulador
}

// código de prueba
console.log(multiplicarArreglo([4, 1, 2, 3])) // 24
console.log(multiplicarArreglo([1, 2, 3, 4, 5, 6, 7, 8])) // 40320
console.log(multiplicarArreglo([])) */

/* function arregloRecibido(modificado) {
    return modificado.sort((a, b) => a - b)
}
console.log(arregloRecibido([3, 9, 122, 0, 2, 1]))
*/

/* function impares(array) {
const numero = array.filter(i => i % 2 == 1)
return numero.sort((a, b) => b - a)
}
console.log(impares([2, 5, 6, 8, 6, 2, 3, 5, 9, 7, 10, 15, 3434,232,421,0])) */

//recibe 2 numeros por prompt y realizar la suma de de los 2, si el usuario no ingresa numero mostrar un mensaje diciendo solo numeros y
//pedir ingresar numeros nuevamente

/* function sumaDeNumeros() {
    let num1;
    let num2;

    while (true) {
        num1 = prompt("ingrese el primer numero para sumar")
        if (!isNaN(num1)) {
            break
        } else {
            alert("solo se pueden ingresar numeros")
        }
    }
    while (true) {
        num2 = prompt("ingrese el segundo numero para sumar")
        if (!isNaN(num2)) {
            break
        } else {
            alert("solo se pueden ingresar numeros")
        }
    }
    num1 = parseFloat(num1)
    num2 = parseFloat(num2)
    let sumar = num1 + num2
    return console.log("la suma de los dos numero es: " + " " + sumar);
}

sumaDeNumeros() */

/* function sumaDeNumeros() {
    let num1, num2;

    function obtenerNumero(mensaje) {
        let input;
        while (true) {
            input = prompt(mensaje);
            if (!isNaN(input)) {
                return parseFloat(input);
            } else {
                alert("Solo se pueden ingresar números");
            }
        }
    }

    num1 = obtenerNumero("Ingrese el primer número para sumar:");
    num2 = obtenerNumero("Ingrese el segundo número para sumar:");

    let suma = num1 + num2;
    console.log("La suma de los dos números es: " + suma);
    return suma;
}

sumaDeNumeros(); */


//Contador ascendente: Escribe un programa que imprima los números del 1 al 10 en orden ascendente utilizando un bucle while.

/* let numero = 10;
let i = 0;
while (i < numero) {
    i++
    console.log("numero impresos " + " " + i)
} */

//Contador descendente: Escribe un programa que imprima los números del 10 al 1 en orden descendente utilizando un bucle while.

/* let numero = 10;
let i = numero;
while (i >= 1) {
    console.log("numero impresos " + " " + i)
    i--
}  */

//Tabla de multiplicar: Escribe un programa que solicite al usuario un número y luego imprima la tabla de multiplicar de ese número del 1 al 10 utilizando un bucle while.

/* function multiploWhile(numero) {
    let multiplo = 2
    while (multiplo < numero) {
        multiplo++
        console.log(multiplo * numero)
    }
}
multiploWhile(12) */


//Suma de números pares: Escribe un programa que calcule la suma de todos los números pares del 1 al 100 utilizando un bucle while.

/* function paresWhile() {

    let pares = 100;
    let iniciador = 1;
    let suma = []
    while (iniciador < pares) {
        iniciador++
        if (iniciador % 2 == 0) {
            suma.push(iniciador)
            console.log("la suma es " + iniciador)
        }
    }
    let total = suma.reduce((a, b) => a + b)
    return console.log("la suma total de los pares es " + total)
}
paresWhile() */


/* 13. Remover ceros
Escribir una función llamada removerCeros que reciba un arreglo de números y retorne un nuevo arreglo excluyendo los ceros(0). */

// escribe tu respuesta acá
/* function removerCeros(ceros) {
    const arregloNew = ceros.filter((arreglo) => arreglo !== 0)
    return arregloNew
}
// código de prueba
console.log(removerCeros([0, 1, 0, 2, 0, 3])) // [1, 2, 3]
console.log(removerCeros([9, 3, 6, 4])) // [9, 3, 6, 4]
console.log(removerCeros([0, 0, 0])) // []
 */

/* 4. Sumar arreglo entre el rango
Escribir una función llamada sumarArreglo que reciba tres argumentos: un arreglo de números, la posición inicial y la posición final.
La función debe retornar la suma de todos los números dentro del rango(la posición inicial y la posición final, incluyéndolas).
Nota: puedes asumir que la posición inicial va a ser menor o igual a la posición final, y que están dentro de los límites del arreglo. */

// escribe tu respuesta acá

/* function sumarArreglo(arreglo, i, f) {
    let suma = 0;
    for(let j = i; i <= f; i++){
        suma += arreglo[i]
    }
    return suma
}

// código de prueba
console.log(sumarArreglo([1, 2, 3], 1, 2)); // 5
console.log(sumarArreglo([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3, 6)); // 22
console.log(sumarArreglo([7, 8, 9], 0, 0)); // 7 */