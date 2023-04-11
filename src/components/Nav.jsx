import SearchBar from './SearchBar';
import { Link } from 'react-router-dom';

export default function Nav({onSearch}) {
    return (
        <div>
            <SearchBar onSearch={onSearch}/>
            
            <Link to='/about'><button>  ABOUT </button> </Link>
            <Link to='/home'><button>  HOME </button> </Link>        
            
         </div>
    )
 };