import React from 'react'
import {Row,Col,Container} from 'reactstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import Football from"./Images/football.jpeg";
import styles from './Component_2.css'



function Component_2() {


  return (
    
        
        <div >
            <Row>
            <img src={Football}   />
        <div class="text-block">
    <h4>Nature</h4>
    <p>What a beautiful sunrise</p>
  </div>

            </Row>
 
</div>
        
        
       

    
  )
}

export default Component_2