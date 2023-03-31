

const key = "ede0c823a7d1358cca7ffb29a2a7811a"

function buttonClick() {
    const cidade = document.querySelector('.input-cidade').value
    buscarCidade(cidade)
}


async function buscarCidade(cidade)  {
    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then( response => response.json() )
    
    returnData(dados)
}


function returnData(dados) {
    document.querySelector('.cidade').innerHTML = "Tempo em " + dados.name
    document.querySelector('#graus').innerHTML = Math.floor(dados.main.temp) +"°C"
    document.querySelector('#nuvens').innerHTML = dados.weather[0].description
    document.querySelector('#umidade').innerHTML = "Umidade " + dados.main.humidity + "%"
}