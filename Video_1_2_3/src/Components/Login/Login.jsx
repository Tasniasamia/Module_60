import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Authproviderdata } from '../Layout/Authprovider';

const Login = () => {
    const receivedata=useContext(Authproviderdata);
    const {signin}=receivedata;
    function submit(event){
        event.preventDefault();
const email=event.target.email.value;
const password=event.target.password.value;
signin(email,password)
.then(result=>{
    console.log(result.user);
    event.target.reset();
})
.catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage);
    // ..
  });
    }

    return (
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col ">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form className="card-body"onSubmit={submit}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text" placeholder="email"name="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="text" placeholder="password"name="password" className="input input-bordered" />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
        <p>Do haven't a account?<Link className='text-primary' to="/Resister">Resister</Link></p>
      </form>
    </div>
  </div>
</div>
    );
};

export default Login;