import { NavLink } from "react-router-dom";
import "./listSearch.scss";

const ListResult = ({item}) => {
  
  return (
    <div className="ListResult">

      <div className="lsLeft">
        <img src={item.photos[0] || "https://images.pexels.com/photos/12641517/pexels-photo-12641517.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load" }alt="" className="lsImg" />
      </div>
      <div className="lsMiddle">
        <h1>{item.name}</h1>
        <p>{item.address} </p>
        <p className="cancel_recomend">distance {item.distance} meters</p>
        <span className="cancel">Free canellation</span>
        

        <span className="cancel_recomend">You can cancel later , so lock in this great price tody !</span>
      </div>
      <div className="lsRight">
        <div className="title">Apert hotel star miasto </div>
        <NavLink  to={`/hotels/${item._id}`}>
      <button className="seeNowbtn">See now</button>
        </NavLink>
        <span className="city">Jeddah </span>
        <span className="price">price:${item.cheapestPrice} </span>
        {item.rating && <div className="rating">
          <button>{item.rating}</button>
          <span>Excelent </span>
        </div>}
      </div>
    </div>
  )
}

export default ListResult