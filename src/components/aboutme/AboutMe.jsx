import '../aboutme/AboutMe.css'

import { Col, Container, Row, Button } from "react-bootstrap"
import { BsLinkedin} from "react-icons/bs"
import {FaCloudDownloadAlt} from "react-icons/fa"
import { Element, Link } from 'react-scroll'
import Fade from 'react-reveal/Fade';
import photo from "./photo.jpg"

const AboutMe = () => {
    return (
        <Element name="about-me">
        <section className="about-me">
            <Container>
                <Row>
                    <Col className="pic">
                       <div className='profile-pic-container'>
                           <img src={photo} alt="profile" className="profile-pic"/>
                       </div>
                    </Col>
                    <Col>
                    <div className="about-me-info">
                        <Fade right>
         <h1 className='mb-3 about-link' >About Me </h1>
             <p>I am really social person and I can learn new things really fast. <br/> 
             I am problem solver to finding elegant solutions in the least possible time.
             </p>
        
             <p> The biggest impact on me, was joining Strive-School where I intensively learned how to develop web apps not only Front and Backend wise but aswell how to work within a different Team or Alone.
                </p>
                <a href="https://www.linkedin.com/in/vijay-vemana/" target="_blank"><Button className="button-about-me px-5"> <span className="mx-3 "><BsLinkedin /></span>LinkedIn</Button></a>
                <a href="https://drive.google.com/file/d/1RLeXxX7SEW3CTiPVo2oXPtA_0hRj6STJ/view?usp=sharing" target="_blank"><Button className="button-about-me mx-3 px-5"> <span className="mx-3 "><FaCloudDownloadAlt /></span>Resume</Button></a>
                </Fade>
       </div>
                    </Col>
                </Row>
            </Container>
        </section>
        </Element>
    )
}

export default AboutMe