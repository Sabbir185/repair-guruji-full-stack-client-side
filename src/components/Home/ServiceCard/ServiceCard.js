import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useHistory } from 'react-router';
import './ServiceCard.css'

const ServiceCard = (props) => {
    const history = useHistory();
    const { title, price, image, description, _id } = props.service;

    const handleBook = (id) => {
        history.push(`/book/${id}`)
    }

    return (
        <div>
            {/* <div className="row justify-content-center mb-4 card-container">
                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 d-flex align-items-center justify-content-center img-style">
                    <img src={`data:image/jpeg;base64,${image.img}`} className="img-fluid"/>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 pl-5 pb-5">
                    <h3 className="mt-5">{title}</h3>
                    <h6 className=""><em>Price : ${price}</em></h6>
                    <p  className="text-secondary text-justify"><small>{description}</small></p>
                    <button onClick={()=>handleBook(_id)} className="btn btn-success">Book A Service</button>
                </div>
            </div> */}

            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-4">
                <Card style={{ width: '18rem' }} className="mt-4 shadow bg-white rounded">
                    <Card.Img variant="top" src={`data:image/jpeg;base64,${image.img}`} className="img-fluid card-img" />
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>
                            <p  className="text-secondary text-justify"><small>{description}</small></p>
                        </Card.Text>
                       <div className="row justify-content-around align-items-center">
                            <h6 className=""><em>Price : ${price}</em></h6>
                            <Button variant="success" onClick={()=>handleBook(_id)} > Book A Service </Button>
                       </div>
                    </Card.Body>
                </Card>
            </div>

        </div>
    );
};

export default ServiceCard;