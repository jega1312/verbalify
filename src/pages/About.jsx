import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "motion/react";
motion;
import { GrTarget } from "react-icons/gr";
import { LuLightbulb, LuNotebookPen } from "react-icons/lu";
import { FiGlobe } from "react-icons/fi";
import { BiWorld } from "react-icons/bi";
import { IoLanguage, IoStar } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { FaUsers } from "react-icons/fa6";
import { RiSpeakLine, RiRobot2Line } from "react-icons/ri";

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
    transition: { duration: 1.0, ease: "easeOut" },
  },
};

// Hero Section Content
const heroContents = [
  {
    id: 1,
    icon: <IoLanguage size={45} className="text-white" />,
    stat: "20+",
    description: "Languages",
  },
  {
    id: 2,
    icon: <BiWorld size={45} className="text-white" />,
    stat: "140+",
    description: "Countries",
  },
  {
    id: 3,
    icon: <FaUsers size={45} className="text-white" />,
    stat: "98%",
    description: "Satisfaction",
  },
  {
    id: 4,
    icon: <IoStar size={45} className="text-white" />,
    stat: "4.9",
    description: "App Rating",
  },
];

// Stat Section Content
const statContents = [
  {
    id: 1,
    icon: <LuNotebookPen size={50} className="text-green-500" />,
    count: "500K",
    heading: "Hours of Practice",
    description: "Logged by learners by every week",
  },
  {
    id: 2,
    icon: <RiSpeakLine size={50} className="text-green-500" />,
    count: "85%",
    heading: "Achieve Fluency",
    description: "Within 6 months of consistent usage",
  },
  {
    id: 3,
    icon: <RiRobot2Line size={50} className="text-green-500" />,
    count: "24/7",
    heading: "AI Tutor Support",
    description: "Available whenever you need help",
  },
];

// About Section Content
const cardContents = [
  {
    id: 1,
    icon: <GrTarget size={40} className="text-white" />,
    bgcolor: "bg-green-500",
    headingcolor: "text-white",
    descriptioncolor: "text-white",
    bordercolor: "border-transparent hover:border-slate-950",
    heading: "Learner-First",
    description:
      "Every decision we make starts with one question, how does this help our learners succeed? Your progress isn't just data, it's our north star.",
  },
  {
    id: 2,
    icon: <LuLightbulb size={40} className="text-green-500" />,
    bgcolor: "bg-slate-950",
    headingcolor: "text-green-500",
    descriptioncolor: "text-green-500",
    bordercolor: "border-transparent hover:border-green-500",
    heading: "Innovation",
    description:
      "We constantly push boundaries with AI and pedagogy to create the most effective learning experience. What seemed impossible yesterday becomes today's feature.",
  },
  {
    id: 3,
    icon: <FiGlobe size={30} className="text-slate-950" />,
    bgcolor: "bg-white",
    headingcolor: "text-slate-950",
    descriptioncolor: "text-gray-600",
    bordercolor: "border-gray-200 hover:border-green-500",
    heading: "Accessibility",
    description:
      "Language learning should be available to everyone, regardless of their background or resources. Breaking barriers starts here.",
  },
  {
    id: 4,
    icon: <FaRegHeart size={30} className="textslate-950" />,
    bgcolor: "bg-white",
    headingcolor: "text-slate-950",
    descriptioncolor: "text-gray-600",
    bordercolor: "border-gray-200 hover:border-green-500",
    heading: "Community",
    description:
      "We're building more than an app, we're creating a global community of passionate language learners who support each other's journey.",
  },
];

// How It Works Content
const teamContents = [
  {
    id: 1,
    heading: "Choose Your Languages",
    position: "CEO & Co-Founder",
    description: "Former Google, EdTech veteran with 15+ years experience",
  },
  {
    id: 2,
    heading: "Learn Every Day",
    position: "CTO & Co-Founder",
    description: "AI researcher, previously at DeepMind and Stanford NLP",
  },
  {
    id: 3,
    heading: "Track Your Progress",
    position: "Head of Pedagogy",
    description: "Linguist with PhD in Applied Linguistics from Cambridge",
  },
  {
    id: 4,
    heading: "Track Your Progress",
    position: "VP of Product",
    description:
      "Product leader from Spotify and Duolingo with a passion for UX",
  },
];

const About = () => {
  // Stat
  const statRef = useRef(null);
  const statInView = useInView(statRef, { once: true, amount: 0.3 });

  // About
  const aboutRef = useRef(null);
  const aboutInView = useInView(aboutRef, { once: true, amount: 0.3 });

  // Teams
  const teamsRef = useRef(null);
  const teamsInView = useInView(teamsRef, { once: true, amount: 0.3 });

  // About
  const ctaRef = useRef(null);
  const ctaInView = useInView(ctaRef, { once: true, amount: 0.3 });

  const [users, setUsers] = useState([]);

  // API for Users Profile Picture
  useEffect(() => {
    fetch("https://randomuser.me/api/?results=4&seed=verbalify")
      .then((response) => response.json())
      .then((data) => setUsers(data.results))
      .catch((error) => console.error("Failed to fetch users:", error));
  }, []);

  return (
    <>
      {/* Hero Section Starts */}
      <section className="w-full min-h-screen pb-16 bg-green-200 lg:pb-0 lg:h-screen pt-36 lg:pt-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-14 lg:gap-0 h-full w-[90%] mx-auto">
          {/* Left Content */}
          <div className="flex flex-col items-start justify-center gap-5">
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.0, ease: "easeOut" }}
              className="text-3xl md:text-4xl lg:text-6xl dm-bold text-slate-950 lg:leading-16 text-balance"
            >
              Breaking language <br /> barriers,{" "}
              <span className="text-green-500">
                one conversation <br /> at a time
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.0, ease: "easeOut", delay: 0.3 }}
              className="text-base text-gray-600 sora-regular text-balance w-[90%]"
            >
              We’re on a mission to connect the world through language. Built on
              the belief that everyone deserves world-class learning, Verbalify
              combines advanced AI with proven methods to deliver personalized
              lessons that work, adapting to your style, tracking progress, and
              guiding every step toward fluency.
            </motion.p>
          </div>

          {/* Right Content */}
          <div className="flex items-center">
            {/* Container */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.0, ease: "easeOut" }}
              className="w-[95%] md:w-[80%] mx-auto h-auto p-8 bg-green-500 rounded-2xl shadow-2xl grid grid-cols-2 place-items-center gap-10"
            >
              {heroContents.map((hero) => (
                <div
                  key={hero.id}
                  className="flex flex-col items-center gap-4 text-center"
                >
                  {hero.icon}
                  <div className="flex flex-col items-center gap-1">
                    <h2 className="text-3xl text-white sora-bold">
                      {hero.stat}
                    </h2>
                    <p className="text-base text-white dm-semibold">
                      {hero.description}
                    </p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
      {/* Hero Section Ends */}

      {/* Teams Section Starts */}
      <section className="w-full py-20 bg-white">
        {/* Grid Section */}
        <motion.div
          ref={statRef}
          variants={containerVariants}
          initial="hidden"
          animate={statInView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-3 w-[90%] mx-auto gap-10"
        >
          {/* Content Mapping */}
          {statContents.map((stat) => (
            <motion.div
              key={stat.id}
              variants={itemVariants}
              className="flex flex-col items-center gap-5"
            >
              {/* Heading Title */}
              <div className="flex flex-col items-center gap-4">
                {stat.icon}
                <div className="flex flex-col items-center gap-1">
                  <h3 className="text-4xl text-center text-green-500 sora-bold">
                    {stat.count}
                  </h3>
                  <p className="text-lg text-center text-slate-950 dm-semibold">
                    {stat.heading}
                  </p>
                  <p className="text-xs text-center text-gray-600 sora-regular w-[80%] mx-auto">
                    {stat.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>
      {/* Teams Section Ends */}

      {/* About Section Starts */}
      <section className="w-full py-20 bg-gray-50">
        {/* Description Section */}
        <div className="flex flex-col mx-auto gap-5 w-[90%] ">
          {/* Section Description */}
          <div className="flex flex-col items-center w-full gap-5 mb-12">
            <motion.h1
              ref={aboutRef}
              initial={{ opacity: 0, y: 40 }}
              animate={aboutInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1.0, ease: "easeOut", delay: 0.1 }}
              className="text-3xl text-slate-950 md:text-4xl lg:text-5xl dm-bold text-balance"
            >
              Our mission
            </motion.h1>
            <motion.p
              ref={aboutRef}
              initial={{ opacity: 0, y: 40 }}
              animate={aboutInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1.0, ease: "easeOut", delay: 0.6 }}
              className="text-base text-center text-gray-600 sora-regular text-balance"
            >
              The values that guide everything we do
            </motion.p>
          </div>

          {/* Grid Section */}
          <motion.div
            ref={aboutRef}
            variants={containerVariants}
            initial="hidden"
            animate={aboutInView ? "visible" : "hidden"}
            className="grid grid-cols-1 gap-10 lg:grid-cols-2"
          >
            {/* First Card */}
            {cardContents.map((content) => (
              <motion.div
                key={content.id}
                variants={itemVariants}
                className={`flex flex-col justify-between rounded-2xl ${content.bgcolor} p-10 shadow-md hover:shadow-xl border-2 ${content.bordercolor} transition duration-300 ease-in-out`}
              >
                <div className="flex flex-col items-start justify-between h-full gap-10">
                  <div className="flex flex-col items-start gap-5">
                    {content.icon}
                    <h2
                      className={`dm-semibold text-2xl text-balance ${content.headingcolor}`}
                    >
                      {content.heading}
                    </h2>
                    <p
                      className={`sora-medium text-sm ${content.descriptioncolor}`}
                    >
                      {content.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      {/* About Section Ends */}

      {/* Teams Section Starts */}
      <section className="w-full py-20 bg-white">
        {/* Section Heading */}
        <div className="flex flex-col items-center w-full gap-5 mb-12 md:mb-14">
          <motion.h1
            ref={teamsRef}
            initial={{ opacity: 0, y: 40 }}
            animate={teamsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.0, ease: "easeOut", delay: 0.1 }}
            className="text-3xl text-slate-950 md:text-4xl lg:text-5xl dm-bold text-balance"
          >
            Our team
          </motion.h1>
          <motion.p
            ref={teamsRef}
            initial={{ opacity: 0, y: 40 }}
            animate={teamsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.0, ease: "easeOut", delay: 0.6 }}
            className="text-base text-center text-gray-600 sora-regular text-balance"
          >
            Passionate experts dedicated to transforming education
          </motion.p>
        </div>

        {/* Grid Section */}
        <motion.div
          ref={teamsRef}
          variants={containerVariants}
          initial="hidden"
          animate={teamsInView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-4 w-[90%] mx-auto gap-10"
        >
          {/* Content Mapping */}
          {teamContents.map((team, index) => (
            <motion.div
              key={team.id}
              variants={itemVariants}
              className="flex flex-col items-center gap-5"
            >
              {/* User Profile Container */}
              <img
                src={users[index]?.picture.large}
                alt="Profile Picture"
                className="flex items-center justify-center rounded-full shadow-lg group size-25"
              />

              {/* Heading Title */}
              <div className="flex flex-col items-center gap-2">
                <h3 className="text-xl text-center text-slate-950 dm-bold">
                  {users[index]?.name.first} {users[index]?.name.last}
                </h3>
                <p className="text-sm text-center text-green-500 sora-medium">
                  {team.position}
                </p>
                <p className="text-xs text-center text-gray-600 sora-regular w-[80%] mx-auto">
                  {team.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>
      {/* Teams Section Ends */}

      {/* CTA Section Starts */}
      <section className="w-full bg-green-500 py-30">
        {/* Section Heading */}
        <div className="flex flex-col items-center w-[90%] md:w-full mx-auto gap-10">
          <div className="flex flex-col gap-5">
            <motion.h1
              ref={ctaRef}
              initial={{ opacity: 0, y: 40 }}
              animate={ctaInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1.0, ease: "easeOut", delay: 0.1 }}
              className="text-3xl text-center text-white md:text-4xl lg:text-5xl dm-bold text-balance"
            >
              Join us on our mission
            </motion.h1>
            <motion.p
              ref={ctaRef}
              initial={{ opacity: 0, y: 40 }}
              animate={ctaInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1.0, ease: "easeOut", delay: 0.6 }}
              className="text-base text-center text-white sora-regular text-balance"
            >
              We're always looking for passionate people to join our team and
              help us transform language education
            </motion.p>
          </div>

          <motion.button
            ref={ctaRef}
            initial={{ opacity: 0 }}
            animate={ctaInView ? { opacity: 1 } : {}}
            transition={{ duration: 1.0, ease: "easeOut", delay: 0.6 }}
            className="p-4 text-green-500 transition duration-300 ease-in-out bg-white rounded-lg shadow-md dm-bold hover:cursor-pointer hover:bg-slate-950 hover:text-green-500 hover:shadow-2xl hover:scale-105"
          >
            Contact Us
          </motion.button>
        </div>
      </section>
      {/* CTA Section Ends */}
    </>
  );
};

export default About;
