import "./Skills.css"
import { Container, Row, Col } from "react-bootstrap";
import { SiRedux, SiBootstrap, SiTypescript, SiExpress, SiMongodb, SiPostgresql, SiMicrosoftazure} from "react-icons/si";
import { RiReactjsLine } from "react-icons/ri";
import { FaGitAlt, FaGithubSquare } from "react-icons/fa";

import { IoLogoCss3 , IoLogoHtml5, IoLogoJavascript} from "react-icons/io"
import { IoLogoNodejs } from "react-icons/io";
const Skills = () => {

    return(
        <section className="skills">
            <Container>
                <Row>
                    <Col>
                        <div className="skills-container">
                            <h2 className="skills-title">Skills</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, a!</p>
                        </div>    
                    </Col>
                    <Col>
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
    )
}

export default Skills;