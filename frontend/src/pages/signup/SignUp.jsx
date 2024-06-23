import React from 'react'
import SignUpImage from "../../assets/image/img2.png"
import Gmail from "../../assets/icon/gmail.svg"
import Google from "../../assets/icon/google.svg"
import { NavLink } from 'react-router-dom'

const SignUp = () => {
    const[inputData, setInputData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        password: "",
        confirmPassword
    })
    const[errors, setErrors] = useState({})

    const handleInput = (e) => {
        const{name, value} = e.target

        setInputData({...inputData, [name]: value})
        setErrors(prevError => ({...prevError, [name]: ""}))
    }

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
                                    Create Account
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
                            <form action="">
                                <div className="input_container">
                                    <div className="input_group">
                                        <input type="text" placeholder='First Name' name="firstName" value={inputData.firstName} />
                                    </div>

                                    <div className="input_group">
                                        <input type="text" placeholder='Last Name' name="lastName" value={inputData.lastName} />
                                    </div>

                                    <div className="input_group">
                                        <input type="email" placeholder='Email Address' name="email" value={inputData.email} />
                                    </div>

                                    <div className="input_group">
                                        <input type="tel" placeholder='Phone Number' name="phoneNumber" value={inputData.phoneNumber} />
                                    </div>

                                    <div className="input_group">
                                        <input type="password" placeholder='Password' name="password" value={inputData.password} />
                                    </div>

                                    <div className="input_group">
                                        <input type="password" placeholder='Confirm Password' name="confirmPassword" value={inputData.confirmPassword} />
                                    </div>
                                </div>

                                <div className="input_submit">
                                    <input type="submit" value="Create Account" />
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

export default SignUp
