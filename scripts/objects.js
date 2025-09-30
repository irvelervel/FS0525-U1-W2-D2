// GLI OGGETTI IN JS
// Un oggetto è un'entità complessa in grado di raccogliere sotto un unico
// "nome" una infinita serie di PROPRIETÀ, che ne caratterizzaranno i contenuti.
// Un oggetto viene particolarmente comodo quando si vuole "modellare" a un'unica
// entità contenente tante caratteristiche.

// Un oggetto è quindi una singola entità assegnabile ad una singola variabile
// il cui contenuto è definito da una serie di PROPRIETÀ. Una proprietà
// è una COPPIA chiave:valore.

const myCat = {
  // qui dentro ora andrò a elencare tutte le PROPRIETÀ del mio gatto
  scratches: true,
  name: 'Leo',
  breed: 'Europeo',
  purrs: true,
  age: 5,
  'fur-color': 'orange',
}

console.log('CONSOLE LOG OGGETTO INTERO', myCat)
// N.B: l'ordine delle proprietà non ha assolutamente rilevanza

// per esplorare le proprietà di un oggetto, la tecnica principale
// si chiama "DOT NOTATION"
console.log(
  'Il mio gatto si chiama ' + myCat.name + ' e ha ' + myCat.age + ' anni.'
)

// in alternativa potete recuperare i valori da un oggetto anche con la
// cosiddetta "SQUARE BRACKETS NOTATION"

console.log(
  'Il mio gatto si chiama ' + myCat['name'] + ' e ha ' + myCat['age'] + ' anni.'
)

// COME MODIFICARE I VALORI DI UN OGGETTO
myCat.age = 6
console.log(myCat)

// ma come è possibile che si possano modificare le proprietà se myCat era stata assegnata ad una "const"?
// l'assegnazione ad una const serve solo a prevenire che quella variabile possa
// venire ri-assegnata ad un nuovo valore, finchè il valore di myCat rimane l'oggetto noi siamo liberi di manipolare quell'oggetto come desideriamo!
// myCat = 'Stefano' // <-- NON SI PUÒ FARE

// ELIMINARE UNA PROPRIETÀ
delete myCat.purrs // ho ELIMINATO la proprietà "purrs" di myCat
// l'operatore "delete" serve SOLAMENTE ad eliminare proprietà negli oggetti

// AGGIUNGERE PROPRIETÀ NUOVE
myCat.eatsALot = true

// ... :D
let a = 5
let b = a
b = 10
console.log(a) // ??? 5

// delle variabili con valori primitivi vengono gestite in memoria in modo
// INDIPENDENTE

const objA = {
  value: 5,
}

// const objB = objA // <-- NON CREA UNA COPIA!
// const objB = Object.assign({}, objA) // <-- QUESTA È UNA VERA COPIA
const objB = { ...objA } // <-- QUESTA È UNA VERA COPIA
// facendo così JS NON CREA UNA COPIA! perchè il valore era un oggetto
// e JS cerca di ottimizzare puntando alla stessa allocazione di memoria

objB.value = 10
console.log(objA.value) // ??? 10 se avete usato l'=, 5 se avete clonato l'oggetto
// come si deve
