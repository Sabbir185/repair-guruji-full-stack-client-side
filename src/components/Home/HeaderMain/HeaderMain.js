import React from 'react';
import Flip from 'react-reveal/Flip';
import { useHistory } from 'react-router';
import './HeaderMain.css'

const HeaderMain = () => {
    const history = useHistory();

    const handleClick = () =>{
        history.push('/service')
    }

    return (
        <div className="header-container">
            <div className="row">
                <div className="col-12 d-flex justify-content-center">
                    <div className="sub-container text-center">
                        <div>
                            <Flip left>
                                <h1 className="welcome">Welcome</h1>
                                <h1 className="title">Repair Guruji</h1>
                                <button onClick={handleClick} className="btn btn-outline-success mt-3 font-weight-bold">Book A Service</button>
                            </Flip>
                        </div>
                        
                    </div>
                </div>
                <div className="col">

                </div>
            </div>
        </div>
    );
};

export default HeaderMain;