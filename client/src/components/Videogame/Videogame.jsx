 import './Videogame.css'
 function Videogame({name, image}){
    return <div>
        <h3>{name}</h3>
        <img className="image-game" src={image} alt="imageVideoGames"/>
    </div>
}
export default Videogame