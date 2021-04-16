import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div>
            <ul class="nav flex-column">
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


            </ul>
        </div>
    );
};

export default Sidebar;