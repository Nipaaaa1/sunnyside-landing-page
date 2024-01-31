const Section2 = ({ image, alt, data, colors }) => {
  return (
    <section className="relative flex justify-center">
      <img className="h-max w-full md:hidden" src={image[0]} alt={alt} />
      <img className="hidden h-max w-full md:block" src={image[1]} alt={alt} />
      <div className="absolute bottom-6 h-auto w-full space-y-6 p-5 text-center md:bottom-20 md:w-[45%] md:space-y-10 md:text-lg">
        <h2
          className={`font-fraunces text-3xl font-extrabold md:text-4xl ${colors}`}
        >
          {data.title}
        </h2>
        <p
          className={`text-balanced font-barlow font-semibold md:text-lg ${colors}`}
        >
          {data.text}
        </p>
      </div>
    </section>
  );
};

export default Section2;
