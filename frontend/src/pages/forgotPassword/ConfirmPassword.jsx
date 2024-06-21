import React from 'react'
import SignUpImage from "../../assets/image/img1.png"
import { NavLink } from 'react-router-dom'

const ConfirmPassword = () => {
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
                                    Enter The Confirmation Code
                                </h2>
                            </div>
                            <form action="" className='login'>

                                <div className="input_group">
                                    <input type="text" placeholder='Confirmation Code' />
                                </div>

                                <div className="input_submit">
                                    <input type="submit" value="Recover Account" />
                                </div>
                            </form>

                            <div className="forget_password">
                                <p>Didn’t receive Confirmation Code? <NavLink to="/login">Resend Now</NavLink></p>
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

export default ConfirmPassword
