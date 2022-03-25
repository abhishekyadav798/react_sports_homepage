import React from 'react'
import {Row,Col,Container,Button,Card,CardBody,CardTitle,CardText,CardImg} from 'reactstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import Football from"./Images/football.jpeg";

import  './Component_4.css'

function Component_4() {
  return (

    <div id='div-style'>
        <Row>
            <Col id='text' xs={12} sm={12} lg={12}>
            <a>WHAT'S HOT</a><br/>
            <Button outline color="secondary">JACKET AND TRACKSUITS</Button>{'    '}
            <Button outline color="secondary">RUNNING SHOES</Button>{'    '}
            <Button outline color="secondary">TRACK PANTS</Button>{' '}
            <Button outline color="secondary">TSHIRTS</Button>{' '}
            <Button outline color="secondary">FLOATERS</Button>{' '}
            
            </Col>
        </Row>
        

    </div>
  )
}

export default Component_4