import React from 'react';
import {Form } from 'react-bootstrap';
import {useSelector,useDispatch } from "react-redux"
import { ONChangeInput } from '../../../Redux/Reducers/Search';



export default function Input() {

const inputVal = useSelector(state => state.Search.search.inputVal)
const dispatch = useDispatch()

const HandleChange=(val)=>{ dispatch(ONChangeInput(val))}

  return (
 
    <Form inline className=" bg-white position-relative">
      <Form.Control type="text" value={inputVal} 
      onChange={(e)=>HandleChange(e.target.value)} 
      className="position-relative border-0 input-search" 
      placeholder="I'm looking for..."/>
      <i className="ei ei-icon_search position-absolute"></i>

    </Form>
 
  )
}