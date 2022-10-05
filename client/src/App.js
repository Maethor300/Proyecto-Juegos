import React from 'react';
import './App.css';
import img1 from "./img/3551.jpg";
import ButtonHome from "./components/ButtonHome/ButtonHome.js"
import ButtonOrder from "./components/order/ButtonOrder.js"
import Videogames from './components/videogames/videogames';
import SearchBar from './components/searchBar/searchBar';
function App() {
  return (
    <React.Fragment>
    
    <div className="App">
      
      <div>
      <h1 className='nombre'>Maethor</h1>
      <ButtonHome />
      <ButtonOrder/>
      <SearchBar/>
      </div>
      
      {/* <img className="App-header" src ={img1} alt="Fondo videojuegos"/> */}
      <Videogames/>
       
    </div>
   
    </React.Fragment>
  );
}

export default App;
