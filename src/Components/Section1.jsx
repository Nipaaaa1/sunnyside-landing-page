const Section1 = ({ image, alt, data, colors, order }) => {
  return (
    <section className="md:grid md:grid-cols-2">
      <img className="h-max w-full md:hidden" src={image[0]} alt={alt} />
      <div className="flex flex-col gap-8 bg-white px-5 py-10 text-center md:px-36 md:text-left">
        <h2 className="font-fraunces text-3xl font-extrabold text-veryDarkDesaturatedBlue md:mt-auto md:w-[80%] md:text-5xl">
          {data.title}
        </h2>
        <p className="text-balanced font-barlow text-lg font-semibold text-veryDarkGrayishBlue md:w-[70%]">
          {data.text}
        </p>
        <div className="group relative mx-auto w-32 md:mx-0 md:mb-auto md:mt-4">
          <a
            className="absolute -bottom-[1px] right-1/2 z-10 w-max translate-x-1/2 font-fraunces font-extrabold uppercase"
            href="/"
          >
            Learn More
          </a>
          <div
            className={`h-2 w-full rounded-full ${colors} opacity-30 transition ease-in-out group-hover:opacity-100`}
          />
        </div>
      </div>
      <img
        className={`hidden h-max w-full md:block ${order}`}
        src={image[1]}
        alt={alt}
      />
    </section>
  );
};

export default Section1;
