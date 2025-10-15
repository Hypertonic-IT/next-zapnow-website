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
  Zapnow Payments — your smart, secure, and scalable platform for seamless business transactions. We connect enterprises with multiple banks to simplify payments and boost efficiency.
</p>
<p className="small">
  With AI insights, real-time tracking, and easy API integration, Zapnow helps businesses save costs, stay compliant, and grow with confidence.
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
              {/* <li><span>Careers</span></li> */}
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
    <li>
      <Link href="/#education">Education</Link>
    </li>
    <li>
      <Link href="/#ecommerce">E-commerce</Link>
    </li>
    <li>
      <Link href="/#saas">SaaS</Link>
    </li>
    <li>
      <Link href="/#bfsi">BFSI</Link>
    </li>
    <li>
      <Link href="/#freelancer">Freelancer</Link>
    </li>
  </ul>
</div>


         

          {/* BECOME A PARTNER */}
          <div className="col-lg-2 col-md-4 col-sm-6 mb-4">
            <h6 className="fw-bold">BECOME A PARTNER</h6>
            <ul className="list-unstyled">
               <li><Link href="/referandearn" >Refer and Earn</Link></li>
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
              <li><a href="/footerpaymore#ourroutecore">Route</a></li>
              <li><a href="/footerpaymore#mypaytinvoice">Invoices</a></li>
              <li><a href="/footerpaymore#mypaytfreelancer">Freelancer Payments</a></li>
              <li><a href="/footerpaymore#myinternationalpayments">International Payments</a></li>
              <li><a href="/footerpaymore#myflashcheckout">Flash Checkout</a></li>
              <li><a href="/aeps">Aeps</a></li>
              <li><a href="/dmtform">DMT</a></li>
            </ul>

          </div>

          <div className="col-lg-2 col-md-4 col-sm-6 mb-4">
            <h6 className="fw-bold">Contact Us</h6>
            <ul className="list-unstyled">
              <li><span>info@zapnowpayments.com</span></li>
              {/* <li><span></span></li> */}
             
            </ul>

          </div>
        </div>


        {/* ADDRESS */}
        <div className="text-center small2 mt-3">
          <p>
            Plot No. 5B, Sector - 15A, 2nd Floor, Neelam Ajronda Chowk Metro Station, Faridabad, Haryana 121007
          </p>
          <p className="mb-0">© Zapnow 2025 All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
}
