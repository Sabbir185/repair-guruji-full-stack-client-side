import React from 'react';
import HeaderNavbar from '../../Shared/HeaderNavbar/HeaderNavbar';
import Sidebar from '../../Dashboard/Sidebar/Sidebar';

const AddService = () => {

    return (
        <section className="container">
            <HeaderNavbar></HeaderNavbar>
            <div className="row pt-3">
                <div className="col-2">
                    <h4 className="pb-3">Dashboard</h4>
                    <Sidebar></Sidebar>
                </div>
                <div className="col  ml-5">
                    <h4 className="pb-3">Book You Service</h4>
                    <h1>a s</h1>
                </div>
            </div>
        </section>
    );
};

export default AddService;