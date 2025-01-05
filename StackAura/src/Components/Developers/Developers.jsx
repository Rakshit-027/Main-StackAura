import React from 'react'
import Text_H from './Text_H'
import './Developers.css'
import DevCard from './DevCard'
export const Developers = () => {
  return (
    <div className="main-container">
        <div className="Tagline">
            <Text_H heading="Meet the creative minds behind our web solutions! Our team combines technical expertise, innovative thinking, and a passion for crafting exceptional websites tailored to your needs"/>
        </div>
        <div className="deccard">
            <DevCard name="Rakshit Waghmare" dev="Frontend developer"/>
            <DevCard name="Samyak Mendhe" dev="Frontend developer"/>
            <DevCard name="Shubham Chhatre " dev="Backend developer"/>
            <DevCard name="Vaibhav wagh" dev="Backend developer"/>
        </div>
    </div>
  )
}
export default Developers