import React, { useState, useEffect } from "react";
import BootstrapSwitchButton from 'bootstrap-switch-button-react'
import VisibilityIcon from '@mui/icons-material/Visibility';
import Pagination from '@mui/material/Pagination'
import { Link } from "react-router-dom";
import DeleteForever from '@material-ui/icons/DeleteForever';



const ManageMerchants = () => {
    const [activeInactive, setActiveInactive] = useState(true)

    return (
        <>
            <div className="page-wrapper" style={{ minHeight: "250px" }}>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="application-detail-heading-area" style={{ position: "relative", padding: "10px", top: "20px" }} >
                                <h2>Manage Coustomers</h2>
                                <a className="send-notifications-btn">
                                    Export
                                </a>
                            </div>
                            <div className="table-data-search-box" >
                                <div className="search">
                                    <input type="text" className="searchTerm" placeholder="Search" />
                                    <button type="submit" className="searchButton">
                                        <i className="fa fa-search" aria-hidden="true"></i>
                                    </button>
                                </div>
                            </div>
                            <div className="manage-admins-main-area">
                                <div className="manage-admins-table-area">
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th>Sr. No.</th>
                                                <th>Customers Name</th>
                                                <th>Email</th>
                                                <th>Phone</th>
                                                <th>No. of Parkings</th>
                                                <th>View Details</th>
                                                <th>Action</th>
                                                <th>Active/Inactive</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr >
                                                <td></td>
                                                <td>Vishal Singh</td>
                                                <td>vksingh2992000@gmail.com</td>
                                                <td>8076053744</td>
                                                <td><Link to={`/app/customersparkingdetails`} > 133</Link></td>
                                                <td>  <Link to={`/app/customersdetails`} > <VisibilityIcon /></Link>

                                                </td>
                                                <td>
                                                    <Link to={`/app/edit-admin/}`} className="mange-admins-edit-btn"><i className="fas fa-edit"></i></Link>
                                                    <Link to={`/app/admin/`} className="mange-admins-dlt-btn">                                                            <DeleteForever style={{ color: '#FF5C93' }} />
                                                    </Link>
                                                </td>
                                                <td>
                                                    <BootstrapSwitchButton
                                                        onlabel='Active'
                                                        width={100}
                                                        offlabel='Inactive'
                                                        onstyle="success"
                                                        onChange={() => {
                                                            setActiveInactive(!activeInactive);
                                                        }}
                                                    />
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <Pagination count={100} color="primary" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <footer className="footer text-center"> 2021 © Ample Admin brought to you by <a
                    href="https://www.wrappixel.com/">wrappixel.com</a>
                </footer>
            </div>
        </>
    );
};

export default ManageMerchants;
