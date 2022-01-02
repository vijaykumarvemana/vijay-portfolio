import '../aboutme/AboutMe.css'

import { Col, Container, Row, Button } from "react-bootstrap"
import { BsLinkedin} from "react-icons/bs"
import {FaCloudDownloadAlt} from "react-icons/fa"

const AboutMe = () => {
    return (
        <section className="about-me">
            <Container>
                <Row>
                    <Col>
                    <img src='' alt="undraw_static_assets_rpm6" className="img-fluid" />
                    </Col>
                    <Col>
                    <div className="about-me-info">
         <h1 className='mb-3' >About Me </h1>
             <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati, sunt. lorem10
                ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati, sunt. lorem10
             </p>
        
             <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati, sunt. lorem10
                ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati, sunt. lorem10
                </p>
                <Button className="button px-5"> <span className="mx-3 "><BsLinkedin /></span>LinkedIn</Button>
                <Button className="button mx-3 px-5"> <span className="mx-3 "><FaCloudDownloadAlt /></span>Resume</Button>
       </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default AboutMe