import './Footer.css'
import { GrLinkedin } from 'react-icons/gr';
import { FaGithubSquare } from 'react-icons/fa';
import { FaInstagramSquare } from 'react-icons/fa';
const Footer = () => {
    return(
        <section className="footer">
            <div className="container con-footer">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 column-social">
                        <div className="social-media ">
                          <p className='linkedin-icon'><GrLinkedin /> </p> 
                          <p className='mx-5'><FaGithubSquare /></p> 
                          <p><FaInstagramSquare /></p>
                        </div>
                    </div>
                    </div>
                </div>
            </section>
        
    )
}

export default Footer;  