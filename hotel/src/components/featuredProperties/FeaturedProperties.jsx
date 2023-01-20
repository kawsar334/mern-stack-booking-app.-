import UseFetch from "../../hooks/useFetch"
import "./fproperties.scss"

const FeaturedProperties = () => {
  const { data, loading, error } = UseFetch("/hotel?featured=true&limit=4&min=1&max=200");


  return (
    <div className="fp">

           { loading? <div className="fpItem">LOading please wait.</div> :<>
            {data.map((item, i)=>( <div className="fpItem" key={item._id}>
              <img src={item?.photos[i] || "https://images.pexels.com/photos/14910487/pexels-photo-14910487.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"} alt="" className="fpImg" />
              <span className="fpNam">{item.name} </span>
              <span className="fpCity">{item.city}</span>
              <span className="fpPrice">Starting from <b> ${item.cheapestPrice}</b> </span>
              {item.rating &&<div className="fpRating">
                  <button>{item.rating}</button>
                  <span>Excelent</span>
              </div>}
            </div>)) }
           </>
          
          }

       


    </div>
  )
}

export default FeaturedProperties