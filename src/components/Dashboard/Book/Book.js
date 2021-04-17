import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';

const Book = () => {
    const {id} = useParams();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const [booking, setBooking] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5055/getServices')
        .then(res => res.json())
        .then(data => setBooking(data))
    },[]);

    const item = booking.filter(service => (id == service._id) );


    return (
        <div>
            <div className="row">
                <div className="col"></div>
                <div className="col-8">
                    <h4 className="pb-3">Book Your Service</h4>
                    <small className="text-secondary">User Name : </small>
                    <input type="text"  defaultValue={loggedInUser.name} className="form-control mb-2"/>
                    <small className="text-secondary">User Email : </small>
                    <input type="text"  defaultValue={loggedInUser.email} className="form-control mb-2"/>
                    {
                        id 
                        ?
                        item.map( book => 
                            <div>
                                <small className="text-secondary">Service type : </small>
                                <input type="text"  defaultValue={book.title} className="form-control mb-2"/>
                                <small className="text-secondary">Total cost : </small>
                                <input type="text"  defaultValue={book.price} className="form-control mb-2"/>
                            </div>
                        )
                        :
                        <div>
                            <h6 className="mt-5">Please select a service first <Link to="/">Go Now</Link></h6>
                        </div>
                    }
                    

                </div>
                <div className="col"></div>
            </div>
        </div>
    );
};

export default Book;