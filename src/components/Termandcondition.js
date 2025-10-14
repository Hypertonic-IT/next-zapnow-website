import { useState, useEffect } from 'react';
import Termandcondition from '@/components/Termandcondition/Component';
import Navbar from './Navbar';
import Footer from './Footer';
const Dashboard = () => {
    return (
        <div>
            <Navbar />
            <Termandcondition />
            <Footer />
        </div>
    );
};
export default Dashboard;
