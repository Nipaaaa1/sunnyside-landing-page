import HamburgerMenu from "/images/icon-hamburger.svg";
import Logo from "/logo.svg";

const Navbar = ({ data }) => {
  return (
    <nav className="absolute z-20 flex h-auto w-full items-center justify-between p-5">
      <img className="h-6 w-max" src={Logo} alt="Logo" />
      <button>
        <img className="h-4 w-max" src={HamburgerMenu} alt="Hamburger Menu" />
      </button>
    </nav>
  );
};

export default Navbar;
