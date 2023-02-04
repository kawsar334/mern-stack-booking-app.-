
import { useEffect } from "react";
import useFetch from "../../hooks/UseFetch";
import "./userlist.css";
import axios from "axios";
import { useState } from "react";
import {Link} from "react-router-dom"

// https://api.cloudinary.com/v1_1/dmvmzwqkw/image/upload

const UserList = () => {
  const { data, loading, error } =  useFetch("/user/");
  const [success , setSuccess] = useState("")
  const [err, setErr] = useState("")
  
  const handleDelete = async(id)=>{
    try{
      const res = await axios.delete(`user/${id}`);
      setErr(" ")
      setSuccess(res.data);
      
    }catch(err){
      setErr("Something went Wrong!");
    };
  }

  return (
    <div className="userList" >
      
       {success&& <span style={{color:"green",fontSize:"20px"}}>{success}</span>}
      {err && <span style={{ color: "red", fontSize: "14px" }}>{err}</span>}

    <h1>User Lists</h1>
      <Link to="/newuser" className="addUser">
        Add User 
      </Link> 
      <table class="table table-light border ">
        <thead>
          <tr >
            <th scope="col" className="text-center">Id</th>
            <th scope="col" className="text-center">User</th>
            <th scope="col" className="text-center">Email</th>
            <th scope="col" className="text-center">isAdmin</th>
            {/* <th scope="col" className="text-center">Transaction</th> */}
            <th scope="col" className="text-center" colSpan={2}>action</th>
          </tr>
        </thead>
        <tbody>

          {!data ? "Loading Please wait..." : <> {data.map((item) => (
            <tr key={item._id}>
            <th scope="row">{item._id}</th>
            <td><img src={item.img} alt="" className="userIgm" /> <span>{item.name}</span></td>
            <td>{item.email}</td>
            <td>{item.isAdmin===false ?"No": "Yes"}</td>
            {/* <td className="userTrasaction">$120.00</td> */}
            <td><a href={`/user/${item._id}`}className="btn btn-primary mx-1"><i class="fa-regular fa-pen-to-square"></i></a>
              <button className="btn btn-danger" onClick={()=>handleDelete(item._id)}><i class="fa-solid fa-trash"></i></button>
            </td>
         </tr>))} </>}
        </tbody>
      </table>
     
    </div>
  )
}

export default UserList