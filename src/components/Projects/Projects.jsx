import React, { useContext, useEffect, useState } from 'react';
import Fade from 'react-reveal/Fade';
import Tilt from 'react-tilt';
import { Container, Row, Col } from 'react-bootstrap';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';
import ProjectImg from '../Image/ProjectImg';
import Popup from './PopupProjects';
import Popup2 from './PopupProjects2';
import Popup3 from './PopupProjects3';
import { projectsData } from '../../mock/data';

const Projects = () => {
  const { projects } = useContext(PortfolioContext);

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);


  const togglePopup = () => {
    setIsOpen(!isOpen);
  }

  const togglePopup2 = () => {
    setIsOpen2(!isOpen2);
  }

  const togglePopup3 = () => {
    setIsOpen3(!isOpen3);
  }
  
  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);
            const title1 = projectsData[0].title;
            const info1 = projectsData[0].info;
            const info21 = projectsData[0].info2;
            const url1 = projectsData[0].url;
            const img1 = projectsData[0].img;
            const repo1 = projectsData[0].repo;
            const img21 = projectsData[0].img2;
            const id1 = projectsData[0].id;

            const title = projectsData[1].title;
            const info = projectsData[1].info;
            const info2 = projectsData[1].info2;
            const url = projectsData[1].url;
            const img = projectsData[1].img;
            const repo = projectsData[1].repo;
            const img22 = projectsData[1].img2;
            const id = projectsData[1].id;

            const title3 = projectsData[2].title;
            const info3 = projectsData[2].info;
            const url3 = projectsData[2].url;
            const img3 = projectsData[2].img2;
            const repo3 = projectsData[2].repo;
            const img23 = projectsData[2].img2;
            const id3 = projectsData[2].id;

  return (
    <section id="projects">
      <Container>
        <div className="project-wrapper">
          <Title title="Projects" />




              
              <Row key={id1}>
                <Col lg={4} sm={12}>
                  <Fade
                    left={isDesktop}
                    bottom={isMobile}
                    duration={1000}
                    delay={500}
                    distance="30px"
                  >
                    <div className="project-wrapper__text">
                      <h3 className="project-wrapper__text-title">{title1 || 'Project Title'}</h3>
                      <div>
                        <p>
                          {info1 ||
                            'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi neque, ipsa animi maiores repellendu distinctioaperiam earum dolor voluptatum consequatur blanditiis inventore debitis fuga numquam voluptate architecto itaque molestiae.'}
                        </p>
                        <p className="mb-4">{info21 || ''}</p>
                      </div>

                      {repo && (
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          className="cta-btn text-color-main"
                          href={repo1}
                        >
                          Source Code
                        </a>
                      )}
                    </div>
                  </Fade>
                </Col>
                
                <Col lg={8} sm={12}>
                  <Fade
                    right={isDesktop}
                    bottom={isMobile}
                    duration={1000}
                    delay={1000}
                    distance="30px"
                  >
                    <div className="project-wrapper__image">
                      <a
                        href={url1 || '#!'}
                        target="_blank"
                        aria-label="Project Link"
                        rel="noopener noreferrer"
                      >
                        <Tilt
                          options={{
                            reverse: false,
                            max: 8,
                            perspective: 1000,
                            scale: 1,
                            speed: 300,
                            transition: true,
                            axis: null,
                            reset: true,
                            easing: 'cubic-bezier(.03,.98,.52,.99)',
                          }}
                        >
                          <div data-tilt className="thumbnail rounded">
                            <ProjectImg alt={title1} filename={img1} />
                          </div>
                        </Tilt>
                      </a>
                    </div>
                  </Fade>
                </Col>
                <div style={{marginTop: "-100px", marginBottom: "150px", marginLeft: "25px"}}>
                <input
                  type="button"
                  value="More Info"
                  className="cta-btn cta-btn--hero"
                  onClick={togglePopup}
                  style={{zIndex: "0", fontSize: "17px"}}
                />
                  {isOpen && <Popup
                  handleClose={togglePopup}
                  />}
                </div>
              </Row>
              <Row key={id}>
              <Col lg={4} sm={12}>
                <Fade
                  left={isDesktop}
                  bottom={isMobile}
                  duration={1000}
                  delay={500}
                  distance="30px"
                >
                  <div className="project-wrapper__text">
                    <h3 className="project-wrapper__text-title">{title || 'Project Title'}</h3>
                    <div>
                      <p>
                        {info ||
                          'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi neque, ipsa animi maiores repellendu distinctioaperiam earum dolor voluptatum consequatur blanditiis inventore debitis fuga numquam voluptate architecto itaque molestiae.'}
                      </p>
                      <p className="mb-4">{info2 || ''}</p>
                    </div>

                    {repo && (
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cta-btn text-color-main"
                        href={repo}
                      >
                        Source Code
                      </a>
                    )}
                  </div>
                </Fade>
              </Col>
              
              <Col lg={8} sm={12}>
                <Fade
                  right={isDesktop}
                  bottom={isMobile}
                  duration={1000}
                  delay={1000}
                  distance="30px"
                >
                  <div className="project-wrapper__image">
                    <a
                      href={url || '#!'}
                      target="_blank"
                      aria-label="Project Link"
                      rel="noopener noreferrer"
                    >
                      <Tilt
                        options={{
                          reverse: false,
                          max: 8,
                          perspective: 1000,
                          scale: 1,
                          speed: 300,
                          transition: true,
                          axis: null,
                          reset: true,
                          easing: 'cubic-bezier(.03,.98,.52,.99)',
                        }}
                      >
                        <div data-tilt className="thumbnail rounded">
                          <ProjectImg alt={title} filename={img} />
                        </div>
                      </Tilt>
                    </a>
                  </div>
                </Fade>
              </Col>
              <div style={{marginTop: "-100px", marginBottom: "150px", marginLeft: "25px"}}>
              <input
                type="button"
                value="More Info"
                className="cta-btn cta-btn--hero"
                onClick={togglePopup2}
                style={{zIndex: "0", fontSize: "17px"}}
              />
                {isOpen2 && <Popup2
                handleClose={togglePopup2}
                />}
              </div>
            </Row>
            <Row key={id3}>
              <Col lg={4} sm={12}>
                <Fade
                  left={isDesktop}
                  bottom={isMobile}
                  duration={1000}
                  delay={500}
                  distance="30px"
                >
                  <div className="project-wrapper__text">
                    <h3 className="project-wrapper__text-title">{title3 || 'Project Title'}</h3>
                    <div>
                      <p>
                        {info ||
                          'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi neque, ipsa animi maiores repellendu distinctioaperiam earum dolor voluptatum consequatur blanditiis inventore debitis fuga numquam voluptate architecto itaque molestiae.'}
                      </p>
                      <p className="mb-4">{info3 || ''}</p>
                    </div>

                    {repo && (
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cta-btn text-color-main"
                        href={repo3}
                      >
                        Source Code
                      </a>
                    )}
                  </div>
                </Fade>
              </Col>
              
              <Col lg={8} sm={12}>
                <Fade
                  right={isDesktop}
                  bottom={isMobile}
                  duration={1000}
                  delay={1000}
                  distance="30px"
                >
                  <div className="project-wrapper__image">
                    <a
                      href={url3 || '#!'}
                      target="_blank"
                      aria-label="Project Link"
                      rel="noopener noreferrer"
                    >
                      <Tilt
                        options={{
                          reverse: false,
                          max: 8,
                          perspective: 1000,
                          scale: 1,
                          speed: 300,
                          transition: true,
                          axis: null,
                          reset: true,
                          easing: 'cubic-bezier(.03,.98,.52,.99)',
                        }}
                      >
                        <div data-tilt className="thumbnail rounded">
                          <ProjectImg alt={title} filename={img3} />
                        </div>
                      </Tilt>
                    </a>
                  </div>
                </Fade>
              </Col>
              <div style={{marginTop: "-100px", marginBottom: "150px", marginLeft: "25px"}}>
              <input
                type="button"
                value="More Info"
                className="cta-btn cta-btn--hero"
                onClick={togglePopup3}
                style={{zIndex: "0", fontSize: "17px"}}
              />
                {isOpen3 && <Popup3
                handleClose={togglePopup3}
                />}
              </div>
            </Row>

        </div>
      </Container>
    </section>
  );
};

export default Projects;
