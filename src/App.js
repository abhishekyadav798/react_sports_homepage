import './App.css';
import {Row,Col,Container} from 'reactstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar1 from './Navbar1';
import Component_2 from './Component_2';
import Component_3 from './Component_3';
import Component_4 from './Component_4';
import Component_5 from './Component_5';
import Component_6 from './Component_6';
import Component7 from './Component7';
import Component_8 from './Component_8';
import Component_9 from './Component_9';
import Component_10 from './Component_10';


function App() {
  return (
    <div>
      <Navbar1/>
      <Container>

      <Row>
        <Col>
        
        </Col>
      </Row>
      <Row>
        <Col>
        <Component_2/>
        </Col>
      </Row>
      <Row>
        <Col>
        <Component_3/>
        </Col>  
      </Row>
      <Row>
        <Col>
        <Component_4/>
        </Col>
      </Row>
      <Row>
        <Col>
        <Component_5/>
        </Col>
      </Row>
      <Row>
        <Col>
        <Component_6/>
        </Col>
      </Row>
      <Row>
        <Col>
        <Component7/>
        </Col>
      </Row>
      </Container>
      <Row>
        <Col>
        <Component_8/>
        </Col>
      </Row>
      
      <Component_9/>
      <Container>
      <Row>
        <Col>
        <Component_10/>
        </Col>
      </Row>
      </Container>
    </div>
  );
}

export default App;
