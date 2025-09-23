import React from 'react'
import Marquee from 'react-fast-marquee'

const AddOnsMarquee = () => {
  return (
    <Marquee style={{display: 'flex', gap: '16px'}}>
      <div className='flex grow shrink-0 flex-row flex-nowrap gap-4 pt-[32px]'>
        <div className='flex flex-col flex-nowrap grow shrink-0 basis-[320px] justify-end gap-1 p-4 border border-[#ffffff0d] rounded-[10px] overflow-hidden backdrop-blur-[10px] bg-[#ffffff08]'>
          <div className='flex grow shrink basis-[120px]'>
            <img src="/AddOns/add1.png" className='w-full absolute left-0 top-0' alt="AddOnsPic" />
          </div>
          <div>Increase Leverage</div>
          <div> Amplify your trades with increased leverage of up to 50:1.</div>
        </div>
        
      </div>
    </Marquee>
  )
}

export default AddOnsMarquee