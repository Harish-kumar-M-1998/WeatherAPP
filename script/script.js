
let input = document.querySelector('.city-input');
let weatherData = document.querySelector('.weather-data');
let btn = document.querySelector('.btn-search');
btn.addEventListener('click', () => {
    displayWeather();

})



function displayWeather() {
    let place = input.value;
    console.log(place);

    let api = "https://api.openweathermap.org/data/2.5/find?q=" + place + "&units=metric&appid=850cac4c51c8a61b959dfe0593e8cb07";
    console.log(api);

    fetch(api)
        .then(response => {
            data = response.json();
            return data;
        })
        .then(data => {
            console.log(data);

            //access data from the fetched object 
            let temp = data.list[0].main.feels_like;
            let weather = data.list[0].weather[0].description;
            let windSpeed = data.list[0].wind.speed;
            let maxTemp = data.list[0].main.temp_max;
            let minTemp = data.list[0].main.temp_min;
            let humidity = data.list[0].main.humidity;
            let pressure = data.list[0].main.pressure;

            //display weather
            document.querySelector('.temp').textContent = temp;
            document.querySelector('.weather').textContent = weather;
            document.querySelector('.wind-speed').textContent = windSpeed + " kph";
            document.querySelector('.max-temp').textContent = maxTemp;
            document.querySelector('.min-temp').textContent = minTemp;
            document.querySelector('.humidity').textContent = humidity + " %";
            document.querySelector('.pressure').textContent = pressure + " Pa";
            document.querySelector('.place').textContent = place;

            //change icon for different weathers
            if (weather == 'moderate rain')
                weatherIcon.setAttribute('src', './images/moderate.png');
            else if (weather == 'haze')
                weatherIcon.setAttribute('src', './images/haze.png');
            else if (weather == 'scattered clouds')
                weatherIcon.setAttribute('src', './images/scattered.png');
            else if (weather == 'light rain')
                weatherIcon.setAttribute('src', './images/light.png');
            else if (weather == 'overcast clouds')
                weatherIcon.setAttribute('src', './images/overcast.png');




        })
        .catch(error => {
            console.log(error);
            alert('please enter a valid place.');
        })


    //daily forecast



}
let weatherIcon = document.querySelector('.weather-icon');

//add today's date
let date = document.querySelector('.date');
let today = new Date();
const options = { year: 'numeric', month: 'long', day: 'numeric' }
date.textContent = today.toLocaleDateString('en-US', options);



//daily forcast
