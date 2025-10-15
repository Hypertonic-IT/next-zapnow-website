"use client";
import React from "react";
// import "../styles/Payment.css";

export default function PaymentPage() {
  return (
    <main id="footermylinks">
      <div className="m-kit1">
        <h1 className="mytophead1">Detailed Use Cases for Our Key Platform Features
        </h1>
        <p className="mytophead1">
          Here is a detailed explanation of the practical ways our platform helps your business utilize its five core features:        </p>
      </div>
      {/* Route Section */}
      <section id="ourroutecore">
        <h2>1. Route</h2>
        <p className="core-function">
          <strong>Our Core Function:</strong> Intelligent Payment Gateway Optimization.
        </p>

        <div className="usecase-header">
          <span>Use Case</span>
          <span>How Our Platform Helps You</span>
        </div>

        <div className="usecase-card">
          <div className="usecase-left">
            <h3>Maximizing Success Rates</h3>
          </div>
          <div className="usecase-right">
            <p>
              An e-commerce site processes a transaction. If the primary payment gateway declines the card
              (e.g., due to temporary server issues or bank restrictions), our smart <strong>Route engine</strong>
              instantly and automatically re-routes the transaction to a secondary or tertiary gateway,
              ensuring the sale is completed.
            </p>
          </div>
        </div>

        <div className="usecase-card">
          <div className="usecase-left">
            <h3>Cost Optimization</h3>
          </div>
          <div className="usecase-right">
            <p>
              If your business operates in multiple regions, Route can be configured to prioritize the
              processor with the <strong>lowest transaction fees</strong> for payments originating from specific
              countries or using certain card types, thereby reducing your overall operational costs.
            </p>
          </div>
        </div>

        <div className="usecase-card">
          <div className="usecase-left">
            <h3>Load Balancing & Latency</h3>
          </div>
          <div className="usecase-right">
            <p>
              During high-traffic events (like a major flash sale), Route distributes transaction volume
              across multiple gateways to prevent any single one from being overwhelmed, maintaining
              <strong> lightning-fast checkout times</strong> and avoiding system failure.
            </p>
          </div>
        </div>

        <div className="usecase-card">
          <div className="usecase-left">
            <h3>Compliance Management</h3>
          </div>
          <div className="usecase-right">
            <p>
              For businesses operating globally, Route ensures that payments from specific countries are
              channeled only through gateways that <strong>comply with local regulatory standards</strong>
              (e.g., GDPR, PSD2), significantly reducing your legal risk.
            </p>
          </div>
        </div>
      </section>
      {/* Invoices Section */}
      <section id="mypaytinvoice">
        <h2>2. Invoices</h2>
        <p className="core-function">
          <strong>Our Core Function:</strong> Automated Invoice Generation and Management.
        </p>

        <div className="usecase-header">
          <span>Use Case</span>
          <span>How Our Platform Helps You</span>
        </div>

        <div className="usecase-card">
          <div className="usecase-left">
            <h3>Service Provider Billing</h3>
          </div>
          <div className="usecase-right">
            <p>
              A marketing agency completes a project. They use our Invoices feature
              to instantly generate a professional, branded invoice with a built-in
              payment link, which is automatically sent to the client's email,
              drastically accelerating payment time.
            </p>
          </div>
        </div>

        <div className="usecase-card">
          <div className="usecase-left">
            <h3>Subscription/Recurring Billing</h3>
          </div>
          <div className="usecase-right">
            <p>
              If your SaaS company uses recurring billing, our system automatically
              generates and sends invoices to subscribers every month and tracks
              which ones are overdue, eliminating manual follow-up.
            </p>
          </div>
        </div>

        <div className="usecase-card">
          <div className="usecase-left">
            <h3>Detailed Expense Breakdown</h3>
          </div>
          <div className="usecase-right">
            <p>
              When supplying complex shipments or services, our feature allows you to
              add detailed line-item breakdowns, taxes, and discounts to ensure your
              customer has a complete and clear record for easy accounting purposes.
            </p>
          </div>
        </div>

        <div className="usecase-card">
          <div className="usecase-left">
            <h3>Integrated Tracking</h3>
          </div>
          <div className="usecase-right">
            <p>
              When an invoice is sent, our system automatically marks it as "Sent."
              When the payment link is clicked, it becomes "Viewed," and once paid,
              it updates to "Paid." This provides you with a real-time dashboard view
              of outstanding receivables.
            </p>
          </div>
        </div>
      </section>
      {/* Freelancer Payments Section */}
      <section id="mypaytfreelancer">
        <h2>3. Freelancer Payments</h2>
        <p className="core-function">
          <strong>Our Core Function:</strong> Simplified Global Mass Payouts.
        </p>

        <div className="usecase-header">
          <span>Use Case</span>
          <span>How Our Platform Helps You</span>
        </div>

        <div className="usecase-card">
          <div className="usecase-left">
            <h3>Monthly Contractor Payroll</h3>
          </div>
          <div className="usecase-right">
            <p>
              If you manage hundreds of remote software developers globally, you can
              upload a single spreadsheet. Our system processes hundreds of
              cross-border payments with one click, saving you days of manual bank
              transfers.
            </p>
          </div>
        </div>

        <div className="usecase-card">
          <div className="usecase-left">
            <h3>Affiliate & Commission Payouts</h3>
          </div>
          <div className="usecase-right">
            <p>
              When running an affiliate program, our platform automatically
              calculates monthly commissions and uses the Freelancer Payments feature
              to disburse funds to all affiliates simultaneously, regardless of their
              location or preferred currency.
            </p>
          </div>
        </div>

        <div className="usecase-card">
          <div className="usecase-left">
            <h3>Flexible Payout Methods</h3>
          </div>
          <div className="usecase-right">
            <p>
              Whether you need to pay a consultant in Brazil who prefers a local bank
              transfer or a writer in the UK who prefers PayPal, our feature handles
              both methods through a single, unified interface.
            </p>
          </div>
        </div>

        <div className="usecase-card">
          <div className="usecase-left">
            <h3>Tax Documentation Simplification</h3>
          </div>
          <div className="usecase-right">
            <p>
              Our feature tracks all payments made to specific contractors and helps
              you generate standardized payment summaries required for your local
              compliance (like US 1099s).
            </p>
          </div>
        </div>
      </section>
      {/* International Payments Section */}
      <section id="myinternationalpayments">
        <h2>4. International Payments</h2>
        <p className="core-function">
          <strong>Our Core Function:</strong> Global Payment Acceptance and Multi-Currency Support.
        </p>

        <div className="usecase-header">
          <span>Use Case</span>
          <span>How Our Platform Helps You</span>
        </div>

        <div className="usecase-card">
          <div className="usecase-left">
            <h3>Cross-Border E-commerce</h3>
          </div>
          <div className="usecase-right">
            <p>
              If your US retailer wants to sell products to Europe, our feature allows
              you to accept Euros and British Pounds directly and provides local
              payment options (like SEPA or iDEAL), significantly increasing your
              conversion in those markets.
            </p>
          </div>
        </div>

        <div className="usecase-card">
          <div className="usecase-left">
            <h3>Dynamic Currency Conversion (DCC)</h3>
          </div>
          <div className="usecase-right">
            <p>
              When a customer in Japan visits your website priced in USD, our
              platform uses DCC to instantly display the price in Japanese Yen (JPY)
              at a favorable rate, providing price clarity and improving customer
              trust.
            </p>
          </div>
        </div>

        <div className="usecase-card">
          <div className="usecase-left">
            <h3>Marketplace Payment Collection</h3>
          </div>
          <div className="usecase-right">
            <p>
              If you run a global online marketplace, this feature allows you to
              accept cards and local wallets from virtually any country and then
              automatically settle the funds into your primary business account.
            </p>
          </div>
        </div>

        <div className="usecase-card">
          <div className="usecase-left">
            <h3>Fraud Prevention</h3>
          </div>
          <div className="usecase-right">
            <p>
              Since international transactions carry higher risk, our feature
              integrates with sophisticated international fraud screening tools,
              blocking suspicious cross-border payments before they are processed.
            </p>
          </div>
        </div>
      </section>
      {/* Flash Checkout Section */}
      <section id="myflashcheckout">
        <h2>5. Flash Checkout</h2>
        <p className="core-function">
          <strong>Our Core Function:</strong> High-Speed, Optimized Checkout Experience.
        </p>

        <div className="usecase-header">
          <span>Use Case</span>
          <span>How Our Platform Helps You</span>
        </div>

        <div className="usecase-card">
          <div className="usecase-left">
            <h3>Reducing Cart Abandonment</h3>
          </div>
          <div className="usecase-right">
            <p>
              A customer adds items to a cart. Flash Checkout loads the payment
              screen instantly (often under 1 second), minimizes fields, and can
              auto-fill saved data, significantly reducing the chances the customer
              will leave before paying.
            </p>
          </div>
        </div>

        <div className="usecase-card">
          <div className="usecase-left">
            <h3>Mobile-First Conversions</h3>
          </div>
          <div className="usecase-right">
            <p>
              Because a majority of customers shop on smartphones, our Flash Checkout
              is inherently optimized for mobile screens, using large, touch-friendly
              buttons and reducing scrolling, leading to a much higher conversion
              rate on mobile devices.
            </p>
          </div>
        </div>

        <div className="usecase-card">
          <div className="usecase-left">
            <h3>Streamlined Guest Checkout</h3>
          </div>
          <div className="usecase-right">
            <p>
              For first-time buyers, the checkout is designed to be completed in as
              few clicks as possible, often combining the shipping and payment steps
              onto a single, unified screen, making the purchase feel quick and
              effortless.
            </p>
          </div>
        </div>

        <div className="usecase-card">
          <div className="usecase-left">
            <h3>Saved Payment Details</h3>
          </div>
          <div className="usecase-right">
            <p>
              The feature securely tokenizes and saves a returning customer's card or
              wallet details, allowing them to complete a subsequent purchase with a
              single click or tap, providing a true “buy now” experience.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}