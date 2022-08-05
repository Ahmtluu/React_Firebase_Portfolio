import React from "react";
import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import colorSharp from "../assets/img/color-sharp.png";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function Skills() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const webPercent = 95;
  const computerVisPercent = 80;
  const mobilePercent = 90;

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.<br></br> Lorem Ipsum has been the industry's standard
                dummy text.
              </p>
              <Carousel
                responsive={responsive}
                infinite={false}
                className="owl-carousel owl-theme skill-slider "
              >
                <div className="item">
                  <CircularProgressbar
                    className="progress-bar"
                    value={webPercent}
                    strokeWidth={5}
                    text={`${webPercent}%`}
                    background
                    backgroundPadding={6}
                    styles={buildStyles({
                      backgroundColor: "none",
                      textColor: "#fff",
                      pathColor: "#EF5B0C",
                      trailColor: "transparent",
                    })}
                  />
                  <h5>Web Development</h5>
                </div>
                <div className="item">
                  <CircularProgressbar
                    className="progress-bar"
                    value={computerVisPercent}
                    text={`${computerVisPercent}%`}
                    strokeWidth={5}
                    background
                    backgroundPadding={6}
                    styles={buildStyles({
                      backgroundColor: "none",
                      textColor: "#fff",
                      pathColor: "#D61C4E",
                      trailColor: "transparent",
                    })}
                  />
                  <h5>Computer Vision</h5>
                </div>
                <div className="item">
                  <CircularProgressbar
                    className="progress-bar"
                    value={mobilePercent}
                    text={`${mobilePercent}%`}
                    strokeWidth={5}
                    background
                    backgroundPadding={6}
                    styles={buildStyles({
                      backgroundColor: "none",
                      textColor: "#fff",
                      pathColor: "#FFF80A",
                      trailColor: "transparent",
                    })}
                  />
                  <h5>Mobile App Development</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img
        className="background-image-left"
        src={colorSharp}
        alt="background"
      />
    </section>
  );
}
