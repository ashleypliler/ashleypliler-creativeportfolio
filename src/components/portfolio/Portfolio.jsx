import React from "react";
import styles from "./Portfolio.module.css";
import pic1 from "../../images/glitzz1.JPG";
import pic5 from "../../images/onoyo1.JPG";
import pic3 from "../../images/lennon.JPG";
import pic4 from "../../images/cookies.JPG";
import pic2 from "../../images/golden-hat.png";
import pic6 from "../../images/thrivePizza.png";
import pic9 from "../../images/logo18.png";
import pic11 from "../../images/PrimeIVFlyer.png";
import pic10 from "../../images/tiffpic.JPG";
import pic12 from "../../images/kenna.jpg";
import Video from "../video/Video";
import Video1 from "../video 2/Video";


export const Portfolio = () => {
  return (
    <div className={styles.portfolio}>
    Photography, Web Development, Graphic Design, UX/UI Design, Videography{" "}
    <div className={styles.container}>
    <img src={pic1} alt='pic' height='500px' width='300px'></img>
    <img src={pic2} alt='pic' height='300px' width='500px'></img>
    <img src={pic11} alt='pic' height='500px' width='300px'></img>
    <Video  height='300px' width='500px'></Video>
      <img src={pic10} alt='pic' height='500px' width='300px'></img>
      <img src={pic3} alt='pic' height='500px' width='300px'></img>
      <Video1 height='300px' width='500px'></Video1> 
      <img src={pic6} alt='pic' height='300px' width='500px'></img>
        <img src={pic5} alt='pic' height='500px' width='300px'></img>
        <img src={pic9} alt='pic' height='500px' width='300px'></img>
        <img src={pic4} alt='pic' height='500px' width='300px'></img>
        <img src={pic12} alt='pic' height='500px' width='300px'></img>
      </div>
    </div>
  );
};
