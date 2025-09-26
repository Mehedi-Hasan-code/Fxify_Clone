import React from 'react';
import SectionName from '../common/h,p,tags/SectionName';
import SectionTitle from '../common/h,p,tags/SectionTitle';
import SectionDetails from '../common/h,p,tags/SectionDetails';
import { MoveRight } from 'lucide-react';

const Blog = () => {
  return (
    <div className="max-w-[1440px] mx-auto w-11/12">
      <div className=" flex flex-col flex-nowrap items-center gap-2">
        {/* top heading */}
        <div className="flex flex-col gap-2">
          <SectionName label={'Blog'} />
          <div className="flex justify-center">
            <SectionTitle label={'Explore the Latest at FXIFY'} />
          </div>
          <div className="max-w-[90%] sm:max-w-[70%] md:max-w-[40%]  mx-auto">
            <SectionDetails
              label={
                'Stay ahead with the latest FXIFY updates, market insights, and trading guides designed to keep you informed and in control.'
              }
            />
          </div>
        </div>

        {/* blogs */}
        <div className="flex flex-wrap gap-4 my-8">
          {/* blog 1 */}
          <div className="rounded-[10px] border border-white/5 bg-white/3 flex flex-col gap-4 p-3 transition-all duration-700 ease-in-out flex-1 basis-[100%] sm:basis-[45%]">
            {/* image */}
            <div className="flex-[0_1_150px] relative rounded-[16px] overflow-hidden">
              <img
                className="block w-full h-full object-cover object-top"
                src="/Blog/Blog1.jpeg"
                alt="blogs"
              />
            </div>

            {/* Meta */}
            <div className="flex items-center gap-2 opacity-40">
              <div className="text-white text-[12px] font-[500] leading-[120%]">
                September 22, 2025
              </div>
              <div className="h-full w-1 bg-white"></div>
              <div className="text-white text-[12px] font-[500] leading-[120%]">
                6 min read
              </div>
            </div>

            {/* title */}
            <div>
              <span className="text-white text-[16px] font-[600] leading-[110%]">
                Pro Trader’s Secret: Why Journaling Gives You the Real Edge
              </span>
            </div>

            {/* BTN */}
            <div className="mt-auto flex items-center gap-1 transition-all duration-75 ease-in-out">
              <span className="text-[#1DAA91] text-[12px] font-[700] leading-1 transition-all duration-700 ease-in-out">
                Read More
              </span>
              <MoveRight
                size={12}
                className="h-auto transition-all duration-700 ease-in-out"
                color="#1DAA91"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
