// Carregar dados
let results = [
    
    {
        "quantil": 1.088,
        "genero": 'Mulher',
        "raça": 'Parda'
    },

    {
        "quantil": 1.025,
        "genero": 'Mulher',
        "raça": 'Preta'
    },

    {
        "quantil": 0,
        "genero": 'Mulher',
        "raça": 'Amarelas'
    },

    {
        "quantil": 4.3,
        "genero": 'Mulher',
        "raça": 'Brancas'
    },

    {
        "quantil": 0.14,
        "genero": 'Mulher',
        "raça": 'Indígena'
    },

    {
        "quantil": 3.8,
        "genero": 'Homem',
        "raça": 'Parda'
    },

    {
        "quantil": 5.8,
        "genero": "Homem",
        "raça": "Preta"
    },

    {
        "quantil": 6,
        "genero": 'Homem',
        "raça": 'Amarela'
    },

    {
        "quantil": 6.57,
        "genero": 'Homem',
        "raça": 'Branca'
    },

    {
        "quantil": 0,
        "genero": 'Homem',
        "raça": 'Indígena'
    }


  ]

let optionGender = document.querySelector( '.option-01 > select' )

let optionRace = document.querySelector( '.option-02 > select' )

let output = document.querySelector( '#info-grid > .info > .result' )


function calculate() {

    for (let result of results) {
    
        if ( optionGender == result.genero('Mulher') && optionRace == result.raça('Parda')) {

        let quantil = result.quantil
        show( quantil )

        }

    }
    
}

function show ( quantil ) {

    output.textContent = quantil + '%'

}