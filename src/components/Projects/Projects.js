import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import TodoList from "../../Assets/Projects/TodoList.png";
import TextUtils from "../../Assets/Projects/TextUtils.png";
import Blood from "../../Assets/Projects/Blood.png";
import Pathfinder from "../../Assets/Projects/Pathfinder.png";
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
            <ProjectCard
              imgPath={Blood}
              isBlog={false}
              title="Blood Bank"
              description="This is a progressive web app which is designed for four roles donar,admin,hospital and organization. It is a platform where donar can donate blood and hospital and organization can request for blood.Organization can also request for blood camp. "
              ghLink="https://github.com/jayprakash6547/Blood-bank-app"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={TodoList}
              isBlog={false}
              title="Todo List"
              description="This is a progressive web app Which allow user to manage task,add,view,update and delete task.Implement user authentication using JWT token and store data in MongoDB."
              ghLink="https://github.com/jayprakash6547/MERN-Todoapp"
              // demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Pathfinder}
              isBlog={false}
              title="Pathfinding Visualizer"
              description="This is a progressive web app which can be used to find the shortest path between two points in a grid. It uses Dijkstra's algorithm to find the shortest path between two points."
              ghLink="https://github.com/jayprakash6547/PathfindingVisualizer"
              demoLink="https://mangalji.netlify.app/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={TextUtils}
              isBlog={false}
              title="Text Utils"
              description="A Progressive Web App which converts the upper case letter to lower case and lowercase letter to upper case letter and many more."
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
