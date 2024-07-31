import React from "react";
import { apple, bill, google } from "../assets";
import styles, { layout } from "../style.js";
const Billing = (props) => (
  <section id="product" className={`${layout.sectionReverse} `}>
    <div className={layout.sectionImgReverse}>
      <img src={bill} alt="bill" className="w-[100%] h-[100%] relative z-[5]" />
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full pink__gradient" />
      <div className="absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full blue__gradient " />
    </div>
    <div className={layout.sectionInfo}>
      <h2 className={`${styles.heading2} max-w-[29rem] `}>
        Easily Control your <br className="sm:block hidden" /> billing &
        invoicing.
      </h2>
      <p className={`${styles.paragraph} max-w-[29rem] `}>
        Lorem higaf dhsdfjigisdfsd ijgsdf ijsdd fijsdfg ijgbsdfigbgsd fbdf sdij
        fbjsdbf jb. Tjjkbns sdfgkonsdf sdf okhsdfkoj sjdbf jbsid fjosdb jsbd
        ijsbd fjbsd.
      </p>
      <div className="flex flow-row sm:mt-10 mt-6">
        <img src={apple} alt="google_play" className="w-[8rem] h-[2.6rem] mr-6 object-cover cursor-pointer"/>
        <img src={google} alt="google_play" className="w-[8rem] h-[2.6rem] object-cover cursor-pointer"/>
      </div>
    </div>
  </section>
);

export default Billing;
