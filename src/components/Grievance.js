import { useState, useEffect } from 'react';
import Grievance from '@/components/Grievance/Component';
import Navbar from './Navbar';
import Footer from './Footer';
const Dashboard = () => {
    return (
        <div>
            <Navbar />
            <Grievance />
            <Footer />
        </div>
    );
};
export default Dashboard;
