import React from 'react'
import FormInput from '../components/FormInput'

const Signup = () => {
    return (
        <div className="account-page">

            {/* <!-- Main Wrapper --> */}
            <div className="main-wrapper">
                {/* <!-- Page Content --> */}
                <div className="content align-items-center">

                    <div className="w-100 ">
                        <div className="login-left">

                            {/* <!-- Login Tab Content --> */}
                            <div className="account-content">
                                <div className="login-header">
                                    <a href="index.html">
                                        <img src="images/logo-full.png" alt="" />
                                    </a>
                                </div>
                                <div className="form-col">
                                    <div className="login-text-details">
                                        <h3>Sign up</h3>
                                        <p>Lets get you all setup so you can verify your oersonal account and begin setting up your Profile.</p>
                                    </div>
                                    <form action="index.html">
                                        <FormInput label='First Name' name='first-name' type='text'/>
                                        <div className="form-group">
                                            <label>First Name</label>
                                            <input className="form-control form-control-lg group_formcontrol" name="first-name" type="email" />
                                        </div>
                                        <div className="form-group">
                                            <label>Last Name</label>
                                            <input className="form-control form-control-lg group_formcontrol" name="last-name" type="text" />
                                        </div>
                                        <div className="form-group">
                                            <label>Email</label>
                                            <input className="form-control form-control-lg group_formcontrol" name="email" type="email" />
                                        </div>
                                        <div className="form-group">
                                            <label>Password</label>
                                            <input className="form-control form-control-lg group_formcontrol" name="password" type="password" />
                                        </div>
                                        <div className="form-group">
                                            <label>Confirm Password</label>
                                            <input className="form-control form-control-lg group_formcontrol" name="c-password" type="password" />
                                        </div>
                                        <div className="form-group">
                                            <label className="custom-check d-flex flex-wrap">
                                                <input type="checkbox" />I agreed to all the <a href="#" data-bs-toggle="modal" data-bs-target="#terms" > Terms &amp; Conditions,</a> <a href="#">Privacy Policy.</a>
                                                    <span className="checkmark"></span>
                                            </label>
                                        </div>
                                        <div className="pt-1">
                                            <div className="text-center">
                                                <button className="btn newgroup_create btn-block d-block w-100" type="submit">Create Account</button>
                                            </div>
                                        </div>

                                        <div className="text-center dont-have">Already have an Account?  <a href="login-email.html">Login</a></div>
                                    </form>
                                </div>
                                <div className="back-btn-col text-center">
                                    <a href="index.html"><span><i className="fas fa-caret-left"></i></span> Back</a>
                                </div>
                            </div>
                            {/* <!-- /Login Tab Content --> */}
                        </div>
                        <div className="login-right signup-bg">
                        </div>
                    </div>

                </div>
              
            </div>

        </div>
    )
}

export default Signup
