import axios from "axios";
import { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import "./login.scss";

const Login = () => {
  const navigate =useNavigate();  
  const { dispatch,loading, error,  } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const handleLogin = async(e)=>{
    e.preventDefault();
    try{
      dispatch({type:"LOGIN_START"})
      const res = await axios.post("/auth/login/", {email, password});
      dispatch({ type: "LOGIN_SUCCESS",payload:res.data.others})
      if(res.status==200){
        navigate("/")
      }
    }catch(err){
      dispatch({ type:"LOGIN_FAILURE",})
    }
  }
  return (
    <div className="login">
      <div className="loginWrapper">
        <h1 className="loginHeader">Login</h1>
        <form  onSubmit={handleLogin}>
          <input type="text" placeholder="Email " onChange={(e)=>setEmail(e.target.value)}/>
          <input type="password" placeholder="password" name="password" onChange={(e) =>setPassword(e.target.value)} />
          <button >{ loading? "Loading...":"Login"}</button>
          {error&& <span style={{color:"red", fontSize:"20px"}}>Something went wrong</span>}
        </form>
        <span>Don't Have any account? 
         <NavLink to="/register">Register</NavLink>
        </span>
      </div>
    </div>
  )
}

export default Login