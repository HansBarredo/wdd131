// Corrected function name
calculateWindChill = (tempC, windSpeed) => {
    if (tempC <= 10 && windSpeed > 4.8) {
        return (13.12 + 0.6215 * tempC - 11.37 * Math.pow(windSpeed, 0.16)
            + 0.3965 * tempC * Math.pow(windSpeed, 0.16)).toFixed(2);
    } else {
        return "N/A";
    }
};

// Data
const temperatureC = 26; // Example temperature in Celsius
const windSpeed = 6; // Example wind speed in km/h

// Calculate wind chill
const windChill = calculateWindChill(temperatureC, windSpeed);

// Update HTML content
document.getElementById("temp").textContent = `${temperatureC}°C`;
document.getElementById("wind").textContent = `${windSpeed} km/h`;
document.getElementById("wind-chill").textContent = `${windChill}°C`;

const modified = document.querySelector("#modified");

let oLastModif = new Date(document.lastModified);

modified.innerHTML = `Last Modification: <span class="last-mod">${oLastModif.toLocaleString()}</span>`;
