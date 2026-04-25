import { Link } from "react-router-dom";
import { motion } from "motion/react";
motion;

const NotFound = () => {
  return (
    <>
      <section className="bg-green-500 min-h-screen flex justify-center items-center pt-24 overflow-hidden">
        <div className="flex flex-col items-center gap-5">
          {/* Text Container */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="w-full text-center sora-bold text-white text-5xl"
          >
            Error 404
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
            className="w-full text-center text-white sora-semibold text-2xl"
          >
            Page Not Found :(
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.8 }}
            className="lg:w-full text-center text-white text-lg dm-regular text-balance w-[90%] mx-auto"
          >
            Looks like this page took a wrong turn. Don't worry, we'll help you
            find your way back.
          </motion.p>
          <Link to="/">
            <motion.button
              type="button"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 1.0 }}
              className="bg-white py-3 px-4 rounded-md text-green-500 sora-bold hover:cursor-pointer hover:bg-slate-950 transition-colors duration-300"
            >
              Back to Home
            </motion.button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default NotFound;
