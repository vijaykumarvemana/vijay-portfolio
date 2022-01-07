import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import './Projects.css'
import { FiLink} from "react-icons/fi"
import {FiGithub} from "react-icons/fi"
import { Element } from 'react-scroll';

const Projects = () => {
    return(
        <Element name="projects">
        <section className="projects">
            
            <Container>
            <h2 className='text-center pt-4'>Projects</h2>
                <Row md={4} className="project-row" >
                    
                    <Col className="project-col mt-5">
                    <div className='project-container'>
                        <h3 className='project-title'>Project</h3>
                        <p className='project-description'>Lorem ipsum dolor sit amet ad sd fdgs  bhkd fdka jjflk jaf lanf conse ctetur adipis icing elit. Obcaecati, sunt. lorem10 </p>
                        <div className='project-links'>
                        <Button className='links'> <span className="mx-2 "><FiLink /></span>Website</Button>
                        <Button className='links' > <span className="mx-2 "><FiGithub /></span>GitHub</Button>
                        </div>
                    </div>
                    </Col>
                    
                    <Col className="project-col mt-5">
                    <div className='project-container'>
                        <h3 className='project-title'>Project</h3>
                        <p className='project-description'>Lorem ipsum dolor sit amet ad sd fdgs  bhkd fdka jjflk jaf lanf conse ctetur adipis icing elit. Obcaecati, sunt. lorem10 </p>
                        <div className='project-links'>
                        <Button className='links'> <span className="mx-2 "><FiLink /></span>Website</Button>
                        <Button className='links'> <span className="mx-2 "><FiGithub /></span>GitHub</Button>
                        </div>
                    </div>
                    </Col>
                    <Col className="project-col mt-5">
                    <div className='project-container'>
                        <h3 className='project-title'>Project</h3>
                        <p className='project-description'>Lorem ipsum dolor sit amet ad sd fdgs  bhkd fdka jjflk jaf lanf conse ctetur adipis icing elit. Obcaecati, sunt. lorem10 </p>
                        <div className='project-links'>
                        <Button className='links'> <span className="mx-2 "><FiLink /></span>Website</Button>
                        <Button className='links'> <span className="mx-2 "><FiGithub /></span>GitHub</Button>
                        </div>
                    </div>
                    </Col>
                </Row>
                <Row md={4} className="project-row" >
                    
                    <Col className="project-col mt-5">
                    <div className='project-container'>
                        <h3 className='project-title'>Project</h3>
                        <p className='project-description'>Lorem ipsum dolor sit amet ad sd fdgs  bhkd fdka jjflk jaf lanf conse ctetur adipis icing elit. Obcaecati, sunt. lorem10 </p>
                        <div className='project-links'>
                        <Button className='links'> <span className="mx-2 "><FiLink /></span>Website</Button>
                        <Button className='links'> <span className="mx-2 "><FiGithub /></span>GitHub</Button>
                        </div>
                    </div>
                    </Col>
                    
                    <Col className="project-col mt-5">
                    <div className='project-container'>
                        <h3 className='project-title'>Project</h3>
                        <p className='project-description'>Lorem ipsum dolor sit amet ad sd fdgs  bhkd fdka jjflk jaf lanf conse ctetur adipis icing elit. Obcaecati, sunt. lorem10 </p>
                        <div className='project-links'>
                        <Button className='links'> <span className="mx-2 "><FiLink /></span>Website</Button>
                        <Button className='links'> <span className="mx-2 "><FiGithub /></span>GitHub</Button>
                        </div>
                    </div>
                    </Col>
                    <Col className="project-col mt-5">
                    <div className='project-container'>
                        <h3 className='project-title'>Project</h3>
                        <p className='project-description'>Lorem ipsum dolor sit amet ad sd fdgs  bhkd fdka jjflk jaf lanf conse ctetur adipis icing elit. Obcaecati, sunt. lorem10 </p>
                        <div className='project-links'>
                        <Button className='links'> <span className="mx-2 "><FiLink /></span>Website</Button>
                        <Button className='links'> <span className="mx-2 "><FiGithub /></span>GitHub</Button>
                        </div>
                    </div>
                    </Col>
                </Row>
                
                </Container>
                <h6 className='text-center py-5  text-primary git-repos'><a href="https://github.com/vijaykumarvemana?tab=repositories" target="_blank">Repositories on GitHub</a></h6>
                </section>
      </Element>
    )
}

export default Projects;