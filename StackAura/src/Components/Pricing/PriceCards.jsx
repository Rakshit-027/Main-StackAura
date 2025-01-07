import React from 'react';
import styled from 'styled-components';

const PriceCards = (props) => {
  return (
    <StyledWrapper>
      <div className="card">
        <span className="title">{props.Plan}
          <p className="pricing">{props.Pricing} <span className="pricing-time">{props.month}</span></p>
          <span className="sub-title"> {props.Everything}
            <ul className="list">
              <li className="list-item"><span className="check">✓</span> {props.Feature1}</li>
              <li className="list-item"><span className="check">✓</span> {props.Feature2}</li>
              <li className="list-item"><span className="check">✓</span> {props.Feature3}</li>
              <li className="list-item"><span className="check">✓</span> {props.Feature4}</li>
              <li className="list-item"><span className="check">✓</span> {props.Feature5}</li>
            </ul>
            <button className="button">
              <span className="text-button">Get {props.btn} now</span>
            </button>
          </span></span>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .card {
    overflow: hidden;
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    padding: 1rem;
    width: 10rem;
    height: 250px;
    background-color: transparent;
    background-image: transperent
      radial-gradient(
        circle at 100% 100%,
        rgb(25, 2, 31, 0.9) 15%,
        rgba(0, 0, 0, 0) 150%
      ),
      linear-gradient(
        135deg,
        rgba(24, 8, 28, 0) 0%,
        rgb(29, 23, 80) 50%,
        rgba(24, 8, 28, 0) 100%
      );
    border-radius: 0.5rem;
    border:solid white 0.2rem;
  }
    

  .card::before {
    content: "";
    position: absolute;
    top: 1rem;
    right: 1rem;
    width: 2rem;
    height: 2rem;
    // background-color: rgb(122, 48, 143);
    // background-image: linear-gradient(
    //   0deg,
    //   rgba(118, 42, 180, 1) 0%,
    //   rgb(199, 95, 228) 75%
    // );
    border-radius: 9999px;
    // box-shadow: 0 1px 5px 3px rgb(199, 95, 228), 0 0 30px 5px rgb(199, 95, 228);
  }

  .card .title {
    font-size: 1rem;
    color: white;
    font-weight: 600;
  }

  .card .pricing {
    font-size: 1.rem;
    color: white;
    font-weight: 600;
  }

  .card .pricing .pricing-time,
  .card .sub-title {
    margin-top:10px;
    font-size: 0.75rem;
    color: rgb(184, 132, 199);
    font-weight: 500;
  }

  .card .list {
    margin-top:10px;
    display: flex;
    flex-direction: column;
    gap: 0.30rem;
    font-size: 0.6rem;
    color: white;
    font-weight: 500;
    list-style: none;
  }

  .card .list .list-item .check {
    margin-right: 0.25rem;
    font-size: 1rem;
    color: rgb(199, 95, 228);
    font-weight: 900;
    
  }

  .card .button {
    overflow: hidden;
    cursor: pointer;
    position: relative;
    //  transform: translateY(75px);   /* Move element 20px downwards */
    padding: 0.5rem 0.75rem;
    margin-top:20px;
    
    width: 100%;
    height: fit-content;
    background-color: rgb(28, 7, 79);
    font-size: 0.75rem;
    color: white;
    border: none;
    border-radius: 0.5rem;
    box-shadow: 0px 0px 2px 1px rgb(122, 48, 143);
    transition: all 0.3s cubic-bezier(1, 0, 0, 1);
  }

  .card .button .text-button {
    position: relative;
    z-index: 10;
  }

  .card .button::before,
  .card .button::after {
    content: "";
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    transition: all 0.3s ease-in-out;
  }
  .card .button::before {
    left: 0;
    background-image: radial-gradient(
      circle at 0% 45%,
      rgba(16, 5, 36, 1) 19%,
      rgba(16, 5, 36, 0.26) 46%,
      rgba(16, 5, 36, 0) 100%
    );
  }
  .card .button::after {
    right: 0;
    background-image: radial-gradient(
      circle at 100% 45%,
      rgba(16, 5, 36, 1) 19%,
      rgba(16, 5, 36, 0.26) 46%,
      rgba(16, 5, 36, 0) 100%
    );
  }

  .card .button:hover {
    box-shadow: 0px 0px 20px 0 rgb(122, 48, 143);
  }

  .card .button:hover::before,
  .card .button:hover::after {
    width: 0;
    opacity: 0;
  }`;

export default PriceCards;
