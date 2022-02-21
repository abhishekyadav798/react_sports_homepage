import React from 'react'
import {Row,Col,Container} from 'reactstrap';
import './Component7.css'
import Suits from './Images/suits.jpeg' 
import Pro from './Images/pro.jpeg'
import Yellow1 from './Images/yellow1.jpg'
import Purse from './Images/purse.jpeg'

function Component7() {


  return (
    <div >
    <div id="text-style-7">
    <h3>POPULAR FROM VICTOR</h3>
    </div>
    
    <div id="container">
    <div id="row">
    <div id="card">
      <img src={Suits} />
      <p id="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      <a href='#'>Buy It</a>
    </div>
    <div id="card">
      <img src={Pro} />
      <p id="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    </div>
     <div id="card">
      <img src={Yellow1} />
      <p id="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    </div>
     <div id="card">
      <img src={Purse} />
      <p id="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>

    </div>
    </div>
  </div>
</div>
    
  )
}

export default Component7