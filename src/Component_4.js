import React from 'react'
import {Row,Col,Container,Button,Card,CardBody,CardTitle,CardText,CardImg} from 'reactstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import Football from"./Images/football.jpeg";

import  './Component_4.css'

function Component_4() {
  return (

    <div>
        <Row>
            <Col id='text'>
            <a>WHAT'S HOT</a><br/>
            <Button outline color="secondary">JACKET AND TRACKSUITS</Button>{'    '}
            <Button outline color="secondary">RUNNING SHOES</Button>{'    '}
            <Button outline color="secondary">TRACK PANTS</Button>{' '}
            <Button outline color="secondary">TSHIRTS</Button>{' '}
            <Button outline color="secondary">FLOATERS</Button>{' '}
            
            </Col>
        </Row>
        <Row>
            <Col>
           
            {/* <Card  style={{ width: '18rem' }}>
            <CardImg variant="top" src={Football} />
            <CardBody>
            <CardTitle>Card Title</CardTitle>
            <CardText>
             Some quick example text to build on the card title and make up the bulk of
              the card's content.
             </CardText>
             </CardBody>
 
              </Card> */}

            </Col>
        </Row>

    </div>
  )
}

export default Component_4