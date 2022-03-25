import React from 'react'
import {Row,Col,Container} from 'reactstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import Video from './Images/video.mp4'
import  './Component_3.css'



function Component_3() {


  return (
    <div id='div-style'>
         <Row>
        
        <video loop autoPlay muted>
          <source src={Video}  type="video/mp4"/>
          Your browser does not support the video tag.
        </video>
   
        </Row>

      </div>
  );
}

export default Component_3