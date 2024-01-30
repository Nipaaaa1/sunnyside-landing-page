const Section2 = ({ image, alt, data, colors }) => {
  return (
    <section className="relative">
      <img className="h-max w-full" src={image} alt={alt} />
      <div className="absolute bottom-6 h-auto w-full space-y-6 p-5 text-center">
        <h2 className={`font-fraunces text-3xl font-extrabold ${colors}`}>
          {data.title}
        </h2>
        <p className={`text-balanced font-barlow font-semibold ${colors}`}>
          {data.text}
        </p>
      </div>
    </section>
  );
};

export default Section2;
