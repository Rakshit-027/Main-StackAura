import React from 'react';
import { Code2, Star, Laptop } from 'lucide-react';
import './Home.css';
import GetStarted from '../Mini-Components/GetStarted/GetStarted'

const Tagline = ({ heading, sub }) => (
  <div className="tagline-container">
    <h1>{heading}</h1>
    <p>{sub}</p>
  </div>
);

// const GetStarted = () => (
//   <button className="get-started-button">
//     Get Started
//   </button>
// );

const Card = ({ Name, count, Icon }) => (
  <div className="card">
    <div className="card-content">
      <div className="icon-container">
        <Icon className="icon" />
      </div>
      <div className="card-text">
        <h3>{Name}</h3>
        <p>{count}</p>
      </div>
    </div>
  </div>
);

function Home() {
  return (
    <div className="home">
      <div className="container">
        <div className="grid">
          <div className="content">
            <div className="content-wrapper">
              <Tagline
                heading="Transforming Your Ideas into Stunning Digital Experiences"
                sub="We Build Tailored Websites That Drive Success and Engage Your Audience"
              /> <div className="get">
                <GetStarted />
              </div>
              
            </div>
            
            <div className="cards-grid">
              <Card Name="Projects" count="100+" Icon={Code2} />
              <Card Name="Reviews" count="50+" Icon={Star} />
              <Card Name="Tech used" count="React" Icon={Laptop} />
            </div>
          </div>

          <div className="image-section">
            <div className="blob blob-1"></div>
            <div className="blob blob-2"></div>
            <div className="blob blob-3"></div>
            <div className="image-container">
              <img
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80"
                alt="Digital Experience"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;