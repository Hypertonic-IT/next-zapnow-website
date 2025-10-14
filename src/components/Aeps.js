import { useState, useEffect } from 'react';
import Aeps from '@/components/Aeps/Component';
import Navbar from './Navbar';
import Footer from './Footer';
const Dashboard = () => {
    return (
        <div>
            <Navbar />
            <Aeps />
            <Footer />
        </div>
    );
};
export default Dashboard;
