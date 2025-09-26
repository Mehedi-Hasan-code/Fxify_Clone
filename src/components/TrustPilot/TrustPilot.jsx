import React from 'react';
import ButtonSecondary from '../common/Buttons/ButtonSecondary';

const TrustPilot = () => {
  return (
    <div className="relative overflow-hidden">
      <div className="max-w-[1440px] w-11/12 mx-auto relative">
        <div className="flex flex-col md:flex-row md:flex-nowrap md:items-center gap-10 md:gap-4">
          {/* left */}
          <div className="flex-1 basis-[100%] md:basis-0 flex flex-col flex-nowrap gap-2">
            {/* top heading */}
            <div className="uppercase text-[#D4F7F1] font-['Source_Code_Pro',monospace] text-[14px] not-italic font-normal leading-[120%] opacity-60">
              What Traders Love
            </div>

            {/* h3 */}
            <h3
              className="w-fit font-sans text-[30px] not-italic font-medium leading-[120%] tracking-[-1.5px] 
              bg-[linear-gradient(120deg,#FFF_44.15%,#1DAA91_87.75%)] bg-clip-text text-transparent"
            >
              Hear From Our Traders
            </h3>

            {/* paragraph */}
            <p className="text-white/60 text-[16px] not-italic font-normal leading-[130%]">
              See what our community has to say about their FXIFY experience.
            </p>
            {/* button */}
            <div>
              <ButtonSecondary label={'All reviews'} />
            </div>
          </div>
          {/* right */}
          <div className="flex-1 basis-[100%] md:basis-0"></div>
        </div>
      </div>
    </div>
  );
};

export default TrustPilot;
