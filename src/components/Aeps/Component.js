"use client";
import React, { useState } from "react";

export default function AepsForm() {
  const [transactionType, setTransactionType] = useState("Cash Withdrawal");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Biometric authentication initiated!");
  };

  return (
    <div id="aepsform">
      <div className="aeps-card">
        <h2 className="aeps-title">Aadhaar Enabled Payment System (AEPS)</h2>

        <form onSubmit={handleSubmit}>
          {/* Aadhaar Number */}
          <div className="aeps-field">
            <label>Aadhaar Number</label>
            <input
              type="text"
              placeholder="Enter your 12-digit Aadhaar number"
              maxLength="12"
              className="form-control"
              required
            />
          </div>

          {/* Select Bank */}
          <div className="aeps-field">
            <label>Select Bank</label>
            <select required className="form-select">
              <option value="">-- Choose your Bank --</option>
              <option>State Bank of India</option>
              <option>HDFC Bank</option>
              <option>ICICI Bank</option>
              <option>Axis Bank</option>
              <option>Punjab National Bank</option>
            </select>
          </div>

          {/* Transaction Type */}
          <div className="aeps-field">
            <label>Transaction Type</label>
            <div className="aeps-radio-group">
              <label>
                <input
                  type="radio"
                  name="transaction"
                  value="Cash Withdrawal"
                  checked={transactionType === "Cash Withdrawal"}
                  onChange={(e) => setTransactionType(e.target.value)}
                />
                Cash Withdrawal
              </label>

              <label>
                <input
                  type="radio"
                  name="transaction"
                  value="Balance Inquiry"
                  checked={transactionType === "Balance Inquiry"}
                  onChange={(e) => setTransactionType(e.target.value)}
                />
                Balance Inquiry
              </label>

              <label>
                <input
                  type="radio"
                  name="transaction"
                  value="Mini Statement"
                  checked={transactionType === "Mini Statement"}
                  onChange={(e) => setTransactionType(e.target.value)}
                />
                Mini Statement
              </label>
            </div>
          </div>

          {/* Amount */}
          <div className="aeps-field">
            <label>Amount (₹)</label>
            <input
              type="number"
              className="form-control"
              placeholder="Enter amount"
              min="1"
              required={transactionType === "Cash Withdrawal"}
              disabled={transactionType !== "Cash Withdrawal"}
            />
          </div>

          {/* Button */}
          <button type="submit" className="aeps-btn">
            Authenticate Biometrically
          </button>
        </form>
      </div>
    </div>
  );
}
