import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import axios from "axios";

const Signin = () => {
    const { signIn } = useContext(AuthContext)

    const handleSignIn = e => {
        e.preventDefault()

        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)

        signIn(email, password)
            .then(res => {
                console.log('signed in', res.user)

                //update last login time
                const lastSignInTime = res?.user?.metadata?.lastSignInTime;
                const loginInfo = { email, lastSignInTime }

                // using axios alternative of fetch
                axios.patch('http://localhost:5000/users', loginInfo)
                    .then(data => {
                        console.log(data.data)
                    })

                //  fetch('http://localhost:5000/users',{
                //     method: 'PATCH',
                //     headers:{
                //         'content-type': 'application/json'
                //     },
                //     body: JSON.stringify(loginInfo)
                //  })
                //  .then(res=>res.json())
                //  .then(data =>{
                //     console.log('sign in time uploaded to db', data)
                //  })
            })
            .catch(err => console.log('ERROR', err.message))
    }
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Sign In now!</h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleSignIn} className="card-body">

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" name='email' className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" name='password' className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Sign In</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Signin;