import React, { useState } from 'react';
import DeleteForever from '@material-ui/icons/DeleteForever';
import { Link } from "react-router-dom";
import BootstrapDialog from './BootstrapDialog';
import BootstrapSwitchButton from 'bootstrap-switch-button-react'
import 'reactjs-popup/dist/index.css';

const ManageLocation = () => {
    const [activeInactive, setActiveInactive] = useState(true)

    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };
    const data = [
        { id: '1', add: 'Cecilia Chapman 711-2880 Nulla St. Mankato Mississippi 96522 (257) 563-7401', cap: '100', ic1: <i className="fas fa-edit"></i>, ic2: <DeleteForever style={{ color: '#FF5C93' }} /> },
        { id: '2', add: 'Cecilia Chapman 711-2880 Nulla St. Mankato Mississippi 96522 (257) 563-7401', cap: '100', ic1: <i className="fas fa-edit"></i>, ic2: <DeleteForever style={{ color: '#FF5C93' }} /> },
        { id: '3', add: 'Cecilia Chapman 711-2880 Nulla St. Mankato Mississippi 96522 (257) 563-7401', cap: '100', ic1: <i className="fas fa-edit"></i>, ic2: <DeleteForever style={{ color: '#FF5C93' }} /> },
        { id: '4', add: 'Cecilia Chapman 711-2880 Nulla St. Mankato Mississippi 96522 (257) 563-7401', cap: '100', ic1: <i className="fas fa-edit"></i>, ic2: <DeleteForever style={{ color: '#FF5C93' }} /> },
        { id: '5', add: 'Cecilia Chapman 711-2880 Nulla St. Mankato Mississippi 96522 (257) 563-7401', cap: '100', ic1: <i className="fas fa-edit"></i>, ic2: <DeleteForever style={{ color: '#FF5C93' }} /> },

    ]
    return (
        <>
            <div className="container-fluid add-location">
                <div className="booking-wrapper">
                    <div className="row">
                        <div className="col-md-5"><h2>Manage Location</h2></div>
                        <div className="col-md-3">
                            <div className="booking-search">
                                <input type="text" />

                                <button><i className="fa fa-search" aria-hidden="true"></i></button>

                            </div>
                        </div>
                        <div className="col-md-2 ">
                            <div className="boots">
                                <BootstrapDialog />
                            </div>
                        </div>
                        <div className="col-md-2 ">
                            <button className="Export-btn-managelocation">
                                Export
                            </button>
                        </div>
                    </div>
                </div>
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">Sr No.</th>
                            <th scope="col">Parking Location</th>
                            <th scope="col">Action</th>
                            <th scope="col">Active/Inactive</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((item) => (
                                <tr>
                                    <th scope="row">{item.id}</th>
                                    <td>Noida59 kirtimaan ,1stflor</td>
                                    <td>
                                        <Link className="mange-admins-edit-btn"><i className="fas fa-edit"></i></Link>
                                        <Link className="mange-admins-dlt-btn">                       <DeleteForever style={{ color: '#FF5C93' }} />
                                        </Link></td>
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
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default ManageLocation