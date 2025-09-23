import React from 'react';
import TextSection from './TextSection';
import AddOnsMarquee from './AddOnsMarquee';

const AddOns = () => {
  return (
    <div className="bg-[url('AddOns/stars.svg'),url('AddOns/addonsbgpng.png'),radial-gradient(120.62%_103.22%_at_50%_0px,rgba(14,16,23,0)_0%,rgba(17,45,46,0.5)_68.07%,rgba(29,170,145,0.6)_100%)] bg-no-repeat bg-cover min-h-24 max-w-[1440px] mx-auto w-11/12 border border-[#1daa9126] rounded-[25px]"
    >
      <div className='py-[96px]'>
        {/* text section */}
        <TextSection />
        {/* marquee section */}
        <AddOnsMarquee />
      </div>
    </div>
  );
};

export default AddOns;
