import Hero from "../../components/Hero/Hero"
import PopularDestinations from "../../components/PopularDestinations/PopularDestinations";
import RecentTrips from "../../components/RecentTrips/RecentTrips";
import hero1 from "./../../assets/img/home.avif"
import "./Home.css";

const Home = () => {
  return (
    <div className="Home">
      <Hero img={hero1}
       title="Your Journey Your Story"
       des="Choose Your Favourite Dest"
       btn="travel now"/>
       <PopularDestinations />
       <RecentTrips />
    </div>
  )
}

export default Home