// un ARRAY è un'altra struttura dati in grado di memorizzare sotto un unico
// nome ed una unica variabile una serie potenzialemente INFINITA di dati

// si differenza dagli oggetti in quanto negli oggetti le informazioni sono
// memorizzate sotto forma di COPPIE CHIAVE:VALORE, mentre negli ARRAY
// sono memorizzati solamente i VALORI sotto forma di lista, di elenco

// un array si utilizza per memorizzare informazioni dello stesso tipo, nomi,
// valutazioni, oggetti etc.

// il nostro primo array :)
const names = ['stefano', 'fabio', 'rossella', 'francesco']

const ages = [20, 18, 19, 22, 35, 40]

const mixed = ['Leo', true, 2, 'Stefano'] // <-- poco usati

console.log('NAMES', names)
// ogni array in JS ha una LENGTH (lunghezza), che è sempre PARI AL N. DEGLI ELEMENTI

// gli array in JS sono "ZERO-INDEXED BASED"
// l'INDICE di un elemento equivale alla sua POSIZIONE

// è possibile recuperare un elemento in un array grazie alla sua POSIZIONE (INDICE)
names[0] // 'stefano'
names[1] // 'fabio
names[2] // 'rossella'
names[3] // 'francesco'
names[4] // undefined
console.log(names[2])

// il primo elemento in un array avrà SEMPRE posizione 0
// l'ultimo elemento in un array avrà SEMPRE posizione lunghezza-1
console.log(names.length) // 4

names[0] // sempre il primo
names[names.length - 1] // sempre l'ultimo

// INTERAGIAMO CON GLI ARRAY
// aggiungiamo un elemento:
// IN CODA
names.push('giada') // giada ora è l'elemento di indice (posizione) 4
// IN TESTA
names.unshift('matteo') // ora matteo ha indice 0
// IN MEZZO
names.splice(4, 0, 'riccardo') // dopo la posizione 4, elimino 0, aggiungo riccardo
console.log('NAMES ORA', names)

// eliminare un elemento
// IN CODA
names.pop() // elimina giada
// IN CIMA
names.shift() // elimina matteo
// IN MEZZO
names.splice(2, 1) // dopo la posizione 2, elimina 1

console.log('NAMES ALLA FINE', names)
