import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import '../styles/global.css';
import Header from '../components/Header/Header';

import HomePage from '../pages/HomePage/HomePage';
import DashboardPage from '../pages/DashboardPage/DashboardPage';
import DemoDashboardPage from '../pages/DemoDashboardPage/DemoDashboardPage';
import AboutPage from '../pages/AboutPage/AboutPage';

const AppRouter = (): JSX.Element => (
    <BrowserRouter>
        <div className="page-container">
            <Header />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/dashboard" element={<DashboardPage />} />
                <Route path="/demo" element={<DemoDashboardPage />} />
                <Route path="/about" element={<AboutPage />} />
            </Routes>
        </div>
    </BrowserRouter>
);

export default AppRouter;
