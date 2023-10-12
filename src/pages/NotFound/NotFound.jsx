import { NavLink } from "react-router-dom";
import "./NotFound.css"

const NotFound = () => {
  return (
    <main className="notfound">
      <div className="notfound-content">
    <h1>404</h1>
    <h2>SORRY</h2>
    <h2>NOT FOUND</h2>
    <NavLink className="view-photo" to="/">HOME</NavLink>
    </div>
    </main>
  )
}
export default NotFound;