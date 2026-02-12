
import {useState} from 'react';
import './RegisterForm.css';

const RegisterForm = () => {

    const [formData, setFormData] = useState({name: '', email: '', category: '5K'});
    const [errors, setErrors] = useState({});
    //const [name, setName] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const validate = () => {
        let tempErrors = {};
        if (formData.name.length < 3)
            tempErrors.name = "Името мора да има најмалку 3 карактери.";

        const emailRegex = /\S+@\S+\.\S+/;
        if(!emailRegex.test(formData.email))
            tempErrors.email = "Внесете валидна е-маил адреса.";

        setErrors(tempErrors);
        return Object.keys(tempErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if(validate()) {
            setSubmitted(true);
            console.log("Податоците се испратени:", formData);
        } 
    };

    return (
        <section className="register-section" id="registration">
            <h2>Пријави се за трката</h2>

            {!submitted ? (
                <form onSubmit={handleSubmit} className="register-form" noValidate>
                    <div className="input-group">
                    <input 
                        type="text"
                        placeholder="Вашето име и презиме"
                        className={errors.name ? 'input-error' : ''}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                    {errors.name && <span className="error-text">{errors.name}</span>}
                    </div>

                    <div className="input-group">
                        <input 
                            type="email"
                            placeholder="Е-маил адреса"
                            className={errors.email ? 'input-error': ''}
                            onChange={(e) => setFormData({...formData, name: e.target.value})}
                        />
                        {errors.email && <span className="error-text">{errors.email}</span>}
                    </div>

                    <button type="submit" className="hero-btn">Регистрирај се</button>
                </form>
            )
        : (
            <div className="success-message animated bounceIn">
                <h3>Успешна пријава, {formData.name}! 🏅</h3>
            </div>
        )}
        </section>
    );
};

export default RegisterForm;