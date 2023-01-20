import { useContext } from "react"
import { NavLink } from "react-router-dom"
import { AuthContext } from "../../context/AuthContext"
import "./navbar.scss"

const Navbar = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="navbar">
      <div className="navContainer">
        <NavLink  to="/" className="logo">Booking.com</NavLink >
        <div className="navItems">
          { user && <button className="navButton">{user?.name}</button>}
          {user?<NavLink to="/logout" >Logout</NavLink>:
          <NavLink to="/login">
          <button className="navButton">Login</button>
          </NavLink>}
        </div>
      </div>
    </div>
  )
}

export default Navbar