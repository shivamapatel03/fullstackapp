import React, { useState } from 'react';
import AuthForm from './components/AuthForm';

const App = () => {
    const [user, setUser] = useState(null);

    const handleAuthSuccess = (data) => {
        localStorage.setItem('token', data.token);
        setUser(data.user);
    };

    return (
        <div>
            {!user ? (
                <>
                    <h1>Login</h1>
                    <AuthForm type="login" onAuthSuccess={handleAuthSuccess} />
                    <h1>Register</h1>
                    <AuthForm type="register" onAuthSuccess={handleAuthSuccess} />
                </>
            ) : (
                <h1>Welcome, {user.name}</h1>
            )}
        </div>
    );
};

export default App;
