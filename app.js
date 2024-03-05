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

/* function numeroMayor() {
    let num1 = parseInt(prompt("ingrese el primer numero"))
    let num2 = parseInt(prompt("ingrese el segundo numero"))

    if (num1 > num2) {
        document.write("el numero mayor es " + num1)
    }
}

numeroMayor() */

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




