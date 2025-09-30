// verifichiamo con un semplice console.log() che il foglio venga caricato
// correttamente!
console.log('FOGLIO JS CARICATO!')

// RECAP
// -VARIABILI-
let cat = 'Leo'
let age = 18
let canDrive = true
let empty = null

cat = 'Thor'
age = 20
canDrive = false

const gameConsole = 'PS5'
// gameConsole = 'XBOX' // ERRORE! DEVO COMMENTARLO

let cat2
let cat3 = undefined

// + - * / % (OP.MATEMATICI)
// + può anche essere utilizzato per CONCATENARE stringhe
let greetings = 'Buongiorno'
let people = 'FS0525'

console.log(greetings + ' ' + people + '!')

// < <= > >= === !== (OP.COMPARAZIONE)
console.log(5 < 10) // true
console.log(10 === 11) // false

// && || ! (OP.LOGICI)
console.log('OPERATORE NOT', !(15 > 16)) // true

// && e || (AND e OR) servono per collegare insieme diverse affermazioni
// per es. due affermazione collegate da un && (AND) daranno come risultato TRUE
// SOLAMENTE se entrambe sono TRUE
// true && true -> true
// true && false -> false
// false && true -> false
// false && false -> false

// invece due affermazioni collegate da un || (OR) daranno come risultato TRUE
// anche se solo UNA delle due affermazioni è true
// true || true -> true
// true || false -> true
// false || true -> true
// false || false -> false

// TERNARY OPERATOR ("operatore ternario")
// immaginate di dover dare un valore ad una variabile a seguito di
// un controllo, una condizione

let myAge = 19
let myAge2 = 15

// youCanEnter sarà una variabile con un valore BOOLEANO
// il valore di youCanEnter va definito in base al valore di myAge
let youCanEnter = myAge >= 18 ? true : false
// dichiarazione variabile = condizione ? valore se sì : valore se no

let iCanDriveCars = false

let drivingLicenseType = iCanDriveCars === true ? 'B' : 'A'
// dichiarazione variabile = condizione ? valore se sì : valore se no

console.log(youCanEnter) // true
