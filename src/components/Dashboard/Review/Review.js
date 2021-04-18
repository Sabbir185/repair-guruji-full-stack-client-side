import React, { useContext, useState } from 'react';
import HeaderNavbar from '../../Shared/HeaderNavbar/HeaderNavbar';
import Sidebar from '../Sidebar/Sidebar';
import { useForm } from "react-hook-form";
import { UserContext } from '../../../App';
import { useHistory } from 'react-router';

const Review = () => {
    const history = useHistory();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [rating, setRating] = useState(null);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const handleBlur = (e) => {
        setRating(e.target.value)
    }

    const onSubmit = (data) => {
        const newData = {
            rating: rating,
            occupation: data.Occupation,
            description: data.description,
            email: loggedInUser.email,
            image: loggedInUser.photoURL
        };
        console.log(newData)

        fetch("https://sabbir185-repair-guruji.herokuapp.com/addReview",{
            method:'POST',
            headers:{'content-type':'application/json'},
            body:JSON.stringify(newData)
        })
        .then(res => {
            if(res){
                alert("Successfully added new product!");
                history.push('/dashboard')
            }
        })
    };

    return (
        <section className="container">
            <HeaderNavbar></HeaderNavbar>
            <div className="row pt-3">
                <div className="col-2">
                    <h4 className="pb-3">Dashboard</h4>
                    <Sidebar></Sidebar>
                </div>
                <div className="col  ml-5">
                    
                    <div className="col"></div>
                    <div className="col-8">
                        <h4 className="pb-3"> Review Our Service </h4>
                        <form onSubmit={handleSubmit(onSubmit)}>

                            <small className="text-secondary">Occupation : </small>
                            <input type="text" {...register("Occupation", { required: true })} className="form-control mb-2" placeholder="Are you student, teacher ?"/>
                            {errors.Occupation && <span className="text-danger">This field is required</span>}

                            <small className="text-secondary">Tell Us : </small>
                            <input type="text" {...register("description", { required: true })} className="form-control pt-3 pb-5" placeholder="write something ..."/>
                            {errors.description && <span className="text-danger d-block">This field is required</span>}

                            <small className="text-secondary mt-2 d-block">Rating : </small>
                            <select onBlur={handleBlur} name="rating" id="" className="form-control">
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>

                            <input type="submit" value="Submit" className="btn btn-success mt-4 px-4" />
                        </form>
                    </div>
                    <div className="col"></div>
                </div>
            </div>
        </section>
    );
};

export default Review;