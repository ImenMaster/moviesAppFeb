import React  from 'react';
import { Navbar,Container } from 'react-bootstrap';
import Search from "./Search/Search"
export default function NavBar() {


  return (
<Navbar  className="Navbar pt-4 pb-3 position-fixed w-100 " expand="md">
<Container>
  <Navbar.Brand href="#home" className="text-white"><h2 className="logo">Movies App</h2></Navbar.Brand>
 <Search />
</Container>
</Navbar>
  )
}