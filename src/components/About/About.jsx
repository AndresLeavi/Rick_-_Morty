import styles from './About.module.css'
import {Link} from 'react-router-dom'

const About = () => {
    return(
        <div> className= {styles.container}
            <h1 className={styles.title}>About</h1>
            <span>Creada por: Leavi Andres</span>
            <Link to=''></Link>
        </div>
    )
}

export default About;