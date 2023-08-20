import React from "react";
import { Link } from "react-router-dom";
import './comstyle.css'
export function Menu(){
    return (
      <>


        <nav class="navbar navbar-expand-lg navbar-light bg-info">
          <div class="container-fluid">
            <div class="" id="navbarNav">
              <ul class="navbar-nav">
                <Link to="/" className="under">
                  <li class="nav-item1">Home   </li>
                </Link>
                <Link to="/about" className="under">
                  <li class="nav-item2">About <br/>  </li>
                </Link>
                <Link to="/contact" className="under"> 
                  <li className="nav-item3">Contact</li>
                </Link>
              </ul>
            </div>
          </div>
        </nav>
      </>
    );
}