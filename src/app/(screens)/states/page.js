"use client";
import { useState } from "react";
import "../../../../public/sass/pages/states.scss";
import Imgzero from "../../../../public/images/profile.jpg"
import Image from "next/image";

function States() {
  // const state = useState()
  const [count, setCount] = useState(1);
  const [active, setActive] = useState("show");
  const [showmore, setShowmore] = useState(false)

  const incNum = () => {
    setCount(count + 1);
  };

  const decNum = () => {
    if (count<=1) {
        setCount(0)
    } 
    else{
        setCount(count-1)
    }
    
  };
  let resEt = () =>{
    setCount(0)
  }

  let value = 10;
  const updateVal = () => {
    value = value + 1;
    console.log(value);
  };
  const classChange = (events) => {
    setActive("show" === active ? "hide" : "show");
  };

  let data = {
    fisrtname: "jaskirat",
    age: 15,
  };

  console.log("my name is", data.fisrtname);
  console.log("my name is", data["age"]);
  console.log(`my name is ${data.fisrtname} and my age is ${data.age}`);
  const text = "jshadskhyfciueuiuueaviouiuuriouiyroiwvuiyawiuckusyilafkuu igfleklar uyueilufjlbig erilhiuo klejilashg;oi8wu ii ew oifuweiluuwi failkjshadskhyfciueuiuueaviouiuuriouiyroiwvuiyawiuckusyilafkuu igfleklar uyueilufjlbig erilhiuo klejilashg;oi8wu ii ew oifuweiluuwi fail"

  return (
    <>
      <h1 className={active} onClick={classChange}>
        {value}
      </h1>
      <button onClick={updateVal}>updaye {value}</button>
      <section className="states">
        <h3>{count}</h3>
        <button onClick={decNum}>-Click me</button>
        <button onClick={incNum}>+Click me</button>
        <button onClick={resEt}>Reaset</button>
        </section>
        <div className="cards">
            <div className="img_area">
            <Image src={Imgzero} height="auto" width="auto"/>
            </div>
            <h3>Heading</h3>
            <p>
                {showmore ? text : text.substring(0 , 100)}
                </p>
            <button className="button" onClick={() =>{setShowmore(!showmore)}}>Read more</button>
        </div>
      
    </>
  );
}
export default States;
