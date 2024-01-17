import { Link } from 'react-router-dom'
import Button from '../components/Button'
import FormInput from '../components/FormInput'

const Login = () => {
    return (
        <div className="main-">
            <div className="content align-items-center">
                <div className="w-100 ">
                    <div className="login-left">
                        <div className="account-content">
                            <div className="login-header">
                                <Link to="/">
                                    <img src="images/logo-full.png" alt="" />
                                </Link>
                            </div>
                            <div className="form-col">
                                <div className="login-text-details">
                                    <h3>Log in</h3>
                                    <p>Login with your Data that you entered during your Registration</p>
                                </div>
                                <form action="index.html">
                                    <FormInput label={'Your Email'} name={'email'} type={'email'} />
                                    <FormInput label={'Password'} name={'password'} type={'password'} />
                                    <FormInput label={'Keep me logged in'} name={'check'} type={'checkbox'} />
                                   
                                    <Button type='submit' text='Login' />
                                    <div className="text-center dont-have">Don’t have an account? <Link to="/">Signup</Link></div>
                                    <div className="text-center mt-3">
                                        <span className="forgot-link">
                                            <Link to="/" className="text-end">Forgot Password ?</Link>
                                        </span>
                                    </div>
                                </form>
                            </div>
                            <div className="back-btn-col text-center">
                                <Link to="/"><span><i className="fas fa-caret-left"></i></span> Back</Link>
                            </div>
                        </div>
                    </div>
                    <div className="login-right">
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
