import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

const URL_BASE = 'https://be-a-rym.up.railway.app/api/character';
const API_KEY = '4df0e452e97d.cf900310493aaf10e4b9';

const Detail = () => {
    const { id } = useParams();
    const [character, setCharacter] = useState({});

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
        <div >

            <div>
              <div>
               <p>{character?.name}</p>
              </div>

              <div >
                <div >
                  <img src={character?.image} alt={character?.name} />
                </div>

                <div>
                  <p>Status: {character?.status} </p>
                  <p>Specie:{character?.species}</p>
                  <p>Gender: {character?.gender} </p>
                  <p>Origin: {character?.origin?.name} </p>
                </div>
              </div>
            </div>
        </div>
    )
}

export default Detail;