"use client";
import React from "react";
import { RiEyeLine, RiRocketLine } from "react-icons/ri";
import { RiMoneyDollarCircleLine, RiShieldCheckLine, RiBarChartBoxLine, RiCodeBoxLine } from "react-icons/ri";

export default function AboutUs() {
  return (
    <main id="aboutmycompany">
      {/* Hero Section */}
 <section className="hero-sectionone">
  <div className="hero-overlay">
    <div className="hero-text">
      <h1>About Zapnow Payments</h1>
      <p>
        <strong>Seamless. Smart. Secure.</strong> — We are redefining how
        businesses handle payments with intelligent, technology-driven
        financial solutions that make every transaction faster, safer, and
        more transparent.
      </p>
    </div>
  </div>
</section>


      {/* Company Overview */}
      <section className="overview-section">
        <h2>Your Intelligent Financial Backbone</h2>
        <p>
          Zapnow Payments is a licensed <strong>Technology Service Provider (TSP)</strong>{" "}
          empowering businesses with frictionless digital transactions. Whether
          online or offline, we offer end-to-end fintech solutions that ensure
          money moves swiftly, intelligently, and securely across platforms.
        </p>

        <div className="feature-grid">
          <div className="feature-card">
            <h3>Multi-Banking Services for Maximum Efficiency</h3>
            <ul>
              <li>Connect with multiple banking partners</li>
              <li>Optimize transaction routing and reduce fees</li>
              <li>Gain flexibility and control over business payments</li>
            </ul>
          </div>

          <div className="feature-card">
            <h3>AI-Driven Dashboards</h3>
            <ul>
              <li>Real-time insights on transactions and reconciliations</li>
              <li>Predictive analytics to anticipate trends and risks</li>
              <li>Intelligent reporting for smarter business decisions</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
<section className="whychoose-section text-center">
      <h2>Why Choose Zapnow Payments?</h2>
      <div className="why-grid">
        <div className="why-card">
          <RiMoneyDollarCircleLine size={36} className="icono text-dark mb-2" />
          <p>Transparent Pay-Per-Transaction Model — No hidden costs</p>
        </div>
        <div className="why-card">
          <RiShieldCheckLine size={36} className="icono text-dark mb-2" />
          <p>Robust Compliance & Risk Monitoring — Safe & Secure</p>
        </div>
        <div className="why-card">
          <RiBarChartBoxLine size={36} className="icono text-dark mb-2" />
          <p>Scalable Infrastructure — Grow without limits</p>
        </div>
        <div className="why-card">
          <RiCodeBoxLine size={36} className="icono text-dark mb-2" />
          <p>Developer-Friendly APIs & Integrations — Plug, play, and scale</p>
        </div>
      </div>
    </section>

      {/* Vision & Mission */}
     <section className="visionmission-section">
      <div className="vision text-center">
        <RiEyeLine size={40} className="mb-2 text-dark icono" />
        <h2> Vision</h2>
        <p>
          To empower every business with intelligent, reliable, and frictionless
          financial technology.
        </p>
      </div>

      <div className="mission text-center">
        <RiRocketLine size={40} className="mb-2 text-dark icono" />
        <h2> Mission</h2>
        <p className="small">
          Our mission is to simplify payments through multi-bank connectivity, AI
          insights, and advanced fraud protection — empowering businesses with a
          tech-first platform for efficiency and growth.
        </p>
      </div>
    </section>

      {/* Contact Section */}
      {/* <section className="contact-section">
        <h3>Connect With Us</h3>
        <p>Lesus Innovations Pvt. Ltd. – Zapnow Payments</p>
        <p>
          PLOT NO. 5B, SECTOR - 15A, 2nd FLOOR, Neelam Ajronda Chowk Metro Station,
          Faridabad, Haryana – 121007
        </p>
        <a href="mailto:info@zapnowpayments.com">info@zapnowpayments.com</a>
        <p className="tagline">Zapnow Payments – Fast. Intelligent. Trusted.</p>
      </section> */}
    </main>
  );
}
