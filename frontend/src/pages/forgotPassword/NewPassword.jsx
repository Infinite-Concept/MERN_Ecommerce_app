import React from 'react'
import SignUpImage from "../../assets/image/img1.png"
import { NavLink } from 'react-router-dom'

const NewPassword = () => {
  return (
    <div  className="signUpContainer">
        <section>
            <div className="sign">
                <div className="signUp forgot">
                    <div className="signUpImageContainer">
                        <img src={SignUpImage} alt="sign up image" />
                    </div>

                    <div className="signupform">
                        <div className="signupform_container">
                            <h1>fasco</h1>
                            <div className="signupformAuth">
                                <h2>
                                    Enter Your New Password
                                </h2>
                            </div>
                            <form action="" className='login'>

                                <div className="input_group">
                                    <input type="password" placeholder='New Password' />
                                </div>

                                <div className="input_group">
                                    <input type="password" placeholder='Confirmation Password' />
                                </div>

                                <div className="input_submit">
                                    <input type="submit" value="Submit" />
                                </div>
                            </form>

                            <div className="forget_password">
                                <p>Already have an account? <NavLink to="/login">Login</NavLink></p>
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

export default NewPassword
