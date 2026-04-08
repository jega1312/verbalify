import { SlSocialLinkedin, SlEnvolope, SlGlobe } from "react-icons/sl";
import { FiGithub } from "react-icons/fi";
import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { NavLink } from "react-router-dom";
motion;

const productLinks = [
  { id: 1, label: "Features", to: "/features" },
  { id: 2, label: "Pricing", to: "/pricing" },
];

const companyLinks = [
  { id: 1, label: "About", to: "/about" },
  { id: 2, label: "Contact", to: "/contact" },
];

const socialLinks = [
  {
    id: 1,
    href: "https://jega1312.github.io/portfolio/",
    icon: <SlGlobe size={20} />,
    target: "_blank",
    rel: "noopener noreferrer",
  },
  {
    id: 2,
    href: "https://github.com/jega1312",
    icon: <FiGithub size={20} />,
    target: "_blank",
    rel: "noopener noreferrer",
  },
  {
    id: 3,
    href: "https://www.linkedin.com/in/jegathiswaran-thiaghu/",
    icon: <SlSocialLinkedin size={20} />,
    target: "_blank",
    rel: "noopener noreferrer",
  },
  {
    id: 4,
    href: "mailto:jegathiaghu@gmail.com?subject=Hello%20from%20ResumeIQ",
    icon: <SlEnvolope size={20} />,
  },
];

// Mapped Elements Animation
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const socialContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.4,
    },
  },
};

const socialItemVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const Footer = () => {
  // Start Animation When Visible
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <footer className="w-full border-t border-gray-200 bg-white flex flex-col gap-10 items-center">
      <div className="w-[90%] mx-auto py-3">
        {/* Link Container */}
        <div className="grid grid-cols-1 gap-7 lg:gap-0 lg:grid-cols-4 place-items-start py-14">
          {/* Logo Container */}
          <div className="flex flex-col gap-3 items-start">
            <NavLink
              className="flex gap-2 items-center hover:cursor-pointer"
              to="/"
            >
              <motion.span
                ref={ref}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                className="text-2xl dm-bold text-green-500 w-full"
              >
                Verbalify
              </motion.span>
            </NavLink>
            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
              className="text-sm text-black sora-medium text-balance"
            >
              Language learning, beautifully simplified.
            </motion.p>
          </div>
          {/* Product Links Container */}
          <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="flex flex-col items-start gap-3"
          >
            <motion.h3
              ref={ref}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
              className="sora-medium text-lg text-black"
            >
              Product
            </motion.h3>
            <motion.ul className="flex flex-col items-start gap-2">
              {productLinks.map((product) => (
                <motion.li
                  key={product.id}
                  variants={itemVariants}
                  className="group"
                >
                  <NavLink
                    to={product.to}
                    className={({ isActive }) =>
                      `text-sm sora-light hover:text-green-500 transition duration-300 ease-in-out hover:cursor-pointer ${isActive ? "text-green-500" : "text-gray-500"}`
                    }
                  >
                    {product.label}
                  </NavLink>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Company Links Container */}
          <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="flex flex-col items-start gap-3"
          >
            <motion.h3
              ref={ref}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
              className="sora-medium text-lg text-black"
            >
              Company
            </motion.h3>
            <motion.ul className="flex flex-col items-start gap-2">
              {companyLinks.map((company) => (
                <motion.li
                  key={company.id}
                  variants={itemVariants}
                  className="group"
                >
                  <NavLink
                    to={company.to}
                    className={({ isActive }) =>
                      `text-sm sora-light hover:text-green-500 transition duration-300 ease-in-out hover:cursor-pointer ${isActive ? "text-green-500" : "text-gray-500"}`
                    }
                  >
                    {company.label}
                  </NavLink>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Social Buttons */}
          <div className="flex flex-col gap-3 items-start">
            <motion.h3
              ref={ref}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
              className="sora-medium text-lg text-black"
            >
              Follow Us
            </motion.h3>
            <motion.div
              ref={ref}
              variants={socialContainerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="flex gap-7"
            >
              {socialLinks.map((social) => (
                <motion.a
                  key={social.id}
                  href={social.href}
                  target={social.target}
                  rel={social.rel}
                  variants={socialItemVariants}
                  className="bg-transparent rounded-lg flex justify-center items-center transition duration-300 ease-in-out"
                >
                  <span className="text-black hover:text-green-500 transition duration-300 ease-in-out">
                    {social.icon}
                  </span>
                </motion.a>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Footer Below */}
        <div className="w-full border-t border-gray-200 flex flex-col gap-7 lg:gap-0 lg:flex-row justify-center items-center py-10">
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="text-sm text-black sora-regular"
          >
            © 2026 Verbalify. All rights reserved.
          </motion.p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
