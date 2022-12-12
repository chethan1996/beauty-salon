import React from "react";

export default function Navbar() {
  const [isActive, setisActive] = React.useState(false);
  return (
    <>
    <nav className="navbar" role="navigation" aria-label="main navigation">
    <div className="navbar-brand">
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
        <a className="navbar-item">Home</a>
        <a className="navbar-item">Documentation</a>
      </div>
    </div>
</nav>
</>
  )
}
