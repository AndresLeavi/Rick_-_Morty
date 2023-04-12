import Card from './Card';
import styled from 'styled-components';

const DivSty = styled.div`
   display: flex;
   align-content: center;
   justify-content: center;
   flex-wrap: wrap;
   
`;

export default function Cards({characters, onClose}) {
   return (
      <DivSty>
   
      {characters.map(({id, name, status, species, gender,origin, image}) =>{return (
            <Card
               key = {id}
               id = {id}
               name= {name}
               status= {status} 
               species= {species}
               gender= {gender}
               origin= {origin.name}
               image= {image}
               onClose={onClose}
            />)
         })   
      }</DivSty>
   )
};
