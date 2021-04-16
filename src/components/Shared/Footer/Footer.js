import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <footer className="footer-style mt-5">
            <div className="row pl-3 pt-5 pb-5">
                <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 d-lg-flex justify-content-center">
                    <div>
                        <h3 className="mb-5">Address</h3>
                        <address>
                            <em>
                                KDA Avenue, Shibbari more <br />
                                building number #9100 <br />
                                Khulna, Bangladesh
                            </em>
                        </address>
                    </div>
                </div>
                <div className="col-xs-12 col-sm-6 col-md-6 col-lg-2 col-xl-2">
                    <h3 className="mb-5">Company</h3>
                    <p>About</p>
                    <p>Dashboard</p>
                    <p>Project</p>
                    <p>Terms & Condition</p>
                </div>
                <div className="col-xs-12 col-sm-6 col-md-6 col-lg-2 col-xl-2">
                    <h3 className="mb-5">Quick Link</h3>
                    <p>Our Blog</p>
                    <p>Service Price</p>
                    <p>New Service </p>
                    <p>Our Specialist</p>
                </div>
                <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 col-xl-3">
                    <h3 className="mb-5">Support</h3>
                    <input type="text" placeholder="Email" className="form-control"/>
                    <textarea name="" id="" cols="50" rows="7" placeholder='Tell us' className="form-control mt-2"></textarea>
                    <button className="btn btn-success mt-3">Submit</button>
                </div>
            </div>
            <small className="d-block text-center py-5">Copyright @{new Date().getFullYear()} All Rights Reserved</small>
        </footer>
    );
};

export default Footer;