import React from 'react'
import { FaArrowRight } from 'react-icons/fa';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Brands.css'
const Brands = () => {
  return (
    
    <div  style={{backgroundColor:"#FBD198"}}>
    <Container className='brandspage mt-5 pt-5 pb-5'>
      <Row className="justify-content-between mt-5">
        <Col  lg="3" xs="12" md="5">
        <p>Brands</p>
        <h3>Our Brand Partners</h3>
        </Col>
   
        <Col  lg="3" xs="12"  md="5">
        <button className='px-4 p-3 text-center'>View All Brands Now &nbsp;
        <FaArrowRight className="ms-2 rounded-circle  text-black p-1" style={{backgroundColor: '#FFDAA9'}} />
        </button>
        </Col>
      </Row>
     
    </Container>
    </div>
  )
}

export default Brands
