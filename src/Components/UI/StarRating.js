import React from 'react';
import StarRatingComponent from 'react-star-rating-component';

export default function Input(props) {


  return (
     
    <StarRatingComponent 
          name="rate1" 
          starCount={5}
          value={props.ratingSer}
          emptyStarColor={"white"} 
          onStarClick={props.onStarClick}
     />
  )
}