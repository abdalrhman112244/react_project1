import { Link } from "react-router-dom"
import "./Footer.css"

const Footer = () => {
    return (
        <div className="footer">
            <footer>
                <div className='thefirst-footer'>
                    <div className='h1-p'>
                        <h1>Trippy</h1>
                        <p>Choose your favourite destination.</p>
                    </div>
                    <div className='group-icon'>
                        <Link>
                            <i class="fa-brands fa-facebook-f bi"></i>
                        </Link>
                        <Link>
                            <i class="fa-brands fa-instagram bi"></i>       
                        </Link>
                        <Link>
                            <i class="fa-brands fa-behance bi"></i>
                        </Link>
                        <Link>
                            <i class="fa-brands fa-twitter bi"></i>
                        </Link>
                    </div>
                </div>
                <div className='thesecond-foter'>
                    <div className='ul1'>
                        <h4>Project</h4>
                        <ul>
                            <li>Changelog</li>
                            <li>Status</li>
                            <li>License</li>
                            <li>All Versions</li>
                        </ul>
                    </div>
                    <div className='ul1'>
                        <h4>Community</h4>
                        <ul>
                            <li>GitHub</li>
                            <li>Issues</li>
                            <li>Project</li>
                            <li>Twitter</li>
                        </ul>
                    </div>
                    <div className='ul1'>
                        <h4>Help</h4>
                        <ul>
                            <li>Support</li>
                            <li>Troubleshooting</li>
                            <li>Contact Us</li>
                        </ul>
                    </div>
                    <div className='ul1'>
                        <h4>Others</h4>
                        <ul>
                            <li>Terms of Service</li>
                            <li>Privacy Policy</li>
                            <li>License</li>
                        </ul>
                    </div>

                </div>
            </footer>
        </div>
    )
}

export default Footer