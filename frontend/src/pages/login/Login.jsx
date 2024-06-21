import React from 'react'
import SignUpImage from "../../assets/image/img1.png"
import Gmail from "../../assets/icon/gmail.svg"
import Google from "../../assets/icon/google.svg"
import { NavLink } from 'react-router-dom'

const Login = () => {
  return (
    <div  className="signUpContainer">
        <section>
            <div className="sign">
                <div className="signUp">
                    <div className="signUpImageContainer">
                        <img src={SignUpImage} alt="sign up image" />
                    </div>

                    <div className="signupform">
                        <div className="signupform_container">
                            <h1>fasco</h1>
                            <div className="signupformAuth">
                                <h2>
                                    Sign In To FASCO
                                </h2>

                                <div className="auth">
                                    <button>
                                        <img src={Google} alt="google icon" />
                                        <p>Sign up with Google</p>
                                    </button>

                                    <button>
                                        <img src={Gmail} alt="gmail icon" />
                                        <p>Sign up with Email</p>
                                    </button>
                                </div>

                                <div className="or">
                                    <span></span>
                                    <h4>OR</h4>
                                    <span></span>
                                </div>
                            </div>
                            <form action="" className='login'>

                                <div className="input_group">
                                    <input type="email" placeholder='Email Address' />
                                </div>

                                <div className="input_group">
                                    <input type="password" placeholder='Password' />
                                </div>

                                <div className="input_submit">
                                    <input type="submit" value="Sign In" />
                                </div>
                            </form>

                            <div className="forget_password">
                                <p>Don't have an account? <NavLink to="/signUp">Register</NavLink></p>
                            </div>

                            <div className="forget_password">
                                <NavLink to="/forgot-password">Forget Password?</NavLink>
                            </div>
                        </div>

                        <p className='terms'>
                                FASCO Terms & Conditions
                            </p>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Login
