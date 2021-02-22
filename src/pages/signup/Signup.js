import React from 'react'
import './Signup.css';
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'

function Signup() {
    return (
        <div className="signup_container">
            <div className="signup_header">
                <Header />
            </div>
            <div className="signup_main">
                <div className="signup_form">
                <h1>Sign up</h1>
                <form>
                    <input type="text" placeholder="Username" />
                    <input type="password" placeholder="Password" />
                    <input type="password" placeholder="Confirm password" />
                    <input type="email" placeholder="Email" />
                    <button>Register</button>

                </form>

                </div>
                
                
            </div>
            <div className="signup_footer">
                <Footer />
            </div>
           
        </div>
    )
}

export default Signup
