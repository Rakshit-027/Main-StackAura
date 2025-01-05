import React from 'react'
import './Home.css'
import Tagline from '../Mini-Components/Text/Tagline.jsx'
import GetStarted from '../Mini-Components/GetStarted/GetStarted'
import Card from '../Mini-Components/Cards/Cards.jsx'
const Home = () => {
  return (
    <div className='Home'>
       <div className="content">
        <div className="tagline">
          <Tagline
            heading="Transforming Your Ideas into Stunning Digital Experiences"
            sub="We Build Tailored Websites That Drive Success and Engage Your Audience"
          />
        </div>
        <div className="getstarted">
          <GetStarted />
        </div>
        <div className="cards">
          <Card Name="Projects" count="Enter Numbers" />
          <Card Name="Reviews" count="Enter Reviews" />
          <Card Name="Tech used" count=" React" />
        </div>
      </div>
    </div>
  )
}

export default Home
