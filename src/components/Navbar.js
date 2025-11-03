"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { FaArrowUp } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

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
          <li><a href="/paymentproduct">Payment Products</a></li>
          <li><Link href="/intractivedash">Interactive Dashboard</Link></li> 
          <li><Link href="https://dashboard.zapnowpayments.com/">Sign in</Link></li>
          <li><Link href="/requestdemo" className="login-btn">Request A free demo</Link></li>
        </ul>
      </div>

      {/* Scroll To Top Button */}
      {showScroll && (
        <div className="scroll-to-top" onClick={scrollToTop}>
          <FaArrowUp size={24} />
        </div>
      )}
    </nav>
  );
}
