import { useState } from 'react';
import './Weather-App.css';
import data from './Data/data';

function WeatherApp() {
    const [query, setQuery] = useState('');
    const [weather, setWeather] = useState(null);

    function searchWeather(e) {
        if (e.key === "Enter") {
            fetch(
                data.base + "?q=" +
                query +
                "&units=metric&appid=" +
                data.key
            )
                .then((response) => response.json())
                .then((data) => setWeather(data));
        }
    }

    return (
        <div className={(weather === null || weather.main === undefined) ? 'weather-app' : (weather.main.temp < 16 ? 'weather-app cold' : 'weather-app')}>
            <input
                className="weather-input"
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyPress={searchWeather}
            />
            {
                (weather === null || weather.main === undefined) ? null :
                    <div className="weather-desc">
                        <h3>{weather.name}</h3>
                        <h1>{Math.round(weather.main.temp)}°C</h1>
                        <h3 style={{fontSize: "25px"}}>{weather.weather[0].main}</h3>
                    </div>
            }
        </div>
    );
}

export default WeatherApp;