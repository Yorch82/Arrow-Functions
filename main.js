// 1. Funciones flecha

// function saludar() {
//     return "Hola";
//   }

const saludar = () => 'Hola'; 
console.log(saludar());

// function division(a,b) {
//     return a / b;
// }

const division = (a,b) => a / b;
console.log(division(4,2));

// function miNombre(nombre) {
//     return `Mi nombre es ${nombre}`;
// }
  
const miNombre = (nombre) => `Mi nombre es ${nombre}`;
console.log(miNombre('Jorge'));

// function test2() {
//   console.log("Función test 2 ejecutada.");
// }
// function test1(callback) {
//   callback();
// }

const test2 = () => console.log ("Función test 2 ejecutada.");

const test1 = (callback) => callback();

console.log(test1(test2))


// 2. Foreach

let gente = [
    {
      nombre: "Jamiro",
      edad: 45,
    },
    {
      nombre: "Juan",
      edad: 35,
    },
    {
      nombre: "Paco",
      edad: 34,
    },
    {
      nombre: "Pepe",
      edad: 14,
    },
    {
      nombre: "Pilar",
      edad: 24,
    },
    {
      nombre: "Laura",
      edad: 24,
    },
    {
      nombre: "Jenny",
      edad: 10,
    },
  ];


// Crea un array con la gente mayor de 25 años y muéstralo por consola.

let mayoresVeinticinco = [];
gente.forEach ((persona) => {    
    if (persona.edad > 25){        
        mayoresVeinticinco.push(persona)
    }    
});
console.log(mayoresVeinticinco)

// Crea un array con la gente que empieza por J.

let empieceJota = [];
gente.forEach ((persona) => {

    if (persona.nombre[0] == 'J'){        
        empieceJota.push(persona)
    }    
});
console.log(empieceJota)

// 3. Map

// Dado el siguiente array, crear otro que sea el resultado de elevar cada número a si mismo:

const numbers = [ 4, 5, 6, 7, 8, 9, 10];
// Resultado esperado
// [256, 3125, 46656, 823543, 16777216, 387420489, 10000000000]

const expNumbers = numbers.map ( (expNum) => {
    return expNum **= expNum;    
})
console.log(expNumbers)

// Dado el siguiente array, generar un segundo array que consiga generar de salida el resultado esperado:

const foodList = ["Pizza", "Ramen", "Paella", "Entrecot"];

//Resultado esperado
/* [
    'Como soy de Italia, amo comer Pizza',
    'Como soy de Japón, amo comer Ramen',
    'Como soy de Valencia, amo comer Paella',
    'Aunque no como carne, el Entrecot es sabroso'
   ]
*/
const countryList = ["Italia", "Japón", "Valencia"]
const comidaTexto = foodList.map ( (comida) => {
    if (comida == "Pizza") {
        return `Como soy de Italia, amo comer ${comida}`
    } else if (comida == "Ramen"){
        return `Como soy de Japón, amo comer ${comida}`
    } else if (comida == "Paella") {
        return `Como soy de Valencia, amo comer ${comida}`
    } else {
        return 'Aunque no como carne, el Entrecot es sabroso'
    }
   
})
console.log(comidaTexto)


// 4. Filter

// Crea un segundo array que devuelva los impares

const numberos = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let impares = numberos.filter( num => num % 2 != 0)
console.log(impares)

// Dado el siguiente array, genera un segundo array que filtre los platos veganos y saque una sentencia como la del ejemplo:

const foodLista = [
    {
      name: 'Tempeh',
      isVeggie: true
    },
    {
      name: 'Cheesbacon burguer',
      isVeggie: false
    },
    {
      name: 'Tofu burguer',
      isVeggie: true
    },
    {
      name: 'Entrecot',
      isVeggie: false
    }
  ];

  /* [
      'Que rico Tempeh me voy a comer!',
      'Que rica Tofu burguer me voy a comer!'
     ]
  */

// const platosVeganos = foodLista.filter((vegaPlato) =>)


// 5. Reduce

// Dado el siguiente array, obtén la multiplicación de todos los elementos del array:

const numeros = [39, 2, 4, 25, 62];
// Salida--> 483600

const sumNum = numeros.reduce((a, b) => a * b);
console.log(sumNum)
