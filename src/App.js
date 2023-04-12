import './App.css';
import Cards from './components/Cards';
import Nav from './components/Nav/Nav'; 
import About from './components/About/About';
import Detail from './components/Detail/Detail';
import axios from 'axios'; 
import { Routes, Route } from 'react-router-dom';
import { useState, useEffect, useLocation, useNavigate } from 'react';
import Form from './components/Form/Form';
import Contact from './components/Contact/Contact'



const URL_BASE = 'https://be-a-rym.up.railway.app/api/character';
const API_KEY = '4df0e452e97d.cf900310493aaf10e4b9';

function App() {
   const [characters, setCharacters] = useState([]);

   const location = useLocation();

   const [access, setAccess] = useState(false)

   const username = 'andresleavi@gmail.com';

   const password = 'Andres1997';

   const navigate = useNavigate();

   function Login(userData) {

      if (userData.username === username && userData.password === password) {
       setAccess(true);
       navigate('/home')
      }
      }
   
     useEffect(() => {
         !access && navigate('/');
         }, [access]);
    


   const onSearch = (id) => {
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
            <Route path= '/contact' element= {<Contact/>}/>
            <Route path='/detail/:id' element={<Detail/>} />
         </Routes>  
      </div>
   );
}

export default App;
