import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import './Projects.css'
import { BsLinkedin} from "react-icons/bs"
import {FaCloudDownloadAlt} from "react-icons/fa"

const Projects = () => {
    return(
        <section className="projects">
            <Container>
                <Row>
                    <Col className="project-col">
                    <div className='project-container'>
                        <h3 className='project-title'>Project</h3>
                        <p className='project-description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, sunt. lorem10</p>
                        <div className='project-links'>
                        <Button className=" px-1"> <span className="mx-3 "><BsLinkedin /></span>LinkedIn</Button>
                        <Button className=" mx-1 px-1"> <span className="mx-3 "><FaCloudDownloadAlt /></span>Resume</Button>
                        </div>
                    </div>
                    </Col>
                    
                    <Col>
                    <div className='project-container'>
                        <h3 className='project-title'>Project</h3>
                        <p className='project-description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, sunt. lorem10</p>
                        <div className='project-links'>
                        <Button className="button px-5"> <span className="mx-3 "><BsLinkedin /></span>LinkedIn</Button>
                        <Button className="button mx-3 px-5"> <span className="mx-3 "><FaCloudDownloadAlt /></span>Resume</Button>
                        </div>
                    </div>
                    </Col>
                    <Col>
                    <div className='project-container'>
                        <h3 className='project-title'>Project</h3>
                        <p className='project-description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, sunt. lorem10</p>
                        <div className='project-links'>
                        <Button className="button1 px-5"> <span className="mx-3 "><BsLinkedin /></span>LinkedIn</Button>
                        <Button className="button1 mx-3 px-5"> <span className="mx-3 "><FaCloudDownloadAlt /></span>Resume</Button>
                        </div>
                    </div>
                    </Col>
                </Row>
                </Container>
                </section>
      
    )
}

export default Projects;