import mobileTransform from "/images/mobile/image-transform.jpg";
import mobileStandOUt from "/images/mobile/image-stand-out.jpg";
import mobileGraphicDesign from "/images/mobile/image-graphic-design.jpg";
import mobilePhotography from "/images/mobile/image-photography.jpg";

import desktopTransform from "/images/desktop/image-transform.jpg";
import desktopStandOUt from "/images/desktop/image-stand-out.jpg";
import desktopGraphicDesign from "/images/desktop/image-graphic-design.jpg";
import desktopPhotography from "/images/desktop/image-photography.jpg";

import data from "./data/data";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Section1 from "./Components/Section1";
import Section2 from "./Components/Section2";
import Testimonials from "./Components/Testimonials";
import Gallery from "./Components/Gallery";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <main className="h-auto w-full">
      <Navbar data={data.navigation} />
      <Hero data={data.hero} />
      <Section1
        image={[mobileTransform, desktopTransform]}
        alt="Transform Image"
        data={data.content[0]}
        colors="bg-yellow"
        order="md:order-last"
      />
      <Section1
        image={[mobileStandOUt, desktopStandOUt]}
        alt="Stand Out Image"
        data={data.content[1]}
        colors="bg-softRed"
        order="md:order-first"
      />
      <section className="md:grid md:grid-cols-2">
        <Section2
          image={[mobileGraphicDesign, desktopGraphicDesign]}
          alt="Graphic Design Image"
          data={data.content[2]}
          colors="text-darkDesaturatedCyan"
        />
        <Section2
          image={[mobilePhotography, desktopPhotography]}
          alt="Photography Image"
          data={data.content[3]}
          colors="text-darkBlue"
        />
      </section>
      <Testimonials data={data.testimonials} />
      <Gallery />
      <Footer />
    </main>
  );
};

export default App;
