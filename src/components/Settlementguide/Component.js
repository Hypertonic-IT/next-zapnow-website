"use client";
import React from "react";
// import "./settlements.css";

export default function SettlementsPage() {
  return (
    <section id="onsettlementpage">
      <div id="settlementguide">


        {/* hero */}
        <div className="r-hero">
          <div className="r-hero-left">
            <h1>Reliable settlements
              for businesses</h1>
            <p className="r-lead">
              Get complete control over payouts with faster, transparent, and predictable settlements.


            </p>
            <a href="#pdfcontent" className="r-cta">Sign up </a>
          </div>
          <div className="r-hero-right">
            <img
              src="https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1200&auto=format&fit=crop"
              alt="payments"
            />
          </div>
        </div>

        {/* How settlements work */}
        <section className="how" id="how-it-works">
          <h2>How <span className="accent">settlements</span> work</h2>
          {/* <p className="muted">
            Settlement is the process through which a merchant receives money paid by their end users for a particular product/service.
          </p> */}

          <div className="steps h-100">
            <div className="step h-100">
              <div className="step-card">
                <div className="icon">1</div>
                <h4>Payment is initiated</h4>
                <p>The customer enters their payment details on the checkout page.</p>
              </div>
            </div>

            <div className="step h-100">
              <div className="step-card">
                <div className="icon">2</div>
                <h4>Payment is verified</h4>
                <p>After OTP or 3D Secure verification, the amount is debited and confirmed.</p>
              </div>
            </div>

            <div className="step h-100">
              <div className="step-card">
                <div className="icon">3</div>
                <h4>Payment is processed</h4>
                <p>The money is sent through card networks to our banking partners.</p>
              </div>
            </div>

            <div className="step h-100" >
              <div className="step-card">
                <div className="icon">4</div>
                <h4>Money is settled</h4>
                <p>We transfer the amount to your bank account after deducting fees.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Dark section: Track and manage */}
        <section className="track">
          <div className="track-left">
            <h3>Track and manage all settlements in one place.</h3>
            <ul>
              <li><strong>Created:</strong> Settlement is generated and sent for processing.</li>
              <li><strong>Initiated:</strong> Settlement is being processed and will be credited shortly.</li>
              <li><strong>Processed:</strong> Settlement is successfully credited to your account.</li>
              <li><strong>Failed:</strong> Settlement failed due to incorrect bank details — you'll receive an email in such cases.</li>
            </ul>
          </div>
          <div className="track-right">
            <div className="mock-dashboard">
              <img src="img/track.jpg" className="img-fluid" />
            </div>
          </div>
        </section>

        {/* Cards: Stay in control */}
        <section className="control">
          <h2>Stay in control of your settlements</h2>
          <div className="control-grid">
            <div className="control-card">
              <div className="c-icon">💯</div>
              <h4>100% transparency upcoming settlements</h4>
              <p>Find the amount and settlement date on your Razorpay Dashboard (Home, Transactions, or Settlements tab).</p>
            </div>

            <div className="control-card">
              <div className="c-icon">🔍</div>
              <h4>Settlement status for every transaction
              </h4>
              <p>Click on any transaction to instantly check whether the payment has been received or is still pending.

              </p>
            </div>

            <div className="control-card">
              <div className="c-icon">📊</div>
              <h4>Clear view of your
                settlement cycle</h4>
              <p>View your payout cycle for domestic and international payments under "My Account."
              </p>
            </div>
          </div>
        </section>

        {/* Reconcile */}
        <section className="reconcile" id="reconcile">
          <h2>How to reconcile
            settlements with transactions</h2>
          <div className="row">
            <div className="col-md-6">
              <h4>The Razorpay Dashboard provides detailed reports to simplify reconciliation. You can download settlement reports in daily or monthly formats.</h4>
              <p>
                The Dashboard provides detailed reports to simplify reconciliation. Download settlement reports in daily or monthly formats.
              </p>

              <ul>
                <li><strong>Settlement Date:</strong> Track when a settlement was created and processed.</li>
                <li><strong>Transaction & Entity ID:</strong> Each payment has a unique Entity ID mapping to settlements.</li>
                <li><strong>UTR:</strong>Transaction Reference (UTR): Every settlement is mapped to a UTR number, which appears in your bank statement for easy tracking.</li>
              </ul>
            </div>
            <div className="col-md-6">
              <div className="mock-dashboard-light">
                {/* <div className="md-title">Dashboard</div> */}
                <img src="img/tracking.png" className="img-fluid" />
              </div>
            </div>

          </div>

        </section>
        {/* Dark section: Track and manage */}
        <section className="track">
          <div className="track-left">
            <h3>Check your settlements in your bank statement</h3>
            <p>Each settlement comes with a Unique Transaction Reference (UTR) number provided by our banking partners.

            </p>
            <p>You can find this number in the Settlement Reports available in the Reports section of your Razorpay Dashboard. Since the UTR is recognized across all banks, you can use it to track a specific settlement in your bank account statement.</p>

          </div>
          <div className="track-right">
            <div className="mock-dashboard">
              <img src="img/tracking3.png" className="img-fluid" />
            </div>
          </div>
        </section>


      </div>
    </section>
  );
}
