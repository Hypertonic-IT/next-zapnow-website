"use client";
import React from "react";
// import "../styles/Payment.css";

export default function PaymentPage() {
  return (
    <main id="footermylinks">
      {/* Payment Links Section */}
      <section id="mypaymentusecase">
        <h2>1. Payment Links</h2>
        <p className="core-function">
          <strong>Our Core Function:</strong> Generating Simple, Shareable Payment Requests.
        </p>

        <div className="usecase-header">
          <span>Use Case</span>
          <span>How Our Platform Helps You</span>
        </div>

        <div className="usecase-card">
          <div className="usecase-left">
            <h3>Collecting from Non-Web Channels</h3>
          </div>
          <div className="usecase-right">
            <p>
              A business development representative closes a deal over the phone or email.
              They instantly <strong>generate a secure payment link</strong> for the exact amount
              and send it via WhatsApp, SMS, or email, allowing the client to pay immediately
              without visiting a website.
            </p>
          </div>
        </div>

        <div className="usecase-card">
          <div className="usecase-left">
            <h3>Social Media Sales</h3>
          </div>
          <div className="usecase-right">
            <p>
              A small business sells products on Instagram or Facebook. They post a product photo
              and, when a customer expresses interest, send them a <strong>unique Payment Link</strong>
              in a private message, simplifying the checkout process outside of a traditional e-commerce store.
            </p>
          </div>
        </div>

        <div className="usecase-card">
          <div className="usecase-left">
            <h3>Sales Rep Collections</h3>
          </div>
          <div className="usecase-right">
            <p>
              Sales agents in the field can use the mobile app to <strong>create a link on the spot</strong>
              and send it, ensuring the payment is collected instantly, reducing the need for cash or checks.
            </p>
          </div>
        </div>

        <div className="usecase-card">
          <div className="usecase-left">
            <h3>Deposit or Reservation Fees</h3>
          </div>
          <div className="usecase-right">
            <p>
              A service provider needs to collect a non-refundable booking deposit. They create a link with
              the <strong>specific deposit amount and terms</strong>, ensuring the booking is confirmed securely
              before the service begins.
            </p>
          </div>
        </div>
      </section>

      {/* Zapnow POS Section */}
      <section id="mypaymentpos">
        <h2>2. Zapnow POS</h2>
        <p className="core-function">
          <strong>Our Core Function:</strong> Modernizing Physical Point-of-Sale (POS) Transactions.
        </p>

        <div className="usecase-header">
          <span>Use Case</span>
          <span>How Our Platform Helps You</span>
        </div>

        <div className="usecase-card">
          <div className="usecase-left">
            <h3>Retail Store Payments</h3>
          </div>
          <div className="usecase-right">
            <p>
              A physical retail store uses the Zapnow POS terminal to accept all forms of payment, 
              including credit/debit cards (swipe, chip, and contactless), mobile wallets, and QR code payments, 
              providing a <strong>seamless, integrated experience</strong> at the counter.
            </p>
          </div>
        </div>

        <div className="usecase-card">
          <div className="usecase-left">
            <h3>Pop-up Stores and Events</h3>
          </div>
          <div className="usecase-right">
            <p>
              A vendor is selling goods at a trade show or festival. They use a <strong>portable Zapnow POS device</strong> 
              (often connected via mobile data) to process sales anywhere at the event, ensuring they never miss a transaction 
              due to connectivity issues.
            </p>
          </div>
        </div>

        <div className="usecase-card">
          <div className="usecase-left">
            <h3>Inventory Integration</h3>
          </div>
          <div className="usecase-right">
            <p>
              The POS system is integrated with the business's inventory management. Every sale processed by Zapnow 
              automatically updates stock levels in real-time, preventing overselling and simplifying end-of-day reconciliation.
            </p>
          </div>
        </div>

        <div className="usecase-card">
          <div className="usecase-left">
            <h3>Splitting Bills</h3>
          </div>
          <div className="usecase-right">
            <p>
              In a restaurant or service setting, customers need to divide the total bill. Zapnow POS enables 
              <strong> easy and quick splitting of the payment</strong> across multiple cards or payment methods directly on the device.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
