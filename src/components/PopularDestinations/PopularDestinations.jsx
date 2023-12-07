import "./PopularDestinations.css";
import img1 from "./../../assets/img/section1.jpg";
import img2 from "./../../assets/img/section2.jpg";
import img3 from "./../../assets/img/section3.jpg";
import img4 from "./../../assets/img/section4.jpg";

const PopularDestinations = () => {
  return (
    <section className="PopularDestinations">
        <div className="h1-p">
            <h1>Popular Destinations</h1>
            <p>Tours give you the opportunity to see a lot, within a time frame.</p>  
        </div>
        <div className="text-img">
            <div className="text">
                <h3>Taal Volcano, Batangas</h3>
                <p>One of the most iconic views in Luzon, Mt. Taal boasts a volcano inside a lake inside an island. If you fancy a closer look, the hike up to the crater is a mere 45 minutes, and is easy enough for beginners. Guides will assist you most of the way, and you’ll see the peculiar environment found on an active volcano, including volcanic rocks and steam vents. The hike can be dusty and hot, so plan for an early morning trip, and then unwind with some bulalo before heading back home!</p>
            </div>
            <div className="img">
                <img src={img1} alt="" />
                <img src={img2} alt="" />
            </div>
        </div>
        <div className="text-img">
            <div className="img">
                <img src={img3} alt="" />
                <img src={img4} alt="" />
            </div>
            <div className="text">
                <h3>Taal Volcano, Batangas</h3>
                <p>One of the most iconic views in Luzon, Mt. Taal boasts a volcano inside a lake inside an island. If you fancy a closer look, the hike up to the crater is a mere 45 minutes, and is easy enough for beginners. Guides will assist you most of the way, and you’ll see the peculiar environment found on an active volcano, including volcanic rocks and steam vents. The hike can be dusty and hot, so plan for an early morning trip, and then unwind with some bulalo before heading back home!</p>
            </div>
        </div>
    </section>
  )
}

export default PopularDestinations