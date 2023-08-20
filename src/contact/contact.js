import React, { useState } from "react";
import { Menu } from "../componets/components";
import './contact.css';
import mango from './pngegg (3) - Copy.png';
import banana from './pngegg (4).png';
export function Contact(){
    const[mangos,setmango]=useState(0);
    const[bananas,setbanana]=useState(0);

    return(
        <>
        <Menu/>
        {/* <div className="bg-warning p-5 back"> */}
            <div className="bg-white container">
                <h1 className="text-center">karthik ate {mangos}Mangoes {bananas}Bananas</h1>
                <div className="">
                <img src={mango} className="col-lg-6" />
                <img src={banana} className="col-lg-6"/>
                </div> 
                    <div className="d-flex justify-content-around">
                    <button type="button" className="btn btn-warning" onClick={()=>{setmango(mangos+1)}}>Eat Mango</button>
                    <button type="button" className="btn btn-success" onClick={()=>{setbanana(bananas+4)}}>Eat Bananas</button>                  
                    </div>  
            </div>
        {/* </div> */}

        <h1>Create your Own Website with us</h1>
        <h3>For contact</h3>
        <a>karthikeyan@protonmail.com</a>
        </>
    );
}