import UseFetch from "../../hooks/useFetch"
import "./propertylist.scss"

const PropertyList = () => {
  const { data, error, loading } = UseFetch("/hotel/countbytype");
  console.log(error)
  console.log(data)
  const images = [
    "https://images.pexels.com/photos/14281756/pexels-photo-14281756.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load" ,
    "https://images.pexels.com/photos/14281756/pexels-photo-14281756.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load" ,
    "https://images.pexels.com/photos/14281756/pexels-photo-14281756.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load",
    "https://images.pexels.com/photos/14281756/pexels-photo-14281756.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load",
    "https://images.pexels.com/photos/14281756/pexels-photo-14281756.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"

  ]
  return (
    <div className="pList">
{  loading ? "Loading please wait...": <>
        
        
        {data && images.map((img,i)=>(

          
          <div className="plistItem" key={i}>
              <img src={img}alt="" />
          <h1>{data[i]?.type} </h1>
          <h2>{data[i]?.count} {data[i]?.type}</h2>
          </div>
            ))}
      </>}
    </div>
  )
}

export default PropertyList