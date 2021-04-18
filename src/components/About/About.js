import React from 'react';
import HeaderNavbar from '../Shared/HeaderNavbar/HeaderNavbar';

const About = () => {
    return (
        <div className="container">
            <HeaderNavbar></HeaderNavbar>
            <div>
                <h4 className="text-center mb-4">Welcome to, Repair Guruji</h4>
                <div>
                    <p className="text-secondary">Repair Guruji is a service provider of Laptop, mobile, tablet and any brand digital device. We repair out customer's device as fast as at cheap price. We have expert technician and engineer for repairing and build brand new desktop or laptop computer. All kind of part of computer, we sell so cheapest price in the market. Book your service from our website. You can pay online through stripe payment system which is secured. You are welcome !</p>
                </div>
                <div>
                    <h4>Some cool features :</h4>
                    <h5>Repair guruji has 2 part : General User and Admin User</h5>
                    <div>
                        <h6>### General User :</h6>
                        <ul className="text-secondary">
                            <li>Dynamic home page</li>
                            <li>Dynamic dashboard</li>
                            <li>Booking page</li>
                            <li>All booking list</li>
                            <li>Review page</li>
                            <li>ETC</li>
                        </ul>
                    </div>
                    <div>
                        <h6>### Admin User : </h6>
                        <ul className="text-secondary">
                            <li>Dynamic home page</li>
                            <li>Dynamic dashboard</li>
                            <li>Manage service</li>
                            <li>Add New Admin</li>
                            <li>Add service</li>
                            <li>Order list</li>
                            <li>ETC</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;