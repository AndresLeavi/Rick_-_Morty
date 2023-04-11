import './App.css';
import Cards from './components/Cards';
import Nav from './components/Nav'; 
import About from './components/About';
import Detail from './components/Detail';
import { useState } from 'react';
import axios from 'axios'; 
import { Routes, Route } from 'react-router-dom';

const URL_BASE = 'https://be-a-rym.up.railway.app/api/character';
const API_KEY = '4df0e452e97d.cf900310493aaf10e4b9';

function App() {
   const [characters, setCharacters] = useState([]);

   // const onSearch = () => {
   //    setCharacters([...characters, example]) // Al poner los puntitos, ...characters se copiara lo que tiene example mas lo de contiene caracter.

   // }

   function onSearch(id) {
      axios(`${URL_BASE}/${id}?key=${API_KEY}`)
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
      <div>
       <Nav onSearch={onSearch} />
        
        <Routes>           
            <Route path='/home' element={ <Cards characters={characters} onClose={onClose}/> }/>
            <Route path='/about' element={<About/>} />
            <Route path='/detail/:id' element={<Detail/>} />
         </Routes>  
      </div>
   );
}

export default App;
