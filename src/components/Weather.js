import React, { useState } from 'react';
import './Weather.css';

export const Weather = ({ update }) => {
  const [city, setCity] = useState("");
  const [error, setError] = useState("");

  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "665ddf75998e9aebaadd761f28cbfd4d";

  const getWeather = async () => {
    try {
      const response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
      const jsonResponse = await response.json();

      if (response.ok) {
        if (!jsonResponse.main || typeof jsonResponse.main.temp === 'undefined') {
          throw new Error('Invalid or missing temperature data in API response');
        }

        const result = {
          city: city,
          temp: jsonResponse.main.temp,
          tempMin: jsonResponse.main.temp_min,
          tempMax: jsonResponse.main.temp_max,
          humidity: jsonResponse.main.humidity,
          feelsLike: jsonResponse.main.feels_like,
        };

        console.log(result);
        return result;
      } else {
        throw new Error(`Failed to fetch weather data: ${jsonResponse.message}`);
      }
    } catch (err) {
      console.error(err);

      if (err instanceof SyntaxError) {
        setError("API response structure not matched");
      } else {
        setError("Failed to fetch weather data. Please try again.");
      }

      throw err;
    }
  };

  const handleChange = (event) => {
    setCity(event.target.value.toUpperCase());
  };

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      const newInfo = await getWeather();
      update(newInfo);
      setCity("");
      setError("");
    } catch (err) {
      // Handle errors if needed
    }
  };

  return (
    <div className='weat'>
      <form onSubmit={handleSubmit}>
        <input className='SearchBox' type='text' id='city' value={city} onChange={handleChange}></input>
        <button className='searchBoxButton'><i className="fa-solid fa-magnifying-glass fa-2xl"></i></button>
        {error && <p>{error}</p>}
      </form>
    </div>
  );
};

export default Weather;
