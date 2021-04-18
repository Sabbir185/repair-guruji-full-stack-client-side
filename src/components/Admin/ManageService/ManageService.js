import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import Sidebar from '../../Dashboard/Sidebar/Sidebar';
import HeaderNavbar from '../../Shared/HeaderNavbar/HeaderNavbar';
import './ManageService.css'



const ManageService = () => {
    const [allService, setAllService] = useState([]);
    const history = useHistory();

    useEffect(() => {
        fetch(`http://localhost:5055/getServices`)
            .then(res => res.json())
            .then(data => setAllService(data))
    }, []);


    const handleStatus = (_id) =>{
        fetch(`http://localhost:5055/serviceDelete?id=${_id}`)
        .then(res => {
            if(res){
                alert("Item has been deleted !");
                history.push('/')
            }
        })
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
                    <h4 className="pb-3">Repair Guruji's All Service</h4>
                    <table>
                        <thead>
                            <tr>
                                <th>Service Type</th>
                                <th>ID</th>
                                <th>Price</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                allService.map(service =>
                                    <tr>
                                        <td>{service.title}</td>
                                        <td>{service._id}</td>
                                        <td>${service.price}</td>
                                        <td>
                                             <button onClick={()=>handleStatus(service._id)} className="btn btn-danger">Delete</button>
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

export default ManageService;