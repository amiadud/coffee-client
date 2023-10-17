import React from 'react';

const Login = () => {

    const handleLogin = (e) => {
        e.preventDefault();
        const form = form.target;
        const email = form.email.value;
        const password = form.password.value;
        
    }


    return (
        <div>
             <div className="hero ">
  <div className=" flex-col mb-10">
    <div className="text-center my-10 lg:text-left">
      <h1 className="text-5xl font-bold">Login Now</h1>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleLogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="Enter your email.." name='email' className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="Enter your password.." name='password' className="input input-bordered" required />
        </div>
        <div className="form-control mt-5">
          <button className="btn btn-primary">Signin</button>
        </div>
      </form>
    </div>
  </div>
</div>
        </div>
    );
};

export default Login;