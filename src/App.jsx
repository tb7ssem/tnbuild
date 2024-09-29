import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AdminDashboard from './pages/AdminDashboard';
import Login from './pages/Login';
import Header from './components/Header';
import { AuthProvider } from './context/AuthContext';
import './App.css'; // Ensure this file exists

const App = () => {
    return (
        <AuthProvider>
            
            <Router>
            <Login/>
                <div className="app">
                    <Header />
                    <Routes>
                        <Route path="/login" component={Login} />
                        <Route path="/admin-dashboard" component={AdminDashboard} />
                        <Route path="/" component={Login} /> {/* Default route */}
                    </Routes>
                </div>
            </Router>
        </AuthProvider>
    );
};

export default App;