import React from "react";
import { stats } from "../constants";
import styles from "../style.js";
const Stats = () => (
  <section className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mt-7 mb-8 w-[100%]`}>
    {stats.map((stat) => {
      return (
        <div key={stat.id} className={` w-[75%] flex md:flex-1 md:justify-evenly justify-center items-center font-poppins md:flex-row flex-column `}>
          <h4 className="font-poppins font-semibold xs:text-[2.2rem] text-[2rem] xs:leading-[3.2rem] leading-[2.8rem] text-white  md:w-[50%] md:ml-[3.7rem]">{stat.value} </h4>
          <p className="font-poppins  font-normal xs:text-[1.4rem] text-[1rem] xs:leading-[1.2rem] leading-[2.6rem] text-gradient  md:ml-[-2.4rem] md:w-[40%] ml-[0.7rem] w-full">{stat.title} </p>
        </div>
      );
    })}
  </section>
);

export default Stats;
