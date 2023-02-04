


import { useContext } from "react"
import { AuthContext } from "../../context/AuthContext"
import "./topbar.css";
import {Link} from "react-router-dom";


const Topbar = () => {
    const {user} = useContext(AuthContext);

  return (
    <div className="topbar">
        <div className="topbar_wrapper">
            <div className="topleft">
                <a href="">
                <span className="logo">{user?.name} </span>
                </a>
            </div>
            <div className="topright">
                <div className="topbar_icon_container">
                      <i class="fa-solid fa-bell"></i>
                      <span className="topicon_bage">1</span>
                </div>
                  <div className="topbar_icon_container">
                      <i class="fa-solid fa-globe"></i>
                      <span className="topicon_bage">2</span>
                  </div>
                  <div className="topbar_icon_container">
                      <i class="fa-solid fa-bell"></i>
                      <span className="topicon_bage">3</span>
                  </div>
                  <Link to={`/user/${user?._id}`}>
                      <img src={user?.img || "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"} alt=""  className="topbar_img"/>
                  </Link>
            </div>
        </div>  
    </div>
  )
}

export default Topbar
