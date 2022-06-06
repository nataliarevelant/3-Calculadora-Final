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

// Abrigar o '.option-01 > select' na variável 'optionGender'
let optionGender = document.querySelector( '.option-01 > select' )

// Abrigar o '.option-02 > select' na variável 'optionRace'
let optionRace = document.querySelector( '.option-02 > select' )

// Abrigar o '#info-grid > .info > .result' na variável 'output'
let output = document.querySelector( '#info-grid > .info > .result' )

// Ouvir o evento de mudança para disparar a funcão “calculate”
optionGender.addEventListener( 'change', calculate )
optionRace.addEventListener( 'change', calculate )

// Declarar o que acontece dentro do evento 'calculate'
function calculate() {

    for (let result of results) {

        // comparar o valor do seletor abrigado na variável com as propriedades dos dados.
        if ( optionGender.value == result.genero && optionRace.value == result.raça ) {

        // Abrigar o 'quantil' de cada 'result' dentro da variável quantil.
        let quantil = result.quantil
        show( quantil )

        }

    }
    
}

// Declarar o que acontece dentro do evento 'show'
function show ( quantil ) {
    //Mudar o texto do output para o quantil do result correspondente somado a string '%'
    output.textContent = quantil + '%'

}