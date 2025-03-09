import React from 'react';
import './TitleCards.css';
import cards_data from '../../assets/cards/Cards_data';
import {useRef,useEffect,useState} from 'react';
import { Link } from 'react-router-dom';
const KEY="b72ff9af";
const TitleCards = ({title,category}) => {
  const [apiData,setApiData]=useState([]);
  const cardsRef=useRef();
  

  const handleWheel=(event)=>{
    event.preventDefault();
    cardsRef.current.scrollLeft+=event.deltaY;
  }
  useEffect(()=>{
    let url=`https://www.omdbapi.com/?apikey=${KEY}&s=${category?category:"spy"}`;
    // let url = 'https://api.watchmode.com/v1/releases/?apiKey=MuqQ6O3BdwLqjoRMuNDhpZsPKYsmqlpU4W9WX5Gs';
  
  fetch(url)
  .then((res) => res.json())
  .then((res) =>setApiData(res.Search))
  .catch(err=>console.log(err));
  cardsRef.current.addEventListener('wheel',handleWheel);
    

  },[])
  
  
  return (
   <div className="title-cards">
    <h2>{title?title:"Popular on Netflix"}</h2>
    <div className="card-list" ref={cardsRef}>
     {apiData.map((card,index)=>{return <Link to={'/player/fkIvmfqX-t0'} className="card" key={index}>
     <img src={card.Poster} alt="no-img"/>
      <p>{card.Title}</p>
      
     </Link>

     })}
    </div>
   </div>
  )
}

export default TitleCards