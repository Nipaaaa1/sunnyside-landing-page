import { useState } from "react";
import HamburgerMenu from "/images/icon-hamburger.svg";
import Logo from "/logo.svg";

import { motion, AnimatePresence } from "framer-motion";

const menuVariants = {
  closed: {
    scale: 0,
    opacity: 0,
  },
  open: {
    scale: 1,
    opacity: 1,
    transition: {
      delayChildren: 0.15,
      staggerChildren: 0.07,
    },
  },
};

const Navbar = ({ data }) => {
  const [menu, setMenu] = useState(false);

  const handleClick = () => {
    setMenu(!menu);
  };
  return (
    <nav className="absolute z-20 flex h-auto w-full items-center justify-between p-5">
      <img className="h-6 w-max" src={Logo} alt="Logo" />
      <button onClick={handleClick}>
        <img className="h-4 w-max" src={HamburgerMenu} alt="Hamburger Menu" />
      </button>
      <AnimatePresence>
        {menu && (
          <motion.ul
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="absolute left-5 right-5 top-28 flex h-auto origin-top-right flex-col items-center gap-8 bg-white p-8 font-barlow text-lg text-grayishBlue"
          >
            <svg
              className="absolute -top-3 right-0 -rotate-90 scale-[1.20] fill-white"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M24 22h-24l12-20z" />
            </svg>
            {data.map((data) => {
              if (data.id == 3) {
                return (
                  <motion.li
                    variants={menuVariants}
                    className="rounded-full bg-yellow px-8 py-4 font-fraunces uppercase text-veryDarkDesaturatedBlue"
                    key={data.id}
                  >
                    <a href="/">{data.title}</a>
                  </motion.li>
                );
              } else {
                return (
                  <motion.li variants={menuVariants} key={data.id}>
                    <a href="/">{data.title}</a>
                  </motion.li>
                );
              }
            })}
          </motion.ul>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
