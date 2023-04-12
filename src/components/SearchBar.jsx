import { useState } from "react";
import styled from 'styled-components';

const Input = styled.input`
font-size: 19px;
background-color: black;
color: #00FFFB;
font-family: monospace;
border-color: white;
border-radius: 5px;
 ::placeholder {
   color:#00FFFB;
}
`;


const Button = styled.button`
color: #00FFFB;
width: 10%;
background-color: black;
border-radius: 4px;
border: 2px solid white ;
font-family: monospace;
font-size: 20px;
font-weight: bold;
margin: 5px
`;
export default function SearchBar({onSearch}) {
   let [id, setId] = useState('');

   const handleChange = (event) => {
      setId(event.target.value)
   }



   return (
      <div>
         <input classname = {styled.input} type='search' onChange={handleChange} value={id}/>
         <button classname = {styled.button} onClick={() => {onSearch(id); setId=('')}}>Agregar</button>
      </div>
   );
}
//No podemos pasarle argumentos a onSearch que ser encuentra en la etiqueta button porque se esta ejecutando
//la forma de solucionarlo es llamando una callback
// Id es mi estado local, value es lo que me escribe en consola el usuario