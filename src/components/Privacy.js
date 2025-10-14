import { useState, useEffect } from 'react';
import Privacy from '@/components/Privacy/Component';
import Navbar from './Navbar';
import Footer from './Footer';
const Dashboard = () => {
    return (
        <div>
            <Navbar />
            <Privacy />
            <Footer />
        </div>
    );
};
export default Dashboard;
