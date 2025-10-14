"use client";
import React from "react";
import Head from "next/head";
// import "./Home.css"; // external CSS file

export default function Home() {
  return (
    <>
      <div id="sectionooneframe">
        <div className="container mb-5">
          <center>
            <h1 className="mb-1">     Explore our interactive dashboard
            </h1>
            <p>
              Experience how easy payments can be. Generate invoices, QR codes, and more — all in one place.
            </p></center>
          <div className="laptop-frame">
            <div className="laptop-screen">
              <iframe
                src="https://gateway.hypertonic.co.in/dashboard"
                title="Iframe Example"
                width="100%"
                height="100%"
              ></iframe>
            </div>
            <div className="laptop-base"></div>
          </div>
        </div>
      </div>
    </>
  );
}
