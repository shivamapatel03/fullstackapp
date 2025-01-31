import React, { useState } from 'react';
import axios from 'axios';

const AuthForm = ({ type, onAuthSuccess }) => {
    const [formData, setFormData] = useState({ email: '', password: '', name: '' });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const url = `http://localhost:5000/api/auth/${type}`;
            const response = await axios.post(url, formData);
            onAuthSuccess(response.data);
        } catch (error) {
            alert('Error: ' + error.response.data.error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            {type === 'register' && (
                <input type="text" name="name" placeholder="Name" onChange={handleChange} required />
            )}
            <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
            <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
            <button type="submit">{type === 'login' ? 'Login' : 'Register'}</button>
        </form>
    );
};

export default AuthForm;
