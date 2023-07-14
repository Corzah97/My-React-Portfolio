import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
// import headerImg from "../assets/img/header-img.svg";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import TrackVisibility from "react-on-screen";
import SpinningBox from "./spinningbox/Spinning-Box.js";

export const Banner = () => {
    return (
        <>
        <section className="banner" id="home">
        <Container>
          <Row className="aligh-items-center">
            <Col xs={12} md={6} xl={7}>
              <TrackVisibility>
                {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                     <span className="tagline">Hello my name is Corey! This is my Porfolio</span>
                        <h1>{'Hello my name is Corey.'}<span className="wrap"> I am an up and coming web developer</span></h1>
                        <p>Hello My Name is Corey Boughton, I'm 25 years old. I'm currently studying a Full-Stack web developer course at the Coding Bootcamp of Sydney,</p>
                    <button onClick={() => console.log('connect')}>Let’s Connect <ArrowRightCircle size={25} /></button>
                </div>}
              </TrackVisibility>
            </Col>
            <Col xs={12} md={6} xl={5}>
              <TrackVisibility>
                {({ isVisible }) =>
                  <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                    <img src={""} alt=""/>
                  </div>}
              </TrackVisibility>
            </Col>
          </Row>
        </Container>
       
      </section>
       <SpinningBox />
         </>
    )
}