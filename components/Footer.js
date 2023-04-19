import React, { useState, useEffect } from "react";
import axios from "axios";

const Footer = () => {
  const [sponsors, setSponsorData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/api/sponsors/`
        );
        setSponsorData(res.data);
      } catch (err) {}
    };
    fetchData();
  }, []);

  return (
    <div>
      <div id="socials" className="dark-text bg-night">
        <div className="d-md-flex flex-md-equal w-100">
          <div className="mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
            <h2 className="display-4">OFFICIAL ACCOUNTS</h2>
            <p className="lead">
              Our official social media accounts will be used to let you know
              about open recuitments, events, races, and more.
            </p>
            <div class="wrapper bg-transparent">
              <a
                href="https://www.linkedin.com/company/uimotorsport/"
                class="icon linkedin"
              >
                <div class="tooltip">LinkedIn</div>
                <p>
                  <i class="fab fa-linkedin"></i>
                </p>
              </a>
              <a
                href="https://www.instagram.com/uimotorsport/"
                class="icon instagram"
              >
                <div class="tooltip">Instagram</div>
                <p>
                  <i class="fab fa-instagram"></i>
                </p>
              </a>
              <a
                href="https://www.tiktok.com/@uimotorsport"
                class="icon tiktok"
              >
                <div class="tooltip">Tiktok</div>
                <p>
                  <i class="fab fa-tiktok"></i>
                </p>
              </a>
              <a href="/#" class="icon youtube">
                <div class="tooltip">Youtube</div>
                <p>
                  <i class="fab fa-youtube"></i>
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>

      <footer className="footer">
        <div className="container">
          <h3 className="akira text-center my-4">supported by</h3>
          <div className="row center-image my-5">
            {sponsors.map((sponsor, index) => (
              <div className="col-4" key={index}>
                <div className="center-image">
                  <img
                    src={sponsor.image}
                    className="img-fluid"
                    alt={sponsor.brand}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
