import style from "./Card.module.css"
import { Link } from "react-router-dom";
import { addFav, removeFav } from '../../redux/actions';
import { connect } from 'react-redux';
import { useState, useEffect } from "react";


function Card({id, name, status, species, gender, origin, image, onClose, addFav, removeFav, myFavorites}) {
   
   const [isFav, setIsFav] = useState(false);

   const handleFavorite = () => {
      if(isFav){
         setIsFav(false);
         removeFav(id);
      }
      else {
         setIsFav(true);
         addFav({id, name, species, gender, image, onClose})
      }
   }

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [id, myFavorites]);

     
   return (

      <div className={style.container}>
         <button onClick={() => {onClose(id)}} className={style.closeButton}>X</button>
         <button onClick={handleFavorite}>{isFav ? '❤️' : '🤍' }</button>
         <Link to={`/detail/${id}`} >
         <h3>{name}</h3>       
         </Link>

         <img src={image} alt='' />
         <h3>{species}</h3>
         <h3>{gender}</h3>
         <h3>{status}</h3>
         <h3>{origin}</h3>
      </div>
      
   );
}

const mapStateToProps = (state) => {
   return {
      myFavorites: state.myFavorites
   }
}

const mapDispatchToProps = (dispatch) => {
   return {
      addFav: (character) => { dispatch(addFav(character)) },
      removeFav: (id) => { dispatch(removeFav(id)) }
   }
}

export default connect(
   mapStateToProps,
   mapDispatchToProps
)(Card);

// Card es mi estructura/plantilla para mostrar un personaje

// onClick={() => {onClose(id)}} acá le paso el id que voy a cerrar al pulsar X
