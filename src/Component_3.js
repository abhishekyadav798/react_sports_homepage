import React from 'react'
import {Row,Col,Container} from 'reactstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import Video from './Images/video.mp4'
import  './Component_3.css'



function Component_3() {


  return (
    <div>
         <Row>
        
        <video loop autoPlay muted>
          <source src={Video}  type="video/mp4"/>
          Your browser does not support the video tag.
        </video>
        {/* <div class="video-text">
    <h2 >Nature</h2>
    <p>What a beautiful sunrise</p>
  </div> */}
        </Row>

      </div>
  );
}

export default Component_3