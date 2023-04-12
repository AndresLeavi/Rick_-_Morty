
import {Link} from 'react-router-dom'

const About = () => {
    return(
        <div>
            <h1 >About</h1>
            <p>
                "¡Oh, sí, sí! ¿Sientes eso, Morty? ¿El poder de la ciencia? ¡Tengo una
                idea, voy a crear una máquina que haga que mi cerebro funcione a un 200%
                de su capacidad! ¡La llamaré "El casco de cerebro"! Y lo mejor de todo
                es que no necesitaremos salir de casa para probarlo. ¡Atrévete a ser
                científico conmigo, Morty!" - Rick.
            </p>
            <p>
                La aplicación de Rick and Morty es una aplicación que muestra
                información sobre los personajes de la famosa serie animada de
                televisión. La aplicación utiliza la API de Rick and Morty para obtener
                la información de los personajes y mostrarla en una interfaz de usuario
                fácil de usar. Esta aplicación ha sido desarrollada como proyecto de
                práctica de React.
            </p>
            <span>Creada por: Leavi Andres</span>
            <Link to=''></Link>
        </div>
    )
}

export default About;