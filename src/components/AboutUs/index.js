import React from "react";
import { Row, Col } from "antd";
import { IoCheckmarkDone } from "react-icons/io5";

import bgAbout from "../../assets/img/about-bg.png";

import { Animate } from "../AnimateIn";

export default function AboutUs() {
  return (
    <section className="about-container container-space">
      <div className="container-fluid">
        <Row className="about-content">
          <Col className="left" xs={24} sm={24} md={12} lg={12} xl={12}>
            <Animate.FadeInLeft>
              <img src={bgAbout} alt="about background" className="image" />
            </Animate.FadeInLeft>
          </Col>
          <Col className="right" xs={24} sm={24} md={12} lg={12} xl={12}>
            <Animate.FadeInDown>
              <h4 className="heading">About Us</h4>
              <h3 className="title">Best Food store online</h3>
              <p className="description">
                Food store.com accepts online orders and has home delivery. DO
                NOT support ordering and receiving directly Food store.com
                accepts online orders and delivers to your door. DO NOT support
                ordering and receiving goods directly at the office as well as
                all Food store systems nationwide at the office as well as all
                Food store systems nationwide
              </p>
            </Animate.FadeInDown>
            <ul className="about-features">
              <Animate.FadeInUp>
                <li className="about-item">
                  <div className="content">
                    <IoCheckmarkDone className="icon" />
                    <span className="text"> Chicken Fried</span>
                  </div>
                </li>
              </Animate.FadeInUp>
              <Animate.FadeInUp>
                <li className="about-item">
                  <div className="content">
                    <IoCheckmarkDone className="icon" />
                    <span className="text">Fish and Chip</span>
                  </div>
                </li>
              </Animate.FadeInUp>
              <Animate.FadeInUp>
                <li className="about-item">
                  <div className="content">
                    <IoCheckmarkDone className="icon" />
                    <span className="text">Fast Food</span>
                  </div>
                </li>
              </Animate.FadeInUp>
              <Animate.FadeInUp>
                <li className="about-item">
                  <div className="content">
                    <IoCheckmarkDone className="icon" />
                    <span className="text">Sushi</span>
                  </div>
                </li>
              </Animate.FadeInUp>
              <Animate.FadeInUp>
                <li className="about-item">
                  <div className="content">
                    <IoCheckmarkDone className="icon" />
                    <span className="text">Pho</span>
                  </div>
                </li>
              </Animate.FadeInUp>
              <Animate.FadeInUp>
                <li className="about-item">
                  <div className="content">
                    <IoCheckmarkDone className="icon" />
                    <span className="text">Banh My</span>
                  </div>
                </li>
              </Animate.FadeInUp>
            </ul>
          </Col>
        </Row>
      </div>
    </section>
  );
}
