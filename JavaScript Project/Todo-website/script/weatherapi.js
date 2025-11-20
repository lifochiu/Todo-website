// Replace 'YOUR_API_KEY' with the API key you obtained in Step 1
const apiKey = 'a9b1244be8804735822891c3a6e372be';
const city_name = 'Toronto'; 
 
const url = `https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=${apiKey}`;
 
// Function to fetch weather data
async function fetchWeatherData() {
    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error('Network response was not ok');
        
        const data = await response.json();
        displayWeatherData(data);
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}
 
// Function to display weather data in the HTML
function displayWeatherData(data) {
    const weatherDiv = document.getElementById('weather-data');
    weatherDiv.innerHTML = `
        <p>City: ${data.name}</p>
        <p>Temperature: ${(data.main.temp - 273.15).toFixed(2)} °C</p>
        <p>Weather: ${data.weather[0].description}</p>
    `;
}
 
// Call the function to fetch and display data
fetchWeatherData();