import React from "react";
import "./Pricing.css";
import { FaCheck } from "react-icons/fa";

const Pricing = () => {
  const plans = [
    {
      title: "Silver Plan",
      price: "$500 - $1,500",
      timeline: "1-2 weeks",
      features: [
        "Up to 5 pages",
        "Simple, responsive design",
        "Basic SEO optimization",
        "Contact form integration",
        "Mobile-friendly layout",
      ],
    },
    {
      title: "Gold Plan",
      price: "$2,000 - $5,000",
      timeline: "3-5 weeks",
      features: [
        "Up to 10 pages",
        "Advanced design options",
        "E-commerce integration",
        "CMS implementation",
        "Enhanced SEO optimization",
      ],
    },
    {
      title: "Platinum Plan",
      price: "$6,000+",
      timeline: "6-10 weeks",
      features: [
        "Unlimited pages",
        "Custom design & branding",
        "Complex functionality",
        "Third-party integrations",
        "Advanced security features",
      ],
    },
    {
      title: "Maintenance Plan",
      price: "Based on your plans",
      timeline: "",
      features: [
        "Basic: $50/mo - Updates & security",
        "Standard: $150/mo - Content & SEO",
        "Premium: $400/mo - Features & analytics",
        "24/7 support (Premium)",
        "Monthly reporting",
      ],
    },
  ];

  return (
    <section className="pricing-section">
      <div className="pricing-header">
        <h1>Affordable Plans for Every Business</h1>
        <p>Choose the right plan to grow your online presence</p>
      </div>
      <div className="pricing-cards">
        {plans.map((plan, index) => (
          <div className="pricing-card" key={index}>
            <h2>{plan.title}</h2>
            <h3>{plan.price}</h3>
            <p className="timeline">{plan.timeline}</p>
            <ul>
              {plan.features.map((feature, i) => (
                <li key={i}>
                  <FaCheck className="check-icon" /> {feature}
                </li>
              ))}
            </ul>
            <button className="get-started-btn">Get {plan.title.split(" ")[0]} Now</button>
          </div>
        ))}
      </div>
      <div className="cta">
        <button className="get-started-main-btn">Get Started</button>
      </div>
    </section>
  );
};

export default Pricing;
