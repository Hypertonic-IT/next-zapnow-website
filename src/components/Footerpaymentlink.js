import { useState, useEffect } from 'react';
import Footerpaymentlink from '@/components/Footerpaymentlink/Component';
import Navbar from './Navbar';
import Footer from './Footer';
const Dashboard = () => {
    return (
        <div>
            <Navbar />
            <Footerpaymentlink />
            <Footer />
        </div>
    );
};
export default Dashboard;
