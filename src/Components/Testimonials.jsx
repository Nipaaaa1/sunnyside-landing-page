import emily from "/images/image-emily.jpg";
import thomas from "/images/image-thomas.jpg";
import jennie from "/images/image-jennie.jpg";

const Testimonials = ({ data }) => {
  const testimonialImages = [emily, thomas, jennie];
  const testimonialImagesAlt = ["Emily Image", "Thomas Image", "Jennie Image"];
  return (
    <section className="h-auto w-full px-5 py-10 text-center">
      <h2 className="text-md tracking-testimonial mb-14 font-fraunces uppercase text-grayishBlue">
        Client Testimonials
      </h2>
      <ul className="space-y-14">
        {data.map((data) => (
          <li key={data.id} className="flex flex-col items-center gap-2 px-5">
            <img
              className="size-16 rounded-full"
              src={testimonialImages[data.id]}
              alt={testimonialImagesAlt[data.id]}
            />
            <p className="my-4 font-barlow text-veryDarkGrayishBlue">
              {data.testimonial}
            </p>
            <h3 className="font-fraunces text-lg font-extrabold">
              {data.name}
            </h3>
            <h4 className="font-barlow text-sm text-grayishBlue">
              {data.role}
            </h4>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Testimonials;
