import arrowDown from "/images/icon-arrow-down.svg";
import mobileHeader from "/images/mobile/image-header.jpg";

const Hero = () => {
  return (
    <section className="relative h-auto w-full">
      <img src={mobileHeader} alt="Mobile Header" />
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-12 p-5">
        <h1 className="tracking-header text-center font-fraunces text-4xl font-extrabold uppercase text-white">
          We are creatives
        </h1>
        <img className="-mb-8 size-max" src={arrowDown} alt="Arrow Down Icon" />
      </div>
    </section>
  );
};

export default Hero;
