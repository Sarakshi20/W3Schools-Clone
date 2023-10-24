import React from 'react'
import { Container } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

function VerticalNavCss() {
  const navigate = useNavigate();
  function Navigate(){
    navigate("/css/home");
  }

  function Navigate2(){
    navigate("/css/intro");
  }

  function Navigate3(){
    navigate("/html/editors");
  }

  return (
    <Container className='px-0 d-none d-md-flex' style={{paddingTop:"88px",position:"fixed",top:"0",boxSizing:"border-box",
    overflowX:"hidden",bottom:"0"}}>
        <div style={{backgroundColor:"#e7e9eb",overflowY:"scroll"}}>
            <Container fluid className='d-flex flex-column mx-0 px-0'>
            <h4 className='text-dark my-0 ps-3 pe-1 my-3 pe-5'>CSS Tutorial &nbsp; &nbsp;</h4>
                <div className="flex-column">
                    <p className='text-light my-0 ps-3' style={{backgroundColor:"rgb(4, 170, 109)"}} onClick={Navigate}>CSS HOME</p>
                    <p className='text-dark my-0 ps-3' onClick={Navigate2}>CSS Introduction</p>
                    <p className='text-dark my-0 ps-3' onClick={Navigate3}>CSS Syntax</p>
                    <p className='text-dark my-0 ps-3'>CSS Selectors</p>
                    <p className='text-dark my-0 ps-3'>CSS How To</p>
                    <p className='text-dark my-0 ps-3'>CSS Comments</p>
                    <p className='text-dark my-0 ps-3'>CSS Colors</p>
                    <p className='text-dark my-0 ps-3'>CSS Backgrounds</p>
                    <p className='text-dark my-0 ps-3'>CSS Borders</p>
                    <p className='text-dark my-0 ps-3'>CSS Margins</p>
                    <p className='text-dark my-0 ps-3'>CSS Padding</p>
                    <p className='text-dark my-0 ps-3'>CSS Height/Width</p>
                    <p className='text-dark my-0 ps-3'>CSS Box Model</p>
                    <p className='text-dark my-0 ps-3'>CSS Outline</p>
                    <p className='text-dark my-0 ps-3'>CSS Text</p>
                    <p className='text-dark my-0 ps-3'>CSS Fonts</p>
                    <p className='text-dark my-0 ps-3'>CSS Icons</p>
                    <p className='text-dark my-0 ps-3'>CSS Links</p>
                    <p className='text-dark my-0 ps-3'>CSS Lists</p>
                    <p className='text-dark my-0 ps-3'>CSS Tables</p>
                    <p className='text-dark my-0 ps-3'>CSS Display</p>
                    <p className='text-dark my-0 ps-3'>CSS Max-width</p>
                    <p className='text-dark my-0 ps-3'>CSS Position</p>
                    <p className='text-dark my-0 ps-3'>CSS Position</p>
                    <p className='text-dark my-0 ps-3'>CSS Position</p>
                    <p className='text-dark my-0 ps-3'>CSS Position</p>
                    <p className='text-dark my-0 ps-3'>CSS Position</p>
                    <p className='text-dark my-0 ps-3'>CSS Position</p>
                    <p className='text-dark my-0 ps-3'>CSS Position</p>
                    <p className='text-dark my-0 ps-3'>CSS Position</p>
                </div>
            </Container>
        </div>
    </Container>
  )
}

export default VerticalNavCss