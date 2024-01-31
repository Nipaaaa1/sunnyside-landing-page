import arrowDown from "/images/icon-arrow-down.svg";
import mobileHeader from "/images/mobile/image-header.jpg";
import desktopHeader from "/images/desktop/image-header.jpg";

const Hero = ({ data }) => {
  return (
    <section className="relative h-auto w-full">
      <img
        className="h-max w-full md:hidden"
        src={mobileHeader}
        alt="Mobile Header"
      />
      <img
        className="hidden h-max w-full md:block"
        src={desktopHeader}
        alt="Desktop Header"
      />
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-12 p-5 md:gap-36">
        <h1 className="text-center font-fraunces text-4xl font-extrabold uppercase tracking-header text-white md:text-6xl">
          {data.title}
        </h1>
        <img
          className="-mb-8 size-max md:mb-40 md:scale-150"
          src={arrowDown}
          alt="Arrow Down Icon"
        />
      </div>
    </section>
  );
};

export default Hero;
