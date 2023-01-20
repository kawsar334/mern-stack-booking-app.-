import UseFetch from "../../hooks/useFetch";
import  "./featured.scss";

const Featured = () => { 

    const { data, loading, error, refetch } = UseFetch("/hotel/countbycity?cities=jedda,london,taif")
    
  return (
    <div className="featured">
     { loading ?<div className="loading">Loading please wait.. </div> : <>
          <div className="featuredItem">
              <img src="https://images.pexels.com/photos/14056300/pexels-photo-14056300.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load" alt="" />
              <div className="featuredTitles">
                  <h1>Jeddah </h1>
                  <h2>{data[0]} properties </h2>
              </div>
          </div>
          <div className="featuredItem">
                  <img src="https://images.pexels.com/photos/5659779/pexels-photo-5659779.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
              <div className="featuredTitles">
                  <h1>London </h1>
                  <h2>{data[1]} properties </h2>
              </div>
          </div>
          <div className="featuredItem">
                  <img src="https://images.pexels.com/photos/96444/pexels-photo-96444.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
              <div className="featuredTitles">
                  <h1>Taif </h1>
                  <h2>{data[2]} properties </h2>
              </div>
          </div>
        </>}
    </div>
  )
}

export default Featured