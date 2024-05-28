import React from 'react';
import './css/Section1.css';
import logoNike from '../images/images/Group 28.png';
import logoBuzzFeed from '../images/images/Group 29.png';
import logoEsprit from '../images/images/ESPRIT.png';
import logoDW from '../images/images/Layer_1.png';
import logoHuffPost from '../images/images/layer1.png';
import image from "../images/images/Erko.png";
import logokub from "../images/images/Group 27.png"

function Section1() {
  return (
    <div className="App container">
      <header className="App-header">
        <div className="content">
          <h1 className='begin'>WORKOUT WITH ME</h1>
          <p className="description">
            A huge selection of health and fitness content, healthy recipes and transformation stories to help you get fit and stay fit!
          </p>
          <button className="join-button">Join Club Now!</button>
          <div className="stats">
            <div className="stat">
              <span className="number">4,95</span>
              <span className="unit">km</span>
            </div>
            <div className="stat">
              <span className="number">350+</span>
              <span className="label">Video tutorials</span>
            </div>
            <div className="stat">
              <span className="number">500+</span>
              <span className="label">Free Workout videos</span>
            </div>
          </div>
          <span className='spanoflogos'>AS FEATURED IN</span>
          <div className="logos">
            <img src={logoNike} alt="error404" />
            <img src={logoBuzzFeed} alt="error404" />
            <img src={logoEsprit} alt="error404" />
            <img src={logokub} alt="error404" />
            <img src={logoDW} alt="error404" />
            <img src={logoHuffPost} alt="error404" />
          </div>
        </div>
        <div className="image-container">
          <img src={image} alt="Workout" className="workout-image" />
        </div>
      </header>
    </div>
  );
}

export default Section1;
