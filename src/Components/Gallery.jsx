import mobileMilkBottles from "/images/mobile/image-gallery-milkbottles.jpg";
import mobileOrange from "/images/mobile/image-gallery-orange.jpg";
import mobileCone from "/images/mobile/image-gallery-cone.jpg";
import mobileSugarCubes from "/images/mobile/image-gallery-sugar-cubes.jpg";
import desktopMilkBottles from "/images/desktop/image-gallery-milkbottles.jpg";
import desktopOrange from "/images/desktop/image-gallery-orange.jpg";
import desktopCone from "/images/desktop/image-gallery-cone.jpg";
import desktopSugarCubes from "/images/desktop/image-gallery-sugarcubes.jpg";

const Gallery = () => {
  return (
    <section className="grid grid-cols-2 md:grid-cols-4">
      <img
        className="md:hidden"
        src={mobileMilkBottles}
        alt="Milk Bottles Image"
      />
      <img className="md:hidden" src={mobileOrange} alt="Orange Image" />
      <img className="md:hidden" src={mobileCone} alt="Cone Image" />
      <img
        className="md:hidden"
        src={mobileSugarCubes}
        alt="Sugar Cubes Image"
      />
      <img
        className="hidden md:block"
        src={desktopMilkBottles}
        alt="Milk Bottles Image"
      />
      <img className="hidden md:block" src={desktopOrange} alt="Orange Image" />
      <img className="hidden md:block" src={desktopCone} alt="Cone Image" />
      <img
        className="hidden md:block"
        src={desktopSugarCubes}
        alt="Sugar Cubes Image"
      />
    </section>
  );
};

export default Gallery;
