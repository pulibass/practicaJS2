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
    let frase = prompt("ingrese una frase que contenga vocales")
    let vocales = [];

    for (let i = 0; i < frase.length; i++) {
        if (frase[i] === "a" || frase[i] === "e" || frase[i] === "i" || frase[i] === "o" || frase[i] === "u") {
            vocales.push(frase[i])
            console.log(frase[i])

        }
        return document.write("La cantidad de vocales en la frase son " + vocales.length + ". Las vocales son: " + vocales.join(", ")); //aca estaba el erro
    }
}
fraseVocal() */

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


