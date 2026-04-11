import { useRef, useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { motion, useInView } from "motion/react";
motion;

// Mapped Elements Animation
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.4,
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

// Hero Section Content
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

// About Section Content
const cardContents = [
  {
    id: 1,
    colspan: "col-span-1 lg:col-span-2",
    bgcolor: "bg-green-500",
    headingcolor: "text-white",
    descriptioncolor: "text-white",
    bordercolor: "border-transparent hover:border-black",
    heading: "Conversations that feel real",
    description:
      "Skip the robotic drills. Practice with AI tutors that understand context, correct you naturally, and adapt to your interests, from ordering coffee to discussing philosophy.",
    showBadges: true,
    badges: ["20+ Languages", "Real-time feedback"],
    badgetextcolor: "text-green-500",
    badgebgcolor: "bg-white",
  },
  {
    id: 2,
    colspan: "col-span-1",
    bgcolor: "bg-white",
    headingcolor: "text-black",
    descriptioncolor: "text-gray-500",
    bordercolor: "border-gray-200 hover:border-green-500",
    heading: "5-minute daily habits",
    description:
      "Micro-lessons designed for busy lives. Build consistency without the pressure of hour-long study sessions.",
    showBadges: false,
    badges: [],
  },
  {
    id: 3,
    colspan: "col-span-1",
    bgcolor: "bg-white",
    headingcolor: "text-black",
    descriptioncolor: "text-gray-500",
    bordercolor: "border-gray-200 hover:border-green-500",
    heading: "Built on memory science",
    description:
      "Spaced repetition algorithms that predict exactly when you'll forget and review before you do.",
    showBadges: false,
    badges: [],
  },
  {
    id: 4,
    colspan: "col-span-1 lg:col-span-2",
    bgcolor: "bg-black",
    headingcolor: "text-green-500",
    descriptioncolor: "text-green-500",
    bordercolor: "border-transparent hover:border-green-500",
    heading: "Your accent, your way",
    description:
      'Choose from regional dialects and pronunciation styles. Learn Mexican Spanish, not just "Spanish." Brazilian Portuguese, not just "Portuguese."',
    showBadges: true,
    badges: [
      "🇲🇽 Mexican Spanish",
      "🇧🇷 Brazilian Portuguese",
      "🇫🇷 Parisian French",
      "🇯🇵 Tokyo Japanese",
    ],
    badgetextcolor: "text-black",
    badgebgcolor: "bg-green-500",
  },
];

// How It Works Content
const stepContents = [
  {
    id: 1,
    numbering: "1",
    heading: "Choose Your Languages",
    description: "Select from 20+ languages and set your learning goals",
  },
  {
    id: 2,
    numbering: "2",
    heading: "Learn Every Day",
    description: "Complete bite-sized lessons that fit your schedule",
  },
  {
    id: 3,
    numbering: "3",
    heading: "Track Your Progress",
    description:
      "Watch your skills grow with detailed analytics and achievements",
  },
];

// Testimonials User Details
const testimonials = [
  {
    id: 1,
    lang: "🇺🇸 United States",
    review:
      `"Verbalify made learning Spanish so much easier! The lessons are engaging and I can practice anywhere."`,
  },
  {
    id: 2,
    lang: "🇩🇪 Germany",
    review:
      `"I've tried many apps, but Verbalify's AI-powered approach actually works. Highly recommend!"`,
  },
  {
    id: 3,
    lang: "🇯🇵 Japan",
    review:
      `"Beautiful design and effective learning. I'm now conversational in French after just 3 months!"`,
  },
  {
    id: 4,
    lang: "🇬🇧 United Kingdom",
    review:
      `"The daily streak feature keeps me motivated. My Italian has improved more in 2 months than years of classes!"`,
  },
  {
    id: 5,
    lang: "🇨🇦 Canada",
    review:
     `"Verbalify's bite-sized lessons fit perfectly into my busy schedule. Learning Mandarin has never felt this manageable."`,
  },
  {
    id: 6,
    lang: "🇯🇵 Japan",
    review:
     `"As a native Japanese speaker learning English, Verbalify's pronunciation feedback is incredibly accurate and helpful."`,
  },
  {
    id: 7,
    lang: "🇧🇷 Brazil",
    review:
      `"I use Verbalify every morning before work. My German colleagues are genuinely impressed by my progress!"`,
  },
  {
    id: 8,
    lang: "🇮🇳 India",
    review:
      `"The AI conversation practice feels so natural. I finally have the confidence to speak French with native speakers."`,
  },
  {
    id: 9,
    lang: "🇦🇺 Australia",
    review:
      `"Switched from a competitor app and never looked back. Verbalify's structured path makes progress so visible!"`,
  },
];

const Home = () => {
  // Start Animation When Visible
  const headingRef = useRef(null);
  const cardsRef = useRef(null);

  const headingInView = useInView(headingRef, { once: true, amount: 0.3 });
  const cardsInView = useInView(cardsRef, { once: true, amount: 0.3 });

  const [users, setUsers] = useState([]);

  // API for Users Profile Picture
  useEffect(() => {
    fetch("https://randomuser.me/api/?results=9&seed=verbalify")
      .then((response) => response.json())
      .then((data) => setUsers(data.results))
      .catch((error) => console.error("Failed to fetch users:", error));
  }, []);

  return (
    <>
      {/* Hero Section Starts */}
      <section className="min-h-screen w-full pb-16 bg-green-200 lg:pb-0 lg:h-screen pt-36 lg:pt-24">
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
            <motion.div
              type="button"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative px-4 py-2 text-white transition duration-300 ease-in-out bg-green-500 rounded-sm shadow-xl dm-medium hover:bg-green-500/85 hover:text-black hover:cursor-pointer"
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
              className="w-[95%] md:w-[90%] mx-auto h-auto p-5 md:p-8 bg-green-500 rounded-2xl shadow-2xl"
            >
              <div className="flex flex-col w-full h-auto gap-5 p-5 bg-white rounded-2xl">
                {/* Daily Lesson */}
                <div className="flex items-start px-3 py-2 text-sm bg-green-300 rounded-full shadow dm-semibold w-fit">
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
                        className="p-3 text-base transition duration-300 ease-in-out bg-gray-200 shadow rounded-2xl dm-semibold hover:bg-green-200"
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
      {/* Hero Section Ends */}

      {/* About Section Starts */}
      <section className="bg-white w-full py-20">
        {/* Description Section */}
        <div className="flex flex-col mx-auto gap-5 w-[90%] ">
          {/* Why Verbalify */}
          <motion.div
            ref={headingRef}
            initial={{ opacity: 0 }}
            animate={headingInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
            className="bg-transparent hover:bg-green-500 hover:shadow-lg border border-green-500 rounded-full w-fit py-2 px-4 group transition duration-300 ease-in-out hover:scale-105"
          >
            <h1 className="dm-bold text-green-500 text-sm group-hover:text-white transition duration-300 ease-in-out">
              Why Verbalify
            </h1>
          </motion.div>

          {/* Section Description */}
          <motion.h2
            ref={headingRef}
            initial={{ opacity: 0 }}
            animate={headingInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
            className="text-black text-3xl md:text-4xl lg:text-5xl dm-bold text-balance mb-10"
          >
            Learn naturally, not mechanically
          </motion.h2>

          {/* Grid Section */}
          <motion.div
            ref={cardsRef}
            variants={containerVariants}
            initial="hidden"
            animate={cardsInView ? "visible" : "hidden"}
            className="grid grid-cols-1 lg:grid-cols-3 gap-10"
          >
            {/* First Card */}
            {cardContents.map((content) => (
              <motion.div
                key={content.id}
                variants={itemVariants}
                className={`flex flex-col justify-between ${content.colspan} rounded-2xl ${content.bgcolor} p-10 shadow-md hover:shadow-xl border-2 ${content.bordercolor} transition duration-300 ease-in-out`}
              >
                <div className="flex flex-col justify-between items-start gap-10 h-full">
                  <div className="flex flex-col  items-start gap-5">
                    <h2
                      className={`dm-semibold text-2xl text-balance ${content.headingcolor}`}
                    >
                      {content.heading}
                    </h2>
                    <p
                      className={`sora-medium text-base ${content.descriptioncolor}`}
                    >
                      {content.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {content.showBadges &&
                      content.badges.map((badge) => (
                        <div
                          key={badge}
                          className={`${content.badgebgcolor} py-2 px-4 rounded-sm sora-medium text-xs ${content.badgetextcolor}`}
                        >
                          <p>{badge}</p>
                        </div>
                      ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      {/* About Section Ends */}

      {/* Steps Section Starts */}
      <section className="bg-gray-100 py-20 w-full">
        {/* Section Heading */}
        <div className="w-full flex flex-col gap-5 items-center mb-12 md:mb-14">
          <motion.h1
            ref={headingRef}
            initial={{ opacity: 0, y: 40 }}
            animate={headingInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl text-black dm-bold text-balance"
          >
            Steps
          </motion.h1>
          <motion.p
            ref={headingRef}
            initial={{ opacity: 0, y: 40 }}
            animate={headingInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
            className="text-base text-center text-gray-600 sora-regular text-balance"
          >
            Start speaking a new language in just three simple steps
          </motion.p>
        </div>

        {/* Grid Section */}
        <motion.div
          ref={cardsRef}
          variants={containerVariants}
          initial="hidden"
          animate={cardsInView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-3 w-[90%] mx-auto gap-10"
        >
          {/* Content Mapping */}
          {stepContents.map((step) => (
            <motion.div
              variants={itemVariants}
              className="flex flex-col items-center gap-5"
            >
              {/* Numbering Container */}
              <div className="bg-green-500 p-5 size-16 flex justify-center items-center rounded-full shadow-lg">
                <p className="text-white sora-bold text-3xl">
                  {step.numbering}
                </p>
              </div>

              {/* Heading Title */}
              <div className="flex flex-col items-center gap-2">
                <h3 className="dm-bold text-center text-black text-xl">
                  {step.heading}
                </h3>
                <p className="text-base text-center text-gray-600 sora-regular w-[80%] mx-auto">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>
      {/* Steps Section Ends */}

      {/* Testimonials Section Starts */}
      <section className="bg-white py-20 w-full">
        {/* Section Heading */}
        <div className="w-full flex flex-col gap-5 items-center mb-12 md:mb-14">
          <motion.h1
            ref={headingRef}
            initial={{ opacity: 0, y: 40 }}
            animate={headingInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl text-black dm-bold text-balance"
          >
            Testimonials
          </motion.h1>
          <motion.p
            ref={headingRef}
            initial={{ opacity: 0, y: 40 }}
            animate={headingInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
            className="text-base text-center text-gray-600 sora-regular text-balance"
          >
            Loved by learners worldwide
          </motion.p>
        </div>

        {/* Grid Section */}
        <motion.div
          ref={cardsRef}
          variants={containerVariants}
          initial="hidden"
          animate={cardsInView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-3 w-[90%] mx-auto gap-10"
        >
          {/* Content Mapping */}
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              variants={itemVariants}
              className="flex flex-col gap-5 bg-green-500 rounded-2xl p-7"
            >
              {/* User Details Container */}
              <div className="flex items-center gap-5 w-full">
                {/* User Profile Picture Container */}
                <img
                  src={users[index]?.picture.large}
                  alt="Profile Picture"
                  className="size-16 flex justify-center items-center rounded-full shadow-lg"
                />

                {/* User Details Container */}
                <div className="flex flex-col items-start gap-2">
                  <h3 className="dm-bold text-white text-xl">
                    {users[index]?.name.first} {users[index]?.name.last}
                  </h3>
                  <p className="text-xs text-black sora-medium bg-white rounded py-1 px-2">
                    {testimonial.lang}
                  </p>
                </div>
              </div>

              {/* User Comments Container */}
              <p className="text-white sora-regular text-base">
                {testimonial.review}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </section>
      {/* Testimonials Section Ends */}
    </>
  );
};

export default Home;
