import React from "react";
import "./About.css";
import image from './image.jpg'
import Spline from '@splinetool/react-spline';

const About = () => {
  return (
    <>
      {/* About Us Section */}
      <section className="about-us">
        <div className="about">
          {/* Profile Picture */}
          <div className="spline-container">
            <Spline scene="https://prod.spline.design/vKIic4VfbqqT3gDq/scene.splinecode "/>
          </div>
          <div className="text">
            {/* Title and Description */}
            <h2>About Us</h2>
            <h5>
            <span className="header"> Scalable Solutions</span> & <span>Stunning Designs for Your Business </span>
            </h5>
            <p>
            At StackAura, we specialize in delivering innovative digital solutions that drive business growth. From crafting dynamic web applications and full-stack websites to creating responsive designs that captivate, we transform ideas into reality.
            Our team of expert developers and designers leverages cutting-edge technology to build high-performance web platforms tailored to your unique needs. With a focus on scalability, functionality, and design, we ensure your digital presence stands out and delivers results.
            Let StackAura be your partner in building exceptional web experiences that inspire and connect. Together, we’ll bring your vision to life.
            </p>
            {/* Call to Action */}
            <div className="data">
              <a href="#" className="hire">
                Hire Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;