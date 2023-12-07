import Hero from "../../components/Hero/Hero"
import hero2 from "./../../assets/img/contact.jpg"
import "./Contact.css";

const Contact = () => {
  return (
    <div className="Contact">
      <Hero img={hero2} title="Contact" />
      <section className="Send">
        <h1 className="header-incontact">Send a message to us!</h1>
        <form action="" className="form">
          <input type="text" placeholder="Name" />
          <input type="text" placeholder="Email" />
          <input type="text" placeholder="Subject" />
          <textarea placeholder="Massege"></textarea>
          <button>Send Massege</button>
        </form>
      </section>
    </div>
  )
}

export default Contact