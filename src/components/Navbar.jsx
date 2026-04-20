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
    <nav className="fixed top-0 z-50 flex flex-wrap items-center justify-between w-full px-8 py-6 transition duration-300 ease-in-out bg-white shadow lg:px-10">
      {/* Logo Container */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.0, ease: "easeOut", delay: 0.2 }}
      >
        <NavLink
          to="/"
          className="flex items-center gap-2 hover:cursor-pointer"
        >
          <span className="w-full text-2xl text-green-500 dm-extrabold">
            Verbalify
          </span>
        </NavLink>
      </motion.div>

      {/* Hamburger Menu */}
      <button
        type="button"
        onClick={toggleOpen}
        className="relative flex flex-col items-center w-8 h-5 gap-2 lg:hidden"
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
        <ul className="flex flex-col items-center justify-center w-full gap-5 list-none">
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
                    `sora-regular text-2xl relative hover:text-green-500 transition duration-300 ease-in-out ${isActive ? "text-green-500" : "text-slate-950"}`
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
          initial={{ opacity: 0, y: 20 }}
          animate={hasOpened ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 1.0, ease: "easeOut", delay: 0.3 }}
          onClick={() => setMenuOpen(false)}
          className="py-2.5 px-4 dm-medium bg-green-500 text-white text-lg rounded-sm transition duration-300 ease-in-out relative  hover:text-slate-950 hover:shadow-md hover:cursor-pointer"
        >
          <NavLink to="/contact">Get Started</NavLink>
        </motion.div>
      </div>

      {/* Desktop Links */}
      <ul className="items-center hidden gap-4 list-none lg:flex">
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
                  `sora-regular text-base relative hover:text-green-500 transition duration-300 ease-in-out ${isActive ? "text-green-500" : "text-slate-950"}`
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
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.0, ease: "easeOut" }}
        className="relative hidden px-4 py-2 text-white transition duration-300 ease-in-out bg-green-500 rounded-sm lg:block dm-medium  hover:text-slate-950 hover:shadow-md hover:cursor-pointer"
      >
        <NavLink to="/contact">Get Started</NavLink>
      </motion.div>
    </nav>
  );
};

export default Navbar;
