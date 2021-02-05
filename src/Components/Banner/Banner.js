import React from 'react';
import { Container,Row,Col } from 'react-bootstrap';

export default function App() {


  return (

    <section className="Banner text-white">
<Container fluid className="h-100" >
    <Row className="h-100 w-100 row justify-content-center align-items-center " >
        <Col md={8} lg={10} xl={9} className="pr-0">
            <small>MOVIES</small>
            <h3>The list below will provide you </h3>
            <p>with the best movies for all your viewing needs.</p>
          
        </Col>
    </Row>
</Container>

</section>

  )
}