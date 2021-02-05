import React from 'react';
import '../Style/App.css';
import NavBar from "./NavBar/NavBar"
import Banner from "./Banner/Banner"
import Movies from "./Movies/ListMovie"
export default function App() {


  return (
    <>
        <NavBar />
        <Banner />
        <Movies />

    </>
  )
}