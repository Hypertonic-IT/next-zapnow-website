import { useState, useEffect } from 'react';
import Resources from '@/components/Resources/Component';
import Navbar from './Navbar';
import Footer from './Footer';
const Dashboard = () => {
    return (
        <div>
            <Navbar />
            <Resources />
            <Footer />
        </div>
    );
};
export default Dashboard;
