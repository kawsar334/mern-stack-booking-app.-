import { useState } from "react";
import { useLocation } from "react-router-dom";
import { Calendar, DateRange } from 'react-date-range';
import { format } from "date-fns";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import ListResult from "../../components/listSearch/ListResult";
import Navbar from "../../components/navbar/Navbar";
import "./list.scss";
import UseFetch from "../../hooks/useFetch";
const List = () => {
  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination);
  const [dates, setDates] = useState(location.state.dates);
  const [options, setOptions] = useState(location.state.options);
  const [dateOpen, setDateOpen] = useState(false);
  const [max, setMax] = useState(undefined);
  const [min , setMin] = useState(undefined)
 const {data, loading, error,refetch} = UseFetch(`/hotel/?city=${destination}`);

  const handleClick = (e)=>{
    e.preventDefault();
    refetch(`/hotel/?city=${destination}&min=${min ||1}&max=${max ||999}`)
    
  }
  return (
    <div className="list">
      <Navbar />
      <Header  type="list"/>
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="searchTitle">Search</h1>
            <div className="ls_item">
              <label htmlFor="">Destination:</label>
              <input type="text" value={destination}  />
            </div>
            <div className="ls_item">
              <label htmlFor="">Check-in Date:</label>
              <span onClick={() => setDateOpen(!dateOpen)} >
                {/* {`${format(dates[0]?.startDate, "MM/dd/yy")} to ${format(dates[0]?.endDate, "MM/dd/yy")}`} */}
                {`${format(
                  dates[0].startDate,
                  "MM/dd/yyyy"
                )} to ${format(dates[0].endDate, "MM/dd/yyyy")}`}
                
                 </span>
              {dateOpen &&<div className="listCalender">
              <DateRange
                 onChange={(item)=>setDates([item.selection]) }
                  minDate={new Date()}
                  ranges={dates}
                  
                   />
              </div>}
            </div>
            <div className="ls_item">
              <label htmlFor="">Options:</label>
              <div className="listSearchOptionItem">
                <span className="listopt">Min price <small>Per night </small></span>
                <input type="number" className="lsInput" min={0} onChange={(e)=>setMin(e.target.value)}/>
              </div>
              <div className="listSearchOptionItem">
                <span className="listopt">Max price <small>Per night </small></span>
                <input type="number" className="lsInput"  min={0} onChange={(e)=>setMax(e.target.value)}/>
              </div>
              <div className="listSearchOptionItem">
                <span className="listopt">Adult:</span>
                <input type="number" className="lsInput" placeholder={options.adult} min={1} />
              </div>

              <div className="listSearchOptionItem">
                <span className="listopt">children:</span>
                <input type="number"  placeholder={options.children} className="lsInput"  min={1}/>
              </div>
              <div className="listSearchOptionItem">
                <span className="listopt">room:</span>
                <input type="number" className="lsInput" placeholder={options.room} min={1}/>
              </div>
            </div>
            <button className="list_btn" onClick={handleClick}>Search</button>
          </div>
          <div className="letResult">
            {/* <h1>list search </h1> */}
            {loading ? "Loading...":
            <>
            {data.map((item)=>(
              <ListResult item={item} key={item._id} />
            )) }
            </>
            }
           

          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default List