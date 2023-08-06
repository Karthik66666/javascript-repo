import React from "react";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock } from "@fortawesome/free-solid-svg-icons";
export function Login(){
    return(
     <>
      <div class="card mb-3">
  <div class="row g-0">
    <div class="col-md-4">
      <img src="https://www.nasa.gov/sites/default/files/styles/side_image/public/thumbnails/image/nasa-logo-web-rgb.png?itok=uDhKSTb1" class="img-fluid rounded-start" alt="..."/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <span className="eNov"><FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon></span>
        <input type="text" placeholder="     Email"/>
        <br/>
        <span className="eNov"><FontAwesomeIcon icon={faLock}></FontAwesomeIcon></span>
        <input type="text" placeholder="     Passworld"/>
      </div>
    </div>
  </div>
</div>
     </>
    );
}