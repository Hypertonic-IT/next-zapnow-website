import { useState, useEffect } from 'react';
import Mysupport from '@/components/Mysupport/Component';
import Navbar from './Navbar';
import Footer from './Footer';
const Dashboard = () => {
    return (
        <div>
            <Navbar />
            <Mysupport />
            <Footer />
        </div>
    );
};
export default Dashboard;
