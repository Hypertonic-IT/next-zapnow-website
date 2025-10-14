import { useState, useEffect } from 'react';
import Aboutus from '@/components/Aboutus/Component';
import Navbar from './Navbar';
import Footer from './Footer';
const Dashboard = () => {
    return (
        <div>
            <Navbar />
            <Aboutus />
            <Footer />
        </div>
    );
};
export default Dashboard;
