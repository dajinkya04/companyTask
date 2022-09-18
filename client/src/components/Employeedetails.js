import React from 'react'
import "../App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import imags from "../images/img_avatar.png"
import { NavLink } from 'react-router-dom'


const Employeedetails = () => {
  return (
    <>
       <section>
            <div className='container-fulid top-con'>
                <div className='row'>
                    <div className='col col-sm-2 col-md-2 right-sideadmin'>
                        <h5 className='mt-5 text-center'>Orange<strong className='text-success'>HRM</strong></h5>
                        <ul class="list-group list-group-flush m-2 p-3 bg-white">
                            <li class="list-group-item">
                            <input className="form-control me-2" type="search" placeholder='Search' aria-label="Search" />
                            </li>
                            <li><i className="fa fa-user m-1"></i>Admin</li>
                            <li><i className="fa fa-group m-1"></i>PIM</li>
                            <li><i className="fa fa-file-text m-1"></i>Leave</li>
                            <li><i className="fa fa-clock-o m-1"></i>Time</li>
                            <li><i className="fa fa-address-card-o m-1"></i>Myinfo</li>
                            <li><i className='fa fa-home m-1'></i>Dashbord</li>
                            <li><i class="fa fa-file m-1"></i>Directory</li>
                            <li><i className="fa fa-cog fa-fw m-1"></i>Maintenance</li>
                            <li><i className="fa fa-cloud m-1"></i>Buzz</li>
                       </ul>
                    </div>  
                    <div className='col-10 col-sm-10 col-md-10 bottam-slide'>
                    <nav className="navbar navbar-inverse">
                        <div className="container-fluid">
                            <div className="navbar-header">
                            <a className="navbar-brand text-white" href="/#">PIM</a>
                            </div>
                            <ul className="nav navbar-nav navbar-right">
                            <li>
                            <div className="dropdown">
                                    <button className="btn btn-light dropdown-toggle" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
                                    <i className="fa fa-user m-1"></i>  User Data
                                    </button>
                               </div>
                            </li>
                            </ul>
                        </div>
                        </nav>
                        <nav  className="m-2 p-2" aria-label="breadcrumb">
                        <ol className="breadcrumb">
                        <li className="breadcrumb-item">Home</li>
                        <li className="breadcrumb-item active text-danger" aria-current="page"><NavLink to="/Adminmenu">Configaration</NavLink></li>
                            <li className="breadcrumb-item active text-danger" aria-current="page"><NavLink to="/Configration">EmployeeList</NavLink></li>
                            <li className="breadcrumb-item" aria-current="page"><NavLink to="/Employeedetails">AddEmplyee</NavLink></li>
                        </ol>
                        </nav>
                        <div className='container'>
                            <h4 className='text-secondary small'>User Name</h4>
                            <div className='row'>
                                <div className='col-4 col-md-4'>
                                <img src={imags} alt="Avatar" className="avatar2" style={{width:"40%",hight:"10%"}}  />
                                <ul className='small p-3'>
                                <button type="button" className="btn btn-outline-primary m-2">Personal Details</button>
                                {/* <h2 className='small m-2'> Personal Details</h2> */}
                                <li>Contact Details</li>
                                <li>Emergency Details</li>
                                <li>Dependancy</li>
                                <li>Immigration</li>
                                <li>Job</li>
                                <li>Salary</li>
                                <li>Report-To</li>
                                <li>Qualifaction</li>
                                <li>Membership</li>


                                </ul>
                                </div>
                                <div className='col-8 col-md-8'>
                                    <h5 className='text-secondary small'>Contact Details</h5>
                                    <div className="row m-2 p-2">
                                        <div className="col-4">
                                        <label for="">Street 1</label>
                                            <input type="text" className="form-control" aria-label="First name" />
                                        </div>
                                        <div className="col-4">
                                        <label for="">Street 2</label>
                                            <input type="text" className="form-control" aria-label="Middle name" />
                                        </div>
                                        <div className="col-4">
                                        <label for="">City</label>
                                            <input type="text" className="form-control" aria-label="Last name" />
                                        </div>
                                        <div className="col-4">
                                        <label for="">State/Provice</label>
                                            <input type="text" className="form-control" aria-label="state" />
                                        </div>
                                        <div className="col-4">
                                        <label for="">Zip/PostalCode</label>
                                            <input type="text" className="form-control" aria-label="PostalCode" />
                                        </div>
                                        <div className="col-4">
                                        <select class="form-select form-select m-4" aria-label=".form-select-sm example">
                                                <option selected>City</option>
                                                <option value="1">one</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                         </select>
                                        </div>
                                        <div className="col-4">
                                        <label for="">Home</label>
                                            <input type="text" className="form-control" aria-label="Home" />
                                        </div>
                                        <div className="col-4">
                                        <label for="">Mobile</label>
                                            <input type="text" className="form-control" aria-label="Mobile" />
                                        </div>
                                        <div className="col-4">
                                        <label for="">Work</label>
                                            <input type="text" className="form-control" aria-label="work" />
                                        </div>
                                        <div className="col-4">
                                        <label for="">Work Email</label>
                                            <input type="text" className="form-control" aria-label="work Email" />
                                        </div>
                                        <div className="col-4">
                                        <label for="">Other Email</label>
                                            <input type="text" className="form-control" aria-label="Other Email" />
                                        </div>
                                        </div>
                                </div> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Employeedetails
