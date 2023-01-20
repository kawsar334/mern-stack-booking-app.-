import { NavLink } from "react-router-dom";
import "./register.scss";


const Register = () => {
  return (
    <div className="register">
      <div className="registerWrapper">
        <h1 className="registerHeader">Register</h1>
        <form action="">
          <input type="text" placeholder="Username " />
          <input type="text" placeholder="Email " />
          <input type="text" placeholder="Password " />
          <input type="text" placeholder="phone" />
          <button>Register</button>
        </form>
        <span>Already registered ?
          <NavLink to="/login" >Login</NavLink>
        </span>
      </div>
    </div>
  )
}

export default Register