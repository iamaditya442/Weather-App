import React from 'react'
import './Weather.css'
import image1 from './images/winter.png';
import image2 from './images/sunny.png';
import image3 from './images/cloudy.png';

const InfoBox = ({oldInfo}) => {
  let winter = oldInfo.temp;
  console.log(winter);

  let weatherImage;
  if (winter <= 10) {
    weatherImage = <img src={image1} alt="Winter" />;
  } else if (winter > 10 && winter <= 15) {
    weatherImage = <img src={image3} alt="Sunny" />;
  } else {
    weatherImage = <img src={image2} alt="Cloudy" />;
  }
  return (
    <div>
      <div className='InfoBoxValues'>
      <h1>{oldInfo.city}</h1>
      <h3>Humidity is: {oldInfo.humidity}%</h3>
      <h4> {oldInfo.temp}°</h4>
      </div>
      <div className='conditionImage'>
      {winter <= 10 ? <img src={image1} alt="Winter" /> : <img src={image2} alt="Sunny" />}
      </div>
      <div className='InfoBoxSecondBox'>
        
      </div>
    </div>
  )
}
export default InfoBox;