import mobielMilkBottles from "/images/mobile/image-gallery-milkbottles.jpg";
import mobileOrange from "/images/mobile/image-gallery-orange.jpg";
import mobileCone from "/images/mobile/image-gallery-cone.jpg";
import mobileSugarCubes from "/images/mobile/image-gallery-sugar-cubes.jpg";

const Gallery = () => {
  return (
    <section className="grid grid-cols-2">
      <img src={mobielMilkBottles} alt="Milk Bottles Image" />
      <img src={mobileOrange} alt="Orange Image" />
      <img src={mobileCone} alt="Cone Image" />
      <img src={mobileSugarCubes} alt="Sugar Cubes Image" />
    </section>
  );
};

export default Gallery;
