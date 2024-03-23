import React, { useState } from 'react'
import InfoBox from './InfoBox';
import Weather from './Weather';

export const WeatherData = () => {
    let[mainInfo , setMainInfo] = useState({
            city:"Delhi",
            temp:0,
            tempMin:0,
            tempMax:0,
            humidity:0,
            feelsLike:0,
            weather:0,
    });

    let update = (result)  => {
      setMainInfo(result);
    }

  return (
    <div>
      <InfoBox oldInfo={mainInfo}></InfoBox>
      <Weather update={update}></Weather>
    </div>
  )
}
export default WeatherData;