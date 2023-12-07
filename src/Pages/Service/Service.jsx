import Hero from "../../components/Hero/Hero"
import hero4 from "./../../assets/img/hero2.webp"
import RecentTrips from "../../components/RecentTrips/RecentTrips";
import "./Service.css";

const Service = () => {
  return (
    <div className="Service">
      <Hero img={hero4} title="Service" />
      <RecentTrips />
    </div>
  )
}

export default Service