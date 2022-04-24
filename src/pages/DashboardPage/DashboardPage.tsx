import React from 'react';
import LoadingAnimation from '../../components/LoadingAnimation/LoadingAnimation';

import './DashboardPage.css';

const DashboardPage: React.FC = () => {
    return (
        <main className="page-content">
            <LoadingAnimation />
        </main>
    );
};

export default DashboardPage;
