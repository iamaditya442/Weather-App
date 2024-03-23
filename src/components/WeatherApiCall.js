import React from "react";
import { useState } from "react";

export const WeatherApiCall = () => {
    let [city,setCity]=useState("");
    let API_URL = "https://api.openweathermap.org/data/2.5/weather";
    let API_KEY = "665ddf75998e9aebaadd761f28cbfd4d"

    let getWeather = async() =>{
        let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        let jsonResponse = await response.json();
        console.log(jsonResponse);
    };

    let handleChange = (event) =>{
        setCity(event.target.value)
    }
    
    let handleSubmit = (event) =>{
        event.preventDefault();
        console.log(city);
        getWeather();
        setCity("");
    }


  return (
    <div>
        <form onSubmit={handleSubmit}>
        <input type='text' id='city' value={city} onChange={handleChange}></input>
        <button></button>
        </form>
    </div>
  )
}
export default WeatherApiCall;