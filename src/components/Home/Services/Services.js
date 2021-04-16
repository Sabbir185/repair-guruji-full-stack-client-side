import React from 'react';
import ServiceCard from '../ServiceCard/ServiceCard';
import laptop from "../../../images/laptop.jpg"
import mobile from "../../../images/mobile.jpg"
import tab from "../../../images/tab.jpg"

const serviceInfo = [
    {
        id: 1,
        title: "Laptop Repaire",
        price: 250,
        description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.",
        image: laptop
    },

    {
        id: 2,
        title: "Mobile Repaire",
        price: 100,
        description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.",
        image: mobile
    },

    {
        id: 3,
        title: "Tab Repaire",
        price: 150,
        description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.",
        image: tab
    },

]

const Services = () => {

    return (
        <section className="container pt-5">
            <h3 className="mb-3 pb-3 text-center">Services</h3>
            <h1 className="mb-5 pb-5 text-center">Quality is our first choice</h1>
            {
                serviceInfo.map(service => <ServiceCard service={service} key={service.id}> </ServiceCard>)
            }
        </section>
    );
};

export default Services;