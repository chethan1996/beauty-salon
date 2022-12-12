import React from "react";
import shineLogo from "../../img/shine_logo.png"
import "./navbar.css"

export default function Navbar() {
  const [isActive, setisActive] = React.useState(false);
  return (
    <>
    <nav className="navbar" role="navigation" aria-label="main navigation">
    <div className="navbar-brand">
    <img src={shineLogo} width="112" height="28" alt="Shine:For the girls"></img>
      <button
        onClick={() => {
          setisActive(!isActive);
        }}
        className={`navbar-burger burger ${isActive ? "is-active" : ""}`}
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarBasicExample"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </button>
    </div>
    <div
      id="navbarBasicExample"
      className={`navbar-menu ${isActive ? "is-active" : ""}`}
    >
      <div className="navbar-start">
      <div class="enable-scroll">
        <a className="navbar-item scroll-text-1" href="#" >Home</a>
        <a className="navbar-item scroll-text-2" href="#" >Home</a>
        </div>
        <a className="navbar-item" href="#">Services</a>
        <a className="navbar-item" href="#">Book Appointment</a>
        <a className="navbar-item" href="#">About Us</a>
      </div>
    </div>
</nav>
</>
  )
}
