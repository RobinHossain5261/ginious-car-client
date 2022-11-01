import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import img from '../../assets/images/login/login.svg';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';


const SignUp = () => {
    const { createUser } = useContext(AuthContext);

    const handaleSignUp = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
            })
            .catch(error => console.error(error))

    }
    return (
        <div className="hero my-12 ">
            <div className="hero-content grid gap-12 md:grid-cols-2 flex-col lg:flex-row">
                <div className="text-center lg:text-left">
                    <img className='w-3/4' src={img} alt="" />

                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 border-2 border-gray-200">
                    <form onSubmit={handaleSignUp} className="card-body">
                        <h1 className="text-5xl text-center font-bold">Sign Up</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <Link href="#" className="label-text-alt link link-hover">Forgot password?</Link>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-warning" type="submit" value="Sign UP" />

                        </div>
                    </form>
                    <p className='text-center pb-3'>Already have an account? <Link to='/login' className='text-orange-600 font-bold'>Login</Link> </p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;