import React from 'react';

const benefits = [
  {
    id: 1,
    image: '/Benefits/bf1.svg',
    title: 'On-Demand Payouts',
    description:
      'Get your first payout whenever you want. Close your first live trade, request your payout and receive it instantly.',
  },
  {
    id: 2,
    image: '/Benefits/bf2.svg',
    title: 'Up to $400,000 Starting Capital',
    description:
      'Choose your preferred account size, ranging from $5,000 to $400,000 starting capital.',
  },
  {
    id: 3,
    image: '/Benefits/bf3.svg',
    title: 'Up to 90% Performance Split',
    description:
      'Keep up to 90% of the trading gains you make from day 1 of your funded accounts.',
  },
  {
    id: 4,
    image: '/Benefits/bf4.svg',
    title: 'Tailored Programs',
    description:
      'We have a program for every trading style, strategy, and preference. Customize at checkout.',
  },
  {
    id: 5,
    image: '/Benefits/bf5.svg',
    title: 'Monthly Trading Competition',
    description:
      'Sign up and join our global monthly competitions to win free challenge accounts.',
  },
  {
    id: 6,
    image: '/Benefits/bf6.svg',
    title: 'Access to Trading Central',
    description:
      'Gain unrestricted access to expert insights, market analysis, and trade ideas.',
  },
];

const Benefits = () => {
  return (
    <section className="max-w-[1440px] w-11/12 mx-auto py-20 md:py-24">
      {/* Heading */}
      <div className="text-center mb-8 md:mb-14">
        <p className="text-[12px] tracking-[0.2em] text-white/60 mb-3">
          BENEFITS
        </p>
        <h2 className="text-[28px] md:text-[36px] lg:text-[40px] leading-[120%] tracking-[-0.02em] font-semibold bg-[linear-gradient(120deg,#FFF_44.15%,#1DAA91_87.75%)] bg-clip-text text-transparent">
          The FXIFY Advantage
        </h2>
        <p className="text-white/60 text-sm md:text-base max-w-[850px] mx-auto mt-3">
          Experience the FXIFY Advantage – on‑demand payouts, flexible funding,
          and tailored programs built to elevate your trading performance.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
        {benefits.map((item) => (
          <div
            key={item.id}
            className="rounded-2xl border border-[#1daa9126] bg-[linear-gradient(180deg,rgba(255,255,255,0.02)_0%,rgba(29,170,145,0.05)_100%)] overflow-hidden hover:border-[#1DAA91]/40 transition-colors"
          >
            <div className="aspect-[16/9] w-full bg-[#0c1117]">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="p-5 md:p-6">
              <h3 className="text-[16px] md:text-[18px] font-semibold text-white mb-2">
                {item.title}
              </h3>
              <p className="text-white/60 text-sm md:text-[15px] leading-[1.6]">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Benefits;
