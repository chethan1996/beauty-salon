import React from "react";
import Logo from "../../img/logo.jpeg"
import "./navbar.css"

export default function Navbar() {
  const [isActive, setisActive] = React.useState(false);
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container">
        <a className="navbar-brand" href="#">
          <img src={Logo} className="figure-img img-fluid rounded" alt="Ready To Shine" width={200}/>
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto">
                <li className="nav-item active">
                    <a className="nav-link" href="#" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">Services</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">Gallery</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">Contact Us</a>
                </li>
            </ul>
        </div>
    </div>
</nav>

</>
  )
}
