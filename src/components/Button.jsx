import React, { useRef } from "react";
import styles from "../style";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const Button = ({ styles }) => {
  const buttonRef = useRef(null);
  // Initialize GSAP animation and ScrollTrigger
  const initializeGsap = () => {
    if (buttonRef.current) {
      gsap.fromTo(
        buttonRef.current,
        { x: -300, opacity: 0 }, // Start position and opacity
        {
          x: 0,
          opacity: 1,
          duration: 1, // Duration should be in the final state
          ease: "power2.out",
          scrollTrigger: {
            trigger: buttonRef.current,
            start: "top 85%", // When the top of the trigger element reaches 85% of the viewport height
            end: "top 95%", // When the top of the trigger element reaches 100% of the viewport height
            scrub: 3, // Smoothly syncs the animation with the scroll position
          },
        }
      );
    }
  };

  // Ensure GSAP initialization runs only once

  initializeGsap();

  return (
    <button
      ref={buttonRef}
      type="button"
      id="button-gsap"
      className={` py-4 px-6 bg-blue-gradient font-poppins text-primary outline-none font-medium text-[1.1rem] ${styles} rounded`}
    >
      Get Started{" "}
    </button>
  );
};

export default Button;
