"use client";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  FaIndustry,
  FaStore,
  FaTruck,
  FaHospital,
  FaHotel,
  FaBolt,
  FaHandsHelping,
} from "react-icons/fa";
import { MdHealthAndSafety } from "react-icons/md";

export default function IndustryCards() {
  const data = [
    {
      icon: <FaIndustry />,
      title: "Supply Chain",
      desc: "For secure B2B payments and supplier/distributor collections.",
    },
    {
      icon: <FaStore />,
      title: "Retail Industry",
      desc: "For quick in-store and online payments (via QR codes, links, or POS integration).",
    },
    {
      icon: <FaTruck />,
      title: "Logistics Partners",
      desc: "For fast collection of freight charges and delivery payments.",
    },
    {
      icon: <MdHealthAndSafety />,
      title: "Healthcare & Pharma",
      desc: "For simplified patient billing, pharmacy collections, and subscription-based health plans.",
    },
    {
      icon: <FaHotel />,
      title: "Hospitality & Travel",
      desc: "For securing bookings, processing advance payments, and streamlining check-in/checkout.",
    },
    {
      icon: <FaBolt />,
      title: "Utility Providers",
      desc: "For automating recurring bill payments and collections (electricity, water, internet, etc.).",
    },
    {
      icon: <FaHandsHelping />,
      title: "NGOs & Non-Profits",
      desc: "For easy and transparent donation collection via links and QR codes.",
    },
  ];

  return (
    <section id="mynewcards-on" >
      <div className="container">
        <center>
          <h1 class="mb-1">Pay-in Services For Every Industry</h1>
          {/* <p>Beyond our core sectors, any organization requiring instant, reliable pay-in services relies on
            Zapnow Payments to streamline operations and ensure rapid fund collection.
            This includes:
          </p> */}
        </center>
        <div className="row justify-content-center">
          {data.map((item, index) => (
            <div className="col-xl-3 col-lg-4 col-md-6 mb-4" key={index}>
              <div className="mybox text-center p-4 h-100 rounded-4">
                <div className="myicon fs-1 mb-3">{item.icon}</div>
                <h5 className="fw-bold mb-2">{item.title}</h5>
                <p className="text-muted small mb-0">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
