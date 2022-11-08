import React ,{useState} from "react";
import DeleteForever from '@material-ui/icons/DeleteForever';
import { Link, useParams } from "react-router-dom";
import VisibilityIcon from '@mui/icons-material/Visibility';
import Pagination from '@mui/material/Pagination'
import BootstrapSwitchButton from 'bootstrap-switch-button-react';



const ManageAdmin = () => {

    // let PageSize = 5

    const [activeInactive, setActiveInactive] = useState(true)

    // const [currentPage, setCurrentPage] = useState(1);

    // const dataTable = useMemo(() => {
    //   const firstPageIndex = (currentPage - 1) * PageSize;
    //   const lastPageIndex = firstPageIndex + PageSize;
    //   return data.slice(firstPageIndex, lastPageIndex);
    // }, [currentPage]);
    
    return (
        <>
            <div className="page-wrapper" style={{ minHeight: "250px" }}>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="application-detail-heading-area" style={{position: "relative", padding: "10px", top: "20px"}}>
                                <h2>Manage Parking</h2>
                                <a href="#/app/add-admin" class="send-notifications-btn">Add Location</a>                            
                            </div>
                            <div className="table-data-search-box">
                                <div className="search" >
                                    <input type="text"    className="searchTerm" placeholder="Search" />
                                    <button type="submit"  className="searchButton">
                                        <i className="fa fa-search" aria-hidden="true"></i>
                                    </button>
                                </div>
                            </div>


                            
                            <div className="manage-admins-main-area">
                                <div className="manage-admins-table-area">
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th>S.No.</th>
                                                <th>Parking Name</th>
                                                <th>Location</th>
                                                <th>Capcity </th>
                                                <th>Details</th>
                                                <th>Status</th>

                                                <th>Action</th>
                                                <th>Active/Inactive</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            
                                            <tr >
                                                <td>1</td>
                                                <td>
                                                    <div className="user-icon-detail-area">
                                                        <div className="company-user-icon-area">
                                                        Vishal parking
                                                        </div>
                                                        
                                                    </div>
                                                </td>
                                                <td>Faridabad</td>
                                                <td>11000</td>
                                                <td><VisibilityIcon/></td>
                                                <td>full/remain</td>
                                                                                                                                               <td>
                                                    <Link to={`/app/edit-admin/}`} className="mange-admins-edit-btn"><i className="fas fa-edit"></i></Link>
                                                    <Link to={`/app/admin/`}  className="mange-admins-dlt-btn">                                                            <DeleteForever style={{ color: '#FF5C93' }} />
                                                    </Link>
                                                </td>
                                                <td>
                                                <BootstrapSwitchButton
                                                width={100}
                                                                    // checked={app.status}
                                                                    onlabel='Active'
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
                                    <Pagination count={10} color="primary"
                                    // currentPage={currentPage}
                                    // totalCount={data.length}
                                    // pageSize={PageSize}
                                    // onPageChange={page => setCurrentPage(page)}
                                     />
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

export default ManageAdmin;






// {data.map((item, i) => (
//     <tr key={i}>
//         <td>{item.userId}</td>
//         <td>{item.id}</td>
//         <td>{item.title}</td>
//         <td>{item.body}</td>
//     </tr>
// ))}