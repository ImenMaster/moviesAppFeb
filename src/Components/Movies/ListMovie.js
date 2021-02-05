import React ,{useEffect,useState}from 'react';
import {useSelector,useDispatch } from "react-redux"
import { getMovies } from '../../Redux/Reducers/Movies';
import { Row,Col } from 'react-bootstrap';
import Card from "./Card/Card"

export default function Movies() {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies.movies);
  const loading = useSelector((state) => state.movies.loading);
  const inputVal = useSelector(state => state.Search.search.inputVal)
  const ratingVal = useSelector(state => state.Search.search.ratingVal)
  const [movieFil, setmovieFil] = useState([])

    useEffect(() => {
    dispatch(getMovies());
   
 
 let filterMovie= movies.filter(el=> el.Title.toLowerCase().search(inputVal.toLowerCase()) !== -1 && el.rating>=ratingVal)

    setmovieFil(filterMovie)

  }, [dispatch,movies,inputVal,ratingVal]);
 
 
  return (
    <section className="container">

<h4 className="title-section">Featured Series</h4>

<Row>
{movieFil && movieFil.length?
              movieFil.map(el=>
                <Col sm={6} md={4} lg={3} key={el.id}>
                   <Card  el={el}></Card>
              </Col>
              ):loading!==false?
              movies.map(el=>
                <Col sm={6} md={4} lg={3} key={el.id}>
                   <Card  el={el}></Card>
              </Col>
              ):
 <h1>Loading...</h1>
          
           }
      
</Row>

    </section>
  )
}