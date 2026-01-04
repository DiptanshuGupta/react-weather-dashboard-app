// src/api/weatherApi.js
import axios from 'axios';

const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';
const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;
console.log(API_KEY); 

export async function fetchWeatherByCity(city, signal, units = 'metric') {
  if (!API_KEY) throw new Error('Missing OpenWeather API key');
  const url = `${BASE_URL}?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=${units}`;
  const response = await axios.get(url, { signal });
  const d = response.data;
  return {
    city: d.name,
    country: d.sys?.country,
    temp: d.main?.temp,
    feelsLike: d.main?.feels_like,
    humidity: d.main?.humidity,
    windSpeed: d.wind?.speed,
    condition: d.weather?.[0]?.main,
    description: d.weather?.[0]?.description,
    icon: d.weather?.[0]?.icon,
  };
}