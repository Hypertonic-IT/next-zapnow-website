"use client";
import React from "react";

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
      <section className="whychoose-section">
        <h2>Why Choose Zapnow Payments?</h2>
        <div className="why-grid">
          <div className="why-card">
            Transparent Pay-Per-Transaction Model – No hidden costs
          </div>
          <div className="why-card">
            Robust Compliance & Risk Monitoring – Safe & Secure
          </div>
          <div className="why-card">Scalable Infrastructure – Grow without limits</div>
          <div className="why-card">
            Developer-Friendly APIs & Integrations – Plug, play, and scale
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="visionmission-section">
        <div className="vision">
          <h2>Our Vision</h2>
          <p>
            To empower every business with intelligent, reliable, and frictionless
            financial technology.
          </p>
        </div>

        <div className="mission">
          <h2>Our Mission</h2>
          <ul>
            <li>Simplify payments for businesses of all sizes.</li>
            <li>Provide multi-banking connectivity, AI insights, and fraud protection.</li>
            <li>
              Deliver a technology-first platform that maximizes efficiency and reduces
              operational overhead.
            </li>
          </ul>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <h3>Connect With Us</h3>
        <p>Lesus Innovations Pvt. Ltd. – Zapnow Payments</p>
        <p>
          PLOT NO. 5B, SECTOR - 15A, 2nd FLOOR, Neelam Ajronda Chowk Metro Station,
          Faridabad, Haryana – 121007
        </p>
        <a href="mailto:info@zapnowpayments.com">info@zapnowpayments.com</a>
        <p className="tagline">Zapnow Payments – Fast. Intelligent. Trusted.</p>
      </section>
    </main>
  );
}
