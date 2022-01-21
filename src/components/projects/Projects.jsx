import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import './Projects.css'
import { FiLink} from "react-icons/fi"
import {FiGithub} from "react-icons/fi"
import { Element } from 'react-scroll';
import image from "./dashboard-image.jpg"
import project1 from "./vedogames.jpg"
import project2 from "./travel.jpg"
const Projects = () => {
    return(
        <Element name="projects">
        <section className="projects">
            
            <Container>
            <h2 className='text-center pt-4'>Projects</h2>
                <Row md={4} className="project-row" >
                    
                    <Col className="project-col mt-5">
                    <div className='project-container'>
                        <h3 className='project-title '>CRM Dashboard</h3>
                        <div className="img-hover-zoom img-hover-zoom--colorize"><img src={image} /> 
                        
                        </div>
                        <p>Skills:</p>
                        <div className='mb-2'><span className='tech'>React</span>
                        <span className='tech'>Redux</span>
                        <span className='tech'>Node</span>
                        <span className='tech'>Express</span><br/></div>
                         <div> 
                             <span className='tech my-1'>MongoDB</span>
                             <span className='tech'>Recharts</span>
                             <span className='tech'>MUI</span>
                         </div>
                       
                       
                        
                        <div className='project-links'>
                        <a href='https://frontend-admin-dashboard-rho.vercel.app/' target="_blank"><Button className='links'> <span className="mx-2 "><FiLink /></span>Website</Button></a>
                        <a href='https://github.com/vijaykumarvemana/frontend-admin-dashboard' target="_blank"><Button className='links' > <span className="mx-2 "><FiGithub /></span>GitHub</Button></a>
                        </div>
                    </div>
                    </Col>
                    
                    <Col className="project-col mt-5">
                    <div className='project-container'>
                    <h3 className='project-title '>Video Game Sales</h3>
                        <div className="img-hover-zoom img-hover-zoom--colorize"><img src={project1} /> 
                        
                        </div>
                        <p className='mt-2'>Skills:</p>
                        <div className='mb-2'><span className='tech'>React</span>
                        <span className='tech'>Redux</span>
                        <span className='tech'>Node</span>
                        <span className='tech'>Express</span><br/></div>
                         <div> 
                             <span className='tech my-1'>MongoDB</span>
                             <span className='tech'>Recharts</span>
                             <span className='tech'>MUI</span>
                         </div>
                       
                       
                        
                        <div className='project-links'>
                        <a href='https://video-game-sale-project.vercel.app/' target="_blank"><Button className='links'> <span className="mx-2 "><FiLink /></span>Website</Button></a>
                        <a href='https://github.com/vijaykumarvemana/frontend-admin-dashboard' target="_blank"><Button className='links' > <span className="mx-2 "><FiGithub /></span>GitHub</Button></a>
                        </div>
                    </div>
                    </Col>
                    <Col className="project-col mt-5">
                    <div className='project-container'>
                    <h3 className='project-title '>Travel</h3>
                        <div className="img-hover-zoom img-hover-zoom--colorize"><img src={project2} /> 
                        
                        </div>
                        <p className='my-2 mb-3'>Skills:</p>
                        <div className='my-3'><span className='tech'>HTML5</span>
                        <span className='tech'>CSS3</span>
                        <span className='tech mb-4'>JavaScript</span>
                        
                       
                       </div>
                       
                        
                        <div className='project-links my-5'>
                        <a href='https://travel-six-eta.vercel.app/' target="_blank"><Button className='links'> <span className="mx-2 "><FiLink /></span>Website</Button></a>
                        <a href='https://github.com/vijaykumarvemana/travel' target="_blank"><Button className='links' > <span className="mx-2 "><FiGithub /></span>GitHub</Button></a>
                        </div>
                    </div>
                    </Col>
                </Row>
                <Row md={4} className="project-row" >
                    
                    <Col className="project-col mt-5">
                    <div className='project-container'>
                    <h3 className='project-title '>CRM Dashboard</h3>
                        <div className="img-hover-zoom img-hover-zoom--colorize"><img src={image} /> 
                        
                        </div>
                        <p>Skills:</p>
                        <div className='mb-2'><span className='tech'>React</span>
                        <span className='tech'>Redux</span>
                        <span className='tech'>Node</span>
                        <span className='tech'>Express</span><br/></div>
                         <div> 
                             <span className='tech my-1'>MongoDB</span>
                             <span className='tech'>Recharts</span>
                             <span className='tech'>MUI</span>
                         </div>
                       
                       
                        
                        <div className='project-links'>
                        <a href='https://frontend-admin-dashboard-rho.vercel.app/' target="_blank"><Button className='links'> <span className="mx-2 "><FiLink /></span>Website</Button></a>
                        <a href='https://github.com/vijaykumarvemana/frontend-admin-dashboard' target="_blank"><Button className='links' > <span className="mx-2 "><FiGithub /></span>GitHub</Button></a>
                        </div>
                    </div>
                    </Col>
                    
                    <Col className="project-col mt-5">
                    <div className='project-container'>
                    <h3 className='project-title '>CRM Dashboard</h3>
                        <div className="img-hover-zoom img-hover-zoom--colorize"><img src={image} /> 
                        
                        </div>
                        <p>Skills:</p>
                        <div className='mb-2'><span className='tech'>React</span>
                        <span className='tech'>Redux</span>
                        <span className='tech'>Node</span>
                        <span className='tech'>Express</span><br/></div>
                         <div> 
                             <span className='tech my-1'>MongoDB</span>
                             <span className='tech'>Recharts</span>
                             <span className='tech'>MUI</span>
                         </div>
                       
                       
                        
                        <div className='project-links'>
                        <a href='https://frontend-admin-dashboard-rho.vercel.app/' target="_blank"><Button className='links'> <span className="mx-2 "><FiLink /></span>Website</Button></a>
                        <a href='https://github.com/vijaykumarvemana/frontend-admin-dashboard' target="_blank"><Button className='links' > <span className="mx-2 "><FiGithub /></span>GitHub</Button></a>
                        </div>
                    </div>
                    </Col>
                    <Col className="project-col mt-5">
                    <div className='project-container'>
                    <h3 className='project-title '>CRM Dashboard</h3>
                        <div className="img-hover-zoom img-hover-zoom--colorize"><img src={image} /> 
                        
                        </div>
                        <p>Skills:</p>
                        <div className='mb-2'><span className='tech'>React</span>
                        <span className='tech'>Redux</span>
                        <span className='tech'>Node</span>
                        <span className='tech'>Express</span><br/></div>
                         <div> 
                             <span className='tech my-1'>MongoDB</span>
                             <span className='tech'>Recharts</span>
                             <span className='tech'>MUI</span>
                         </div>
                       
                       
                        
                        <div className='project-links'>
                        <a href='https://frontend-admin-dashboard-rho.vercel.app/' target="_blank"><Button className='links'> <span className="mx-2 "><FiLink /></span>Website</Button></a>
                        <a href='https://github.com/vijaykumarvemana/frontend-admin-dashboard' target="_blank"><Button className='links' > <span className="mx-2 "><FiGithub /></span>GitHub</Button></a>
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