import React from 'react';
import { Card, CardGroup, Col, Row } from 'react-bootstrap';
import ShirtImage from '../../Images/shirt2.png'
import PagiNation from '../PagiNation/PagiNation';
import productsCollection from './productsCollection';
const Products = () => {
    console.log(productsCollection[0].image)
    return (
        <div className="">
            <Row className=" g-4 m-auto" xs={1} sm={2} md={3} lg={4}   >
                {productsCollection.map((product, idx) => (
                    <Col   id={idx}>
                        <Card className="shadow-sm g-4 rounded-4 py-3" style={{border: 'none',overflow: 'hidden'}} >
                            <Card.Img className="m-auto" variant="top" style={{maxWidth:'220px',maxHeight:'245px'}} src={product.image} />
                            <Card.Body>
                                <Card.Title style={{fontSize: '18px'}}>{product.name}</Card.Title>
                                <Card.Text>{product.price}</Card.Text>
                                <div className="d-flex justify-content-between  ">
                                    <p className="my-auto text-muted" style={{ textDecoration: 'line-through' }}>{product.prevPrice}</p>
                                    <p className="text-muted my-auto">{product.discount}</p>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
            <Row className=" my-5">
                <PagiNation></PagiNation>
            </Row>
      </div>
    );
};

export default Products;