import React, { useEffect, useState } from "react";
import { collection, query, getDocs } from "firebase/firestore";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import TrackVisibility from "react-on-screen";
import { db } from "../firebase";
import { BallTriangle } from "react-loader-spinner";

export default function Projects() {
  const [project, setProject] = useState([]);

  const fetchProjects = async () => {
    const q = query(collection(db, "projects"));
    const docs = await getDocs(q);
    setProject(docs.docs);
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <section className="project" id="projects">
      {
        <Container>
          <Row>
            <Col size={12}>
              <TrackVisibility>
                {({ isVisible }) => (
                  <div
                    className={
                      isVisible ? "animate__animated animate__fadeIn" : ""
                    }
                  >
                    <h2>Projects</h2>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book.
                    </p>
                    {project.length > 0 ? (
                      <Row className="py-2">
                        {project.map((project, index) => {
                          const { title, description, imgUrl } =
                            project._document.data.value.mapValue.fields;
                          return (
                            <ProjectCard
                              key={index}
                              imgUrl={imgUrl}
                              title={title}
                              description={description}
                            />
                          );
                        })}
                      </Row>
                    ) : (
                      <Container className="d-flex justify-content-center">
                        <BallTriangle color="#00BFFF" height={80} width={80} />
                      </Container>
                    )}
                  </div>
                )}
              </TrackVisibility>
            </Col>
          </Row>
        </Container>
      }

      <img className="background-image-right" alt="background" src={colorSharp2}></img>
    </section>
  );
}
