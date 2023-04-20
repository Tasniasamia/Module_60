import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Authproviderdata } from '../Layout/Authprovider';

const Resister = () => {
  const recivedata=useContext(Authproviderdata)
  const {user,createsignup}=recivedata;
  
  const submit=(event)=>{
    event.preventDefault();
const email=event.target.email.value;
const password=event.target.password.value;
console.log(email,password);
createsignup(email,password)
.then((userCredential) => {
  // Signed in 
  const user = userCredential.user;
  console.log(user);
  event.target.reset();
  // ...
})
.catch((error) => {
  const errorCode = error.code;
  const errorMessage = error.message;
  console.log(errorMessage);
  // ..
});
  }
    return (
        
        <div  className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col ">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Resister now!</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body"onSubmit={submit}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="text" placeholder="email" className="input input-bordered" name="email"required/>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="text" placeholder="password" className="input input-bordered"name="password"required />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Resister</button>
              </div>
              <p>Do you have a account?<Link className='text-primary' to="/Login">Login</Link></p>
            </form>
          </div>
        </div>
      </div>
    );
};

export default Resister;