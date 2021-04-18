import React from 'react';
import img1 from '../../../images/specialist/img1.jpg';
import img2 from '../../../images/specialist/img2.jpg';
import img3 from '../../../images/specialist/img3.jpg';
import img4 from '../../../images/specialist/img4.jpg';

const Specialist = () => {
    return (
        <section className="container mt-5 pt-3 pb-5">
            <h5 className="text-center">Specialist</h5>
            <h3 className="text-center txt-bold mt-4 mb-5 pb-4">Repair Guruji's Commitment</h3>
            <div className="row">
                <div className="col-xs-12 col-sm-6 col-lg-3 col-xl-3 shadow bg-white rounded mt-2 ">
                    <img src={img1} alt="" className="img-fluid rounded round " />
                    <h6 className="mt-3">Alpha team</h6>
                    <p className="text-secondary text-justify"><small>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum, rerum!</small></p>
                </div>
                <div className="col-xs-12 col-sm-6 col-lg-3 col-xl-3 shadow bg-white rounded  mt-2">
                    <img src={img2} alt="" className="img-fluid rounded round " />
                    <h6 className="mt-3">Beta team</h6>
                    <p className="text-secondary text-justify"><small>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum, rerum!</small></p>
                </div>
                <div className="col-xs-12 col-sm-6 col-lg-3 col-xl-3 shadow bg-white rounded  mt-2">
                    <img src={img3} alt="" className="img-fluid rounded round " />
                    <h6 className="mt-3">Gamma team</h6>
                    <p className="text-secondary text-justify"><small>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum, rerum!</small></p>
                </div>
                <div className="col-xs-12 col-sm-6 col-lg-3 col-xl-3 shadow bg-white rounded mt-2 ">
                    <img src={img4} alt="" className="img-fluid rounded round " />
                    <h6 className="mt-3">Engineer</h6>
                    <p className="text-secondary text-justify"><small>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum, rerum!</small></p>
                </div>
            </div>
        </section>
    );
};

export default Specialist;