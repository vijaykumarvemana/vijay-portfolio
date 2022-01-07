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
                        <div className="skills-logo"><IoLogoHtml5/></div>
                        <div className="skills-logo"><IoLogoCss3 /></div>
                        <div className="skills-logo"><SiBootstrap /></div>
                        <div className="skills-logo"><IoLogoJavascript /></div>
                        <div className="skills-logo"><RiReactjsLine /></div>
                        <div className="skills-logo"><SiRedux /></div>
                        <div className="skills-logo"><SiTypescript /></div>
                      

                        </div>
                        <div className="skills-container2">
                        
                        <div className="skills-logo"><IoLogoNodejs /></div>
                        <div className="skills-logo"><SiExpress /></div>
                        <div className="skills-logo"><SiMongodb /></div>
                        <div className="skills-logo"><SiPostgresql /></div>
                        <div className="skills-logo"><FaGitAlt /></div>
                        <div className="skills-logo"><FaGithubSquare /></div>
                        <div className="skills-logo"><SiMicrosoftazure /></div>
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