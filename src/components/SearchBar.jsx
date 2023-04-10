import { useState } from "react";

export default function SearchBar({onSearch}) {
   let [id, setId] = useState('');

   const handleChange = (event) => {
      setId(event.target.value)
   }



   return (
      <div>
         <input type='search' onChange={handleChange} value={id}/>
         <button onClick={() => {onSearch(id); setId=('')}}>Agregar</button>
      </div>
   );
}
//No podemos pasarle argumentos a onSearch que ser encuentra en la etiqueta button porque se esta ejecutando
//la forma de solucionarlo es llamando una callback
// Id es mi estado local, value es lo que me escribe en consola el usuario