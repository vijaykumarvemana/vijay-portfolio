import '../aboutme/AboutMe.css'

import { Col, Container, Row, Button } from "react-bootstrap"
import { BsLinkedin} from "react-icons/bs"
import {FaCloudDownloadAlt} from "react-icons/fa"
import { Element, Link } from 'react-scroll'

const AboutMe = () => {
    return (
        <Element name="about">
        <section className="about-me">
            <Container>
                <Row>
                    <Col>
                    
                    </Col>
                    <Col>
                    <div className="about-me-info">
         <h1 className='mb-3' >About Me </h1>
             <p> I am passionate about everything javascript.<br/> 
             I am a hardworking full-stack web developer with a flair for finding <br />
             elegant solutions in the least possible time.
             </p>
        
             <p>I am looking for opportunities to learn new technologies and build <br />
             my technical skills in a team-oriented atmosphere.
                </p>
                <a href="https://www.linkedin.com/in/vijay-vemana/" target="_blank"><Button className="button-about-me px-5"> <span className="mx-3 "><BsLinkedin /></span>LinkedIn</Button></a>
                <Button className="button-about-me mx-3 px-5"> <span className="mx-3 "><FaCloudDownloadAlt /></span>Resume</Button>
       </div>
                    </Col>
                </Row>
            </Container>
        </section>
        </Element>
    )
}

export default AboutMe