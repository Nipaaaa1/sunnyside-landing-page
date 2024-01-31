import emily from "/images/image-emily.jpg";
import thomas from "/images/image-thomas.jpg";
import jennie from "/images/image-jennie.jpg";

const Testimonials = ({ data }) => {
  const testimonialImages = [emily, thomas, jennie];
  const testimonialImagesAlt = ["Emily Image", "Thomas Image", "Jennie Image"];
  return (
    <section className="h-auto w-full px-5 py-10 text-center md:py-48">
      <h2 className="text-md mb-14 font-fraunces uppercase tracking-testimonial text-grayishBlue md:mb-24 md:text-xl">
        Client Testimonials
      </h2>
      <ul className="flex flex-col gap-16 md:mx-auto md:w-[65%] md:flex-row md:text-balance">
        {data.map((data) => (
          <li
            key={data.id}
            className="flex flex-col items-center gap-2 px-5 md:gap-10 md:text-lg"
          >
            <img
              className="size-16 rounded-full"
              src={testimonialImages[data.id]}
              alt={testimonialImagesAlt[data.id]}
            />
            <p className="my-4 font-barlow text-veryDarkGrayishBlue">
              {data.testimonial}
            </p>
            <h3 className="font-fraunces text-lg font-extrabold md:text-xl">
              {data.name}
            </h3>
            <h4 className="md:text-md font-barlow text-sm text-grayishBlue md:-mt-8">
              {data.role}
            </h4>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Testimonials;
