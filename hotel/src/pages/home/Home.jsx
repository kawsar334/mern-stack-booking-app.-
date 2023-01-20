import "./home.scss";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import Featured from "../../components/featured/Featured";
import PropertyList from "../../components/propertyList/PropertyList";
import FeaturedProperties from "../../components/featuredProperties/FeaturedProperties";
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer"

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <Header />
      <div className="hoomeContainer">
        <Featured />
        <h1 className="homeTitle">Brows by property List </h1>
        <PropertyList />
        <h1 className="homeTitle">Home guests Love  </h1>
        <FeaturedProperties />
        <MailList />
        <Footer />
      </div>
    </div>
  )
}

export default Home