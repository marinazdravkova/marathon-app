import React from 'react';
import RegisterForm from '../components/RegisterForm/RegisterForm';
import './Register.css';

const Register = () => {
    return (
       <div className="register-page">
        <div className="register-content">
            <div className="register-header">
                <h1>Официјална пријава</h1>
                <p>Ве молиме внесете ги Вашите точни податоци за учество на Штипскиот маратон 2026.</p>
            </div>

            <RegisterForm />
       </div>
       </div>
    );
};

export default Register;