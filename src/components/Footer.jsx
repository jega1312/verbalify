import { SlSocialLinkedin, SlEnvolope, SlGlobe } from "react-icons/sl";
import { FiGithub } from "react-icons/fi";
import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { NavLink } from "react-router-dom";
motion;

const productLinks = [
  { id: 1, label: "Features", to: "/features" },
  { id: 2, label: "Plans", to: "/plans" },
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
    target: "_blank",
    rel: "noopener noreferrer",
  },
];

// Mapped Elements Animation
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 1.0, ease: "easeOut" },
  },
};

const socialContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const socialItemVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 1.0, ease: "easeOut" },
  },
};

const Footer = () => {
  // Start Animation When Visible
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <footer className="relative z-40 flex flex-col items-center w-full gap-10 bg-white border-t border-slate-200">
      <div className="w-[90%] mx-auto py-3">
        {/* Link Container */}
        <div
          ref={ref}
          className="grid grid-cols-1 py-12 gap-7 lg:gap-0 lg:grid-cols-4 place-items-start"
        >
          {/* Logo Container */}
          <div className="flex flex-col items-start gap-3">
            <NavLink
              className="flex items-center gap-2 hover:cursor-pointer"
              to="/"
            >
              <motion.span
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                className="w-full text-2xl text-green-500 dm-bold"
              >
                Verbalify
              </motion.span>
            </NavLink>
            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
              className="text-sm text-slate-950 sora-medium text-balance"
            >
              Language learning, beautifully simplified
            </motion.p>
          </div>
          {/* Product Links Container */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="flex flex-col items-start gap-3"
          >
            <motion.h3
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
              className="text-lg text-slate-950 sora-medium"
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
                      `text-sm sora-regular hover:text-green-500 transition duration-300 ease-in-out hover:cursor-pointer ${isActive ? "text-green-500" : "text-slate-500"}`
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
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="flex flex-col items-start gap-3"
          >
            <motion.h3
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
              className="text-lg text-slate-950 sora-medium"
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
                      `text-sm sora-regular hover:text-green-500 transition duration-300 ease-in-out hover:cursor-pointer ${isActive ? "text-green-500" : "text-slate-500"}`
                    }
                  >
                    {company.label}
                  </NavLink>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Social Buttons */}
          <div className="flex flex-col items-start gap-3">
            <motion.h3
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
              className="text-lg text-slate-950 sora-medium"
            >
              Follow Us
            </motion.h3>
            <motion.div
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
                  className="flex items-center justify-center transition duration-300 ease-in-out bg-transparent rounded-lg"
                >
                  <span className="text-slate-950 transition duration-300 ease-in-out hover:text-green-500">
                    {social.icon}
                  </span>
                </motion.a>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Footer Below */}
        <div className="flex flex-col items-center justify-center w-full py-10 border-t border-slate-200 gap-7 lg:gap-0 lg:flex-row">
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="text-base text-slate-950 dm-medium"
          >
            © 2026 Verbalify. All rights reserved.
          </motion.p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
