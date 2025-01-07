import React from 'react'
import "./Pricing.css"
import Tagline from '../Mini-Components/Text/Tagline.jsx'
import GetStarted from '../Mini-Components/GetStarted/GetStarted'
import PriceCards from './PriceCards.jsx'


const Pricing = () => {
  return (
  <div className="main-container">
    <div className="tagline">
      <Tagline heading="Affordable Plans for Every Business"
            sub="Choose the right plan to grow your online presence"/>
    </div>
    <div className="PriceCards">
      <PriceCards Plan="Silver Plan"
                  month="Timeline 1-2 weeks"
                  Pricing="$500-1,500"
                  Everything=""
                  Feature1="Up to 5 pages"
                  Feature2="Simple, responsive design"
                  Feature3="Basic SEO optimization"
                  Feature4="Contact form integration"
                  Feature5="Mobile-friendly layout"
                  btn="Silver"
                  />
      <PriceCards Plan="Gold Plan"
                  month="Timeline: 3-5 weeks"
                  Pricing="$2,000 - 5,000"
                  Everything=""
                  Feature1="Up to 10 pages"
                  Feature2="Advanced design options"
                  Feature3="E-commerce integration"
                  Feature4="CMS implementation"
                  Feature5="Enhanced SEO optimization"
                  btn="Gold"
      
                />
      <PriceCards Plan="Platinum Plan"
                  month="Timeline: 6-10 weeks"
                  Pricing="$6,000+"
                  Everything=""
                  Feature1="Unlimited pages"
                  Feature2="Custom design & branding"
                  Feature3="Complex functionality"
                  Feature4="Third-party integrations"
                  Feature5="Advanced security features"
                  btn="Platinum"
                
                />
      <PriceCards Plan="Maintenance Plan"
                  month="Based on your plans"
                  Pricing=""
                  Everything=""
                  Feature1="Basic: $50/mo - Updates & security"
                  Feature2="Standard: $150/mo - Content & SEO"
                  Feature3="Premium: $400/mo - Features & analytics"
                  Feature4="24/7 support (Premium)"
                  Feature5="Monthly reporting"
                  btn="Maintenance "
                />
      
    </div>
    <div className="getstarted">
      <GetStarted/>
    </div>
  </div>  
  
  )
}

export default Pricing
