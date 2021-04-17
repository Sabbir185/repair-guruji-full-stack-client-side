import React from 'react';
import HeaderNavbar from '../../Shared/HeaderNavbar/HeaderNavbar';
import Book from '../Book/Book';
import Sidebar from '../Sidebar/Sidebar';

const Dashboard = () => {
    return (
        <section className="container">
            <HeaderNavbar></HeaderNavbar>
            <div className="row pt-3">
                <div className="col-2">
                    <h4 className="pb-3">Dashboard</h4>
                    <Sidebar></Sidebar>
                </div>
                <div className="col  ml-5">
                    <Book></Book>
                </div>
            </div>
        </section>
    );
};

export default Dashboard;