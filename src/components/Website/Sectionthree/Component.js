"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";

const data = [
  {
    id: "ecommerce",
    title: "E-Commerce",
    subtitle: "Boost online sales with easy payment solutions.",
    desc: "E-Commerce businesses can accept payments instantly through multiple channels like payment links, QR codes, and UPI, providing a smooth checkout experience for customers and increasing conversion rates.",
    image: "/img/ecommerce.gif",
  },
  {
    id: "education",
    title: "Education",
    subtitle: "Simplify fee collection and student payments.",
    desc: "Schools, colleges, and online learning platforms can automate fee collection, issue invoices, and accept payments via links or QR codes, reducing administrative burden and improving efficiency.",
    image: "/img/education.gif",
  },
  {
    id: "bfsi",
    title: "BFSI (Banking, Financial Services, and Insurance)",
    subtitle: "Secure transactions for banking & financial services.",
    desc: "Banks, fintech, and insurance companies can leverage payment links, QR codes, and recurring billing to manage client transactions securely and efficiently, ensuring compliance and transparency.",
    image: "/img/bfsi.gif",
  },
  {
    id: "saas",
    title: "SaaS (Software as a Service)",
    subtitle: "Recurring billing made easy for software subscriptions.",
    desc: "SaaS platforms can automate subscription payments, issue invoices, and allow clients to pay seamlessly through multiple payment methods, enhancing customer experience and reducing churn.",
    image: "/img/saas.gif",
  },
  {
    id: "freelancer",
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
    // Scroll to section if coming from a hash link
    if (typeof window !== "undefined" && window.location.hash) {
      const id = window.location.hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth" });
        }, 100); // slight delay to ensure component mounted
      }
    }

    // Change sticky image on scroll
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
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>Supercharge your business with Zapnow</h1>
          <Link href="/requestdemo">
            <button className="hero-btn">Connect Now</button>
          </Link>
        </div>
      </section>

      {/* Intro */}
      <center>
        <h1 className="mb-1">Find Your Financial Advantage</h1>
        <p>
          Zapnow Payments provides intelligent financial infrastructure and custom solutions for any
          business model. See how your industry maximizes revenue with our seamless pay-in and
          automation tools.
        </p>
      </center>

      <div className="container">
        <div className="row">
          {/* Sticky Image */}
          <div className="col-lg-6 pay-right">
            <div className="pay-image-wrapper">
              <img
                key={activeImage}
                src={activeImage}
                alt="Industry"
                className="pay-image fade-zoom"
              />
            </div>
          </div>

          {/* Content Sections */}
          <div className="col-lg-6 pay-left">
            {data.map((item, index) => (
              <div
                key={index}
                id={item.id} // Use the new ID
                className="pay-block"
                ref={(el) => (sectionRefs.current[index] = el)}
              >
                <h2 className="pay-heading">{item.title}</h2>
                <p className="paysub-desc">{item.subtitle}</p>
                <p className="pay-desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default UnPayProductsTwo;
