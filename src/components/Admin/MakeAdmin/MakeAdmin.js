import React, { useState } from 'react';
import HeaderNavbar from '../../Shared/HeaderNavbar/HeaderNavbar';
import Sidebar from '../../Dashboard/Sidebar/Sidebar';
import './MakeAdmin.css'
import { useHistory } from 'react-router';

const MakeAdmin = () => {
    const history = useHistory()
    const [email, setEmail] = useState('');

    const handleEmail = (e) =>{
        setEmail(e.target.value)
    }

    const HandleForm = (e) => {
        fetch("http://localhost:5055/addAdmin",{
            method: 'POST',
            headers: {"content-type":"application/json"},
            body: JSON.stringify({email})
        })
        .then(res =>{
            if(res){
                alert("Admin added Successfully !")
                history.push('/addService')
            }
        })

        e.preventDefault();
    }

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
                            <h4 className="pb-3 text-info">Add New Admin</h4>
                            <form onSubmit={HandleForm}>
                                <input onBlur={handleEmail} type="email" placeholder="Enter email address" className="form-control p-2 my-4 txt-stle"/>
                                <input type="submit" value="Add Admin" className="btn btn-success px-4"/>
                            </form>
                        </div>
                        <div className="col"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MakeAdmin;