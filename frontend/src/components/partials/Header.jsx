import React from "react";
import "./header.css";
import {Link} from "react-router-dom";


function Header() {
    var user = localStorage.getItem("usernaam");
    var loggedin;
    if(user === null){
        loggedin = false;    
    }
    else loggedin = true;
    

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <p className="navbar-brand">DAILY JOURNAL</p>
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="nav navbar-nav">
                            <li className="nav-item" ><Link className="nav-link" to="/">Home</Link></li>
                            <li className="nav-item" ><Link className="nav-link" to="/blog">Blogs</Link></li>
                            {loggedin ? <li className="nav-item" ><Link className="nav-link" to="/myblog">My Blogs</Link></li>: null}
                            <li className="nav-item" ><Link className="nav-link" to="/compose">Compose</Link></li>
                        </ul>
                        {loggedin ? <ul className="nav navbar-nav ms-auto">
                            <li className="nav-item" ><Link className="nav-link" to="/logout"><button className="btn btn-danger">Logout</button></Link></li>
                        </ul> : <ul className="nav navbar-nav ms-auto">
                            <li className="nav-item" ><Link className="nav-link" to="/signup"><button className="btn btn-danger">Signup</button></Link></li>
                            <li className="nav-item" ><Link className="nav-link" to="/login"><button className="btn btn-warning">Login</button></Link></li>
                        </ul>}
                    </div>
                </div>
            </nav>
        </div>

    );
}

export default Header;