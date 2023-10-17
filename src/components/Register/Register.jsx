import React from 'react';
import useAuth from '../../hooks/useAuth';
import { updateProfile } from 'firebase/auth';

const Register = () => {

    const { user, createUser } = useAuth()

    const handleRegister = (e)=> {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const terms = form.terms.value;
        if(!terms){
            return `Please accept the following terms`;
        }
        createUser(email, password)
        .then(result => {
            console.log(result.user);
            const email = result.user.email
            const createdAt = result.user.metadata.creationTime
            //new user has been created
            const user = {name, email, createdAt }
            fetch('http://localhost:5000/users', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(user)
            })
            .then( res => res.json())
            .then(data => {
                console.log(data);
            })
            updateProfile(result.user, {
                displayName:name
            })
        })
        .catch(err => {
            console.log(err);
        })
    }

    return (
        <div>
            <div className="hero ">
  <div className=" flex-col mb-10">
    <div className="text-center my-10 lg:text-left">
      <h1 className="text-5xl font-bold">SignUp Now</h1>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleRegister} className="card-body">
      <div className="form-control">
          <label className="label">
            <span className="label-text">You Name</span>
          </label>
          <input type="text" placeholder="Enter your name.." name='name' className="input input-bordered" required />
        </div>
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
          <label className="label ">
            <input type="checkbox" className='mr-2' name="terms" id="terms" />
            <label htmlFor="terms">Accept Terms and condition</label> 
          </label>
        </div>
        <div className="form-control ">
          <button className="btn btn-primary">SignUp</button>
        </div>
      </form>
    </div>
  </div>
</div>
        </div>
    );
};

export default Register;