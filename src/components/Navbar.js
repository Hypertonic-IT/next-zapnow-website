"use client";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav id="webnegivation">
      <div className="nav-container">
        {/* Logo */}
        <div className="nav-logo">
          <Link href="/">
          <img src="../../../img/zaplogo.png" className="logone" />
          </Link>
          </div>

        {/* Toggle Button */}
        <button
          className="nav-toggle"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? (
            <i className="ri-close-line"></i>
          ) : (
            <i className="ri-menu-3-line"></i>
          )}
        </button>

        {/* Nav Links */}
        <ul className={`nav-links ${isOpen ? "active" : ""}`}>
          {/* <li><a href="/">Payments</a></li>
          <li><a href="/">Banking+ Payroll</a></li>
          <li><a href="/">Engage</a></li>
          <li><a href="/">Partners</a></li> */}
          <li><a href="/paymentproduct">Payment Products</a></li>
          <li><Link href="/intractivedash">Interactive Dashboard</Link></li> 
          <li><Link href="https://uat.zapnowpayments.com/" >Log in</Link></li>
          <li><Link href="https://gateway.hypertonic.co.in/signup">Sign up</Link></li>
          <li><Link href="https://gateway.hypertonic.co.in/requestdemo" className="login-btn">Request A free demo</Link></li>
        </ul>
      </div>
    </nav>
  );
}
