import React from 'react';
import { Code2, Palette, Globe2, Smartphone, Megaphone, LineChart } from 'lucide-react';
import './Services.css';

const ServiceCard = ({ title, description, Icon }) => (
  <div className="service-card">
    <div className="service-icon">
      <Icon size={32} />
    </div>
    <h3>{title}</h3>
    <p>{description}</p>
    <div className="learn-more">
      <span>Learn More</span>
      <div className="arrow">→</div>
    </div>
  </div>
);

function Services() {
  const services = [
    {
      title: "Web Development",
      description: "Custom websites built with modern technologies, optimized for performance and user experience.",
      Icon: Code2
    },
    {
      title: "UI/UX Design",
      description: "Beautiful, intuitive designs that engage users and enhance brand identity.",
      Icon: Palette
    },
    {
      title: "Digital Marketing",
      description: "Strategic marketing solutions to boost your online presence and reach target audiences.",
      Icon: Megaphone
    },
    {
      title: "Mobile Development",
      description: "Native and cross-platform mobile applications that deliver exceptional user experiences.",
      Icon: Smartphone
    },
    {
      title: "SEO Optimization",
      description: "Improve your search engine rankings and drive organic traffic to your website.",
      Icon: Globe2
    },
    {
      title: "Analytics & Reporting",
      description: "Data-driven insights to measure performance and guide strategic decisions.",
      Icon: LineChart
    }
  ];

  return (
    <div className="services">
      <div className="services-container">
        <div className="services-header">
          <h1>Our Services</h1>
          <p>Comprehensive digital solutions to help your business thrive in the modern world</p>
        </div>
        
        <div className="services-grid">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              Icon={service.Icon}
            />
          ))}
        </div>

        <div className="background-gradient"></div>
      </div>
    </div>
  );
}

export default Services;