import { useRef, useState } from "react";
import { motion, useInView } from "motion/react";
motion;
import { IoCheckmark, IoClose } from "react-icons/io5";
import { FaChevronDown } from "react-icons/fa6";

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

// Pricing Card Content
const plans = [
  {
    id: 1,
    showBadge: false,
    showBilling: false,
    cardbordercolor: "border-gray-300 hover:border-green-500",
    buttonbgcolor: "bg-white hover:bg-green-500",
    buttontextcolor: "text-green-500 hover:text-white",
    buttonbordercolor: "border-green-500",
    label: "Free",
    plandescription: "Perfect for getting started with language learning",
    price: "RM 0",
    yearlyPrice: 0,
    yearlyDisplay: "RM 0",
    benefits: [
      "5 lessons per day",
      "1 language access",
      "Basic vocabulary practice",
      "Community Support",
    ],
    buttontext: "Get Started",
  },
  {
    id: 2,
    showBadge: true,
    showBilling: true,
    cardbordercolor: "border-green-500",
    buttonbgcolor: "bg-green-500",
    buttontextcolor: "text-white hover:text-slate-950",
    buttonbordercolor: "border-green-500 hover:border-transparent",
    label: "Pro",
    plandescription: "For serious learners who want unlimited access",
    price: "RM 19",
    yearlyPrice: 15,
    yearlyDisplay: "RM 15",
    benefits: [
      "Unlimited lessons",
      "All 20+ languages",
      "Offline access & downloads",
      "AI conversation practice",
      "Advanced analytics",
      "Priority email support",
    ],
    buttontext: "Start Free Trial",
  },
  {
    id: 3,
    showBadge: false,
    showBilling: true,
    cardbordercolor: "border-gray-300 hover:border-green-500",
    buttonbgcolor: "bg-white hover:bg-green-500",
    buttontextcolor: "text-green-500 hover:text-white",
    buttonbordercolor: "border-green-500",
    label: "Teams",
    plandescription: "Perfect for businesses and educational institutions",
    price: "RM 99",
    yearlyPrice: 79,
    yearlyDisplay: "RM 79",
    benefits: [
      "Everything in Pro",
      "Up to 10 team members",
      "Team progress dashboard",
      "Centralized billing",
      "Dedicated account manager",
      "Priority phone support",
    ],
    buttontext: "Contact Sales",
  },
];

// FAQS Accordions Content
const faqs = [
  {
    id: 1,
    question: "Can I change plans later?",
    answer:
      "Yes, you can upgrade or downgrade your plan at any time. When upgrading, you'll get immediate access to new features. When downgrading, changes take effect at the end of your current billing period.",
  },
  {
    id: 2,
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit cards (Visa & MasterCard), PayPal, and Apple Pay. For Teams plans, we also offer invoice billing.",
  },
  {
    id: 3,
    question: "Is there a free trial?",
    answer:
      "Yes! Pro plans come with a 14-day free trial. No credit card required. You can cancel anytime during the trial and won't be charged.",
  },
  {
    id: 4,
    question: "What's your refund policy?",
    answer:
      "We offer a 30-day money-back guarantee on all paid plans. If you're not satisfied, contact our support team for a full refund.",
  },
  {
    id: 5,
    question: "Can I add more users to my Teams plan?",
    answer:
      "Yes! Each Teams plan includes 10 users. You can add more users for $8/month per additional user. Contact our sales team for volume discounts on larger teams.",
  },
];

const tableColumn = ["Feature", "Free", "Pro", "Teams"]

const tableRow = [
  { id: 1, feature: "Daily lessons", free: "5", pro: "Unlimited", teams: "Unlimited" },
  { id: 2, feature: "Languages", free: "1", pro: "All 20+", teams: "All 20+" },
  { id: 3, feature: "Offline access", free: false, pro: true, teams: true },
  { id: 4, feature: "AI conversation practice", free: false, pro: true, teams: true },
  { id: 5, feature: "Advanced analytics", free: false, pro: true, teams: true },
  { id: 6, feature: "Progress tracking", free: true, pro: true, teams: true },
  { id: 7, feature: "Team dashboard", free: false, pro: false, teams: true },
  { id: 8, feature: "Priority support", free: false, pro: true, teams: true },
  { id: 9, feature: "Dedicated account manager", free: false, pro: false, teams: true },
];

const Pricing = () => {
  // Heading Section
  const headingRef = useRef(null);
  const headingInView = useInView(headingRef, {
    once: true,
    amount: 0.3,
  });

  // Plans Section
  const plansRef = useRef(null);
  const plansInView = useInView(plansRef, { once: true, amount: 0.3 });

  // Yearly Tab State
  const [isYearly, setIsYearly] = useState(false);

  // FAQ Section
  const faqsRef = useRef(null);
  const faqsInView = useInView(faqsRef, { once: true, amount: 0.3 });

  // FAQ State
  const [openId, setOpenId] = useState(null);

  // Compare Table Section
  const tableRef = useRef(null);
  const tableInView = useInView(tableRef, { once: true, amount: 0.3 });

  // CTA Section
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

      {/* Plans Section Starts */}
      <section className="w-full py-20 bg-white">
        {/* Yearly Tab Switch */}
        <motion.div
          ref={plansRef}
          initial={{ opacity: 0 }}
          animate={plansInView ? { opacity: 1 } : {}}
          transition={{ duration: 1.0, ease: "easeOut" }}
          className="relative flex items-center w-[90%] sm:max-w-xs mx-auto mb-12 md:mb-14 rounded-full bg-gray-200 p-1"
        >
          <div
            className={`absolute top-1 left-1 h-[calc(100%-8px)] w-[calc(50%-4px)] rounded-full bg-white shadow
            transition duration-300 ease-in-out
            ${isYearly ? "translate-x-full" : "translate-x-0"}`}
          />

          <button
            onClick={() => setIsYearly(false)}
            className={`relative hover:cursor-pointer z-10 w-1/2 py-2 px-5 rounded-full flex items-center justify-center hover:text-slate-950 transition duration-300 ease-in-out ${
              !isYearly ? "text-slate-950" : "text-gray-500"
            }`}
          >
            <p
              className={`text-sm ${!isYearly ? "sora-medium" : "sora-regular"}`}
            >
              Monthly
            </p>
          </button>

          <button
            onClick={() => setIsYearly(true)}
            className={`relative hover:cursor-pointer z-10 w-1/2 py-2 px-5 rounded-full flex gap-2 items-center justify-center hover:text-slate-950 transition duration-300 ease-in-out ${
              isYearly ? "text-slate-950" : "text-gray-500"
            }`}
          >
            <p
              className={`text-sm ${isYearly ? "sora-medium" : "sora-regular"}`}
            >
              Yearly
            </p>

            <div className="bg-green-500 py-0.5 px-2 rounded-full flex text-nowrap gap-2 items-center justify-center">
              <p
                className={`text-xs text-white ${isYearly ? "sora-medium" : "sora-regular"}`}
              >
                Save 20%
              </p>
            </div>
          </button>
        </motion.div>

        {/* Plans Card Container */}
        <motion.div
          ref={plansRef}
          variants={containerVariants}
          initial="hidden"
          animate={plansInView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-3 gap-10 w-[90%] mx-auto"
        >
          {plans.map((plan) => (
            <motion.div
              key={plan.id}
              variants={itemVariants}
              className={`relative p-10 bg-white border-2 ${plan.cardbordercolor}  h-full rounded-2xl shadow flex flex-col gap-10 hover:scale-105 hover:shadow-2xl transition duration-300 ease-in-out hover:cursor-pointer`}
            >
              {/* Badge Container */}
              {plan.showBadge && (
                <div className="absolute px-4 py-2 -translate-x-1/2 bg-green-500 rounded-full -top-4 left-1/2 w-fit">
                  <p className="text-xs text-center text-white dm-semibold">
                    Most Popular
                  </p>
                </div>
              )}

              <div className="flex flex-col gap-3">
                <h1 className="text-2xl text-slate-950 sora-bold text-balance">
                  {plan.label}
                </h1>
                <p className="text-3xl text-slate-950 sora-bold text-balance">
                  {isYearly ? plan.yearlyDisplay : plan.price}
                  <span className="text-base text-gray-600 sora-regular">
                    /month
                  </span>
                </p>
                {isYearly && plan.showBilling && (
                  <p className="text-sm text-gray-600 sora-regular">
                    Billed annually (RM {plan.yearlyPrice * 12}/year)
                  </p>
                )}
                <p className="text-xs text-gray-600 sora-regular text-balance">
                  {plan.plandescription}
                </p>
              </div>

              <div className="flex flex-col items-start justify-start flex-1 gap-2">
                {plan.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <IoCheckmark size={25} className="text-green-600" />
                    <h3 className="text-base text-gray-600 sora-regular ">
                      {benefit}
                    </h3>
                  </div>
                ))}
              </div>

              <button
                className={`relative w-full border-2 ${plan.buttonbgcolor} border-green-500 rounded-lg ${plan.buttontextcolor} ${plan.buttonbordercolor} dm-bold py-3 transition duration-300 ease-in-out hover:cursor-pointer shadow-md`}
              >
                {plan.buttontext}
              </button>
            </motion.div>
          ))}
        </motion.div>
      </section>
      {/* Plans Section Ends */}

      {/* Compare Plans Table Section Starts */}
      <section className="w-full py-20 bg-gray-50">
        {/* Section Heading */}
        <div className="flex flex-col items-center w-full gap-5 mb-12 md:mb-14">
          <motion.h1
            ref={tableRef}
            initial={{ opacity: 0, y: 40 }}
            animate={tableInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.0, ease: "easeOut", delay: 0.1 }}
            className="text-3xl text-center text-slate-950 md:text-4xl lg:text-5xl dm-bold text-balance"
          >
            Compare All Plans
          </motion.h1>
          <motion.p
            ref={tableRef}
            initial={{ opacity: 0, y: 40 }}
            animate={tableInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.0, ease: "easeOut", delay: 0.6 }}
            className="text-base text-center text-gray-600 sora-regular text-balance"
          >
            Find the perfect plan for your learning goals
          </motion.p>
        </div>

        {/* Plans Table Container */}
        <motion.div
          ref={tableRef}
          initial={{ opacity: 0 }}
          animate={tableInView ? { opacity: 1 } : {}}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="w-[80%] mx-auto flex flex-col gap-4"
        >
          <table className="w-full table-auto">
            <thead className="py-10 mx-auto border-b border-gray-200">
              <tr>
                {tableColumn.map((col) => (
                  <th
                    key={col}
                    className={`py-4 text-green-500 sora-regular ${col === "Feature" ? "w-1/2 text-left" : "w-1/6"}`}
                  >
                    {col}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {tableRow.map((row) => (
                <tr
                  key={row.id}
                  className={`${row.id === 9 ? "" : "border-b"} border-gray-200 hover:border-green-500 transition duration-300 ease-in-out`}
                >
                  <td className="w-1/2 py-4 text-xs sm:text-sm text-gray-600 sora-regular">
                    {row.feature}
                  </td>
                  <td className="w-1/6 text-center">
                    {typeof row.free === "boolean" ? (
                      row.free ? (
                        <IoCheckmark
                          size={25}
                          className="mx-auto text-green-600"
                        />
                      ) : (
                        <IoClose size={25} className="mx-auto text-red-600" />
                      )
                    ) : (
                      <span className="block text-xs sm:text-sm text-gray-600 sora-regular">
                        {row.free}
                      </span>
                    )}
                  </td>
                  <td className="w-1/6 text-xs sm:text-sm text-center text-gray-600 sora-regular">
                    {typeof row.pro === "boolean" ? (
                      row.pro ? (
                        <IoCheckmark
                          size={25}
                          className="mx-auto text-green-600"
                        />
                      ) : (
                        <IoClose size={25} className="mx-auto text-red-600" />
                      )
                    ) : (
                      <span className="block text-xs sm:text-sm text-gray-600 sora-regular">
                        {row.pro}
                      </span>
                    )}
                  </td>
                  <td className="w-1/6 px-4 text-xs sm:text-sm text-center text-gray-600 sora-regular">
                    {typeof row.teams === "boolean" ? (
                      row.teams ? (
                        <IoCheckmark
                          size={25}
                          className="mx-auto text-green-600"
                        />
                      ) : (
                        <IoClose size={25} className="mx-auto text-red-600" />
                      )
                    ) : (
                      <span className="block text-xs sm:text-sm text-gray-600 sora-regular">
                        {row.teams}
                      </span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </section>
      {/* FAQS Section Ends */}

      {/* FAQS Section Starts */}
      <section className="w-full py-20 bg-white">
        {/* Section Heading */}
        <div className="flex flex-col items-center w-full gap-5 mb-12 md:mb-14">
          <motion.h1
            ref={faqsRef}
            initial={{ opacity: 0, y: 40 }}
            animate={faqsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.0, ease: "easeOut", delay: 0.1 }}
            className="text-3xl text-center text-slate-950 md:text-4xl lg:text-5xl dm-bold text-balance"
          >
            Frequently asked questions
          </motion.h1>
          <motion.p
            ref={faqsRef}
            initial={{ opacity: 0, y: 40 }}
            animate={faqsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.0, ease: "easeOut", delay: 0.6 }}
            className="text-base text-center text-gray-600 sora-regular text-balance"
          >
            Transparent pricing. No hidden details.
          </motion.p>
        </div>

        {/* FAQ Section Container */}
        <motion.div
          ref={faqsRef}
          variants={containerVariants}
          initial="hidden"
          animate={faqsInView ? "visible" : "hidden"}
          className="w-[80%] 2xl:w-[70%] mx-auto flex flex-col gap-4"
        >
          {faqs.map((faq) => (
            <motion.div
              key={faq.id}
              variants={itemVariants}
              onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
              className={`border-2 rounded-xl p-7 flex flex-col cursor-pointer transition group duration-300 ease-in-out hover:border-green-500 shadow
                  ${openId === faq.id ? "border-green-500 bg-green-500" : "border-gray-300 bg-white"}`}
            >
              <div className="flex items-center justify-between w-full">
                <h3
                  className={`text-lg  dm-bold ${openId === faq.id ? "text-white" : "text-green-500"}`}
                >
                  {faq.question}
                </h3>
                <FaChevronDown
                  size={20}
                  className={`shrink-0 transition duration-300 ease-in-out
                      ${openId === faq.id ? "rotate-180 text-white" : "text-green-500"}`}
                />
              </div>

              {/* Answer */}
              <div className={`faq-answer ${openId === faq.id ? "open" : ""}`}>
                <div>
                  <p className="pt-3 text-base text-slate-950 sora-regular">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>
      {/* FAQS Section Ends */}

      {/* CTA Section Starts */}
      <section className="flex items-center justify-center w-full bg-gray-50 py-30">
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
        </motion.div>
      </section>
      {/* CTA Section Ends */}
    </>
  );
};;;;;

export default Pricing;
