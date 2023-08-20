import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Menu } from "../components";
import "./about.css";
function Main() {
  function Submit() {
    let user = document.getElementById("user").value;
    let degree = document.getElementById("degree").value;
    let data = user + degree;
    localStorage.setItem("data", JSON.stringify(data));
    alert("your data is submited");
  }

  // function View(){
  //   console.log("Clicked")
  //    let data=JSON.parse(localStorage.getItem("data"));
  //    if (data){
  //        console.log(data)
  //     }
  // }
  const [data, setData] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("data"));
    console.log(data);
    if (data) {
      setData(data);
    }
  }, [data]);
  return (
    <>
      <Menu />
      <div className="from">
        <label>User Name</label>
        <input
          type="text"
          placeholder="UserName"
          name="uesrname"
          id="user"
        />
        <br /> 
        <label>Qualification</label>
        <input
          type="text"
          placeholder="degree"
          name="qualification"
          id="degree"
        />
      </div>
      <button onClick={() => Submit()}>Submit</button>
      <button onClick={() => setData(data)}>View</button>
      {data.map((a) => {
        <h1>{data}</h1>;
      })}
      {/* <h1>{data}haii</h1> */}
    </>
  );
}

export default Main;
