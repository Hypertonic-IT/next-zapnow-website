"use client";
import React, { useState } from "react";

export default function RequestDemoPage() {
  const [fullName, setFullName] = useState("");
  const [organization, setOrganization] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (!fullName) newErrors.fullName = "Full name is required";
    if (!organization) newErrors.organization = "Organization name is required";
    if (!email) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(email))
      newErrors.email = "Enter a valid email address";

    if (!phone) newErrors.phone = "Phone number is required";
    else if (!/^\d{10}$/.test(phone))
      newErrors.phone = "Enter a valid 10-digit phone number";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    alert("Thank you! Your demo request has been submitted.");
  };

  return (
    <div id="mysignupzapnow">
      <div className="login-container">
        {/* Left Side */}
        <div className="login-left">
          <h2>Become a Channel Partner</h2>

          <form onSubmit={handleSubmit}>
            {/* Full Name */}
            <label>Full Name*</label>
            <input
              type="text"
              placeholder="Enter your full name"
              value={fullName}
              onChange={(e) => {
                setFullName(e.target.value);
                if (errors.fullName)
                  setErrors((prev) => ({ ...prev, fullName: "" }));
              }}
            />
            {errors.fullName && <p className="error">{errors.fullName}</p>}

            {/* Organization Name */}
            <label>Organization Name*</label>
            <input
              type="text"
              placeholder="Enter your organization name"
              value={organization}
              onChange={(e) => {
                setOrganization(e.target.value);
                if (errors.organization)
                  setErrors((prev) => ({ ...prev, organization: "" }));
              }}
            />
            {errors.organization && (
              <p className="error">{errors.organization}</p>
            )}

            {/* Email */}
            <label>Email*</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (errors.email) setErrors((prev) => ({ ...prev, email: "" }));
              }}
            />
            {errors.email && <p className="error">{errors.email}</p>}

            {/* Phone */}
            <label>Phone Number*</label>
            <input
              type="text"
              placeholder="Enter your 10-digit phone number"
              value={phone}
              onChange={(e) => {
                setPhone(e.target.value);
                if (errors.phone) setErrors((prev) => ({ ...prev, phone: "" }));
              }}
            />
            {errors.phone && <p className="error">{errors.phone}</p>}

            <button type="submit" className="mt-3">
              Submit Request
            </button>
          </form>
        </div>

        {/* Right Side */}
        <div className="login-right">
          <img src="/img/zapnowtransparent.png" className="img-fluid"/>
        </div>
      </div>
    </div>
  );
}
