import React from 'react';
import './Player.css';
import back_arrow_icon from '../../assets/back_arrow_icon.png'
import { useNavigate } from 'react-router-dom';
const Player = () => {
  const navigate=useNavigate();
  return (
   <div className="player">
      <img src={back_arrow_icon} alt="" onClick={()=>{navigate(-2)}}/>
      <iframe width='90%' height='90%' src='https://www.youtube.com/embed/hkHHwA-vEyQ' title='trailer' frameBorder='0' allowFullScreen></iframe>
      <div className="player-info">
        <p>2024-04-15</p>
        <p>10Minute Preview</p>
        <p>Clip</p>
        
      </div>
    </div>
  )
}

export default Player