import React from 'react';
import { FaFacebookF, FaPinterestP, FaInstagram } from 'react-icons/fa';
import { AiOutlineTwitter } from 'react-icons/ai';

import doctor1 from '../../assets/img/food1.jfif';
import doctor2 from '../../assets/img/food2.avif';
import doctor3 from '../../assets/img/food3.jfif';
import doctor4 from '../../assets/img/food4.jfif';
import { Animate } from '../AnimateIn';

export default function Doctor() {
  return (
    <section className="doctor-container container-space">
      <div className="container-fluid">
        <div className="doctor-content">
          <Animate.ScaleInCenter>
            <div className="section-title">
              <h4 className="heading">Our Store</h4>
              <h3 className="title">Lastest food</h3>
              <p className="description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                ipsum suspendisse
              </p>
            </div>
          </Animate.ScaleInCenter>
          <ul className="doctor-list">
            <Animate.FadeInLeft>
              <li className="doctor-item">
                <img src={doctor1} alt="doctor" className="doctor-avatar" />
                <div className="content">
                  <h3 className="name">BBG</h3>
                  <span className="specialized">I Love Meat</span>
                  <ul className="social-list">
                    <li className="social-item facefood">
                      <FaFacebookF className="icon" />
                    </li>
                    <li className="social-item twitter">
                      <AiOutlineTwitter className="icon" />
                    </li>
                    <li className="social-item pinterest">
                      <FaPinterestP className="icon" />
                    </li>
                    <li className="social-item instagram">
                      <FaInstagram className="icon" />
                    </li>
                  </ul>
                </div>
              </li>
            </Animate.FadeInLeft>
            <Animate.FadeInUp>
              <li className="doctor-item">
                <img src={doctor2} alt="doctor" className="doctor-avatar" />
                <div className="content">
                  <h3 className="name">Fried Chicken</h3>
                  <span className="specialized">KFC</span>
                  <ul className="social-list">
                    <li className="social-item facefood">
                      <FaFacebookF className="icon" />
                    </li>
                    <li className="social-item twitter">
                      <AiOutlineTwitter className="icon" />
                    </li>
                    <li className="social-item pinterest">
                      <FaPinterestP className="icon" />
                    </li>
                    <li className="social-item instagram">
                      <FaInstagram className="icon" />
                    </li>
                  </ul>
                </div>
              </li>
            </Animate.FadeInUp>
            <Animate.FadeInDown>
              <li className="doctor-item">
                <img src={doctor3} alt="doctor" className="doctor-avatar" />
                <div className="content">
                  <h3 className="name">Sushi</h3>
                  <span className="specialized">Fresh Sushi</span>
                  <ul className="social-list">
                    <li className="social-item facefood">
                      <FaFacebookF className="icon" />
                    </li>
                    <li className="social-item twitter">
                      <AiOutlineTwitter className="icon" />
                    </li>
                    <li className="social-item pinterest">
                      <FaPinterestP className="icon" />
                    </li>
                    <li className="social-item instagram">
                      <FaInstagram className="icon" />
                    </li>
                  </ul>
                </div>
              </li>
            </Animate.FadeInDown>
            <Animate.FadeInRight>
              <li className="doctor-item">
                <img src={doctor4} alt="doctor" className="doctor-avatar" />
                <div className="content">
                  <h3 className="name">Vegatables</h3>
                  <span className="specialized">Bach Hoa Xanh</span>
                  <ul className="social-list">
                    <li className="social-item facefood">
                      <FaFacebookF className="icon" />
                    </li>
                    <li className="social-item twitter">
                      <AiOutlineTwitter className="icon" />
                    </li>
                    <li className="social-item pinterest">
                      <FaPinterestP className="icon" />
                    </li>
                    <li className="social-item instagram">
                      <FaInstagram className="icon" />
                    </li>
                  </ul>
                </div>
              </li>
            </Animate.FadeInRight>
          </ul>
        </div>
      </div>
    </section>
  );
}
