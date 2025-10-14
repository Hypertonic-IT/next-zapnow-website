import { useState, useEffect } from 'react';
import Intractivedash from '@/components/Sectiononeframe/Component';
import Navbar from './Navbar';
import Footer from './Footer';
const Dashboard = () => {
    return (
        <div>
            <Navbar />
            <Intractivedash />
            <Footer />
        </div>
    );
};
export default Dashboard;
