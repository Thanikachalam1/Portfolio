import React from "react";
import './home.css';
import TrueFocus from "../Animations/TrueFocus";
import VariableProximity from "../Animations/VariableProximity";
import { useRef } from "react";

function Home(){
  
const containerRef = useRef(null);

  return(
    <div className="Home" id = "home">
      <div className="intro">

      
        <h1 className="name"><span className="hi">Hi, I'm </span>Thanikachalam</h1>
          <div className="roles">
            <TrueFocus 
              sentence="Developer Student Content-Creator"
              manualMode={false}
              blurAmount={5}
              borderColor="red"
              animationDuration={0.5}
              pauseBetweenAnimations={1}
            />
          </div>
          
        <div className="specialization">
        <div
ref={containerRef}
style={{position: 'relative'}}
>
  <VariableProximity
    label={'Specialized in Web development'}
    className={'variable-proximity-demo'}
    fromFontVariationSettings="'wght' 400, 'opsz' 9"
    toFontVariationSettings="'wght' 1000, 'opsz' 40"
    containerRef={containerRef}
    radius={100}
    falloff='linear'
  />
</div>
        </div>
      </div>
    </div>
  )
}

export default Home;