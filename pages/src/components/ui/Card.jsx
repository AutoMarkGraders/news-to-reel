import React from "react";
import styled from "styled-components";

const Card = () => {
  return (
    <StyledWrapper>
      <div className="card">
        <svg
          className="img"
          xmlns="http://www.w3.org/2000/svg"
          space="preserve"
          width="100%"
          height="100%"
          version="1.1"
          shapeRendering="geometricPrecision"
          textRendering="geometricPrecision"
          imageRendering="optimizeQuality"
          fillRule="evenodd"
          clipRule="evenodd"
          viewBox="0 0 784.37 1277.39"
          xlink="http://www.w3.org/1999/xlink"
        >
          <g id="Layer_x0020_1">
            <metadata id="CorelCorpID_0Corel-Layer" />
            <g id="_1421394342400">
              <g>
                <polygon
                  fill="#343434"
                  fillRule="nonzero"
                  points="392.07,0 383.5,29.11 383.5,873.74 392.07,882.29 784.13,650.54"
                />
                <polygon
                  fill="#8C8C8C"
                  fillRule="nonzero"
                  points="392.07,0 -0,650.54 392.07,882.29 392.07,472.33"
                />
                <polygon
                  fill="#3C3C3B"
                  fillRule="nonzero"
                  points="392.07,956.52 387.24,962.41 387.24,1263.28 392.07,1277.38 784.37,724.89"
                />
                <polygon
                  fill="#8C8C8C"
                  fillRule="nonzero"
                  points="392.07,1277.38 392.07,956.52 -0,724.89"
                />
                <polygon
                  fill="#141414"
                  fillRule="nonzero"
                  points="392.07,882.29 784.13,650.54 392.07,472.33"
                />
                <polygon
                  fill="#393939"
                  fillRule="nonzero"
                  points="0,650.54 392.07,882.29 392.07,472.33"
                />
              </g>
            </g>
          </g>
        </svg>
        <div className="textBox">
          <p className="text head">Ethereum</p>
          <span>Cryptocurrency</span>
          <p className="text price">1.654,34&euro;</p>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .card {
    width: 195px;
    height: 285px;
    background: #313131;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: white;
    transition: 0.2s ease-in-out;
    position: relative; /* Added */
  }

  .img {
    height: 30%;
    transition: 0.2s ease-in-out;
    z-index: 1;
  }

  .textBox {
    opacity: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 15px;
    transition: 0.2s ease-in-out;
    z-index: 2;
  }

  .textBox > .text {
    font-weight: bold;
  }

  .textBox > .head {
    font-size: 20px;
  }

  .textBox > .price {
    font-size: 17px;
  }

  .textBox > span {
    font-size: 12px;
    color: lightgrey;
  }

  .card:hover > .textBox {
    opacity: 1;
  }

  .card:hover > .img {
    height: 65%;
    filter: blur(7px);
    animation: anim 3s infinite;
  }

  @keyframes anim {
    0% {
      transform: translateY(0);
    }

    50% {
      transform: translateY(-20px);
    }

    100% {
      transform: translateY(0);
    }
  }

  .card:hover {
    transform: scale(1.04) rotate(-1deg);
  }
`;

export default Card;