// import React, { useState, useEffect } from 'react';
import React from 'react';
import '../DashboardPage/DashboardPage.css';
// import LoadingAnimation from '../../components/LoadingAnimation/LoadingAnimation';
import AnalyzingSongs from '../../components/AnalyzingSongs/AnalyzingSongs';
import { demoSongs, demoProfile } from '../../utils/demoSampleData';

const DemoDashboardPage: React.FC = () => {
    // const [finishedLoading, setFinishedLoading] = useState<boolean>(false);

    // useEffect(() => {
    //     setTimeout(() => {
    //         setFinishedLoading(true);
    //     }, 3000);
    // });

    // if (!finishedLoading) {
    //     return <LoadingAnimation />;
    // }

    return <AnalyzingSongs songs={demoSongs} profile={demoProfile} />;
};

export default DemoDashboardPage;
