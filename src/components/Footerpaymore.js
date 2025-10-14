import { useState, useEffect } from 'react';
import Footerpaymore from '@/components/Footerpaymore/Component';
import Navbar from './Navbar';
import Footer from './Footer';
const Dashboard = () => {
    return (
        <div>
            <Navbar />
            <Footerpaymore />
            <Footer />
        </div>
    );
};
export default Dashboard;
