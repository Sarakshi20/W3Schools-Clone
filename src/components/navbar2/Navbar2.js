import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';

function Navbar2() {
  const Navigate = useNavigate();
  function handleNavigate(){
    Navigate('/html/home');
  }
  return (
    <Navbar style={{height: "30px",backgroundColor:"#282a35"}}>
      <Container className='overflow-x-scroll d-flex mx-auto mt-2 mb-1' fluid>
          <Nav
            className="pb-1 my-lg-0 mx-auto"
          >
              <Nav.Link className='text-white me-2' onClick={handleNavigate}>HTML</Nav.Link>
              <Nav.Link href="#action2" className='text-white mx-2'>CSS</Nav.Link>
              <Nav.Link href="#action3" className='text-white mx-2'>JAVASCRIPT</Nav.Link>
              <Nav.Link href="#action4" className='text-white mx-2'>SQL</Nav.Link>
              <Nav.Link href="#action5" className='text-white mx-2'>PYTHON</Nav.Link>
              <Nav.Link href="#action5" className='text-white mx-2'>JAVA</Nav.Link>
              <Nav.Link href="#action5" className='text-white mx-2'>PHP</Nav.Link>
              <Nav.Link href="#action5" className='text-white mx-2'>HOWTO</Nav.Link>
              <Nav.Link href="#action5" className='text-white mx-2'>W3.CSS</Nav.Link>
              <Nav.Link href="#action5" className='text-white mx-2'>C</Nav.Link>
              <Nav.Link href="#action5" className='text-white mx-2'>C++</Nav.Link>
              <Nav.Link href="#action5" className='text-white mx-2'>C#</Nav.Link>
              <Nav.Link href="#action5" className='text-white mx-2'>BOOTSTRAP</Nav.Link>
              <Nav.Link href="#action5" className='text-white mx-2'>REACT</Nav.Link>
              <Nav.Link href="#action5" className='text-white mx-2'>MYSQL</Nav.Link>
              <Nav.Link href="#action5" className='text-white mx-2'>JQUERY</Nav.Link>
              <Nav.Link href="#action5" className='text-white'>EXCEL</Nav.Link>
              <Nav.Link href="#action5" className='text-white mx-2'>XML</Nav.Link>
              <Nav.Link href="#action5" className='text-white mx-2'>DJANGO</Nav.Link>
              <Nav.Link href="#action5" className='text-white mx-2'>NODEJS</Nav.Link>
              <Nav.Link href="#action5" className='text-white'>R</Nav.Link>
              <Nav.Link href="#action5" className='text-white mx-2'>TYPESCRIPT</Nav.Link>
          </Nav>
      </Container>
    </Navbar>
  )
}

export default Navbar2;
