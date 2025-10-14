"use client";
import React, { useState } from "react";

const PayProductsOne = () => {
  const [iframeSrc, setIframeSrc] = useState("https://gateway.hypertonic.co.in/dashboard");

  const products = [
    {
      title: "Payment Links",
      subtitle: "Pay Link Magic",
      desc: "Generate instant payment links and share them anywhere—Email, SMS, or social media. Get paid immediately while offering your customers the simplest, most secure transaction experience. No app downloads, no friction, just instant revenue.",
      link: "https://gateway.hypertonic.co.in/paymentlinks/paymentlinkstart/paymentcreate",
    },
    {
      title: "QR Codes",
      subtitle: "QR Power: The Universal Checkout",
      desc: "Static for display, dynamic for transactions—always instant. Generate secure QR codes that streamline payments across every scenario. Whether they're displayed at a physical counter or embedded in a digital invoice, our codes ensure fast, hassle-free payments and a flawless checkout experience.",
      link: "https://gateway.hypertonic.co.in/qrcode",
    },
     {
      title: "Invoices",
      subtitle: "Smart Invoicing & Billing",
      desc: "Automate your compliance and speed up collections. We instantly generate an official invoice that is emailed to the customer for every pay-in amount, guaranteeing professional records. Plus, you get the flexibility to manually create and send invoices for custom work. Integrate payments instantly for quick settlement, ensuring fast, secure, and professional billing.",
      link: "https://gateway.hypertonic.co.in/createinvoice",
    },
    {
      title: "Subscription",
      subtitle: "Auto-Pilot Revenue",
      desc: "Stop chasing payments and start growing. Our subscription billing solution automates recurring payments with fully customizable plans—weekly, monthly, or yearly. Manage all your subscriptions effortlessly, eliminate manual work, and ensure customers are billed on time, every time.",
      link: "https://gateway.hypertonic.co.in/subscription",
    },
    {
      title: "Routes: Simplify Payouts",
      subtitle: "Optimize deliveries, track orders, simplify logistics with routes.",
      desc: "Stop processing payments one by one. Our Route solution transforms complex bulk payments into a single, effortless action, distributing funds to countless recipients instantly. It's the fastest way to manage payroll, vendor settlements, and partner commissions with unmatched speed and transparency.",
      link: "https://gateway.hypertonic.co.in/route",
    },
   
  ];

  return (
    <section id="payproduuctsone">
      <center>
        <h1 className="mb-5">Payment Products</h1>
      </center>
      <div className="container">
        <div className="row my-flx-rev">
          {/* ✅ Left Side */}
          <div className="col-lg-6 pay-left">
            {products.map((p, index) => (
              <div key={index} className="pay-block">
                <h2 className="pay-heading">{p.title}</h2>
                <p className="paysub-desc">{p.subtitle}</p>
                <p className="pay-desc">{p.desc}</p>

                {/* ✅ Change iframe URL */}
                <button
                  className="pay-btn"
                  onClick={() => setIframeSrc(p.link)}
                >
                  Explore the features now
                </button>
              </div>
            ))}
          </div>

          {/* ✅ Right Side - Iframe */}
          <div className="col-lg-6 pay-right">
            <div id="sectionotwoframe2" className="pay-image-wrapper">
              <div className="laptop-frame">
                <div className="laptop-screen">
                  <iframe
                    key={iframeSrc} // 👈 Force reload when URL changes
                    src={iframeSrc}
                    title="Product Preview"
                    width="100%"
                    height="350"
                    style={{ border: "none" }}
                  ></iframe>
                </div>
                <div className="laptop-base"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PayProductsOne;
