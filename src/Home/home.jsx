import React from "react";
import './home.css';
import TrueFocus from "../Animations/TrueFocus";

function Home(){
  return(
    <div className="Home" id = "home">
      <div className="intro">

      
        <h1 className="name"><span className="hi">Hi, I'm </span>Thanikachalam</h1>
        <TrueFocus 
sentence="Developer Student Content-Creator"
manualMode={false}
blurAmount={5}
borderColor="red"
animationDuration={0.5}
pauseBetweenAnimations={1}
/>
        <p className="specialization">Specialized in developing web pages</p>
      </div>
    </div>
  )
}

export default Home;