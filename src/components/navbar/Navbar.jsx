import React from "react";
import { Link } from "react-router-dom";

let Navbar = ()=>{
    return (
        <React.Fragment>
            <nav className="navbar navbar-light bg-dark">
                <div className="container">
                    <Link to={'/'} className="navber-brand">
                        <i className="fa fa-mobile text-warning"></i> Contact <span className="text-warning">Manager</span></Link>
                </div>
            </nav>
        </React.Fragment>
    )
}
export default Navbar;