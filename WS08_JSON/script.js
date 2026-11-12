//API AVAIN TÄHÄN
const apiKey = "YOUR_API_KEY";

const weatherdata = document.querySelector("#weatherdata");
const city = document.querySelector("#city");
const citysearch = document.querySelector("#citysearch");

city.addEventListener("change", function() {
    fetchWeather(city.value);
});

document.querySelector("#search").addEventListener("click", function() {
    fetchWeather(citysearch.value);
});

async function fetchWeather(cityName) {

    weatherdata.textContent = "Ladataan säätietoja...";

    try {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&mode=xml&appid=${apiKey}`
        );

        if (!response.ok) {
            throw new Error("Säätietojen hakeminen epäonnistui");
        }

        const data = await response.text();

        const parser = new DOMParser();
        const xml = parser.parseFromString(data, "text/xml");

        const temperature = xml.querySelector("temperature").getAttribute("value");
        const clouds = xml.querySelector("clouds").getAttribute("name");
        const humidity = xml.querySelector("humidity").getAttribute("value");

        weatherdata.innerHTML = `
            <p>Kaupunki: ${cityName}</p>
            <p>Lämpötila: ${temperature} °C</p>
            <p>Pilvisyys: ${clouds}</p>
            <p>Ilmankosteus: ${humidity} %</p>
        `;

    } catch (error) {
        weatherdata.textContent = "Säätietojen haku epäonnistui.";
        console.error(error);
    }
}

