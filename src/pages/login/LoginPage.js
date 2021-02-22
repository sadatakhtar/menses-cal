import React from 'react';
import './LoginPage.css';
import {Link} from 'react-router-dom';
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer';

function LoginPage() {
    return (
        <div className="login_container">
            <div className="login_header">
            <Header />
            </div>

            <div className="login_main">
                <div className="login_form">
                    <h2>Login</h2>
                    <form >
                    <input type="text" placeholder="Username" />
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                    <button >Submit</button>
                    <h6>Forgot Password | <Link to="/signup">Register</Link></h6>
                    </form>
                    
                    
                </div>

            </div>

            <div className="login_footer">
            <Footer />
            </div>
           
            
        </div>
    )
}

export default LoginPage
