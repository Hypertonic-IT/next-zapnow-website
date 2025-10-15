"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import "./TeamResponsive.css";

export default function TeamResponsive() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1200);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const teamMembers = [
    { name: "Simmi Sinha", role: "Founder & COO", img: "/img/simmi.png", linkedin: "https://www.linkedin.com/in/simmi-sinha-a0b067228/" },
    { name: "Reuben Route", role: "Founder & CEO", img: "/img/reuben.png", linkedin: "https://www.linkedin.com/in/reuben-route-1a83671b7/" },
    { name: "Karan Sukhija", role: "CBO", img: "/img/Karan-Sukhija.png", linkedin: "https://www.linkedin.com/in/karan-sukhija-7606ab269/" },
    { name: "Gaurav Kaushik", role: "CTO", img: "/img/gaurav.png", linkedin: "https://www.linkedin.com/in/gaurav-kaushik-9508b2269/" },
    { name: "Divanshu Anand", role: "CDO", img: "/img/divyanshu.png", linkedin: "https://www.linkedin.com/in/ananddivanshu/" },
    { name: "Krishan Kant", role: "CDO", img: "/img/Krishan.png", linkedin: "https://www.linkedin.com/in/krishan-varshney-74482427a/" },
  ];

  return (
    <section id="myteamgrid">
      <div className="myteamgrid-container">
        <h2 className="myteamgrid-title">Meet Our Team</h2>

        {isMobile ? (
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={20}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            breakpoints={{
              0: { slidesPerView: 1 },
              576: { slidesPerView: 2 },
              992: { slidesPerView: 3 },
              1200: { slidesPerView: 4 },
            }}
          >
            {teamMembers.map((member, index) => (
              <SwiperSlide key={index}>
                <div className="myteamgrid-card">
                  <img src={member.img} alt={member.name} className="myteamgrid-img" />
                  <h5>{member.name}</h5>
                  <p className="role">{member.role}</p>
                  <div className="social-links">
                    <Link href={member.linkedin} target="_blank" rel="noopener noreferrer">
                      <i className="ri-linkedin-fill"></i>
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <div className="myteamgrid">
            {teamMembers.map((member, index) => (
              <div className={`myteamgrid-card ${index < 2 ? "top-row" : "bottom-row"}`} key={index}>
                <img src={member.img} alt={member.name} className="myteamgrid-img" />
                <h5>{member.name}</h5>
                <p className="role">{member.role}</p>
                <div className="social-links">
                  <Link href={member.linkedin} target="_blank" rel="noopener noreferrer">
                    <i className="ri-linkedin-fill"></i>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
