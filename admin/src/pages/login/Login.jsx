import { useState } from "react"
import React,{Component} from "react";
import "./login.css";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import {Link, useNavigate}  from "react-router-dom";
const Login = () => {
    const navigate= useNavigate()
    const { dispatch } = useContext(AuthContext);
    const [error, setError] = useState("");
    const [password, setPassword ] = useState("");
   const [email, setEmail] = useState("");
    const handleLogin = async(e)=>{
        e.preventDefault();
        try{
            dispatch({ type:"LOGIN_START"})
            const res = await axios.post("auth/login/",{email, password});
            dispatch({ type:"LOGIN_SUCCESS" , payload:res.data.others});

            dispatch({ type: "LOGIN_SUCCESS", payload: res.data.others });
            if(res.data.isAdmin ===true){
                navigate("/")
                console.log("res.data.isAdmin", res.data)
            }else{
                navigate("/login")
                setError("You are not allowed !")
            }
        }catch(err){
            console.log(err.response.data);
            dispatch({ type:"LOGIN_FAILURE",payload:err.response.data});
        }
    }
  return (
    <div className='login'> 
        <div className="loginWrapper">
            <form action="" className="loginForm">
                <h1 className="loginHeader">Signin</h1>
                <input type="text" name="email" placeholder='Email...' onChange={(e)=>setEmail(e.target.value)}/>
                  <input type="password" name="password" placeholder='password...' onChange={(e) => setPassword(e.target.value)} />
                  {error &&<span style={{color:"crimson", }}>{error}</span>}
                  <button onClick={handleLogin}>Login</button>
                  <Link  to="/newuser">Don't have any account? <b>Signup</b></Link>

            </form>
        </div>
    </div>
  )
}

export default Login



// class Login extends React.Component {
//     constructor(props){
//         super(props)
//             this.state={
//                 username:"kf",
//           todoItem:[
//              {id:1, username:"kawsar", },
//             { id: 2, username: "samiya", },
//             { id: 3, username: "azraha", },  
//         ]
//             } 
//     }
//     render=()=>( 
//             <div>   
//             {this.state.todoItem.map((u)=>(
//                 <h1>{` ${u.id}:${u.username}`}</h1>
//             ))}
//      </div>
//      ) 
// }

// export default  Login
