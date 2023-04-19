import React from "react";
import Link from "next/link";

const Navbar = () => (
  <nav className="navbar site-header sticky-top py-3 navbar-dark">
    <div className="container-fluid d-flex flex-md-row justify-content-between">
      <a href="/#" onclick="return redirectMe(this);">
        <img
          className="navbar-logo d-block mx-auto"
          role="img"
          viewBox="0 0 24 24"
          focusable="false"
          src="https://res.cloudinary.com/dbev4mnac/image/upload/v1660308941/logo_idbpew.png"
          height="40"
          alt=""
          loading="lazy"
        />
      </a>
      <Link href="/" className="py-2 d-none d-md-inline-block">
        Home
      </Link>
      <Link href="/about" className="py-2 d-none d-md-inline-block">
        About Us
      </Link>
      <Link href="/team" className="py-2 d-none d-md-inline-block">
        Our Team
      </Link>
      <Link href="/news" className="py-2 d-none d-md-inline-block">
        News
      </Link>
      <Link href="/sponsors" className="py-2 d-none d-md-inline-block">
        Sponsors
      </Link>
      <a
        className="py-2 d-none d-md-inline-block"
        href="#socials"
        onclick="return redirectMe(this);"
      >
        Social Media
      </a>

      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarTogglerDemo02"
        aria-controls="navbarTogglerDemo02"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
    </div>

    <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
      <ul class="align-items-end navbar-nav mr-auto mt-2 mt-lg-0">
        <li className="nav-item">
          <span data-toggle="collapse" data-target="#navbarTogglerDemo02">
            <Link href="/" className="nav-link lead">
              Home
            </Link>
          </span>
        </li>
        <li className="nav-item">
          <span data-toggle="collapse" data-target="#navbarTogglerDemo02">
            <Link href="/about" className="nav-link lead">
              About Us
            </Link>
          </span>
        </li>
        <li className="nav-item">
          <span data-toggle="collapse" data-target="#navbarTogglerDemo02">
            <Link href="/team" className="nav-link lead">
              Our Team
            </Link>
          </span>
        </li>
        <li className="nav-item">
          <span data-toggle="collapse" data-target="#navbarTogglerDemo02">
            <Link href="/news" className="nav-link lead">
              News
            </Link>
          </span>
        </li>
        <li className="nav-item">
          <span data-toggle="collapse" data-target="#navbarTogglerDemo02">
            <Link href="/sponsors" className="nav-link lead">
              Sponsors
            </Link>
          </span>
        </li>
        <li className="nav-item">
          <span data-toggle="collapse" data-target="#navbarTogglerDemo02">
            <a className="nav-link lead" href="#socials">
              Social Media
            </a>
          </span>
        </li>
      </ul>
    </div>
  </nav>
);

export default Navbar;
