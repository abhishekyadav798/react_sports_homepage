import React from 'react'
import {Row,Col,Container,Button,Card,CardBody,CardTitle,CardText,CardImg} from 'reactstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import Mensingle from"./Images/mensingle.jpg";
import Woman from"./Images/woman.jpg";
import Kids from"./Images/kids.jpg";
import  './Component_5.css'

function Component_5() {
  return (

    <div>
        <Row>
            <a id='text'>SHOPPING FOR</a>
        </Row>
        <Row>
            <Col>
                <Card  style={{ width: '18rem' }}>
                <CardImg variant="top" src={Mensingle} />
                <CardBody>
                <a href='#' style={{ textDecoration:"none" }}>MEN</a>
               
              </CardBody>
              </Card>
            </Col>
            <Col>
                <Card border="info" style={{ width: '18rem' }}>
                <CardImg variant="top" src={Woman} />
                <CardBody>
                <a  href='#' style={{ textAlign:"center",textDecoration:"none" }}>WOMEN</a>
                
              </CardBody>
              </Card>
            </Col>
            <Col>
                <Card  style={{ width: '18rem' }}>
                <CardImg variant="top" src={Kids} />
                <CardBody>
                <a  href='#' style={{ textDecoration:"none" }}>KIDS</a>
               
              </CardBody>
              </Card>
            </Col>
        </Row>
    </div>
  )
}

export default Component_5