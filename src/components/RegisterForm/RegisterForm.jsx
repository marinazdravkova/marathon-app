import { useState } from 'react';
import './RegisterForm.css';

const RegisterForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        birthDate: '',
        category: '',
        gender: '',
        tshirt: '',
        country: 'MKD',
        club: '',
        emergencyPhone: ''
    });

    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({...formData, [name]: value});
    }

    const calculateAge = (birthDate) => {
        if (!birthDate) return 0;
        const today = new Date();
        const birth = new Date(birthDate);
        let age = today.getFullYear() - birth.getFullYear();
        const m = today.getMonth() - birth.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birth.getDate())) {
            age--;
        }
        return age;
    }

    const validate = () => {
        let tempErrors = {};
        const age = calculateAge(formData.birthDate);
        if (formData.name.length < 3)
            tempErrors.name = "Името е задолжително.";
        if(!formData.emergencyPhone)
            tempErrors.emergencyPhone = "Телефонскиот број за итни случаи е задолжителен.";
        if (!/\S+@\S+\.\S+/.test(formData.email))
            tempErrors.email = "Невалиден емаил.";
        if (!formData.gender)
            tempErrors.gender = "Изберете пол.";

        if (formData.category === "500M" && age > 13) {
            tempErrors.category = "Детската трка е ограничена до 13 години.";
        }

        if ((formData.category === "21K" || formData.category === "42K") && age < 18) {
            tempErrors.category = "За маратон или полумаратон мора да имате најмалку 18 години.";
        }

        if (formData.category === "5K" && age < 14) {
            tempErrors.category = "За 5К трката мора да имате најмалку 14 години.";
        }

        if(formData.category === "42K") {
            const birthYear = new Date(formData.birthDate).getFullYear();
            const currentYear = new Date().getFullYear();
            if(currentYear - birthYear < 18) {
                tempErrors.birthDate = "Мора да имате 18 години за целосен маратон (42K).";
            }
        }

        setErrors(tempErrors);
        return Object.keys(tempErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if(validate()) {
            setSubmitted(true);
            console.log("Финални податоци", formData);
        }
    };

    return (
        <section className="register-section">
            <h2>Детали за пријава</h2>
            {!submitted ? (
                <form onSubmit={handleSubmit} className="register-form">
                    <div className="input-group full-width">
                        <label>Целосно име</label>
                        <input
                            name = "name"
                            type = "text"
                            value = {formData.name}
                            onChange = {handleChange}
                            className = {errors.name ? 'input-error' : ''}
                        />
                        {errors.name && <span className="error-text">{errors.name}</span>}
                    </div>
                    <div className="input-group">
                        <label>Датум на раѓање</label>
                        <input
                            type="date"
                            name="birthDate"
                            value={formData.birthDate}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="input-group">
                        <label>Избери трка</label>
                        <select name="category" value={formData.category} onChange={handleChange}>
                            <option value="" disabled hidden>Изберете тип на трка...</option>
                            <option value="500M" disabled={calculateAge(formData.birthDate) > 13}>Трка за најмалите учесници</option>
                            <option value="5K" disabled={calculateAge(formData.birthDate) < 13}>5К Трка за задоволство</option>
                            <option value="21K" disabled={calculateAge(formData.birthDate) < 18}>Полумаратон (21К)</option>
                            <option value="42K" disabled={calculateAge(formData.birthDate) < 18}>Професионален маратон (42K)</option>
                            
                        </select>
                    </div>

                    <div className="input-group">
                        <label>Изберете пол</label>
                        <select name="gender" value={formData.gender} onChange={handleChange}>
                            <option value="" disabled hidden>Изберете пол...</option>
                            <option value="Female">Женско</option>
                            <option value="Male">Машко</option>
                        </select>
                    </div>

                    <div className="input-group">
                        <label>Големина на маица</label>
                        <select name="tshirt" value={formData.tshirt} onChange={handleChange}>
                            <option value="" disabled hidden>Изберете величина на маица</option>
                            <option value="S">S</option>
                            <option value="M">M</option>
                            <option value="L">L</option>
                            <option value="XL">XL</option>
                            <option value="XXL">XXL</option>
                        </select>
                    </div>

                    <div className="input-group">
                        <label>Држава</label>
                        <select name="country" value={formData.country} onChange={handleChange}>
                            <option value="MKD">Македонија</option>
                            <option value="SRB">Србија</option>
                            <option value="BGR">Бугарија</option>
                            <option value="GRC">Грција</option>
                            <option value="OTHER">Друга</option>
                        </select>
                    </div>

                    <div className="input-group">
                        <label>Клуб / Тим (опционално)</label>
                        <input
                            type="text"
                            name="club"
                            placeholder="Име на клуб или тим"
                            value={formData.club}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="input-group full-width">
                        <label>Телефон за итни случаи (Emergency Contact)</label>
                        <input 
                            type="tel"
                            name="emergencyPhone"
                            placeholder="+389 7X XXX XXX"
                            value={formData.emergencyPhone}
                            onChange={handleChange}
                            className={errors.emergencyPhone ? 'input-error' : ''}
                        />
                        {errors.emergencyPhone && <span className="error-text">{errors.emergencyPhone}</span>}
                    </div>

                    <button type="submit" className="hero-btn">Продолжи</button>
                </form>
            ) : (
                <div className="success-message">
                    <h3>Успешна пријава за {formData.category}, {formData.name}! 🏅</h3>
                </div>
            )}
        </section>
    );
};
    export default RegisterForm;