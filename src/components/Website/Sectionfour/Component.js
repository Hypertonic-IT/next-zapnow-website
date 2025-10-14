"use client";
import Link from "next/link";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function TeamSlider() {
  const teamMembers = [
    {
      name: "Simmi Sinha",
      role: " Founder & COO",
      img: "/img/simmi.png",
      linkedin: "https://www.linkedin.com/in/simmi-sinha-a0b067228/",
    },
    {
      name: "Reuben Route",
      role: "Founder & CEO",
      img: "/img/reuben.png",
      linkedin: "https://www.linkedin.com/in/reuben-route-1a83671b7/",
    },
    {
      name: "Karan Sukhija",
      role: "CBO",
      img: "/img/Karan-Sukhija.png",
      linkedin: "https://www.linkedin.com/in/karan-sukhija-7606ab269/",

    },
    {
      name: "Gaurav Kaushik",
      role: "CTO",
      img: "/img/gaurav.png",
      linkedin: "https://www.linkedin.com/in/gaurav-kaushik-9508b2269/",
    },
     {
      name: "Divanshu Anand",
      role: "CDO",
      img: "/img/divyanshu.png",
      linkedin: "https://www.linkedin.com/in/ananddivanshu/",

    },
     {
      name: "Krishan Kant",
      role: "CDS",
      img: "/img/Krishan.png",
      linkedin: "https://www.linkedin.com/in/krishan-varshney-74482427a/",
      facebook: "https://facebook.com/dummy",
      instagram: "https://instagram.com/dummy",
    },
  
  ];

  return (
    <section id="ourteam">
      <div className="container">
        <h2 className="section-title">Meet Our Team</h2>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={6}
          navigation
          pagination={{ clickable: true }}
          autoplay={{
            delay:992500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true   
          }}
          breakpoints={{
            0: { slidesPerView: 1 },
            576: { slidesPerView: 2 },
            992: { slidesPerView: 3 },
            1402: { slidesPerView: 6 },
          }}
        >

          {teamMembers.map((member, index) => (
            <SwiperSlide key={index}>
              <div className="team-card h-100">
                <img src={member.img} alt={member.name} className="team-img" />
                <h5>{member.name}</h5>
                <p className="role">{member.role}</p>
                <div className="social-links">
                  <Link href={member.linkedin} target="_blank" rel="noopener noreferrer" className="mylink1">
                    <i className="ri-linkedin-fill"></i>
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
