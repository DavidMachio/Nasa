import { NavLink } from "react-router-dom";
import "./Home.css"

const Home = () => {

  return (
    <main className="home">
      <section className="section-home">
        <h1 className="app-title">Space View</h1>
        <p className="app-description"> Space View es una aplicación que te permite seleccionar una fecha y acceder a las fotografías astronómicas del día elegido proporcionadas por la NASA.</p>
        <NavLink className="view-photo" to="/search">View</NavLink>
      </section>
    </main>
  )

}

export default Home;