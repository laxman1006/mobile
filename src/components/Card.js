import React from "react";
import { string, number, array } from "prop-types";
import { animated, interpolate } from "react-spring/hooks";
import {
  Typography,
  makeStyles,
  Grid,
  Button,
  IconButton,
} from "@material-ui/core";
import Carousel from "nuka-carousel";
import ShareIcon from "@material-ui/icons/Share";
import FavoriteIcon from '@material-ui/icons/Favorite';

const Card = ({ i, x, y, rot, scale, trans, bind, data }) => {
  const { name, age, distance, text, pics,page } = data[i];

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
         <div class="row1" > 
           <span class="pagesection"> {page} </span>
          
                                   
                                
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
