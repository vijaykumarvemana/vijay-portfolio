import "./Skills.css"
import { Container, Row, Col } from "react-bootstrap";
import { SiRedux, SiBootstrap, SiTypescript, SiExpress, SiMongodb, SiPostgresql, SiMicrosoftazure} from "react-icons/si";
import { RiReactjsLine } from "react-icons/ri";
import { FaGitAlt, FaGithubSquare } from "react-icons/fa";

import { IoLogoCss3 , IoLogoHtml5, IoLogoJavascript} from "react-icons/io"
import { IoLogoNodejs } from "react-icons/io";
import { Element } from "react-scroll";
const Skills = () => {

    return(
        <Element name="skills">
        <section className="skills">
            <Container >
            <h2 className='text-center  text-white pt-3 title-skills'>Skills</h2>
                <Row>
                
                    <Col className="skills-col">
                        
                    <div className="skills-container1 d-flex">
                        <div className="skills-container2">
                        <div className="skills-logo"><span className="skills-title">HTML5</span><IoLogoHtml5/>
                        
                        </div>
                       
                        <div className="skills-logo"><span className="skills-title">CSS3</span><IoLogoCss3 /></div>
                        <div className="skills-logo"><span className="skills-title">Bootstrap4</span><SiBootstrap /></div>
                        <div className="skills-logo"><span className="skills-title">JavaScript</span><IoLogoJavascript /></div>
                        <div className="skills-logo"><span className="skills-title">ReactJs</span><RiReactjsLine /></div>
                        <div className="skills-logo"><span className="skills-title">Redux</span><SiRedux /></div>
                        <div className="skills-logo"><span className="skills-title">TypeScript</span><SiTypescript /></div>
                      

                        </div>
                        <div className="skills-container2">
                        
                        <div className="skills-logo"><span className="skills-title1">NodeJs</span><IoLogoNodejs /></div>
                        <div className="skills-logo"><span className="skills-title1">ExpressJs</span><SiExpress /></div>
                        <div className="skills-logo"><span className="skills-title1">MongoDB</span><SiMongodb /></div>
                        <div className="skills-logo"><span className="skills-title1">PostgreSQL</span><SiPostgresql /></div>
                        <div className="skills-logo"><span className="skills-title1">Git</span><FaGitAlt /></div>
                        <div className="skills-logo"><span className="skills-title1">GitHub</span><FaGithubSquare /></div>
                        <div className="skills-logo"><span className="skills-title1">Azure</span><SiMicrosoftazure /></div>
                        </div>
                    </div>
                    </Col>
                </Row>
            </Container>

        </section>
        </Element>
    )
}

export default Skills;