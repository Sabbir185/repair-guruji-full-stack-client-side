import React from 'react';
import Sidebar from '../Dashboard/Sidebar/Sidebar';
import HeaderNavbar from '../Shared/HeaderNavbar/HeaderNavbar';
import PaymentStrip from './PaymentStrip';

const PayPage = () => {
    return (
        <section className="container">
            <HeaderNavbar></HeaderNavbar>
            <div className="row pt-3">
                <div className="col-2">
                    <h4 className="pb-3">Dashboard</h4>
                    <Sidebar></Sidebar>
                </div>
                <div className="col  ml-5">
                    <div className="row">
                        <div className="col"></div>
                        <div className="col-8">
                            <h3 className="mb-5">Pay With Stripe</h3>
                            <PaymentStrip></PaymentStrip>
                        </div>
                        <div className="col"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PayPage;