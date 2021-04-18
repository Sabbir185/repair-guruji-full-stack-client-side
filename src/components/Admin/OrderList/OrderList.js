import React, { useEffect, useState } from 'react';
import HeaderNavbar from '../../Shared/HeaderNavbar/HeaderNavbar';
import Sidebar from '../../Dashboard/Sidebar/Sidebar';
import './OrderList.css'


const OrderList = () => {
    const [allBookList, setAllBookList] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5055/getAllBookingList`)
            .then(res => res.json())
            .then(data => setAllBookList(data))
    }, []);


    return (
        <section className="container">
            <HeaderNavbar></HeaderNavbar>
            <div className="row pt-3">
                <div className="col-2">
                    <h4 className="pb-3">Dashboard</h4>
                    <Sidebar></Sidebar>
                </div>
                <div className="col  ml-5">
                    <h4 className="pb-3">All Booking List</h4>
                    <table>
                        <thead>
                            <tr>
                                <th>Client Email</th>
                                <th>Service Type</th>
                                <th>Booking Id</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                allBookList.map(booking =>
                                    <tr>
                                        <td>{booking.email}</td>
                                        <td>{booking.title}</td>
                                        <td>{booking._id}</td>
                                        <td>
                                            <select name="status" id="">
                                                <option value="done" className="text-success font-weight-bold">Done</option>
                                                <option value="pending" className="text-danger font-weight-bold">Pending</option>
                                                <option value="Done" className="text-warning font-weight-bold">On going</option>
                                            </select>
                                        </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
};

export default OrderList;