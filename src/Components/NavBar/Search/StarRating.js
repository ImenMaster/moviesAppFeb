import React from 'react';
import {useSelector,useDispatch } from "react-redux"
import StarRating from '../../UI/StarRating'
import { ONChangeRating} from '../../../Redux/Reducers/Search';


export default function Ratingt() {
const ratingVal = useSelector(state => state.Search.search.ratingVal)

const dispatch = useDispatch()
 

  return (
     
    <StarRating
          ratingSer={ratingVal}
          onStarClick={(nextValue)=>{dispatch(ONChangeRating(nextValue));
        
           
          
          }}
  />
  )

}