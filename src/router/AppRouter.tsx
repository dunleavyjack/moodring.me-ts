import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import '../styles/global.css';

const AppRouter = (): JSX.Element => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<HomePage />} />
        </Routes>
    </BrowserRouter>
);

export default AppRouter;
