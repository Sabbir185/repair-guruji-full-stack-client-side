import React from 'react';
import './ServiceCard.css'

const ServiceCard = (props) => {
    const {title, price, image, description} = props.service;


    return (
        <div>
            <div className="row justify-content-center mb-4 card-container">
                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 d-flex align-items-center justify-content-center img-style">
                    <img src={image} alt="" className="img-fluid"/>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 pl-5 pb-5">
                    <h3 className="mt-5">{title}</h3>
                    <h6 className=""><em>Price : ${price}</em></h6>
                    <p  className="text-secondary text-justify"><small>{description}</small></p>
                    <button className="btn btn-success">Book A Service</button>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;