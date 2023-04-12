import SearchBar from '../SearchBar';
import {NavLink} from 'react-router-dom';
import styles from './Nav.module.css'

export default function Nav(props) {
    return (
        <div className= {styles.nav}>
            
            <img src= 'https://web.static.nowtv.com/de/images/09-2022/Filme_Serien/WOW_Assets_LP_RickMorty/TT.png?downsize=1200:*&output-format=webp&output-quality=70' alt='' className={styles.img}></img>
          
           
             <NavLink className= {({isActive}) => isActive ? styles.active : styles.disable} to='/home'>Home</NavLink>
             <NavLink className= {({isActive}) => isActive ? styles.active : styles.disable} to='/about'>About</NavLink>
             <NavLink className= {({isActive}) => isActive ? styles.active : styles.disable} to='/contact'>Contact</NavLink>
             
             <SearchBar className= {styles.search}onSearch={(characterID) => props.onSearch(characterID)}/>
           
       
    </div>
    
    )
}

