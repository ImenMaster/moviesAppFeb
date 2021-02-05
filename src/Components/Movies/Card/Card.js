import React from 'react';
import { Card } from 'react-bootstrap';
import StarRating from '../../UI/StarRating'

export default function CardMovie(props) {
const {el}=props

  return (
    <Card className=" card-movie text-white mb-4" >
        <Card.Img src={el.Poster} alt="Card image" />
        <div className="card-ovr">
            <div> <u>Released:</u>{el.Released}  </div>
             <div> <u>Genre:</u> {el.Genre}</div>
             <div> <u>Actors:</u> {el.Actors}</div>  
            <div><u>Awards:</u> {el.Awards} </div> 
      </div>
      <div className=" footer-card-movie position-absolute w-100">
      <div> {el.Title} </div>
        <StarRating ratingSer={el.rating} />
      </div>
  
</Card>
  )
}