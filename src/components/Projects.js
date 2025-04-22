import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import pro1 from "../assets/img/pro1.png";
import pro2 from "../assets/img/pro2.png";
import pro3 from "../assets/img/pro3.png";
import pro4 from "../assets/img/pro4.png";
import pro5 from "../assets/img/pro5.png";
import pro6 from "../assets/img/pro6.png";
import pro7 from "../assets/img/pro7.png";
import pro8 from "../assets/img/pro8.png";
import pro9 from "../assets/img/pro9.png";
// pyhton projects images
import py1 from "../assets/img/py1.png";
import py2 from "../assets/img/py2.png";
import py3 from "../assets/img/py3.png";
import py4 from "../assets/img/py4.png";
import py5 from "../assets/img/py5.png";
import py6 from "../assets/img/py6.png";



import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';


export const Projects = () => {

  const pythonProjects = [
    {
      title: "Secure Data Encryption",
      description: "Built using Python & Streamlit",
      imgUrl: py6,
      link: "https://secure-data-encryption-app-with-python.streamlit.app",
    },
    
  {
    title: "Unit Convertor",
    description: "Built using Python & Streamlit",
    imgUrl: py1, // change to actual image
    link: "https://unit-convertor-project-with-python.streamlit.app",
  },
  {
    title: "Personal Library Manager",
    description: "Built using Python & Streamlit",
    imgUrl: py2,
    link: "https://personal-library-manage-with-python.streamlit.app",
  },
  {
    title: "Expence Tracker",
    description: "Built using Python & Streamlit",
    imgUrl: py3,
    link: "https://python-project-f9rzzoyqmzritkautpfrxn.streamlit.app",
  },
  {
    title: "Password Strength Checker",
    description: "Built using Python & Streamlit",
    imgUrl: py4,
    link: "https://pasword-strength-project-with-python.streamlit.app",
  },
  {
    title: "Data Sweeper ",
    description: "Built using Python & Streamlit",
    imgUrl: py5,
    link: "https://datacleaning-xovzpuh79hns8jvadxabkb.streamlit.app",
  },
 
];


  const projects = [
    {
      title: "Ecomerce Website",
      description: "Design & Development",
      imgUrl: pro1,
      link : "https://hackathon-q2-project-lilac.vercel.app"
    },
    {
      title: "Portfolio Website",
      description: "Design & Development",
      imgUrl: pro9,
      link : "https://portfolio-web-suhail-khan.vercel.app"
    },

    {
      title: "Admin Dashboard",
      description: "Design & Development",
      imgUrl: pro2,
      link : "https://admin-dashboard-by-sk.vercel.app"
    },
    {
      title: "Calculator",
      description: "Design & Development",
      imgUrl: pro3,
      link : "https://simple-calculator-by-sk.vercel.app"
    },
    {
      title: "Myantra web clone ",
      description: "Design & Development",
      imgUrl: pro8,
      link: "https://core-html-css-web-five.vercel.app/"
    },
    {
      title: "Simple Web with Html css js",
      description: "Design & Development",
      imgUrl: pro4,
      link : "https://ecom-web-with-css.vercel.app/"
    },

    {
      title: "Html css",
      description: "Design & Development",
      imgUrl: pro5,
      link : " https://portfolio-with-css-suhail.vercel.app"
    },
    {
      title: "Resume Builder",
      description: "Design & Development",
      imgUrl: pro6,
      link: " https://milestone-5-dynamic-resume-one.vercel.app/"
    },
    
    
    {
      title: "Resume",
      description: "Design & Development",
      imgUrl: pro7,
      link: "https://milestone-1-static-resume-beta.vercel.app/"
    },
  ];

  return (
    <section className="project  " id="projects">
      <Container >
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>A collection of practical projects developed using a range of technologies including Next.js, HTML/CSS/Ts, and Python & Streamlit. Each project was built with a focus on functionality, clean UI, and real-world use cases.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">FRONTEND PROJECTS</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                    <Nav.Link eventKey="second"> </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">PYTHON PROJECTS</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p>Python and Streamlit Projects.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                    <Row>
                        {
                          pythonProjects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                      <p>Python and Streamlit Projects.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}



