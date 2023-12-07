import "./RecentTrips.css";
import img1 from "./../../assets/img/section2.1.jpg";
import img2 from "./../../assets/img/section2.2.jpg";
import img3 from "./../../assets/img/section2.3.jpg";

const RecentTrips = () => {
  return (
    <section className="RecentTrips">
        <div className="h1-p">
            <h1>Recent Trips</h1>
            <p>You can discover unique destinations using Google Maps.</p>
        </div>
        <div className="container">
            <div className="card">
                <img src={img1} alt="" />
                <h5>Trip in Indonesia</h5>
                <p>Indonesia, is a country in Southeast Asia and Oceania between the Indian and Pacific oceans. It consists of over 17,000 islands, including Sumatra, Java, Sulawesi, and parts of Borneo and New Guinea.</p>
            </div>
            <div className="card">
                <img src={img2} alt="" />
                <h5>Trip in Malaysia</h5>
                <p>Malaysia is a Southeast Asian country occupying parts of the Malay Peninsula and the island of Borneo. It's known for its beaches, rainforests and mix of Malay, Chinese, Indian and European cultural influences.</p>
            </div>
            <div className="card">
                <img src={img3} alt="" />
                <h5>Trip in France</h5>
                <p>France, in Western Europe, encompasses medieval cities, alpine villages and Mediterranean beaches. Paris, its capital, is famed for its fashion houses, classical art museums including the Louvre and monuments like the Eiffel Tower.</p>
            </div>
        </div>
    </section>
  )
}

export default RecentTrips