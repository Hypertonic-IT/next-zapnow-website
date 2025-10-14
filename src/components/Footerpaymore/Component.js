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
<section id="mypaymentpos">
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


      {/* QR Codes Section */}
      <section id="mypaymentqrcodes">
        <h2>3. QR Codes</h2>
        <p className="core-function">
          <strong>Our Core Function:</strong> Simplified, Contactless Payment Acceptance.
        </p>

        <div className="usecase-header">
          <span>Use Case</span>
          <span>How Our Platform Helps You</span>
        </div>

        <div className="usecase-card">
          <div className="usecase-left">
            <h3>Quick Counter Payments</h3>
          </div>
          <div className="usecase-right">
            <p>
              A café places a QR code sticker at the register. Customers simply scan the code with their mobile phone,
              enter the amount, and pay instantly using their preferred payment app, reducing cash handling and card machine queues.
            </p>
          </div>
        </div>

        <div className="usecase-card">
          <div className="usecase-left">
            <h3>In-Store Self-Payment</h3>
          </div>
          <div className="usecase-right">
            <p>
              A store places unique QR codes next to high-value items or in dressing rooms. Customers can scan the item's QR code
              to pay for it directly on their phone, skipping the checkout line entirely.
            </p>
          </div>
        </div>

        <div className="usecase-card">
          <div className="usecase-left">
            <h3>Utility and Bill Payments</h3>
          </div>
          <div className="usecase-right">
            <p>
              Utility companies print a unique QR code on monthly bills. The customer scans the code, and the payment
              amount and account details are automatically populated, drastically simplifying the bill payment process.
            </p>
          </div>
        </div>

        <div className="usecase-card">
          <div className="usecase-left">
            <h3>Donations and Fundraising</h3>
          </div>
          <div className="usecase-right">
            <p>
              A non-profit organization uses a QR code on posters or websites. Donors can scan and donate immediately,
              making the contribution process friction-free and trackable for the organization.
            </p>
          </div>
        </div>
      </section>
      {/* Subscriptions Section */}
      <section id="mypaymentsubscriptions">
        <h2>4. Subscriptions</h2>
        <p className="core-function">
          <strong>Our Core Function:</strong> Automated Recurring Billing and Customer Management.
        </p>

        <div className="usecase-header">
          <span>Use Case</span>
          <span>How Our Platform Helps You</span>
        </div>

        <div className="usecase-card">
          <div className="usecase-left">
            <h3>Membership & SaaS Billing</h3>
          </div>
          <div className="usecase-right">
            <p>
              A fitness studio or software company needs to charge customers monthly or annually.
              Our feature <strong>automates recurring collections</strong> on the due date and notifies the customer
              of successful or failed payments, ensuring predictable revenue.
            </p>
          </div>
        </div>

        <div className="usecase-card">
          <div className="usecase-left">
            <h3>Tiered Pricing Models</h3>
          </div>
          <div className="usecase-right">
            <p>
              A business offers Basic, Premium, and Enterprise plans. The Subscriptions feature manages
              the <strong>different billing cycles, features, and pricing structures</strong> for each plan, allowing
              customers to upgrade or downgrade seamlessly.
            </p>
          </div>
        </div>

        <div className="usecase-card">
          <div className="usecase-left">
            <h3>Dunning Management (Failed Payments)</h3>
          </div>
          <div className="usecase-right">
            <p>
              When a subscription payment fails (for example, an expired card), the system automatically
              triggers a <strong>smart dunning sequence</strong> by emailing the customer a secure link to update
              their payment details, effectively recovering lost revenue.
            </p>
          </div>
        </div>

        <div className="usecase-card">
          <div className="usecase-left">
            <h3>Customized Trial Periods</h3>
          </div>
          <div className="usecase-right">
            <p>
              A company offers a 7-day free trial. The feature tracks the trial duration and
              <strong>automatically initiates the first billing cycle</strong> on the 8th day, removing the need for manual monitoring.
            </p>
          </div>
        </div>
      </section>
      {/* Smart Collect Section */}
      <section id="mypaymentsmartcollect">
        <h2>5. Smart Collect</h2>
        <p className="core-function">
          <strong>Our Core Function:</strong> Virtual Account Reconciliation and Automated Tracking.
        </p>

        <div className="usecase-header">
          <span>Use Case</span>
          <span>How Our Platform Helps You</span>
        </div>

        <div className="usecase-card">
          <div className="usecase-left">
            <h3>B2B Payment Tracking</h3>
          </div>
          <div className="usecase-right">
            <p>
              A wholesale distributor receives bank transfers (NEFT/RTGS) from hundreds of clients daily.
              Smart Collect assigns each client a <strong>unique virtual bank account number</strong>, ensuring that every
              incoming payment is instantly and automatically matched to the correct customer and invoice in the system.
            </p>
          </div>
        </div>

        <div className="usecase-card">
          <div className="usecase-left">
            <h3>E-Wallet and UPI Reconciliation</h3>
          </div>
          <div className="usecase-right">
            <p>
              A business accepts payments via various virtual methods like UPI. Instead of manually
              searching through bank statements, our feature provides <strong>instant, real-time reconciliation</strong>
              for all these methods, eliminating hours of accounting work.
            </p>
          </div>
        </div>

        <div className="usecase-card">
          <div className="usecase-left">
            <h3>Identifying Unknown Deposits</h3>
          </div>
          <div className="usecase-right">
            <p>
              If a customer sends an ad-hoc payment without a reference, the system uses virtual account mapping
              to <strong>automatically identify the sender</strong>, preventing delays in crediting their account.
            </p>
          </div>
        </div>

        <div className="usecase-card">
          <div className="usecase-left">
            <h3>Marketplace Seller Payouts</h3>
          </div>
          <div className="usecase-right">
            <p>
              A marketplace collects payments centrally. Using Smart Collect, it creates <strong>virtual accounts for each seller</strong>,
              making it easy to see exactly how much money belongs to which seller before initiating their payout.
            </p>
          </div>
        </div>
      </section>
      {/* Instant Settlements Section */}
      <section id="mypaymentinstantsettlements">
        <h2>6. Instant Settlements</h2>
        <p className="core-function">
          <strong>Our Core Function:</strong> Rapid Fund Transfers to the Business Account.
        </p>

        <div className="usecase-header">
          <span>Use Case</span>
          <span>How Our Platform Helps You</span>
        </div>

        <div className="usecase-card">
          <div className="usecase-left">
            <h3>Immediate Working Capital</h3>
          </div>
          <div className="usecase-right">
            <p>
              A small business relies on daily cash flow. Instead of waiting 2–3 days for the
              standard settlement cycle, <strong>Instant Settlements</strong> transfers funds from all successful
              transactions directly to the business bank account within minutes, improving
              working capital and liquidity.
            </p>
          </div>
        </div>

        <div className="usecase-card">
          <div className="usecase-left">
            <h3>High-Volume, Low-Margin Sales</h3>
          </div>
          <div className="usecase-right">
            <p>
              Businesses with high sales volumes—such as grocery delivery or quick-service restaurants—need
              rapid access to funds to cover daily costs like inventory restocking. This feature ensures
              <strong> money is available faster</strong> to keep operations running smoothly.
            </p>
          </div>
        </div>

        <div className="usecase-card">
          <div className="usecase-left">
            <h3>Urgent Vendor Payments</h3>
          </div>
          <div className="usecase-right">
            <p>
              A business needs to make an urgent vendor payment but is waiting on incoming sales revenue.
              Instant Settlements allows them to <strong>access recently collected funds immediately</strong>
              without needing external short-term financing.
            </p>
          </div>
        </div>

        <div className="usecase-card">
          <div className="usecase-left">
            <h3>Weekend Sales Access</h3>
          </div>
          <div className="usecase-right">
            <p>
              Transactions collected on a Friday night or over the weekend can be settled instantly,
              rather than being held until Monday morning — giving the business manager
              <strong> immediate visibility and access</strong> to weekend sales revenue.
            </p>
          </div>
        </div>
      </section>

    </main>
  );
}
