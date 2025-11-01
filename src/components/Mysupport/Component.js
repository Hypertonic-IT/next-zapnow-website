"use client";
import React, { useState, useRef } from "react";

export default function FaqPage() {
  const [openCard, setOpenCard] = useState(null);
  const [openSub, setOpenSub] = useState({});
  const [feedbackGiven, setFeedbackGiven] = useState({});
  const [trackType, setTrackType] = useState("phone");

  const contentRefs = useRef({});
  const subRefs = useRef({});

  const faqData = {
    Customer: [
      {
        question: "How do I check the status of my payment/order?",
        answer:
          "Upon a successful transaction, you’ll receive a confirmation email. For order status, please contact the merchant directly."
      },
      {
        question: "How do I check the status of my refund?",
        answer:
          "You can track your refund through your Razorpay dashboard or contact the merchant directly."
      }
    ],
    Merchant: [
      {
        question: "How can I issue a refund?",
        answer:
          "Refunds can be initiated from your Razorpay Dashboard under the 'Payments' section."
      },
      {
        question: "How do I integrate Razorpay?",
        answer:
          "Integration can be done using Razorpay API or hosted checkout options."
      }
    ],
    Partner: [
      {
        question: "How can I become a partner?",
        answer:
          "Register on our Partner Program page and follow the onboarding steps."
      },
      {
        question: "Do partners earn commissions?",
        answer: "Yes, partners earn commissions on active clients onboarded."
      }
    ],
    "Prospective Client": [
      {
        question: "How do I start with Razorpay?",
        answer:
          "Sign up and complete KYC verification to start accepting payments instantly."
      },
      {
        question: "How can I become a partner?",
        answer:
          "Register on our Partner Program page and follow the onboarding steps."
      }
    ],
    "Cybercrime Officer": [
      {
        question: "How to request transaction details?",
        answer:
          "Cybercrime officers can reach us through the official law enforcement email."
      }
    ]
  };

  // ✅ Animation
  const animateHeight = (ref, open) => {
    if (!ref) return;
    if (open) {
      ref.style.height = `${ref.scrollHeight}px`;
      setTimeout(() => (ref.style.height = "auto"), 300);
    } else {
      ref.style.height = `${ref.scrollHeight}px`;
      setTimeout(() => (ref.style.height = "0px"), 10);
    }
  };

  // ✅ Category Toggle (Auto-close previous)
  const toggleCard = (cat) => {
    if (openCard === cat) {
      animateHeight(contentRefs.current[cat], false);
      setOpenCard(null);
    } else {
      if (openCard) animateHeight(contentRefs.current[openCard], false);
      setOpenCard(cat);
      animateHeight(contentRefs.current[cat], true);
    }
    setOpenSub({}); // reset inner
  };

  // ✅ Sub Question Toggle
  const toggleSub = (cat, i) => {
    const key = `${cat}-${i}`;

    if (openSub[cat] === i) {
      animateHeight(subRefs.current[key], false);
      setOpenSub({ ...openSub, [cat]: null });
    } else {
      if (openSub[cat] !== null && openSub[cat] !== undefined) {
        const prevKey = `${cat}-${openSub[cat]}`;
        animateHeight(subRefs.current[prevKey], false);
      }
      setOpenSub({ ...openSub, [cat]: i });
      animateHeight(subRefs.current[key], true);
    }
  };

  const feedback = (cat, i) =>
    setFeedbackGiven({ ...feedbackGiven, [`${cat}-${i}`]: true });

  // ✅ Dynamic Input
  const renderField = () => {
    switch (trackType) {
      case "phone":
        return (
          <>
            <div className="zap-phone-input">
              <input placeholder="Enter 10-digit phone number" />
            </div>
            <small className="zap-hint">Enter phone used for payment</small>
          </>
        );

      case "order":
        return (
          <>
            <input className="form-control zap-full-input" placeholder="Enter Payment / Order / Refund ID" />
            <small className="zap-hint">Enter transaction ID</small>
          </>
        );

      case "pnr":
        return (
          <>
            <input className="form-control zap-full-input" placeholder="Enter PNR Number" />
            <small className="zap-hint">Enter booking PNR</small>
          </>
        );
    }
  };

  return (
    <>
    <div id="zapfaq" className="container">
      <div className="row g-4">

        {/* ✅ Left FAQ */}
        <div className="col-md-6">
          <h3 className="faq-heading">Hi, I am a...</h3>

          {Object.entries(faqData).map(([cat, items]) => (
            <div className="faq-card" key={cat}>
              <div className="faq-header" onClick={() => toggleCard(cat)}>
                <div className="faq-title">
                  <i className="ri-chat-1-line faq-icon"></i> {cat}
                </div>
                <i className={`faq-arrow ri-arrow-down-s-line ${openCard === cat ? "rotate" : ""}`}></i>
              </div>

              <div ref={(el) => (contentRefs.current[cat] = el)} className="faq-content" style={{ height: 0 }}>
                {items.map((item, i) => (
                  <div className="faq-item" key={i}>
                    <div className="faq-question" onClick={() => toggleSub(cat, i)}>
                      {item.question}
                      <i className={`sub-arrow ${openSub[cat] === i ? "ri-subtract-line rotate" : "ri-add-line"}`}></i>
                    </div>

                    <div ref={(el) => (subRefs.current[`${cat}-${i}`] = el)} className="faq-answer" style={{ height: 0 }}>
                      <p>{item.answer}</p>

                      {feedbackGiven[`${cat}-${i}`] ? (
                        <p className="thanks-text">Thanks for your feedback ✅</p>
                      ) : (
                        <div className="feedback">
                          <span className="no" onClick={() => feedback(cat, i)}><i className="ri-thumb-down-line"></i> Not Useful</span>
                          <span className="yes" onClick={() => feedback(cat, i)}><i className="ri-thumb-up-line"></i> Yes, Useful</span>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* ✅ Right Form */}
        <div className="col-md-6">
          <div className="zap-form-box">
            <h2 className="zap-form-title">Track Payments</h2>
            <p className="zap-form-sub">Check payment status for last 6 months using phone / ID</p>

            <label className="zap-label">Track with</label>
            <div className="zap-select">
              <select value={trackType} onChange={(e) => setTrackType(e.target.value)} className="form-select">
                <option value="phone">Phone Number</option>
                <option value="order">Payment/Order/Refund ID</option>
                <option value="pnr">PNR Number</option>
              </select>
            </div>

            <div style={{ marginTop: "12px" }}>{renderField()}</div>

            <button className="zap-btn">Check Status</button>
            <p className="zap-footer-text">Awaiting response? <a href="#">Track Existing Query</a></p>
          </div>
        </div>

      </div>
    </div>
    <div id="onsettlementpage">
        <section className="track">
          <div className="track-left">
            <h3>Start Doing More with Zapnow Subscriptions</h3>
            <p>Handle the entire payments lifecycle with our technologically advanced payments solution.</p>
            <ul className="d-flex">
              <li><strong>Quick Onboarding</strong></li>
              <li><strong>Unlimited Plans</strong></li>
              <li><strong>Unlimited Subscriptions</strong></li>
              <li><strong>24x7 Support</strong></li>
              
            </ul>
          </div>
          <div className="track-right">
            <div className="mock-dashboard">
              <img src="img/track.jpg" className="img-fluid" />
            </div>
          </div>
        </section>
    </div>
    </>
  );
}
