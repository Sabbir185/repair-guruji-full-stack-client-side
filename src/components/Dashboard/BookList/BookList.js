import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import HeaderNavbar from '../../Shared/HeaderNavbar/HeaderNavbar';
import Sidebar from '../Sidebar/Sidebar';
import './BookList.css'

const BookList = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [bookList, setBookList] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5055/getBooking?email=${loggedInUser.email}`)
            .then(res => res.json())
            .then(data => setBookList(data))
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
                    <h4 className="pb-3">Book You Service</h4>

                    <table>
                        <thead>
                            <tr>
                                <th>Service Type</th>
                                <th>Client Email</th>
                                <th>Payment Id</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                bookList.map(book =>
                                    <tr>
                                        <td>{book.title}</td>
                                        <td>{book.email}</td>
                                        <td>{book.paymentId}</td>
                                        <td>Done</td>
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

export default BookList;