import { useState, useEffect } from 'react';
import Website from '@/components/Website/Component';
import Footer from './Footer';
import Navbar from './Navbar';
const Dashboard = () => {

    return (
        <div>
            <Navbar />
            <Website />
            <Footer/>
        </div>
    );
};

export default Dashboard;
