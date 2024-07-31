import React from "react";
import { features } from "../constants/";
import styles, { layout } from "../style.js";
import Button from "./Button";
const FeatureCard = ({ icon, title, content, index }) => (
  <div className={`flex flex-row  rounded-[20px] ${index !== features.length-1 ? 'mb-6':'mb-0'} feature-card`}>
    <div className={`w-[4rem] h-[4rem] rounded-full ${styles.flexCenter} bg-dimBlue`}>
      <img src={icon} alt="icon" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3  text-white">
      <h4 className="font-poppins font-bold text-[1.7rem]">
        {title}
      </h4>
      <p className="font-poppins text-[0.8rem]">
        {content}
      </p>
    </div>
  </div>
);
const Business = () => (
  <section id="features" className={`${layout.section}  xl:px-0 sm:px-16 `}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        You do the business,
        <br className="sm:block hidden" /> we'll handle the money.
      </h2>
      <p className="max-w-[29rem]font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px] ">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias rem
        laudantium quaerat saepe excepturi qui illum quos atque quibusdam.
        Blanditiis illo sequi distinctio minus earum quae, alias id omnis
        quibusdam.
      </p>
      <Button styles="mt-10" text='Get Started.' />
    </div>
    <div className={`${layout.sectionImg} flex-col`}>
      {features.map((feature, index) => (
        <FeatureCard key={feature.id} {...feature} index={index} />
      ))}
    </div>
  </section>
);

export default Business;
