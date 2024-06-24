import React, { useState } from 'react'
import SignUpImage from "../../assets/image/img2.png"
import Gmail from "../../assets/icon/gmail.svg"
import Google from "../../assets/icon/google.svg"
import { NavLink } from 'react-router-dom'
import axios from "axios"
import Modal from '../../common/modal/Modal'

const SignUp = () => {
    const[inputData, setInputData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        password: "",
        confirmPassword: ""
    })
    const[errors, setErrors] = useState({})
    const [isOpen, setIsOpen] = useState(false);
    const [modalContent, setModalContent] = useState({ title: '', body: '' });

    const handleInput = (e) => {
        const{name, value} = e.target

        setInputData({...inputData, [name]: value})
        setErrors(prevError => ({...prevError, [name]: ""}))
    }

    const handleValidation = () => {

        let error = {}
        const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if(!inputData.firstName){
            error.firstName = "first name is required"
        }else if(inputData.firstName.length <2){
            error.firstName = "invalid input value"
        }

        if(!inputData.lastName){
            error.lastName = "last name is required"
        }else if(inputData.lastName.length <2){
            error.lastName = "invalid input value"
        }

        if(!inputData.email){
            error.email = "email is required"
        }else if(inputData.email.length <2){
            error.email = "invalid email value"
        }else if(!emailRegex.test(inputData.email)){
            error.email = 'Invalid email format.'
        }

        if(!inputData.phoneNumber){
            error.phoneNumber = "phone number is required"
        }else if(isNaN(inputData.phoneNumber)){
            error.phoneNumber = "invalid input value"
        }

        if(!inputData.password){
            error.password = "password is required"
        }else if(!passwordRegex.test(inputData.password)){
            error.password = "Password must be at least 8 characters, one uppercase letter and one digit."
        }

        if(!inputData.confirmPassword){
            error.confirmPassword = "confirm password is required"
        }else if(inputData.confirmPassword !== inputData.password){
            error.confirmPassword = "invalid input value"
        }

        setErrors(error)
        return Object.keys(error).length === 0;
    }

    const openModal = () => {
        setIsOpen(true);
    };
    
    const closeModal = () => {
        setIsOpen(false);
        setInputData({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        password: "",
        confirmPassword: ""
        })
    };

    const handleSubmit = async (event) => {
        event.preventDefault()       
        const isValid = handleValidation()

        if (isValid) {
        
            try {
                const response = await axios.post("http://192.168.1.18:5678/auth/create", inputData )
                const data = await response.data.message
                console.log( data);
                setModalContent({ title: data, body: 'Registration successful, a message has been sent to your email, verify your email before you can login' });
                openModal();
                setErrors({});
            } catch (error) {

                if(error.response){
                    console.log();
                    setModalContent({ title: error.response.data.message || error.response.data.message[0], body: 'An error occurred. Please try again later.' });
                    openModal()
                }

                console.log(error);
            }

        } else {
            console.log("Form has errors. Please fix them before submitting.");
        }
        
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
                            <form action="" method='post' onSubmit={ handleSubmit}>
                                <div className="input_container">
                                    <div className="input_group">
                                        <input type="text" placeholder='First Name' name="firstName" value={inputData.firstName} onChange={handleInput} />
                                        {errors.firstName && <p className='input_group_error'>{errors.firstName}</p>}
                                    </div>

                                    <div className="input_group">
                                        <input type="text" placeholder='Last Name' name="lastName" value={inputData.lastName} onChange={handleInput} />
                                        {errors.lastName && <p className='input_group_error'>{errors.lastName}</p>}
                                    </div>

                                    <div className="input_group">
                                        <input type="email" placeholder='Email Address' name="email" value={inputData.email} onChange={handleInput} />
                                        {errors.email && <p className='input_group_error'>{errors.email}</p>}
                                    </div>

                                    <div className="input_group">
                                        <input type="tel" placeholder='Phone Number' name="phoneNumber" value={inputData.phoneNumber} onChange={handleInput} />
                                        {errors.phoneNumber && <p className='input_group_error'>{errors.phoneNumber}</p>}
                                    </div>

                                    <div className="input_group">
                                        <input type="password" placeholder='Password' name="password" value={inputData.password} onChange={handleInput} />
                                        {errors.password && <p className='input_group_error'>{errors.password}</p>}
                                    </div>

                                    <div className="input_group">
                                        <input type="password" placeholder='Confirm Password' name="confirmPassword" value={inputData.confirmPassword} onChange={handleInput} />
                                        {errors.confirmPassword && <p className='input_group_error'>{errors.confirmPassword}</p>}
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

            {isOpen && (
                <Modal isOpen={isOpen} onClose={closeModal}>
                <h2>{modalContent.title}</h2>
                <p>{modalContent.body}</p>
                </Modal>
            )}
        </section>
    </div>
  )
}

export default SignUp
