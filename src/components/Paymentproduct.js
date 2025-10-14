import { useState, useEffect } from 'react';
import Paymentproduct from '@/components/Sectiontwo/Component';
import Navbar from './Navbar';
import Footer from './Footer';
const Dashboard = () => {
    return (
        <div>
            <Navbar />
            <Paymentproduct />
            <Footer />
        </div>
    );
};
export default Dashboard;
