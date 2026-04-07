import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
motion;

const navLinks = [
  {
    id: 1,
    label: "Home",
    to: "/",
  },
  {
    id: 2,
    label: "Features",
    to: "/features",
  },
  {
    id: 3,
    label: "Pricing",
    to: "/pricing",
  },
  {
    id: 4,
    label: "About",
    to: "/about",
  },
  {
    id: 5,
    label: "Contact",
    to: "/contact",
  },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  // Animation Toggling
  const [hasOpened, setHasOpened] = useState(false);

  const toggleOpen = () => {
    if (!hasOpened) setHasOpened(true);
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [menuOpen]);

  return (
    <>
      <nav className="fixed w-full top-0 flex justify-between flex-wrap items-center py-6 px-8 lg:px-10  z-50 border-b transition duration-300 ease-in-out bg-white border-gray-200">
        {/* Logo Container */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          <NavLink
            to="/"
            className="flex gap-2 items-center hover:cursor-pointer"
          >
            <span className="text-2xl dm-extrabold text-green-500 w-full">
              Verbalify
            </span>
          </NavLink>
        </motion.div>

        {/* Hamburger Menu */}
        <button
          type="button"
          onClick={toggleOpen}
          className="relative flex items-center lg:hidden flex-col gap-2 h-5 w-8"
        >
          <span
            className={`absolute h-0.75 w-8 bg-green-500 rounded-full transition duration-300 ease-in-out  ${menuOpen ? "rotate-45 top-2" : "top-0"}`}
          ></span>
          <span
            className={`absolute top-2 h-0.75 w-8 bg-green-500 rounded-full transition duration-300 ease-in-out  ${menuOpen ? "opacity-0" : ""}`}
          ></span>
          <span
            className={`absolute h-0.75 w-8 bg-green-500 rounded-full  transition duration-300 ease-in-out ${menuOpen ? "-rotate-45 top-2" : "top-4"}`}
          ></span>
        </button>

        {/* Menu Mobile Dropdown */}
        <div
          className={`h-screen ${menuOpen ? "flex" : "hidden"} lg:hidden w-full flex-col items-center -mt-20 justify-center gap-7 transition duration-300 ease-in-out`}
        >
          <ul className="flex flex-col items-center justify-center gap-5 list-none w-full">
            {navLinks.map((link) => (
              <li key={link.id}>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={hasOpened ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
                  onClick={() => setMenuOpen(false)}
                >
                  <NavLink
                    to={link.to}
                    className={({ isActive }) =>
                      `sora-regular text-3xl relative hover:text-green-500 transition duration-300 ease-in-out ${isActive ? "text-green-500" : "text-black"}`
                    }
                  >
                    {link.label}
                  </NavLink>
                </motion.div>
              </li>
            ))}
          </ul>

          {/* Get Started Mobile Button */}
          <motion.div
            type="button"
            initial={{ opacity: 0 }}
            animate={hasOpened ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            onClick={() => setMenuOpen(false)}
            className="py-2.5 px-4 sora-regular bg-green-500 text-white text-lg rounded-sm transition duration-300 ease-in-out relative hover:bg-green-500/80 hover:cursor-pointer"
          >
            <NavLink to="/contact">Get Started</NavLink>
          </motion.div>
        </div>

        {/* Desktop Links */}
        <ul className="hidden lg:flex items-center gap-4 list-none">
          {navLinks.map((link) => (
            <li key={link.id}>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
              >
                <NavLink
                  to={link.to}
                  className={({ isActive }) =>
                    `sora-regular text-lg relative hover:text-green-500 transition duration-300 ease-in-out ${isActive ? "text-green-500" : "text-black"}`
                  }
                >
                  {link.label}
                </NavLink>
              </motion.div>
            </li>
          ))}
        </ul>

        {/* Get Started Desktop Button */}
        <motion.div
          type="button"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          className="hidden lg:block py-2 px-4 sora-regular bg-green-500 text-white rounded-sm transition duration-300 ease-in-out relative hover:bg-green-500/80 hover:cursor-pointer"
        >
          <NavLink to="/contact">Get Started</NavLink>
        </motion.div>
      </nav>
    </>
  );
};

export default Navbar;
