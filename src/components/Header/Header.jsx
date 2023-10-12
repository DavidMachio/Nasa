import { useState } from "react";
import "./Header.css"
import { NavLink } from "react-router-dom";


const Header = () => {
  const[burguer, setBurguer] = useState(false)

  const visibleBurguer= () => {
    setBurguer(!burguer);
    console.log(burguer)
  };
  return (
    <header>
      <img src="./iconos/IconoNasa.png" alt="Logo de la Nasa" className="img-header"/>
      <button className="abrir" onClick={visibleBurguer}><img src="./iconos/abrir.png" alt="icono abrir menu" /></button>
      <nav className={burguer ? "visible" : ""}>
      <button className="cerrar" onClick={visibleBurguer}><img className="icono-cerrar" src="./iconos/cerrar.png" alt="icono cerrar menu" /></button>
        <ul className="ul-header ">
          <li>
            <NavLink to="/" onClick={visibleBurguer}>Home</NavLink>
          </li>
          <li>
            <NavLink to="/search" onClick={visibleBurguer}>Search</NavLink>
          </li>
          <li>
            <NavLink to="/rover" onClick={visibleBurguer}>Rover</NavLink>
          </li>
          <li>
          <NavLink to="/about" onClick={visibleBurguer}>About</NavLink>
          </li>
        </ul>
        
      </nav>
    </header>
  )
}

export default Header;