import React from 'react';
import './Home.css';
import TitleCards from '../../components/TitleCards/TitleCards';
import Navbar from '../../components/Navbar/Navbar';
import hero_banner from '../../assets/hero_banner.jpg';
import hero_title from '../../assets/hero_title.png';
import play_icon from '../../assets/play_icon.png';
import info_icon from '../../assets/info_icon.png';
import Footer from '../../components/Footer/Footer';
const Home = () => {
  return (
    <div className="home">
        <Navbar/>
        <div className="hero">
          <img src={hero_banner} alt="hero-banner-missing" className='banner-img'/>
          <div className="hero-caption">
            <img src={hero_title} alt="hero-title" className="caption-img"/>
            <p>
              Discovering his ties to a secret ancient order, man living in modern Istanbul embarks on a guest to save the city from an immortal enemy.
            </p>
            <div className="hero-btns">
              <button className='btn'><img src={play_icon} alt="play-button" />Play</button>
              <button className='btn dark-btn'><img src={info_icon} alt="play-button" />More Info</button>
            </div>
            <TitleCards/>

          </div>
          
        </div>
        <div className="more-cards">
            <TitleCards title={"Blockbuster Movies"} category={"rose"}/>
            <TitleCards title={"Upcoming"} category={"horror"}/>
            <TitleCards title={"Only on Netflix"} category={"future"}/>
            <TitleCards title={"Top Pics for You"} category={"sex"}/>
          </div>
          <Footer/>
    </div>
  )
}

export default Home