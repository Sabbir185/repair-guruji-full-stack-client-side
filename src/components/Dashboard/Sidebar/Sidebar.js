import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';

const Sidebar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        fetch(`http://localhost:5055/getAdmin?email=${loggedInUser.email}`)
            .then(res => res.json())
            .then(data => setIsAdmin(data))
    }, [])


    return (
        <div>
            <ul class="nav flex-column">

                {
                    isAdmin ?
                    <div>
                        <li class="nav-item">
                            <Link to="/orderList"> Order List </Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/addService"> Add Service </Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/makeAdmin"> Make Admin </Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/manageService">Manage Service </Link>
                        </li>
                    </div>
                    :
                    <div>
                        <li class="nav-item">
                            <Link to="/book"> Book </Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/bookList"> Book List </Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/review"> Review </Link>
                        </li>
                    </div>
                }


            </ul>
        </div>
    );
};

export default Sidebar;