import  "./hotel.scss";
import Footer from "../../components/footer/Footer"
import Header from "../../components/header/Header"
import MailList from "../../components/mailList/MailList"
import Navbar from "../../components/navbar/Navbar"
import { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom"
import UseFetch from "../../hooks/useFetch"
import { SearchContext } from "../../context/SearchContext"
import { AuthContext } from "../../context/AuthContext"
import Reserve from "../../components/reserve/Reserve";

const Hotel = () => {
  const { user } = useContext(AuthContext);
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const path = useLocation().pathname.split("/")[2];
  const navigate = useNavigate();
  const {data, error, loading} = UseFetch(`/hotel/find/${path}`);
  const { dates, } = useContext(SearchContext);
  

  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true);
  };

  const handleMove = (direction) => {
    let newSlideNumber;

    if (direction === "l") {
      newSlideNumber = slideNumber === 0 ? data.photos.length-1 : slideNumber - 1;
    } else {
      newSlideNumber = slideNumber === data.photos.length-1 ? 0 : slideNumber + 1;
    }

    setSlideNumber(newSlideNumber)
  };


  //handling reservation function 
  const handleClick = (e)=>{
    e.preventDefault();
    if(user){
      setOpenModal(true);

    }else{
      navigate("/login");
    }

  }

  return (
    <div>
      <Navbar />
      <Header type="list" />
      {loading ? "Loading... please wait...":<><div className="hotelContainer">
        {open && (
          <div className="slider">
           
            <span className="close" onClick={() => setOpen(false)}>x</span>
            <i class="fa-solid fa-arrow-left arrow" onClick={() => handleMove("l")}></i>
          
            <div className="sliderWrapper">
              <img src={data.photos[slideNumber]} alt="" className="sliderImg" />
            </div>
          
            <i class="fa-solid fa-arrow-right arrow" onClick={() => handleMove("r")}></i>
          </div>
        )}
        <div className="hotelWrapper">
          <button className="bookNow" onClick={handleClick}>Reserve or Book Now!</button>
          <h1 className="hotelTitle">{data.name}</h1>
          <div className="hotelAddress">
            {/* <FontAwesomeIcon icon={faLocationDot} /> */}
            <span>{data.address}</span>
          </div>
          <span className="hotelDistance">
            Excellent location {data.distance} from center
          </span>
          <span className="hotelPriceHighlight">
            Book a stay over ${data.cheapestPrice} at this property and get a free airport taxi
          </span>
          <div className="hotelImages">
            {data.photos?.map((photo, i) => (
              <div className="hotelImgWrapper" key={i}>
                <img
                  onClick={() => handleOpen(i)}
                  src={photo.src}
                  alt="Loding..."
                  className="hotelImg"
                />
              </div>
            ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsTexts">
              <h1 className="hotelTitle">Stay in the heart of City</h1>
              <p className="hotelDesc">
                {data.desc}
              </p>
            </div>
            <div className="hotelDetailsPrice">
              <h1>Perfect for a 9-night stay!</h1>
              <span>
                Located in the real heart of Krakow, this property has an
                excellent location score of 9.8!
              </span>
              <h2>
                <b>$945</b> (9 nights)
              </h2>
              <button onClick={handleClick}>Reserve or Book Now!</button>
            </div>
          </div>
        </div>
        <MailList />
        <Footer />
      </div></>}
      {openModal &&<div className="reserveContainer">
        <Reserve setOpenModal={setOpenModal} hotelId={path}/> </div>}
    </div>
  );
};

export default Hotel;