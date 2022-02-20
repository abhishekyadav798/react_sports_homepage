import React from 'react'
import {Row,Col,Container,Button,Card,CardBody,CardTitle,CardText,CardImg} from 'reactstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import Sports from"./Images/sports.jpeg";
import Sweatshirt from"./Images/sweatshirt.jpeg";
import Yellow from"./Images/yellow.jpg";
import Trouser from"./Images/trouser.jpeg";
import  './Component_6.css'


function Component_6() {
  return (
    <div>
        <Row>
        <Col id='text'>
            <a>TRENDING NOW</a><br/>
            </Col>
            </Row>
            <Row>
            <Col>
            <Card  >
                <CardImg variant="top" src={Sports} />
                <CardBody>
                <a>Shoe</a>  
                </CardBody>
                </Card>
            </Col>
        
            <Col>
            <Card  >
                <CardImg variant="top" src={Yellow} />
                <CardBody>
                <a>Jacket</a>  
                </CardBody>
                </Card>
            </Col>
        
            <Col>
            <Card  >
                <CardImg variant="top" src={Trouser} />
                <CardBody>
                <a>Trouser</a>  
                </CardBody>
                </Card>
            </Col>
       
            <Col>
            <Card  >
                <CardImg variant="top" src={Sweatshirt} />
                <CardBody>
                <a>Sweatshirt</a>  
                </CardBody>
                </Card>
            </Col>
        </Row>
    </div>
  )
}

export default Component_6