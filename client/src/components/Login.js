import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

const Login = () => {

    const navigate = useNavigate();


    const [getUser, setUser] = useState({
        useremail:"", userpassword:""
    })

    const addData = (e)=>{
        const {name, value} = e.target;
        setUser(()=>{
            return{
                ...getUser,
                [name]:value
            }
        })
    }

    const loginUser = async(e)=>{
        // e.preventDefault();
        const {useremail, userpassword } = getUser;
        const res = await fetch('/login',{
            method:'post',
            headers:{
                'Content-Type':'application/josn'
            },
            body:JSON.stringify({
                useremail,userpassword
            })
        })

        const data = await res.json();
        console.log(data);
        const userResult =  data.result;
        console.log(userResult);
        if(res.status == 422 || !data){
            window.alert(`${data.msg}`);
            console.log('user not registred!');
        }else if(userResult.userType == 'user'){
            window.alert(`${data.msg} user login successful !`);
            // navigate('/')
            console.log('user login successful!');
        }else{
            window.alert(`${data.msg} admin user login`);
            // navigate('/')
            console.log('admin user login');
        }

    }


  return (
    <>
        <section>
            <div className="container sign_up">
            <h2 className='text-center mt-5 text-success'>Employee Login</h2>
            {/* <form className="row g-3 mb-2 user_from"> */}
                <div className="col-md-6">
                <label for="UserEmail" className="form-label">UserEmail</label>
                <input type="email" className="form-control" onChange={addData} value={getUser.useremail} name="useremail" />
                </div>
                <div className="col-md-6">
                <label for="Password" className="form-label">Password</label>
                <input type="password" className="form-control" onChange={addData} value={getUser.userpassword} name="userpassword" />
                </div>
            
                <div className="col-12">
                <button type="submit" className="btn btn-warning" onClick={loginUser}>Login</button>
                <NavLink to="/SignUp" className="from-control m-5" style={{color:"#ffff", textDecoration: 'none'}}>Create User Account</NavLink>
                </div>
            {/* </form> */}
            </div>
      </section>      
    </>
  )
}

export default Login