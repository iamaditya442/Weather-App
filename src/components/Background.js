import React from 'react'
import './Weather.css'
import SideBar from './SideBar';
import WeatherData from './WeatherData';


const Background = () => {
  return (
    <div className='main_Background'>
        <WeatherData></WeatherData>
        <SideBar></SideBar>

    </div>
  )
}
export default Background;