import Button from '../components/Button'
import FormInput from '../components/FormInput'
import { Link } from 'react-router-dom'

const Signup = () => {
    return (
        <div className="account-page">

            {/* <!-- Main Wrapper --> */}
            <div className="main-wrapper"> 
                <div className="content align-items-center">

                    <div className="w-100 ">
                        <div className="login-left">
 
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
                                        <FormInput label='First Name' name='first-name' type='text' />
                                        <FormInput label='Last Name' name='last-name' type='text' />
                                        <FormInput label='Email' name='email' type='email' />
                                        <FormInput label='Password' name='password' type='password' />
                                        <FormInput label='Confirm Password' name='c-password' type='password' />
                                        <FormInput label='  I agreed to all the' name='check' type='checkbox'>
                                            <Link to="#"  > Terms &amp; Conditions,</Link> <Link to="#">Privacy Policy.</Link>
                                        </FormInput>
                                        <Button text='Create Account' type='submit' />
                                        <div className="text-center dont-have">Already have an Account?  <Link to="/">Login</Link></div>
                                    </form>
                                </div>
                                <div className="back-btn-col text-center">
                                    <Link to="/"><span><i className="fas fa-caret-left"></i></span> Back</Link>
                                </div>
                            </div> 
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
