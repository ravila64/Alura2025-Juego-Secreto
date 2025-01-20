// 1.	Crea una lista vacía llamada "listaGenerica".
let listaGenerica=[];
console.log(listaGenerica);

// 2.	Crea una lista de lenguajes de programación llamada "lenguagesDeProgramacion" 
// con los siguientes elementos: 'JavaScript', 'C', 'C++', 'Kotlin' y 'Python'.
let lenguajesDeProgramacion = ['JavaScript', 'C', 'C++', 'Kotlin','Python'];
console.log(lenguajesDeProgramacion);

// 3.	Agrega a la lista "lenguagesDeProgramacion los siguientes elementos: 'Java', 'Ruby' y 'GoLang'.
lenguajesDeProgramacion.push('Java', 'Ruby','GoLang');
console.log(lenguajesDeProgramacion);

//4.	Crea una función que muestre en la consola todos los elementos de 
// la lista "lenguagesDeProgramacion.

function mostrarListaLenguajes( languages ){
    for (let i = 0; i < languages.length; i++) {
        const element = languages[i];
        console.log("lenguajes ",i+1,element);
    }
}
mostrarListaLenguajes (lenguajesDeProgramacion);
// 5.	Crea una función que muestre en la consola todos los elementos de la 
// lista "lenguagesDeProgramacion en orden inverso.

console.log("lista inversa");
function listaInversa(languages) {
    for (let i = languages.length-1; i>=0 ; i--) {
        const element = languages[i];
        console.log("lenguajes ",i+1,element);
    }
}
listaInversa(lenguajesDeProgramacion);

// 6.	Crea una función que calcule el promedio de los elementos 
// en una lista de números.

let lista=[10,20,300,40,50,-1,65,90,-10];
function promedio(lista) {
    let suma = 0;
    for (let i = 0; i < lista.length; i++) {
        suma += lista[i];
    }
    return (suma/lista.length).toFixed(2);
}
console.log("Promedio de la lista de numeros ",promedio(lista));

//7.	Crea una función que muestre en la consola el número más grande 
// y el número más pequeño en una lista.
let mayor = 0;
let menor= 99999999999;

function mayor_menor(lista) {
    for (let i = 0; i < lista.length; i++) {
        if(lista[i] > mayor){
            mayor = lista[i];
        }
        if(lista[i] < menor){
            menor = lista[i];
        }
    }
    console.log("Maximo valor en lista ", mayor);
    console.log("Minimo valor en lista ", menor);
}
mayor_menor(lista);

// 8.	Crea una función que devuelva la suma de todos los elementos en una lista.
function suma(lista) {
 let suma=0;
 for (let i = 0; i < lista.length; i++) {
      suma += lista[i];
  }   
  return suma;
}

console.log("sumaoria de la lista ",suma(lista));

// 9.	Crea una función que devuelva la posición en la lista 
// donde se encuentra un elemento pasado como parámetro, o -1 si no existe en la lista.

function buscarNumero(lista, numero){
 let pos=-1;
 for (let i = 0; i < lista.length; i++) {
    if (numero==lista[i]){
        pos=i;
        break;
    }
  }
  return pos;
}
let num=-10;
let estaNumero = buscarNumero(lista, num);
console.log("Lista :", lista);
console.log("El numero ",num, estaNumero !=-1 ? " Esta en posicion "+estaNumero : "No existe numero en la lista..." );

// 10.	Crea una función que reciba dos listas de números del 
// mismo tamaño y devuelva una nueva lista con la suma de los elementos uno a uno.

let lista1=[10,20,30,40,50];
let lista2=[11,22,33,44,55];
function suma2Listas(lista1,lista2){
    let suma=0;
    for (let i = 0; i < lista1.length; i++) {
        suma = suma + lista1[i] + lista2[i];
    }
    return suma;
}
console.log("Lista 1 :", lista1);
console.log("Lista 2 :", lista2);
console.log("Suma de las 2 lstas ", suma2Listas(lista1,lista2));

// 11.	Crea una función que reciba una lista de números y 
// devuelva una nueva lista con el cuadrado de cada número.
// tome aqui lista1

function cuadradoListas(lista1) {
    let lista3=[];
    for (let j = 0; j < lista1.length; j++) {
        const element = lista1[j]*lista1[j];
        lista3.push(element);        
    }
    return lista3;
}

console.log("Lista original ", lista1);
console.log("Lista al cuadrado, opcion 1 ", cuadradoListas(lista1));
let lista4 = cuadradoListas(lista1);
console.log("Lista al cuadrado, opcion 2 ", lista4);
