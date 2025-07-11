import { assets } from '@/assets/assets'
import React from 'react'
import Image from 'next/image'

function Footer() {
  return (
    <div className='flex justify-around flex-col gap-2 sm:gap-0 sm:flex-row items-center py-2 bg-gradient-to-br from-green-100 to-blue-300'>
        <Image src={assets.logo} alt='' width={120}/>
        <p className='text-sm text-black'>All right reserved.Copyright @PenPulse</p>
        <div className="flex">
            <Image src={assets.facebook_icon} alt='' width={40}/>
            <Image src={assets.twitter_icon} alt='' width={40}/>
            <Image src={assets.googleplus_icon} alt='' width={40}/>
        </div>

      
    </div>
  )
}

export default Footer
