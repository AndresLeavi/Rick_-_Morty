import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import styles from './Detail.module.css'

const URL_BASE = 'https://be-a-rym.up.railway.app/api/character';
const API_KEY = '4df0e452e97d.cf900310493aaf10e4b9';

const Detail = () => {
    const { id } = useParams();
    const [character, setCharacter] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        axios(`${URL_BASE}/${id}?key=${API_KEY}`)
        .then(response => response.data)
        .then((data) => {
           if (data.name) {
              setCharacter(data);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        return setCharacter({});
    }, [id]);


    return(
      <div>
     
    
      <button onClick={() => navigate('/home')} className={styles.btn}>BACK</button>
      
       <div className ={styles.container}>
         
          <img className={styles.img} src={character.image} alt='not found'/>
          <h1 className={styles.h1}>Name: {character.name}</h1>
          <h1 className={styles.h1}>Status: {character.status}</h1>
          <h1 className={styles.h1}>Specie: {character.species}</h1>
          <h1 className={styles.h1}>Gender: {character.gender}</h1>
          <h1 className={styles.h1}>Origin: {character.origin?.name}</h1>
          <h1 className={styles.h1}>Location: {character.location?.name}</h1>
         
       </div> 
       </div>
    )
}

export default Detail;