import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/1-Home';
import Menu from './pages/2-Menu';
import Local from './pages/3-Local';
import Contact from './pages/4-Contacto';
import Login from './pages/Login';
import Admin from './pages/Admin';
import Account from './pages/5-Account';
import ProtectedRoute from './pages/ProtectedRoute';
import { AuthProvider } from './auth/AuthProvider';

const App = () => {
    return (
        <AuthProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/menu" element={<Menu />} />
                    <Route path="/local" element={<Local />} />
                    <Route path="/contact" element={<Contact />} /> 
                    <Route path='/account' element={<Account />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/admin' element={
                        <ProtectedRoute>
                            <Admin />
                        </ProtectedRoute> }/>
                </Routes>
            </Router>
        </AuthProvider>
    );
};

export default App;