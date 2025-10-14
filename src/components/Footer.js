import React from "react";
import { FaFacebookF, FaXTwitter, FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa6";
import Link from "next/link";


export default function Footer() {
  return (
    <footer id="mywebsitefooter" className="bg-light text-dark pt-5 pb-4">
      <div className="container">
        <div className="row">

          {/* LEFT SIDE INTRO */}
          <div className="col-lg-4 col-md-6 mb-4">
            <h5 className="fw-bold">Zapnow Payments</h5>
            <p className="small">
              Zapnow Payments — Your Intelligent Financial Backbone.

            </p>
            <p className="small">
              Zapnow Payments is a licensed Technology Service Provider (TSP) built to power the future of business transactions. Our platform enables seamless, secure, and intelligent payment experiences — whether online or offline. We connect enterprises with multiple banking partners, optimize transaction routing, and reduce operational costs through a unified dashboard. With AI-driven insights, real-time reconciliation, and predictive analytics, Zapnow helps businesses make smarter, faster financial decisions.

            </p>
            <p className="small">
              Designed for scale, Zapnow offers transparent pay-per-transaction pricing, robust compliance, and developer-friendly APIs that make integration effortless. From generating invoices and QR codes to managing pay-ins and payouts, we simplify the complex world of digital payments. Zapnow empowers every business with flexibility, visibility, and control — helping you transact smarter, grow faster, and operate with total confidence.
            </p>
          </div>

          {/* ACCEPT PAYMENTS */}
          <div className="col-lg-2 col-md-4 col-sm-6 mb-4">
            <h6 className="fw-bold">ACCEPT PAYMENTS</h6>
            <ul className="list-unstyled">
              <li><a href="/footerpaymentlink#mypaymentusecase">Payment Links</a></li>
              <li><a href="/footerpaymentlink#mypaymentpos">Zapnow POS</a></li>
              <li><a href="/footerpaymentlink#mypaymentqrcodes">QR Codes</a></li>
              <li><a href="/footerpaymentlink#mypaymentsubscriptions">Subscriptions</a></li>
              <li><a href="/footerpaymentlink#mypaymentsmartcollect">Smart Collect</a></li>
              <li><a href="/footerpaymentlink#mypaymentinstantsettlements">Instant Settlements</a></li>
            </ul>
          </div>


          {/* RESOURCES */}
          <div className="col-lg-2 col-md-4 col-sm-6 mb-4">
            <h6 className="fw-bold">RESOURCES</h6>
            <ul className="list-unstyled">
              <li><span>Blog </span></li>
              <li><span>Learn</span></li>
              <li><span>Customer Stories</span></li>
              <li><span>Events</span></li>
              <li><span>Chargeback Guide</span></li>
              <li><span>Settlement Guide</span></li>
            </ul>
          </div>

          {/* DEVELOPERS */}
          <div className="col-lg-2 col-md-4 col-sm-6 mb-4">
            <h6 className="fw-bold">DEVELOPERS</h6>
            <ul className="list-unstyled">
              <li><span>Docs</span></li>
              <li><span>Integrations</span></li>
              <li><span>API Reference</span></li>
            </ul>
          </div>

          {/* COMPANY */}
          <div className="col-lg-2 col-md-4 col-sm-6 mb-4">
            <h6 className="fw-bold">COMPANY</h6>
            <ul className="list-unstyled">
              <li><a href="/aboutus">About Us</a></li>
              <li><span>Careers</span></li>
              <li><Link href="/termsandcondition" >Terms of Use</Link></li>
              <li><Link href="/privacy" >Privacy Policy</Link></li>
              <li><Link href="/grievance" >Grievance Redressal</Link></li>
            </ul>

          </div>
        </div>

        {/* SECOND ROW */}
        <div className="row mt-4">

          {/* SOLUTIONS */}
          <div className="col-lg-2 col-md-4 col-sm-6 mb-4">
            <h6 className="fw-bold">SOLUTIONS</h6>
            <ul className="list-unstyled">
              <li><span>Education</span></li>
              <li><span>E-commerce</span></li>
              <li><span>SaaS</span></li>
              <li><span>BFSI</span></li>
            </ul>
          </div>

          {/* PAYROLL */}
          <div className="col-lg-2 col-md-4 col-sm-6 mb-4">
            <h6 className="fw-bold">PAYROLL</h6>
            <ul className="list-unstyled">
              <li><span>Zapnow Payroll</span></li>
            </ul>
          </div>

          {/* BECOME A PARTNER */}
          <div className="col-lg-2 col-md-4 col-sm-6 mb-4">
            <h6 className="fw-bold">BECOME A PARTNER</h6>
            <ul className="list-unstyled">
              <li><span>Refer and Earn</span></li>
              {/* <li><span>Onboarding APIs</span></li> */}
            </ul>
          </div>

          {/* HELP */}
          <div className="col-lg-2 col-md-4 col-sm-6 mb-4">
            <h6 className="fw-bold">HELP & SUPPORT</h6>
            <ul className="list-unstyled">
              <li><span>Support</span></li>
              <li><span>Knowledge base</span></li>
            </ul>
          </div>

          {/* MORE */}
          <div className="col-lg-2 col-md-4 col-sm-6 mb-4">
            <h6 className="fw-bold">MORE</h6>
            <ul className="list-unstyled">
              <li><a href="/footerpaymore#ourroutecore"> Route</a></li>
              <li><a href="/footerpaymore#mypaymentusecase"> Invoices</a></li>
              <li><a href="/footerpaymore#mypaymentusecase"> Freelancer Payments</a></li>
              <li><a href="/footerpaymore#mypaymentusecase"> International Payments</a></li>
              <li><a href="/footerpaymore#mypaymentusecase"> Flash Checkout</a></li>
            </ul>

          </div>
        </div>

        {/* SOCIAL MEDIA */}
        <div className="d-flex justify-content-center mt-4 mb-3">
          <span className="social"><FaFacebookF /></span>
          <span className="social"><FaXTwitter /></span>
          <span className="social"><FaInstagram /></span>
          <span className="social"><FaGithub /></span>
          <span className="social"><FaLinkedin /></span>
        </div>

        {/* ADDRESS */}
        <div className="text-center small mt-3">
          <p>
            Plot No. 5B, Sector - 15A, 2nd Floor, Neelam Ajronda Chowk Metro Station, Faridabad, Haryana 121007
          </p>
          <p className="mb-0">© Zapnow 2025 All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
}
