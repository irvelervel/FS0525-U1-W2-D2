const studenti = [
  {
    nome: 'Luca',
    eta: 21,
    corsi: ['Matematica', 'Fisica', 'Programmazione'],
    indirizzo: {
      citta: 'Milano',
      cap: '20100', // studenti[0].indirizzo.cap
      via: 'Via Roma 10',
    },
    esami: [
      { materia: 'Matematica', voto: 28 },
      { materia: 'Fisica', voto: 30 },
      { materia: 'Programmazione', voto: 27 },
    ],
  },
  {
    nome: 'Giulia',
    eta: 23,
    corsi: ['Biologia', 'Chimica', 'Statistica'],
    indirizzo: {
      citta: 'Torino',
      cap: '10100',
      via: 'Corso Francia 45',
    },
    esami: [
      { materia: 'Biologia', voto: 30 },
      { materia: 'Chimica', voto: 26 },
      { materia: 'Statistica', voto: 29 },
    ],
  },
  {
    nome: 'Marco',
    eta: 22, // studenti[2].eta
    corsi: ['Economia', 'Marketing'],
    indirizzo: {
      citta: 'Roma',
      cap: '00100',
      via: 'Via Appia 88',
    },
    esami: [
      { materia: 'Economia', voto: 25 },
      { materia: 'Marketing', voto: 28 },
    ],
  },
]

console.log(studenti[0].nome) // 'Luca'
// studenti[1].corsi[1]
// studenti[2].esami[1].voto -> 28

// aggiungo il corso fullstack a Marco
studenti[2].corsi.push('fullstack')
