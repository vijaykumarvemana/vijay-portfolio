import "./Education.css"
import { Container, Row, Col } from 'react-bootstrap';
import {MdOutlineCastForEducation, MdOutlineIntegrationInstructions} from "react-icons/md"
import {BiCertification} from "react-icons/bi"
import {FaSlideshare} from "react-icons/fa"
import { Element } from 'react-scroll'

const Education = (props) => {

    return (
        <Element name="education">
        <section className="education">
        <Container>
            <h2 className='text-center pt-4 text-white'>Education</h2>
                <Row md={5} className="project-row" >
                    
                    <Col className="project-cols project-cols1 mt-5">
                    <div className='project-container'>
                        <h3 className='project-title1 '><MdOutlineCastForEducation /></h3>
                        <h5 className="text-center">Academics</h5>
                        <p className='project-description'>Lorem ipsum dolor sit amet ad sd fdgs  bhkd fdka jjflk jaf lanf conse ctetur adipis icing elit. Obcaecati, sunt. lorem10 </p>
                       
                    </div>
                    </Col>
                    
                    <Col className="project-cols mt-5">
                    <div className='project-container'>
                        <h3 className='project-title1 '><MdOutlineIntegrationInstructions /></h3>
                        <h5 className="text-center">Courses</h5>
                        <p className='project-description'>Lorem ipsum dolor sit amet ad sd fdgs  bhkd fdka jjflk jaf lanf conse ctetur adipis icing elit. Obcaecati, sunt. lorem10 </p>
                       
                    </div>
                    </Col>
                    <Col className="project-cols mt-5">
                    <div className='project-container'>
                        <h3 className='project-title1 '>< BiCertification /></h3>
                        <h5 className="text-center">Certifications</h5>
                        <p className='project-description'>Lorem ipsum dolor sit amet ad sd fdgs  bhkd fdka jjflk jaf lanf conse ctetur adipis icing elit. Obcaecati, sunt. lorem10 </p>
                        
                    </div>
                    </Col>
                    <Col className="project-cols mt-5">
                    <div className='project-container'>
                        <h3 className='project-title1 '><FaSlideshare /></h3>
                        <h5 className="text-center">Achievements</h5>
                        <p className='project-description'>Lorem ipsum dolor sit amet ad sd fdgs  bhkd fdka jjflk jaf lanf conse ctetur adipis icing elit. Obcaecati, sunt. lorem10 </p>
                     
                    </div>
                    </Col>
                </Row>
        </Container>
        </section>
        </Element>
    )
}

export default Education;
