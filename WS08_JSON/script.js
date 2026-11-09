//MUISTA MUUTTAA
const apiKey = "api key";

const button = document.getElementById("fetchWeather");
const output = document.getElementById("weatherdata");
const city = document.getElementById("city");

// Haetaan säätiedot
function fetchWeather(cityName) {

    output.textContent = "Ladataan säätietoja...";

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&mode=xml&appid=${apiKey}`)
        .then(response => {
            if (!response.ok) {
                throw new Error("Virhe säätietojen hakemisessa");
            }

            return response.text();
        })
        .then(data => {

            // Parsitaan XML
            const parser = new DOMParser();
            const xml = parser.parseFromString(data, "text/xml");

            const temperature = xml.querySelector("temperature").getAttribute("value");
            const clouds = xml.querySelector("clouds").getAttribute("name");
            const humidity = xml.querySelector("humidity").getAttribute("value");

            // Näytetään säätiedot
            output.innerHTML = `
                <p>Lämpötila: ${temperature} °C</p>
                <p>Pilvisyys: ${clouds}</p>
                <p>Ilmankosteus: ${humidity} %</p>
            `;

        })
        .catch(error => {
            output.textContent = "Säätietojen hakeminen epäonnistui.";
            console.error(error);
        });
}

// Hae data -painike
button.addEventListener("click", function() {
    fetchWeather(city.value);
});

// Kaupunkivalikko
city.addEventListener("change", function() {
    fetchWeather(city.value);
});

// Hakukenttä
document.getElementById("search").addEventListener("click", function() {
    const searchCity = document.getElementById("citysearch").value;
    fetchWeather(searchCity);
});

