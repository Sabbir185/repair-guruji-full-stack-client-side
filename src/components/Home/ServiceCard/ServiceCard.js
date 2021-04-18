import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useHistory } from 'react-router';
import Pulse from 'react-reveal/Pulse';
import './ServiceCard.css'

const ServiceCard = (props) => {
    const history = useHistory();
    const { title, price, image, description, _id } = props.service;

    const handleBook = (id) => {
        history.push(`/book/${id}`)
    }

    return (
        <div>

            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-4">
                <Pulse>
                    <Card style={{ width: '18rem' }} className="mt-4 shadow bg-white rounded">
                        <Card.Img variant="top" src={`data:image/jpeg;base64,${image.img}`} className="img-fluid card-img" />
                        <Card.Body>
                            <Card.Title>{title}</Card.Title>
                            <Card.Text>
                                <p className="text-secondary text-justify"><small>{description}</small></p>
                            </Card.Text>
                            <div className="row justify-content-around align-items-center">
                                <h6 className="text-info"><em>Price : ${price}</em></h6>
                                <Button variant="success" onClick={() => handleBook(_id)} > Book A Service </Button>
                            </div>
                        </Card.Body>
                    </Card>
                </Pulse>
            </div>

        </div>
    );
};

export default ServiceCard;