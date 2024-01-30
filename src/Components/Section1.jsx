const Section1 = ({ image, alt, data, colors }) => {
  return (
    <section>
      <img className="h-max w-full" src={image} alt={alt} />
      <div className="space-y-8 bg-white px-5 py-10 text-center">
        <h2 className="font-fraunces text-3xl font-extrabold text-veryDarkDesaturatedBlue">
          {data.title}
        </h2>
        <p className="text-balanced font-barlow text-lg font-semibold text-veryDarkGrayishBlue">
          {data.text}
        </p>
        <div className="relative mx-auto w-32">
          <a
            className="absolute -bottom-[1px] right-1/2 z-10 w-max translate-x-1/2 font-fraunces font-extrabold uppercase"
            href="/"
          >
            Learn More
          </a>
          <div className={`h-2 w-full rounded-full ${colors} opacity-30`} />
        </div>
      </div>
    </section>
  );
};

export default Section1;
