import { useState, useEffect } from 'react';
import Dmtform from '@/components/Dmtform/Component';
import Navbar from './Navbar';
import Footer from './Footer';
const Dashboard = () => {
    return (
        <div>
            <Navbar />
            <Dmtform />
            <Footer />
        </div>
    );
};
export default Dashboard;
