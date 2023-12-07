import './HeroStyle.css'
const Hero = ({img , title , des , btn}) => {
    return (
        <div className="hero">
            <img src={img} alt="" />
            <div className="info">
                <h1>{title}</h1>
                <p>{des}</p>
                <button>{btn}</button>
            </div>
        </div>
    )
}

export default Hero