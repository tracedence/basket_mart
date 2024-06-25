import React from 'react'
import { useParams } from "react-router-dom";
import products from "../products";
import {Link} from 'react-router-dom'
import {Row, Col, Image, ListGroup, Card, Button} from 'react-bootstrap'

const ProductScreen = () => {
    const {id: productId} = useParams()
    const product = products.find((p) => p._id === productId)
    console.log(product)

  return (
    <>
    <Row>
        <Col>
        <Image src={product.image} alt={product.name} fluid></Image>
        </Col>
        <Col>
        <ListGroup variant='flush'>
            <ListGroup.Item>
                <h3>{product.name}</h3>
            </ListGroup.Item>
        </ListGroup>
        <Card>
            <ListGroup variant='flush'>
                <ListGroup.Item>
                    <Row>
                        <Col> Price:</Col>
                        <Col> <strong>Price:{product.price}</strong> </Col>
                    </Row>   
                </ListGroup.Item>
                <ListGroup.Item>
                    <Row>
                        <Col>Status:</Col>
                        <Col> <strong>status: {product.countInStock> 0 ? "In Stock" : "Out of Stock"}</strong> </Col>
                    </Row>
                    
                </ListGroup.Item>
                <ListGroup.Item>
                    <Button className='btn-block' type='button' disabled={product.countInStock === 0}>Add to Cart</Button>
                </ListGroup.Item>
            </ListGroup>
            </Card>
        </Col>
        </Row>
    </>
  )
}

export default ProductScreen