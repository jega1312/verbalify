import { useRef } from "react";
import { motion, useInView } from "motion/react";
motion;

const Pricing = () => {
  // Heading
  const headingRef = useRef(null);
  const headingInView = useInView(headingRef, {
    once: true,
    amount: 0.3,
  });

  // CTA
  const ctaRef = useRef(null);
  const ctaInView = useInView(ctaRef, { once: true, amount: 0.3 });

  return (
    <>
      {/* Header Section Starts */}
      <section className="w-full pb-20 bg-green-200 pt-44">
        {/* Section Heading */}
        <div className="flex flex-col items-center w-[90%] md:w-full mx-auto gap-10">
          <div className="flex flex-col gap-5">
            <motion.h1
              ref={headingRef}
              initial={{ opacity: 0, y: -20 }}
              animate={headingInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1.0, ease: "easeOut" }}
              className="text-3xl text-center text-slate-950 mx-auto w-[90%] md:text-4xl lg:text-5xl dm-bold text-balance"
            >
              Simple, transparent pricing
            </motion.h1>
            <motion.p
              ref={headingRef}
              initial={{ opacity: 0 }}
              animate={headingInView ? { opacity: 1 } : {}}
              transition={{ duration: 1.0, ease: "easeOut" }}
              className="text-base text-center text-gray-600 sora-regular text-balance"
            >
              Choose the perfect plan for your language learning journey
            </motion.p>
          </div>
        </div>
      </section>
      {/* Header Section Ends */}

      {/* CTA Section Starts */}
      <section className="flex items-center justify-center w-full py-30">
        <div className="rounded-2xl w-[90%] md:w-[80%]  lg:w-[70%] bg-green-500 py-14 mx-auto shadow-lg">
          {/* Section Heading */}
          <div className="flex flex-col items-center w-[90%] md:w-full mx-auto gap-10">
            <div className="flex flex-col gap-5">
              <motion.h1
                ref={ctaRef}
                initial={{ opacity: 0, y: 40 }}
                animate={ctaInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1.0, ease: "easeOut", delay: 0.1 }}
                className="text-2xl text-center text-white md:text-4xl xl:text-5xl dm-bold text-balance"
              >
                Start your free trial today
              </motion.h1>
              <motion.p
                ref={ctaRef}
                initial={{ opacity: 0, y: 40 }}
                animate={ctaInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1.0, ease: "easeOut", delay: 0.6 }}
                className="text-base text-center text-white sora-regular text-balance"
              >
                No credit card required. Cancel anytime.
              </motion.p>
            </div>

            <motion.button
              ref={ctaRef}
              initial={{ opacity: 0 }}
              animate={ctaInView ? { opacity: 1 } : {}}
              transition={{ duration: 1.0, ease: "easeOut", delay: 0.6 }}
              className="p-4 text-green-500 transition duration-300 ease-in-out bg-white rounded-lg shadow-md dm-bold hover:cursor-pointer hover:bg-black hover:text-green-500 hover:shadow-2xl hover:scale-105"
            >
              Get Started
            </motion.button>
          </div>
        </div>
      </section>
      {/* CTA Section Ends */}
    </>
  );
};;

export default Pricing;
