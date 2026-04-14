import { useRef } from "react";
import { motion, useInView } from "motion/react";
motion;
import { IoLanguage } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa6";
import { RiRobot2Line } from "react-icons/ri";

const aiFeature = [
  {
    id: 1,
    stats: "247",
    description: "Words learned",
  },
  {
    id: 2,
    stats: "12",
    description: "Day streak",
  },
];

const chatMessages = [
  {
    id: 1,
    message: "I'm fine",
  },
  {
    id: 2,
    message: "Not bad",
  },
];

const progressContent = [
  {
    id: 1,
    goal: "Lessons completed",
    stat: 28,
  },
  {
    id: 2,
    goal: "Practice time",
    stat: "5.2 hrs",
  },
  {
    id: 3,
    goal: "Vocabulary added",
    stat: "47 words",
  },
];

const boxes = [1, 2, 3, 4, 5, 6, 7];

const languages = [
  {
    id: 1,
    language: "Spanish",
  },
  {
    id: 1,
    language: "French",
  },
  {
    id: 1,
    language: "German",
  },
  {
    id: 1,
    language: "Japanese",
  },
  {
    id: 1,
    language: "Korean",
  },
  {
    id: 1,
    language: "Italian",
  },
];

const Features = () => {
  // CTA
  const ctaRef = useRef(null);
  const ctaInView = useInView(ctaRef, { once: true, amount: 0.3 });

  return (
    <>
      {/* Header Section Starts */}
      <section className="w-full bg-green-200 pt-44 pb-20">
        {/* Section Heading */}
        <div className="flex flex-col items-center w-[90%] md:w-full mx-auto gap-10">
          <div className="flex flex-col gap-5">
            <motion.h1 className="text-3xl text-center text-slate-950 mx-auto w-[90%] md:text-4xl lg:text-5xl dm-bold text-balance">
              Powerful features for effective learning
            </motion.h1>
            <motion.p className="text-base text-center text-gray-600 sora-regular text-balance">
              Everything you need to master a new language, all in one beautiful
              platform
            </motion.p>
          </div>
        </div>
      </section>
      {/* Header Section Ends */}

      {/* First Section Starts */}
      <section className="w-full py-30 bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-14 lg:gap-20 h-full w-[90%] mx-auto">
          {/* Left Content */}
          <div className="flex flex-col items-start justify-center gap-5 lg:order-first">
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-3xl md:text-4xl lg:text-4xl dm-bold text-slate-950 text-balance"
            >
              AI-Powered Personalization
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
              className="text-base text-gray-600 sora-regular text-justify"
            >
              Our advanced AI learns your strengths and weaknesses, creating a
              personalized curriculum that adapts in real-time. Focus on what
              matters most and skip what you already know. <br />
              <br /> Every lesson is tailored to your learning style, pace, and
              goals. Whether you're a visual learner or prefer audio content,
              Verbalify adapts to you.
            </motion.p>
          </div>

          {/* Right Content */}
          <div className="flex items-center lg:order-last">
            {/* Container */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="w-[95%] md:w-[90%] mx-auto h-auto p-5 md:p-8 bg-green-500 rounded-2xl shadow-2xl"
            >
              <div className="flex flex-col h-auto gap-10 p-5 bg-white rounded-2xl">
                {/* First Row Container */}
                <div className="w-full flex flex-col gap-5">
                  <div className="w-full flex justify-between items-center">
                    <p className="text-slate-950 sora-medium text-sm">
                      Your Progress
                    </p>
                    <p className="text-green-500 sora-semibold text-sm">78%</p>
                  </div>

                  <div className="h-3 rounded-full bg-gray-200 w-full overflow-hidden">
                    <div className="h-full bg-green-500 w-[78%] rounded-full"></div>
                  </div>
                </div>

                {/* Second Row Container */}
                <div className="flex gap-5 w-full items-center">
                  {aiFeature.map((ai) => (
                    <div
                      key={ai.id}
                      className="p-5 bg-gray-200 hover:bg-green-200 transition duration-300 ease-in-out rounded-2xl flex flex-col gap-1 flex-1 shadow"
                    >
                      <p className="text-slate-950 text-2xl sora-bold">
                        {ai.stats}
                      </p>
                      <p className="text-gray-600 text-sm sora-regular">
                        {ai.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* First Section Ends */}

      {/* Second Section Starts */}
      <section className="w-full py-30 bg-gray-100">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-14 lg:gap-20 h-full w-[90%] mx-auto flex-row-reverse">
          {/* Left Content */}

          <div className="flex flex-col items-start justify-center gap-5 lg:order-last">
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-3xl md:text-4xl lg:text-4xl dm-bold text-slate-950 text-balance"
            >
              Real Conversation Practice
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
              className="text-base text-gray-600 sora-regular text-justify"
            >
              Practice speaking with AI conversation partners that respond
              naturally and provide instant feedback. Build confidence before
              talking to native speakers. <br />
              <br /> Choose from different scenarios: ordering food, making
              friends, business meetings, and more. Learn the phrases that
              matter in real-world contexts.
            </motion.p>
          </div>

          {/* Right Content */}
          <div className="flex items-center lg:order-first">
            {/* Container */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="w-[95%] md:w-[90%] mx-auto h-auto p-5 md:p-8 bg-green-500 rounded-2xl shadow-2xl"
            >
              <div className="flex flex-col w-full h-auto gap-5 p-5 bg-white rounded-2xl">
                {/* First Row Container */}
                <div className="w-full flex flex-col gap-5">
                  <div className="w-full flex gap-4 items-center">
                    <div className="size-12 shrink-0 bg-gray-200 rounded-full flex justify-center items-center">
                      <FaRegUser size={22} className="text-slate-950" />
                    </div>

                    <div className="bg-gray-200 p-2.5 w-full rounded-e-xl rounded-bl-xl">
                      <p className="text-slate-950 text-sm dm-medium">
                        Hello! How are you today?
                      </p>
                    </div>
                  </div>

                  <div className="w-full flex gap-4 items-center flex-row-reverse">
                    <div className="size-12 shrink-0 bg-green-500 rounded-full flex justify-center items-center">
                      <RiRobot2Line size={25} className="text-white" />
                    </div>

                    <div className="bg-green-500 p-2.5 w-full rounded-s-xl rounded-br-xl">
                      <p className="text-white text-sm dm-medium">
                        ¡Hola! Estoy muy bien, gracias
                      </p>
                    </div>
                  </div>
                </div>

                {/* Second Row Container */}
                <div className="flex gap-4 w-full items-center">
                  {chatMessages.map((chat) => (
                    <div
                      key={chat.id}
                      className="py-3 px-4 bg-gray-200 group hover:bg-green-200 rounded-2xl flex flex-col gap-2 transition duration-300 ease-in-out shadow"
                    >
                      <p className="text-gray-600 group-hover:text-slate-950 text-sm sora-medium transition duration-300 ease-in-out">
                        {chat.message}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* Second Section Ends */}

      {/* Third Section Starts */}
      <section className="w-full py-30 bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-14 lg:gap-20 h-full w-[90%] mx-auto">
          {/* Left Content */}

          <div className="flex flex-col items-start justify-center gap-5 lg:order-first">
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-3xl md:text-4xl lg:text-4xl dm-bold text-slate-950 text-balance"
            >
              Track Your Progress
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
              className="text-base text-gray-600 sora-regular text-justify"
            >
              See your improvement with detailed analytics and insights.
              Understand exactly where you're excelling and where you need more
              practice. <br />
              <br /> Set goals, earn achievements, and maintain your learning
              streak. Gamification makes language learning addictive in the best
              way.
            </motion.p>
          </div>

          {/* Right Content */}
          <div className="flex items-center lg:order-last">
            {/* Container */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="w-[95%] md:w-[90%] mx-auto h-auto p-5 md:p-8 bg-green-500 rounded-2xl shadow-2xl"
            >
              <div className="flex flex-col w-full h-auto gap-5 p-5 bg-white rounded-2xl">
                <p className="text-slate-950 sora-bold text-lg">Week Summary</p>

                <div className="gap-4 flex flex-col">
                  {progressContent.map((progress) => (
                    <div className="flex justify-between items-center w-full">
                      <p className="sora-medium text-gray-600 text-sm">
                        {progress.goal}
                      </p>
                      <p className="sora-medium text-green-500 text-sm">
                        {progress.stat}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="flex items-center gap-2 w-full">
                  {boxes.map((item, index) => (
                    <div
                      key={index}
                      className={`size-15 rounded flex-1 hover:scale-105 transition duration-300 ease-in-out shadow ${
                        index === 2 ? "bg-gray-200" : "bg-green-500"
                      }`}
                    ></div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* Third Section Ends */}

      {/* Fourth Section Starts */}
      <section className="w-full py-30 bg-gray-100">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-14 lg:gap-20 h-full w-[90%] mx-auto flex-row-reverse">
          {/* Left Content */}

          <div className="flex flex-col items-start justify-center gap-5 lg:order-last">
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-3xl md:text-4xl lg:text-4xl dm-bold text-slate-950 text-balance"
            >
              20+ Languages to Choose From
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
              className="text-base text-gray-600 sora-regular text-justify"
            >
              Learn Spanish, French, German, Japanese, Korean, and many more.
              Each course is built by native speakers and language experts.
              <br />
              <br /> Switch between languages anytime with Pro. Your progress is
              saved for each language, so you can learn multiple languages
              simultaneously.
            </motion.p>
          </div>

          {/* Right Content */}
          <div className="flex items-center lg:order-first">
            {/* Container */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="w-[95%] md:w-[90%] mx-auto h-auto p-5 md:p-8 bg-green-500 rounded-2xl shadow-2xl"
            >
              <div className="flex flex-col w-full h-auto gap-8 p-5 bg-white rounded-2xl">
                <div className="grid grid-cols-3 gap-5">
                  {languages.map((lang) => (
                    <div className="bg-gray-200 hover:bg-green-200 transition duration-300 ease-in-out rounded py-3 flex flex-col gap-2 items-center shadow">
                      <IoLanguage size={30} className="text-green-500" />
                      <p className="text-slate-950 text-sm sora-medium">
                        {lang.language}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="rounded-full w-full ">
                  <p className="sora-semibold text-sm text-center">
                    14+ More Languages
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* Fourth Section Ends */}

      {/* CTA Section Starts */}
      <section className="w-full flex justify-center items-center py-30">
        <div className="rounded-2xl w-[90%] md:w-[80%]  lg:w-[70%] bg-green-500 py-14 mx-auto shadow-lg">
          {/* Section Heading */}
          <div className="flex flex-col items-center w-[90%] md:w-full mx-auto gap-10">
            <div className="flex flex-col gap-5">
              <motion.h1
                ref={ctaRef}
                initial={{ opacity: 0, y: 40 }}
                animate={ctaInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
                className="text-2xl text-center text-white md:text-4xl xl:text-5xl dm-bold text-balance"
              >
                Ready to start learning?
              </motion.h1>
              <motion.p
                ref={ctaRef}
                initial={{ opacity: 0, y: 40 }}
                animate={ctaInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
                className="text-base text-center text-white sora-regular text-balance"
              >
                Join thousands of learners and start your journey today
              </motion.p>
            </div>

            <motion.button
              ref={ctaRef}
              initial={{ opacity: 0 }}
              animate={ctaInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
              className="p-4 text-green-500 transition duration-300 ease-in-out bg-white rounded-lg shadow-md dm-bold hover:cursor-pointer hover:bg-black hover:text-green-500 hover:shadow-2xl hover:scale-105"
            >
              Get Started for Free
            </motion.button>
          </div>
        </div>
      </section>
      {/* CTA Section Ends */}
    </>
  );
};

export default Features;
