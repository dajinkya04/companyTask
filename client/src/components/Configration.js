import React from 'react'
import "../App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import imags from "../images/img_avatar.png"
import { NavLink } from 'react-router-dom'

const Configration = () => {
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
                                    <h5 className='text-secondary small'>Employee Full Name</h5>
                                    <div className="row m-2 p-2">
                                        <div className="col-4">
                                            <input type="text" className="form-control" placeholder="First name" aria-label="First name" />
                                        </div>
                                        <div className="col-4">
                                            <input type="text" className="form-control" placeholder="Middle name" aria-label="Middle name" />
                                        </div>
                                        <div className="col-4">
                                            <input type="text" className="form-control" placeholder="Last name" aria-label="Last name" />
                                        </div>
                                        <div className="col-6 mt-2">
                                        <div className="row p-1">
                                            <div className="col-6">
                                            <label for="">Employee Id</label>
                                            <input type="text" className="form-control" placeholder="001" aria-label="Employee Id" />
                                            </div>
                                            <div className="col-6">
                                            <label for="">Other Id</label>
                                            <input type="text" className="form-control" placeholder="001" aria-label="Employee Id" />
                                            </div>
                                            <div className="col-6">
                                            <label for="">Driver Licences N:</label>
                                            <input type="text" className="form-control" placeholder="001" aria-label="Employee Id" />
                                            </div>
                                            <div className="col-6">
                                            <label for="">Driver Exp Date</label>
                                            <input type="date" className="form-control" placeholder="001" aria-label="Employee Id" />
                                            </div>
                                            <div className='col-6'>
                                            <select class="form-select form-select-sm m-3" aria-label=".form-select-sm example">
                                                <option selected>Nationality</option>
                                                <option value="1">one</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                                </select>
                                            </div>
                                            <div className='col-6'>
                                            <select class="form-select form-select-sm m-3" aria-label=".form-select-sm example">
                                                <option selected>Matiral Status</option>
                                                <option value="1">one</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                                </select>
                                            </div>
                                            <div className='col-6'>
                                            <label for="">Driver Exp Date</label>
                                            <input type="date" className="form-control" placeholder="001" aria-label="Employee Id" />
                                            </div>
                                            <div className='col-6'>
                                            <div class="form-group p-2 --2">
                                                <label class="radio-inline"> <input type="radio"  name="gender" />Female</label>
                                                <label class="radio-inline"><input type="radio" name="gender" />Male</label></div>
                                            </div>
                                        </div>
                                        </div>
                                        </div>
                                </div>
                                <div className='col-6'>
                                </div>
                                <div className='col-6'>
                               
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

export default Configration
