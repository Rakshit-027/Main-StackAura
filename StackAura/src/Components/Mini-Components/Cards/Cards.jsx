import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Card = (props) => {
  return (
    <StyledWrapper>
      <motion.div  whileHover={{ scale: 1.1 }}
  whileTap={{ scale: 0.95 }}
  onHoverStart={() => console.log('hover started!')} className="container">
        <div className="box">
          <span className="title">{props.Name}</span>
          <div>
          <strong></strong>
            <p>{props.count}</p>
            <span></span> <span></span>
          </div>
        </div>
      </motion.div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`

  .container {
    color: white;
    position: relative;
    font-family: "Ysabeau SC", serif;
  }

  .container::before,
  .container::after {
    content: "";
    background-color:rgba(22, 6, 74, 0.3);
    position: absolute;
  }

  .container::before {
    border-radius: 50%;
    width: 8rem;
    height: 8rem;
    top: 30%;
    right: 7%;
  }

  .container::after {
    content: "";
    position: absolute;
    height: 3rem;
    top: 8%;
    right: 5%;
    border: 1px solid;
  }

  .container .box {
    width: 8.875em;
    height: 10.875em;
    padding: 1rem;
    background-color: rgba(0, 0, 0, 0.07);
    border: 1px solid rgba(255, 255, 255, 0.22);
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
    border-radius: 0.7rem;
    transition: all ease 0.3s;
  }

  .container .box {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .container .box .title {
    font-size: 2rem;
    font-weight: 500;
    letter-spacing: 0.1em;
  }

  .container .box div strong {
    display: block;
    margin-bottom: 2rem;
  }

  .container .box div p {
   
    font-size: 2rem;
    font-weight: 300;
    letter-spacing: 0.1em;
    margin:0;
  }

  .container .box div span {
    font-size: 1.0rem;
    font-weight: 300;
  }

  .container .box div span:nth-child(3) {
    font-weight: 500;
    margin-right: 0.2rem;
  }

  .container .box:hover {
    box-shadow: 0px 0px 20px 1px #ffbb763f;
    border: 1px solid rgba(255, 255, 255, 0.45);
  }`;

export default Card;
