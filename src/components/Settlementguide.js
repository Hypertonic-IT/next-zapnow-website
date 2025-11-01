import { useState, useEffect } from 'react';
import Settlementguide from '@/components/Settlementguide/Component';
import Navbar from './Navbar';
import Footer from './Footer';
const Dashboard = () => {
    return (
        <div>
            <Navbar />
            <Settlementguide />
            <Footer />
        </div>
    );
};
export default Dashboard;
