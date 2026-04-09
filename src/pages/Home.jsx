import { NavLink } from "react-router-dom";
import { motion } from "motion/react";
motion;

const chatMessages = [
  {
    id: 1,
    message: "I'm fine, thank you",
  },
  {
    id: 2,
    message: "Good morning",
  },
];

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="min-h-screen pb-16 bg-green-200 lg:pb-0 lg:h-screen pt-36 lg:pt-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-14 lg:gap-0 h-full w-[90%] mx-auto">
          {/* Left Content */}
          <div className="flex flex-col items-start justify-center gap-5">
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-3xl md:text-4xl lg:text-5xl dm-bold text-slate-950 lg:leading-16 text-balance"
            >
              Language learning, beautifully simplified
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
              className="text-base text-gray-500 sora-regular text-balance"
            >
              Master any language with AI-powered lessons, interactive
              exercises, and real-world conversations. Start your journey today.
            </motion.p>

            {/* Get Started Button */}
            {/* Get Started Desktop Button */}
            <motion.div
              type="button"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative px-4 py-2 text-white transition duration-300 ease-in-out bg-green-500 rounded-sm dm-medium hover:bg-green-500/85 hover:text-black hover:shadow-md hover:cursor-pointer"
            >
              <NavLink to="/contact">Get Started</NavLink>
            </motion.div>
          </div>

          {/* Right Content */}
          <div className="flex items-center">
            {/* Container */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="w-[95%] md:w-[90%] mx-auto h-auto p-5 md:p-8 bg-green-500 rounded-2xl"
            >
              <div className="flex flex-col w-full h-auto gap-5 p-5 bg-white rounded-2xl">
                {/* Daily Lesson */}
                <div className="flex items-start px-3 py-2 text-sm bg-green-300 rounded-full dm-medium w-fit">
                  <h2>Daily Lesson</h2>
                </div>

                <div className="flex flex-col gap-32">
                  <div className="flex flex-col gap-2">
                    <h3 className="text-2xl dm-extrabold ">¿Cómo estás?</h3>
                    <p className="text-gray-500 dm-regular">How are you?</p>
                  </div>
                  <ul className="flex flex-col w-full gap-4">
                    {chatMessages.map((chat) => (
                      <li
                        key={chat.id}
                        className="p-3 text-base bg-gray-200 rounded-2xl dm-semibold hover:bg-green-200"
                      >
                        {chat.message}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
