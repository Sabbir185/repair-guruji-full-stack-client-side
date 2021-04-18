import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import './AddService.css'
import HeaderNavbar from '../../Shared/HeaderNavbar/HeaderNavbar';
import Sidebar from '../../Dashboard/Sidebar/Sidebar';
import { useHistory } from 'react-router';

const AddService = () => {
    const history = useHistory();
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {
        // console.log(data)
        // console.log(data.file[0])
        const formData = new FormData();
        formData.append('file', data.file[0] );
        formData.append('title', data.title );
        formData.append('price', data.price );
        formData.append('description', data.describe );

        fetch('https://sabbir185-repair-guruji.herokuapp.com/addService', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(result => {
            console.log(result)
            if(result){
                alert("Service added successfully !")
                history.push('/');
            }
        })
        .catch(error => {
            console.error(error)
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

                    <div className="row">
                        <div className="col"></div>
                        <div className="col-8">
                            <h4 className="pb-3">Book You Service</h4>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <small className="text-secondary d-block">Add Product Image</small>
                                <input type="file" {...register("file", { required: true })} className="mb-2"/>
                                {errors.file && <span className="text-danger">Image is required</span>}

                                <input type="text" {...register("title", { required: true })} placeholder="service title" className="form-control mb-2"/>
                                {errors.title && <span className="text-danger">Service title is required</span>}

                                <input type="number" {...register("price", { required: true })} placeholder="service price" className="form-control mb-2"/>
                                {errors.price && <span className="text-danger">Service price is required</span>}

                                <input type="text" {...register("describe", { required: true })} placeholder="Describe your service" className="form-control mb-3 pt-3 txt-area"/>
                                {errors.describe && <span className="text-danger">Description is required</span>}

                                <input type="submit" className="btn btn-info"/>
                            </form>
                        </div>
                        <div className="col"></div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default AddService;