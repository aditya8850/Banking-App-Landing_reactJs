import React from "react";
import { discount, robot } from "../assets";
import { GetStarted } from "../components/index";
import styles from "../style";
const Hero = () => (
  <section
    id="home"
    className={`flex md:flex-row flex-col ${styles.paddingY} md:py-5  width-{100vw} `}
  >
    <div
      className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
    >
      <div className="flex flex-row items-center py-[6px] pr-4  justify-center bg-discount-gradient rounded-[10px]   ">
        <img
          src={discount}
          alt="discount"
          className="w-[43px] h-[43px] lg:w-[4rem] "
        />
        <span className="text-white mr-2 font-semibold ">20% </span>
        <span className="text-gray-400"> Discount For </span>
        <span className="text-white ml-2 font-semibold">1 Month </span>
      </div>
      <div className="flex flex-row justify-between items-center w-full mt-0">
        <h1 className="font-poppins font-semibold text-white w-full ss:text-[72px] text-[35px] ss:leading-[90px] leading-[3rem] md:text-left">
          <span className="block">The Next</span>
          <span className="block text-white text-gradient">Generation</span>
          {/* <span className='block text-gray-400'>
            Payment Method.
          </span> */}
        </h1>
        <div className="flex lg:mr-50  ">
          <GetStarted />
        </div>
      </div>
      <h1 className=" font-poppins font-semibold text-white md:w-[136%]  ss:text-[72px] text-[35px] ss:leading-[90px] leading-[3rem]  ">
        Payment Method.
      </h1>
      <p className={`${styles.paragraph} max-w-[45rem] mt-5`}>
        Our Team of experts uses a methodology to idenitfy the credit cards most
        likely to fit your needs. We examine annual percentage rate,annual fees
        etc.
      </p>
    </div>
    <div className="relative ">
      <img
        src={robot}
        alt="billing"
        className="w-[100%] h-[100%] relative object-contain z-[5]
        "
      />
      <div className=" pink__gradient  absolute  w-[17rem] h-[66%] top-[6rem] left-[7rem] z-[0]" />
      <div className="white__gradient absolute bottom-40 w-[22rem] h-full z-[1]" />
      <div className="blue__gradient absolute  top-0 right-20 bottom-20 w-[10rem]  h-full z-[0]" />
    </div>
  </section>
);

export default Hero;
