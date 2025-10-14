"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
// import "./UnPayProductsTwo.css";

const data = [
  {
    title: "E-Commerce",
    subtitle: "Boost online sales with easy payment solutions.",
    desc: "E-Commerce businesses can accept payments instantly through multiple channels like payment links, QR codes, and UPI, providing a smooth checkout experience for customers and increasing conversion rates.",
    image: "/img/ecommerce.gif",
  },
  {
    title: "Education",
    subtitle: "Simplify fee collection and student payments.",
    desc: "Schools, colleges, and online learning platforms can automate fee collection, issue invoices, and accept payments via links or QR codes, reducing administrative burden and improving efficiency.",
    image: "/img/education.gif",
  },
  {
    title: "BFSI (Banking, Financial Services, and Insurance)",
    subtitle: "Secure transactions for banking & financial services.",
    desc: "Banks, fintech, and insurance companies can leverage payment links, QR codes, and recurring billing to manage client transactions securely and efficiently, ensuring compliance and transparency.",
    image: "/img/bfsi.gif",
  },
  {
    title: "SaaS (Software as a Service)",
    subtitle: "Recurring billing made easy for software subscriptions.",
    desc: "SaaS platforms can automate subscription payments, issue invoices, and allow clients to pay seamlessly through multiple payment methods, enhancing customer experience and reducing churn.",
    image: "/img/saas.gif",
  },
  {
    title: "Freelancer",
    subtitle: "Collect payments quickly and professionally.",
    desc: "Freelancers and independent consultants can send payment links or invoices to clients, making it easy to receive payments instantly while maintaining a professional and organized workflow.",
    image: "/img/freelancer.gif",
  },
];

const UnPayProductsTwo = () => {
  const [activeImage, setActiveImage] = useState(data[0].image);
  const sectionRefs = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      sectionRefs.current.forEach((section, index) => {
        if (section) {
          const rect = section.getBoundingClientRect();
          const top = rect.top + window.scrollY;
          const bottom = top + rect.height;
          if (scrollPosition >= top && scrollPosition < bottom) {
            setActiveImage(data[index].image);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="unpayproduucttwo">
  <section className="hero-section">
        <div className="hero-content">
          <h1>
            Supercharge your business <br /> with Zapnow
          </h1>
          <Link href="/signup">
            <button className="hero-btn">
              Sign Up Now <span className="arrow">→</span>
            </button>
          </Link>
        </div>
      </section>

      <center>
        <h1 className="mb-1">Find Your Financial Advantage</h1>
        <p>
          Zapnow Payments provides intelligent financial infrastructure and custom solutions for any
          business model. See how your industry maximizes revenue with our seamless pay-in and
          automation tools
        </p>
      </center>

      <div className="container ">
        <div className="row">
          {/* Left Column - Sticky Image */}
          <div className="col-lg-6 pay-right">
            <div className="pay-image-wrapper">
              <img
                key={activeImage} // triggers re-render when image changes
                src={activeImage}
                alt="Industry"
                className="pay-image fade-zoom"
              />
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="col-lg-6 pay-left">
            {data.map((item, index) => (
              <div
                key={index}
                className="pay-block"
                ref={(el) => (sectionRefs.current[index] = el)}
              >
                <h2 className="pay-heading">{item.title}</h2>
                <p className="paysub-desc">{item.subtitle}</p>
                <p className="pay-desc">{item.desc}</p>
                <Link href="/signup">
                  <button className="pay-btn">Sign Up Now </button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

    
    </section>
  );
};

export default UnPayProductsTwo;
