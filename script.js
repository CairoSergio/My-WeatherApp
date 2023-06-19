const LocalData = document.getElementById("data")
const form = document.getElementById("Weatherform")
const cart = document.getElementById("WeatherCart")
const CityName = document.getElementById("City")
const CityInput = document.getElementById("input")
const Page404 = document.getElementById("404")
const butao = document.getElementById("button")
const temperatura = document.getElementById("temperatura")

const Months = [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro'
]

const data = new Date()
const fullDate = `${data.getDate().toString().padStart(0,2)} de ${ Months[data.getMonth() +1 ]} de ${data.getFullYear()}`


function OpenCart(event){
    butao.innerHTML = "Procurando..."
    useWeatherData(CityInput.value).then((response)=>{
        const CartResponse = `
        <div class="Weather-View">
        <button onclick="CloseCart()" class="Back">
            Voltar
        </button>
        <div class="Weather-Text">
            <div class="Text-side">
                <h1 id="temperatura">
                    ${response.temperature.toFixed(0)}°C
                </h1>
                <h1>${response.description}</h1>
            </div>
            <img class="Image" src="${response.image}" alt="tempimg"/>
        </div>
        <div class="City-View">
            <h1>Cidade: </h1>
            <h1 id="City">${CityInput.value}, ${response.coutry}</h1>
        </div>
        <hr>
        <div class="Propriedades">
            <h1>
                UMIDADE
            </h1>
            <h1 id="umidade">
                ${response.humidity}%
            </h1>
        </div>
        <hr>
        <div class="Propriedades">
            <h1>
                SENSAÇÃO
            </h1>
            <h1 id="sensasao">
                ${response.feelsLike.toFixed(0)}°C
            </h1>
        </div>
        <hr>
        <div class="Propriedades">
            <h1>
                PRESSÃO
            </h1>
            <h1 id="pressao">
                ${response.pressure} hPa
            </h1>
        </div>
        <hr>
        <div class="Propriedades">
            <h1>
                VENTO
            </h1>
            <h1 id="vento">
                ${response.windSpeed.toFixed(2)} m/s
            </h1>
        </div>
        <hr>
        <h1 id="data" class="data">
        ${fullDate}
        </h1>
    </div>
        `
        cart.innerHTML = CartResponse;
        form.classList.add("invisivel")
        cart.classList.remove("invisivel")
        butao.innerHTML = "Procurar"
    })
    .catch(()=>{
        form.classList.add("invisivel")
        cart.classList.add("invisivel")
        Page404.classList.remove("invisivel")
        butao.innerHTML = "Procurar"
    })
}
function CloseCart(){
    form.classList.remove("invisivel")
    cart.classList.add("invisivel")
    Page404.classList.add("invisivel")
}


const API_KEY = '8506c827cd8a05c14f80fe25e442fc55';
const translations = {
  // English => Portuguese translations
  'clear sky': 'céu limpo',
  'few clouds': 'poucas nuvens',
  'scattered clouds': 'nuvens dispersas',
  'broken clouds': 'nuvens quebradas',
  'shower rain': 'chuva de banho',
  'rain': 'chuva',
  'thunderstorm': 'trovoada',
  'snow': 'neve',
  'mist': 'névoa',
  'overcast clouds' : 'nuvens nubladas',
  'light intensity shower rain': 'chuva de intensidade leve',
  'light snow':'pouca neve',
  'light rain': 'pouca chuva',
  'moderate rain': 'chuva moderada'
};
const images = {
  // Descriptions => Image URLs
  'céu limpo': 'https://firebasestorage.googleapis.com/v0/b/classchat-464e0.appspot.com/o/sunny.png?alt=media&token=7224b0fc-84ff-4925-805b-aad6a45de21f',
  'poucas nuvens': 'https://bit.ly/3Lnv7Ua',
  'nuvens dispersas': 'https://firebasestorage.googleapis.com/v0/b/classchat-464e0.appspot.com/o/cloud.png?alt=media&token=ce4614ea-ea36-40ae-ab57-3d380e173646',
  'nuvens quebradas': 'https://firebasestorage.googleapis.com/v0/b/classchat-464e0.appspot.com/o/sun.png?alt=media&token=296eaf52-a69b-48b6-9f41-246022bb4cf3',
  'chuva de banho': 'https://firebasestorage.googleapis.com/v0/b/classchat-464e0.appspot.com/o/sun.png?alt=media&token=296eaf52-a69b-48b6-9f41-246022bb4cf3',
  'chuva': 'https://firebasestorage.googleapis.com/v0/b/classchat-464e0.appspot.com/o/rain.png?alt=media&token=550add3e-0ed2-42fb-92e6-bb0e222dfa77',
  'trovoada': 'https://firebasestorage.googleapis.com/v0/b/classchat-464e0.appspot.com/o/thunder.png?alt=media&token=229033e3-fd72-4dcf-b26e-70484f101d43',
  'neve': 'https://firebasestorage.googleapis.com/v0/b/classchat-464e0.appspot.com/o/snow.png?alt=media&token=756a9693-2452-49fa-9fd1-6eb877c52fd1',
  'névoa': 'https://firebasestorage.googleapis.com/v0/b/classchat-464e0.appspot.com/o/snow%20(1).png?alt=media&token=c58f2937-d92d-4c57-b783-4cbd66fd077a',
  'nuvens nubladas' : 'https://firebasestorage.googleapis.com/v0/b/classchat-464e0.appspot.com/o/cloud.png?alt=media&token=ce4614ea-ea36-40ae-ab57-3d380e173646',
  'chuva de intensidade leve': 'https://firebasestorage.googleapis.com/v0/b/classchat-464e0.appspot.com/o/rain.png?alt=media&token=550add3e-0ed2-42fb-92e6-bb0e222dfa77',
  'pouca neve': 'https://firebasestorage.googleapis.com/v0/b/classchat-464e0.appspot.com/o/snow.png?alt=media&token=756a9693-2452-49fa-9fd1-6eb877c52fd1',
  'chuva moderada': 'https://firebasestorage.googleapis.com/v0/b/classchat-464e0.appspot.com/o/rain.png?alt=media&token=550add3e-0ed2-42fb-92e6-bb0e222dfa77',
  'pouca chuva': 'https://firebasestorage.googleapis.com/v0/b/classchat-464e0.appspot.com/o/rain.png?alt=media&token=550add3e-0ed2-42fb-92e6-bb0e222dfa77'
};


const useWeatherData = async (city) => {
  // Get current weather data
  const currentUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
  const currentResponse = await fetch(currentUrl)
  .then(function(resp) { return resp.json() }) // Convert data to json
  .then(function(data) {
    return data
  })
  const translatedDescription = translations[currentResponse?.weather[0]?.description] || currentResponse?.weather[0]?.description;
  const image = images[translatedDescription] || '';
  // Extract relevant data from response
  const currentWeather = {
    temperature: currentResponse?.main?.temp,
    humidity: currentResponse?.main?.humidity,
    feelsLike: currentResponse?.main?.feels_like,
    windSpeed: currentResponse?.wind?.speed,
    pressure: currentResponse?.main?.pressure,
    description: translatedDescription,
    image,
    coutry: currentResponse.sys.country,
  };
  return currentWeather;
};