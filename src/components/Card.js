import React from "react";
import { string} from "prop-types";
import { animated, interpolate } from "react-spring/hooks";

const Card = ({ i, x, y, rot, scale, trans, bind, data }) => {
  const {  text,page } = data[i];

  return (
    <animated.div
      key={i}
      style={{
        transform: interpolate([x, y], (x, y) => `translate3d(${x}px,${y}px,0)`)
      }}
    >
      <animated.div
        {...bind(i)}
        style={{
          transform: interpolate([rot, scale], trans)
        }}
      >
        <div className="card" style={{padding:'20px'}}>
         <p> {text}</p>
         <div className="row1" > 
           <span className="pagesection"> {page} </span>
          
                                   
                                
         </div>
        </div>
       
      </animated.div>
    </animated.div>
  );
};

Card.propTypes = {
 
  text: string,
 
};

export default Card;
