import React from 'react'
import { features } from '../constants/'
import styles,{layout} from '../style'
import Button from './Button'
const Business = () =>  (
    <section id='features' className={`${layout.section}  xl:px-0 sm:px-16 px-6` }>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>You do the business,<br className='sm:block hidden' /> we'll handle the money.</h2>
        <p className='max-w-[29rem] text-white'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias rem laudantium quaerat saepe excepturi qui illum quos atque quibusdam. Blanditiis illo sequi distinctio minus earum quae, alias id omnis quibusdam.</p>
        <Button styles='mt-10'/>
      </div>
    </section>
  )


export default Business