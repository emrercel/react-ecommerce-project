import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Products from './Products';
import { render } from '@testing-library/react';
import React, {Component} from "react";
import { useParams } from 'react-router-dom'

export const Categories = () => {


    
    var {name} = useParams();
    console.log(name);
    return (
        <div>
            <Products categoryName={name} />
        </div>
        //   <Container>
        //   <Row>
        //     <Col>
        //     <Products />
        //     </Col>
        //   </Row>
        // </Container>
    )
    
}