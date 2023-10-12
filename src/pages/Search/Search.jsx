import axios from "axios"
import { useState, useEffect } from 'react'
import Picture from "../Picture/Picture"

import './Search.css'



const Search = () => {
//con esto recuperamos la fecha actual con formato ISO(2022-01-01)
  const today = new Date(Date.now()).toISOString().slice(0, 10);
//Creamos una variable llamada apod que comience siendo un objeto vacío
const [apod, setApod] = useState({});
//Crteamos otra variable como la anterior, pero en este caso que devuelva la fecha del dia actual
const [date, setDate] = useState(today);
//Ahora almacenamos la url de la API de la NASA en una constante
const API_NASA = "https://api.nasa.gov/";
//Ahora almacenamos nuestra API_KEY en una constante, recomendado en una variable de entorno.
const NASA_KEY = "SxmSmwzFDtCKCfgXFgqeznJF1o0PA0JUyOmuhBFc";

useEffect(() => {
  const getApod = async () => {
  const data = await axios.get(
  `${API_NASA}planetary/apod?date=${date}&api_key=${NASA_KEY}`
  );
  setApod(data.data);
  };
  getApod();
  }, [date]);
  //Creamos una funcion que setee la fecha a traves de un input en el formato necesario(igual que el formato today)
  const handleInput = (ev) => {
    setDate(ev.target.value.toLocaleString());
  };

  return (
    <div className='Search'>
       <img className="background-Search" src="./background/space.avif" alt="Fotografia del espacio" />
      <div className="Search-head">
      <input className="dates" type='date' id='photo-date' onChange={handleInput} />
      <h1>Astronomy Picture of the day</h1>
      </div>
      {date > today ? (
        <div className="outDate">
      <h2>Please choose a previous date from today</h2>
      </div>
      
      ) : (
        <Picture data={apod} />
      )}
    </div>
  )
} 
  

export default Search;
