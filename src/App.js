import './App.css';
import Cards from './components/Cards.jsx';
import Nav from './components/Nav'; 
import { useState } from 'react';
import axios from 'axios'; 

// const example = {
//    id: 1,
//    name: 'Rick Sanchez',
//    status: 'Alive',
//    species: 'Human',
//    gender: 'Male',
//    origin: {
//       name: 'Earth (C-137)',
//       url: 'https://rickandmortyapi.com/api/location/1',
//    },
//    image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
// };

function App() {
   const [characters, setCharacters] = useState([]);

   // const onSearch = () => {
   //    setCharacters([...characters, example]) // Al poner los puntitos, ...characters se copiara lo que tiene example mas lo de contiene caracter.

   // }

   function onSearch(id) {
      axios(`https://rickandmortyapi.com/api/character/${id}`)
      .then( response => response.data)
      .then((data) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
   }
   //axios funciona al igual que un $.get, la respesta que recibe de la libreria es data, y poterior a ello comienza a trabajar con eso que le brindo el caracter

   const onClose = (id) => {
      const charactersFiltered = characters.filter(character => character.id !== Number(id));
      setCharacters(charactersFiltered)
   }

   return (
      <div className='App'>
         <Nav onSearch={onSearch} />
         <Cards characters={characters} onClose={onClose}/>    
      </div>
   );
}

export default App;
