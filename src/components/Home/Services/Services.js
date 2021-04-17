import React, { useEffect, useState } from 'react';
import ServiceCard from '../ServiceCard/ServiceCard';


const Services = () => {
    const [serviceInfo, setServiceInfo] = useState([])

    useEffect(()=>{
        fetch('http://localhost:5055/getServices')
        .then(res => res.json())
        .then(data => setServiceInfo(data))
    },[])


    return (
        <section className="container pt-5">
            <h3 className="mb-3 pb-3 text-center">Services</h3>
            <h1 className="mb-5 pb-4 text-center">Quality is our first choice</h1>
            
            <div className="row d-flex justify-content-center">
                {
                    serviceInfo.map(service => <ServiceCard service={service} key={service._id}> </ServiceCard>)
                }
            </div>
        </section>
    );
};

export default Services;