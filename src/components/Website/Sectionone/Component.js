import Head from "next/head";
import Link from "next/link";

export default function Home() {
  const logos = [
    "/img/brand.png",
    "/img/brand.png",
    "/img/brand.png",
    "/img/brand.png",
    "/img/brand.png",
    "/img/brand.png",
    "/img/brand.png",
    "/img/brand.png",

  ];


  return (
    <>

      <div id="sectionoone">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6">
              <div className="leftSection">
                <h1 className="title">
                  One API. Every Bank. Infinite Agility.
                </h1>
                <p className="subtitle">
                  Zapnow Payments unifies cooperative and commercial bank APIs into a single intelligent layer — enabling enterprises to route transactions dynamically, capture better rates, and deliver frictionless pay-in, pay-out experiences across cards, UPI, and banking networks. Empowering organizations with unmatched agility, live financial visibility, and the freedom to scale with absolute control.
                </p>
                <Link href="/requestdemo"> <button className="requestBtn">
                  Request an invite &gt;
                </button></Link>
              </div>
            </div>

            <div className="col-lg-6 rightSection">
              {/* <img
                src="./img/dashboard2.png"
                alt="Financial Illustration"
                className="rightImage"
              /> */}
              <video
                // ref={videoRef}
                className="myVideo"
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                controls={false}
              >
                <source src="img/zapnow-video1.mp4" type="video/mp4" />
              </video>

            </div>
          </div>
        </div>
      </div>

      <div id="mybrandsslider" className="d-none">
        <div className="slide-track">
          {logos.concat(logos).map((logo, i) => (
            <div className="slide" key={i}>
              <img src={logo} alt="brand logo" className="logo" />
            </div>
          ))}
        </div>
      </div>

    </>
  );
}
