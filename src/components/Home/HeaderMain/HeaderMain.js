import React from 'react';
import './HeaderMain.css'

const HeaderMain = () => {
    return (
        <div className="header-container">
            <div className="row">
                <div className="col-12 d-flex justify-content-center">
                    <div className="sub-container text-center">
                        <h1 className="welcome">Welcome</h1>
                        <h1 className="title">Repair Guruji</h1>
                        <button className="btn btn-outline-success mt-3 font-weight-bold">Book A Service</button>
                    </div>
                </div>
                <div className="col">

                </div>
            </div>
        </div>
    );
};

export default HeaderMain;