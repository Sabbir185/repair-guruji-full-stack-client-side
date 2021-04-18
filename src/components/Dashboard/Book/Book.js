import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { UserContext } from '../../../App';
import PaymentStrip from '../../PaymentStrip/PaymentStrip';
import CheckoutForm from '../../PaymentStrip/CheckoutForm';

const Book = () => {
    const { id } = useParams();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const [booking, setBooking] = useState([]);
    const [toggle, setToggle] = useState(false);
    const [orderData, setOrderData] = useState({});

    useEffect(() => {
        fetch('http://localhost:5055/getServices')
            .then(res => res.json())
            .then(data => setBooking(data))
    }, []);

    const item = booking.filter(service => (id == service._id));

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        setOrderData(data);
        setToggle(true);
    };


    return (
        <div>
            <div className="row">
                <div className="col"></div>
                <div className="col-8">

                    <h4 className="pb-3">Book Your Service</h4>
                    <small className="text-secondary">User Name : </small>
                    <input type="text" defaultValue={loggedInUser.name} className="form-control mb-2" />
                    {
                        id
                        ?
                        toggle == false && item.map(book => 

                            <form onSubmit={handleSubmit(onSubmit)}>
                                <small className="text-secondary">User Email : </small>
                                <input defaultValue={loggedInUser.email} {...register("email", { required: true })} className="form-control mb-2"/>
                                {errors.email && <span className="text-danger">This field is required</span>}

                                <small className="text-secondary">Service type : </small>
                                <input defaultValue={book.title} {...register("title", { required: true })} className="form-control mb-2"/>
                                {errors.title && <span className="text-danger">This field is required</span>}

                                <small className="text-secondary">Total cost : </small>
                                <input defaultValue={book.price} {...register("price", { required: true })} className="form-control mb-4"/>
                                {errors.price && <span className="text-danger">This field is required</span>}

                                <input type="submit" value="Next" className="btn btn-success mt-4 px-4"/>
                            </form>
                        )
                        :
                        <div>
                            <h6 className="mt-5">Please select a service first <Link to="/">Go Now</Link></h6>
                        </div>
                    }

                    <div>
                        {
                            toggle && <div>
                                <h3 className="mb-5 text-secondary">Pay with stripe</h3>
                                <PaymentStrip orderData={orderData}></PaymentStrip>
                            </div>
                        }
                    </div>

                </div>
                <div className="col"></div>
            </div>
        </div>
    );
};

export default Book;