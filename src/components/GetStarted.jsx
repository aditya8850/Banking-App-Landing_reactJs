import React from 'react'
import { arrowUp } from '../assets'
import styles from '../style.js'

const GetStarted = () => {
  return (
    <div className={`${styles.flexCenter} font-poppins font-semibold w-[5.5rem] h-[5.5rem]  truncate cursor-pointer rounded-full bg-blue-gradient text-white p-[0.1rem] ml-[3rem] `}>
      <div className={`${styles.flexCenter}  bg-zinc-900 rounded-full w-full h-full flex-col  hover:bg-sky-900 `}>
        <div className={`${styles.flexStart} w-[100%] relative top-[-5px] `}>
          <p className='font-medium text-[1.1rem] leading-[23px]  '>
            <span className='text-gradient '>Get</span>
            <img src={arrowUp} alt="arrow" className='w-[1.5rem] h-[1.5rem] object-contain inline ' />
          </p>
        </div>
        <p className='font-medium text-[1.1rem] leading-[10px] sm:relative top-[-5px] '>
          <span className='text-gradient'>Started</span>
        </p>
      </div>

    </div>
  )
}

export default GetStarted