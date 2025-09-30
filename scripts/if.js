// alle volte è necessario condizionare il flusso di operazioni nel nostro codice
// che, altrimenti, proseguirebbe ininterrotto dalla riga 1 alla riga n

// per inserire dei blocchi di codice che verranno eseguiti solamente al verificarsi
// di una condizione, utilizziamo il costrutto "if"

const myName = 'Maria'

// voglio dare il benvenuto se l'utente si chiama Stefano, mentre voglio
// negare l'accesso all'utente che si chiama Alessandro

// COSTRUTTO IF
// if(condizione){ blocco di istruzioni }

if (myName === 'Stefano' || myName === 'Fabio') {
  // questo blocco di codice (da 0 a infinite righe)
  // verrà eseguito solo se la CONDIZIONE specificata dentro le TONDE
  // viene valutata come TRUE
  console.log('Benvenuto!')
}

if (myName === 'Alessandro') {
  console.log('Accesso negato')
}

// --------------

const myAge = 20

if (myAge >= 18) {
  // se la condizione torna TRUE
  console.log('Puoi entrare in discoteca')
} else {
  // se la condizione torna FALSE
  console.log('Sei troppo giovane! Non puoi entrare')
}

// ----------------
// vado al mare se c'è bel tempo e ho finito i compiti ( && )

const belTempo = true
const finitoICompiti = false

if (belTempo === true && finitoICompiti === true) {
  console.log('VADO AL MARE')
} else {
  console.log('NON VADO AL MARE')
}
