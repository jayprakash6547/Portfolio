import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import TodoList from "../../Assets/Projects/TodoList.png";
import TextUtils from "../../Assets/Projects/TextUtils.png";
import Blood from "../../Assets/Projects/Blood.png";
import Pathfinder from "../../Assets/Projects/Pathfinder.png";
import Socialmedia from "../../Assets/Projects/Socialmedia.png";
import SupplyChain from "../../Assets/Projects/SupplyChain.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard imgPath={SupplyChain}
              isBlog={false}
              title="Supply Chain Management System"
              description="Built a system to track goods, information, and finances from suppliers to customers. It streamlines operations like purchasing, production, and logistics, improving efficiency and collaboration. Real-time data helps make smarter decisions, forecast demand, and optimize the supply chain for better customer satisfaction and profit."
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Blood}
              isBlog={false}
              title="Blood Bank"
              description="Developed a web app connecting blood donors, hospitals, and organizations. Donors can easily register to give blood, while hospitals and organizations can request blood supplies or organize donation camps. Designed with specific roles for donors, admins, hospitals, and organizations."
              ghLink="https://github.com/jayprakash6547/Blood-bank-app"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Socialmedia}
              isBlog={false}
              title="Social Media"
              description="Created a social media web app with a focus on a smooth user experience and a clean interface. Implemented strong security features to keep user data safe and ensure secure communication on the platform."
              ghLink="https://github.com/jayprakash6547/Social-Media-App"
            />
          </Col>
        </Row> 

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={TodoList}
              isBlog={false}
              title="Todo List"
              description="A simple web app to help you manage your daily tasks. Add, view, update, and delete tasks easily. Features secure user login using JWT tokens and stores your data reliably in MongoDB."
              ghLink="https://github.com/jayprakash6547/MERN-Todoapp"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Pathfinder}
              isBlog={false}
              title="Pathfinding Visualizer"
              description="Explore pathfinding algorithms visually! This web app demonstrates Dijkstra's algorithm finding the shortest route between two points on a grid. A fun way to see how these algorithms work."
              ghLink="https://github.com/jayprakash6547/PathfindingVisualizer"
              demoLink="https://mangalji.netlify.app/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={TextUtils}
              isBlog={false}
              title="Text Utils"
              description="A handy web app for quick text transformations. Easily convert text between uppercase and lowercase, and perform other useful text manipulations."
              ghLink="https://github.com/jayprakash6547/TextUtils"
              demoLink="https://jayprakash6547.github.io/TextUtils/"
            />
          </Col>

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
