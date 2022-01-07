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
                    
                    <Col className="project-cols project-cols1 my-5">
                    <div className='project-container'>
                        <h3 className='project-title1 '><MdOutlineCastForEducation /></h3>
                        <h5 className="text-center">Academics</h5>
                        <p className="text-center">Master's</p>
                        <div className="academics mb-2">
                        <p className='project-description text-center mt-1'>Computer Engineering Sapienza University of Rome Mar 2022 , Rome, Italy. </p>
                        </div>
                        <p className="text-center">Bachelor's</p>
                        <div className="academics  mb-2">
                        <p className='project-description text-center mt-1'>Computer Science<br/> Sri Krishnadevaraya University Apr 2016 , India, Ananthapur. </p>
                        </div>
                       
                    </div>
                    </Col>
                    
                    <Col className="project-cols my-5">
                    <div className='project-container'>
                        <h3 className='project-title1 '><MdOutlineIntegrationInstructions /></h3>
                        <h5 className="text-center">Courses</h5>
                       
                        <p className="text-center">Training</p>
                        <div className="academics  mb-2">
                        <p className='project-description text-center mt-1'>Full Stack Developer<br/> Strive School <br/> Dec 2021 , Germany, Berlin. </p>
                        </div>
                        <p className="text-center">Structure</p>
                        <div className="academics  mb-2">
                        <p className='project-description text-center mt-1'>Frontend & Backend <br/>Databases & Agile Methodologies & Team Work. </p>
                        </div>
                       
                    </div>
                    </Col>
                    <Col className="project-cols my-5">
                    <div className='project-container'>
                        <h3 className='project-title1 '>< BiCertification /></h3>
                        <h5 className="text-center">Certifications</h5>
                        <p className="text-center">CI/CD</p>
                        <div className="academics  mb-2">
                        <p className='project-description text-center mt-1'>Certified Jenkins Engineer<br/> CloudBees <br/> Nov 2020. </p>
                        </div>
                        <p className="text-center">Cloud</p>
                        <div className="academics  mb-2">
                        <p className='project-description text-center mt-1'>Microsoft Azure Administrator<br/>Microsoft  <br/> Feb 2021. </p>
                        </div>
                        
                    </div>
                    </Col>
                    <Col className="project-cols my-5">
                    <div className='project-container'>
                        <h3 className='project-title1 '><FaSlideshare /></h3>
                        <h5 className="text-center">Achievements</h5>
                        <p className="text-center">Challenge</p>
                        <div className="academics  mb-2">
                        <p className='project-description text-center mt-1'>MSUS Cloud Skills <br/> Successfully completed  <br/> Feb 2021. </p>
                        </div>
                     
                    </div>
                    </Col>
                </Row>
        </Container>
        </section>
        </Element>
    )
}

export default Education;
