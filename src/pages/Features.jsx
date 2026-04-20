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
  // Heading
  const headingRef = useRef(null);
  const headingInView = useInView(headingRef, {
    once: true,
    amount: 0.3,
  });

  // First Feature
  const firstFeatureRef = useRef(null);
  const firstFeatureInView = useInView(firstFeatureRef, {
    once: true,
    amount: 0.3,
  });

  // Second Feature
  const secondFeatureRef = useRef(null);
  const secondFeatureInView = useInView(secondFeatureRef, {
    once: true,
    amount: 0.3,
  });

  // Third Feature
  const thirdFeatureRef = useRef(null);
  const thirdFeatureInView = useInView(thirdFeatureRef, {
    once: true,
    amount: 0.3,
  });

  // Fourth Feature
  const fourthFeatureRef = useRef(null);
  const fourthFeatureInView = useInView(fourthFeatureRef, {
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
              Powerful features for effective learning
            </motion.h1>
            <motion.p
              ref={headingRef}
              initial={{ opacity: 0 }}
              animate={headingInView ? { opacity: 1 } : {}}
              transition={{ duration: 1.0, ease: "easeOut" }}
              className="text-base text-center text-gray-600 sora-regular text-balance"
            >
              Everything you need to master a new language, all in one beautiful
              platform
            </motion.p>
          </div>
        </div>
      </section>
      {/* Header Section Ends */}

      {/* First Section Starts */}
      <section className="w-full bg-white py-30">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-14 lg:gap-20 h-full w-[90%] mx-auto">
          {/* Left Content */}
          <div className="flex flex-col items-start justify-center gap-5 lg:order-first">
            <motion.h1
              ref={firstFeatureRef}
              initial={{ opacity: 0, y: -30 }}
              animate={firstFeatureInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1.0, ease: "easeOut" }}
              className="text-3xl md:text-4xl lg:text-4xl dm-bold text-slate-950 text-balance"
            >
              AI-Powered Personalization
            </motion.h1>

            <motion.p
              ref={firstFeatureRef}
              initial={{ opacity: 0 }}
              animate={firstFeatureInView ? { opacity: 1 } : {}}
              transition={{ duration: 1.0, ease: "easeOut", delay: 0.3 }}
              className="text-base text-justify text-gray-600 sora-regular"
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
              ref={firstFeatureRef}
              initial={{ opacity: 0, x: 40 }}
              animate={firstFeatureInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 1.0, ease: "easeOut" }}
              className="w-[95%] md:w-[90%] mx-auto h-auto p-5 md:p-8 bg-green-500 rounded-2xl shadow-2xl"
            >
              <div className="flex flex-col h-auto gap-10 p-5 bg-white rounded-2xl">
                {/* First Row Container */}
                <div className="flex flex-col w-full gap-5">
                  <div className="flex items-center justify-between w-full">
                    <p className="text-sm text-slate-950 sora-medium">
                      Your Progress
                    </p>
                    <p className="text-sm text-green-500 sora-semibold">78%</p>
                  </div>

                  <div className="w-full h-3 overflow-hidden bg-gray-200 rounded-full">
                    <div className="h-full bg-green-500 w-[78%] rounded-full"></div>
                  </div>
                </div>

                {/* Second Row Container */}
                <div className="flex items-center w-full gap-5">
                  {aiFeature.map((ai) => (
                    <div
                      key={ai.id}
                      className="flex flex-col flex-1 gap-1 p-5 transition duration-300 ease-in-out bg-gray-200 shadow hover:bg-green-200 rounded-2xl"
                    >
                      <p className="text-2xl text-slate-950 sora-bold">
                        {ai.stats}
                      </p>
                      <p className="text-sm text-gray-600 sora-regular">
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
      <section className="w-full bg-gray-50 py-30">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-14 lg:gap-20 h-full w-[90%] mx-auto flex-row-reverse">
          {/* Left Content */}

          <div className="flex flex-col items-start justify-center gap-5 lg:order-last">
            <motion.h1
              ref={secondFeatureRef}
              initial={{ opacity: 0, y: -30 }}
              animate={secondFeatureInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1.0, ease: "easeOut" }}
              className="text-3xl md:text-4xl lg:text-4xl dm-bold text-slate-950 text-balance"
            >
              Real Conversation Practice
            </motion.h1>

            <motion.p
              ref={secondFeatureRef}
              initial={{ opacity: 0 }}
              animate={secondFeatureInView ? { opacity: 1 } : {}}
              transition={{ duration: 1.0, ease: "easeOut", delay: 0.3 }}
              className="text-base text-justify text-gray-600 sora-regular"
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
              ref={secondFeatureRef}
              initial={{ opacity: 0, x: -40 }}
              animate={secondFeatureInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 1.0, ease: "easeOut" }}
              className="w-[95%] md:w-[90%] mx-auto h-auto p-5 md:p-8 bg-green-500 rounded-2xl shadow-2xl"
            >
              <div className="flex flex-col w-full h-auto gap-5 p-5 bg-white rounded-2xl">
                {/* First Row Container */}
                <div className="flex flex-col w-full gap-5">
                  <div className="flex items-center w-full gap-4">
                    <div className="flex items-center justify-center bg-gray-200 rounded-full size-12 shrink-0">
                      <FaRegUser size={22} className="text-slate-950" />
                    </div>

                    <div className="bg-gray-200 p-2.5 w-full rounded-e-xl rounded-bl-xl">
                      <p className="text-sm text-slate-950 dm-medium">
                        Hello! How are you today?
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-row-reverse items-center w-full gap-4">
                    <div className="flex items-center justify-center bg-green-500 rounded-full size-12 shrink-0">
                      <RiRobot2Line size={25} className="text-white" />
                    </div>

                    <div className="bg-green-500 p-2.5 w-full rounded-s-xl rounded-br-xl">
                      <p className="text-sm text-white dm-medium">
                        ¡Hola! Estoy muy bien, gracias
                      </p>
                    </div>
                  </div>
                </div>

                {/* Second Row Container */}
                <div className="flex items-center w-full gap-4">
                  {chatMessages.map((chat) => (
                    <div
                      key={chat.id}
                      className="flex flex-col gap-2 px-4 py-3 transition duration-300 ease-in-out bg-gray-200 shadow group hover:bg-green-200 rounded-2xl"
                    >
                      <p className="text-sm text-gray-600 transition duration-300 ease-in-out group-hover:text-slate-950 sora-medium">
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
      <section className="w-full bg-white py-30">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-14 lg:gap-20 h-full w-[90%] mx-auto">
          {/* Left Content */}

          <div className="flex flex-col items-start justify-center gap-5 lg:order-first">
            <motion.h1
              ref={thirdFeatureRef}
              initial={{ opacity: 0, y: -30 }}
              animate={thirdFeatureInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1.0, ease: "easeOut" }}
              className="text-3xl md:text-4xl lg:text-4xl dm-bold text-slate-950 text-balance"
            >
              Track Your Progress
            </motion.h1>

            <motion.p
              ref={thirdFeatureRef}
              initial={{ opacity: 0 }}
              animate={thirdFeatureInView ? { opacity: 1 } : {}}
              transition={{ duration: 1.0, ease: "easeOut", delay: 0.3 }}
              className="text-base text-justify text-gray-600 sora-regular"
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
              ref={thirdFeatureRef}
              initial={{ opacity: 0, x: 40 }}
              animate={thirdFeatureInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 1.0, ease: "easeOut" }}
              className="w-[95%] md:w-[90%] mx-auto h-auto p-5 md:p-8 bg-green-500 rounded-2xl shadow-2xl"
            >
              <div className="flex flex-col w-full h-auto gap-5 p-5 bg-white rounded-2xl">
                <p className="text-lg text-slate-950 sora-bold">Week Summary</p>

                <div className="flex flex-col gap-4">
                  {progressContent.map((progress) => (
                    <div className="flex items-center justify-between w-full">
                      <p className="text-xs text-gray-600 sora-medium sm:text-sm">
                        {progress.goal}
                      </p>
                      <p className="text-xs text-green-500 sora-medium sm:text-sm">
                        {progress.stat}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="flex items-center w-full gap-2">
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
      <section className="w-full bg-gray-50 py-30">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-14 lg:gap-20 h-full w-[90%] mx-auto flex-row-reverse">
          {/* Left Content */}

          <div className="flex flex-col items-start justify-center gap-5 lg:order-last">
            <motion.h1
              ref={fourthFeatureRef}
              initial={{ opacity: 0, y: -30 }}
              animate={fourthFeatureInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1.0, ease: "easeOut" }}
              className="text-3xl md:text-4xl lg:text-4xl dm-bold text-slate-950 text-balance"
            >
              20+ Languages to Choose From
            </motion.h1>

            <motion.p
              ref={fourthFeatureRef}
              initial={{ opacity: 0 }}
              animate={fourthFeatureInView ? { opacity: 1 } : {}}
              transition={{ duration: 1.0, ease: "easeOut", delay: 0.3 }}
              className="text-base text-justify text-gray-600 sora-regular"
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
              ref={fourthFeatureRef}
              initial={{ opacity: 0, x: -40 }}
              animate={fourthFeatureInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 1.0, ease: "easeOut" }}
              className="w-[95%] md:w-[90%] mx-auto h-auto p-5 md:p-8 bg-green-500 rounded-2xl shadow-2xl"
            >
              <div className="flex flex-col w-full h-auto gap-8 p-5 bg-white rounded-2xl">
                <div className="grid grid-cols-3 gap-5">
                  {languages.map((lang) => (
                    <div className="flex flex-col items-center gap-2 p-3 transition duration-300 ease-in-out bg-gray-200 rounded shadow hover:bg-green-200 sm:py-3 sm:px-0">
                      <IoLanguage size={30} className="text-green-500" />
                      <p className="text-slate-950 text-[10px] sm:text-sm sora-medium">
                        {lang.language}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="w-full rounded-full ">
                  <p className="text-sm text-center sora-semibold">
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
      <section className="flex items-center justify-center w-full bg-white py-30">
        <motion.div
          ref={ctaRef}
          initial={{ opacity: 0 }}
          animate={ctaInView ? { opacity: 1 } : {}}
          transition={{ duration: 1.0, ease: "easeOut" }}
          className="rounded-2xl w-[90%] md:w-[80%]  lg:w-[70%] bg-green-500 py-14 mx-auto shadow-lg"
        >
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
                Ready to start learning?
              </motion.h1>
              <motion.p
                ref={ctaRef}
                initial={{ opacity: 0, y: 40 }}
                animate={ctaInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1.0, ease: "easeOut", delay: 0.6 }}
                className="text-base text-center text-white sora-regular text-balance"
              >
                Join thousands of learners and start your journey today
              </motion.p>
            </div>

            <motion.button
              ref={ctaRef}
              initial={{ opacity: 0 }}
              animate={ctaInView ? { opacity: 1 } : {}}
              transition={{ duration: 1.0, ease: "easeOut", delay: 0.6 }}
              className="p-4 text-green-500 transition duration-300 ease-in-out bg-white rounded-lg shadow-md dm-bold hover:cursor-pointer hover:bg-slate-950 hover:text-green-500 hover:shadow-2xl hover:scale-105"
            >
              Get Started for Free
            </motion.button>
          </div>
        </motion.div>
      </section>
      {/* CTA Section Ends */}
    </>
  );
};

export default Features;
