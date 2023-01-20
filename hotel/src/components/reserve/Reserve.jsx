import { useContext, useState } from "react";
import { SearchContext } from "../../context/SearchContext";
import UseFetch from "../../hooks/useFetch";
import "./reserve.scss"

const Reserve = ({ setOpenModal, hotelId }) => {
    const [selectedRooms, setSelectedRooms ] = useState([]);
    const { dates, } = useContext(SearchContext);
    const { data, error, loading } = UseFetch(`/hotel/room/${hotelId}`);
    console.log("data",data);
   

    const handleSelect = (e)=>{
        const checked = e.target.checked;
        const value = e.target.value ;
        setSelectedRooms(checked ?[...selectedRooms,value]:selectedRooms.filter(item=>item !== value));
    };
    console.log(selectedRooms)
  return (
    <div className="reserve">
        <div className="rContainer">
            <span className="rClose" onClick={()=>setOpenModal(false)}>x</span>
            <span>Select your Room:</span>
           {data.map((item)=>(
            <div className="reserve_item">
                <div className="rItemInfo">
                    <div className="rTitle">{item.title}</div>
                    <div className="rDesc">{item.desc}</div>
                    <div className="rMax">Max People:{item.maxPeople}</div>
                       <div className="rPrice">{item.price}</div>
                       <div className="room">
                        {item.roomNumbers.map((roomNumber)=>(
                            <>
                           <label htmlFor="">Roomnumber:{roomNumber.number}</label> 
                           <input type="checkbox" value={roomNumber._id} onChange={handleSelect}/>
                            </>
                        ))}
                       </div>
                </div>
            </div>
           ))}
           <button className="rButton">Reserve Now </button>
        </div>
    </div>
  )
}
export default Reserve