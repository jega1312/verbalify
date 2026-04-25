import { motion, useInView } from "motion/react";
motion;
import { useForm } from "react-hook-form";
import { useState, useRef } from "react";
import { PhoneInput } from "react-international-phone";
import { IoCheckmarkCircle } from "react-icons/io5";
import "react-international-phone/style.css";
import { SlSocialLinkedin, SlEnvolope, SlGlobe } from "react-icons/sl";
import { FiGithub } from "react-icons/fi";
import { GrLocation } from "react-icons/gr";
import { Link } from "react-router-dom";

const Contact = () => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const [nameFocused, setNameFocused] = useState(false);
  const [emailFocused, setEmailFocused] = useState(false);
  const [subjectFocused, setSubjectFocused] = useState(false);
  const [messageFocused, setMessageFocused] = useState(false);

  const nameValue = watch("name") || "";
  const emailValue = watch("email") || "";
  const subjectValue = watch("subject") || "";
  const messageValue = watch("message") || "";

  // Phone State
  const [phone, setPhone] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [hasInput, setHasInput] = useState(false);
  const [phoneError, setPhoneError] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Heading Animation
  const headingRef = useRef(null);
  const headingInView = useInView(headingRef, { once: true, amount: 0.1 });

  // Sub-Heading Animation
  const subHeadingRef = useRef(null);
  const subHeadingInView = useInView(subHeadingRef, {
    once: true,
    amount: 0.1,
  });

  // Form Animation
  const formRef = useRef(null);
  const formInView = useInView(formRef, {
    once: true,
    amount: 0.1,
  });

  // Contact Information
  const contactRef = useRef(null);
  const contactInView = useInView(contactRef, {
    once: true,
    amount: 0.1,
  });

  // Social Information
  const socialContentRef = useRef(null);
  const socialContentInView = useInView(socialContentRef, {
    once: true,
    amount: 0.1,
  });

  // Social Icons Animation
  const socialRef = useRef(null);
  const socialInView = useInView(socialRef, {
    once: true,
    amount: 0.1,
  });

  // Need Help Container Animation
  const needHelpRef = useRef(null);
  const needHelpInView = useInView(needHelpRef, {
    once: true,
    amount: 0.1,
  });

  // Location Map Animation
  const mapRef = useRef(null);
  const mapInView = useInView(mapRef, {
    once: true,
    amount: 0.1,
  });

  const formVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
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
      transition: { duration: 1.0, ease: "easeOut" },
    },
  };

  const contactInfo = [
    {
      id: 1,
      icon: <SlEnvolope size={25} className="text-green-500" />,
      heading: "Email",
      info: "hello@verbalify.com",
      description: "We usually respond within 24 hours",
    },
    {
      id: 2,
      icon: <GrLocation size={25} className="text-green-500" />,
      heading: "Office",
      info: "123 Learning Street, San Francisco,",
      description: "CA 94102, United States",
    },
  ];

  const socialLinks = [
    {
      id: 1,
      href: "https://jega1312.github.io/portfolio/",
      icon: <SlGlobe size={20} className="text-green-500" />,
      target: "_blank",
      rel: "noopener noreferrer",
    },
    {
      id: 2,
      href: "https://github.com/jega1312",
      icon: <FiGithub size={20} className="text-green-500" />,
      target: "_blank",
      rel: "noopener noreferrer",
    },
    {
      id: 3,
      href: "https://www.linkedin.com/in/jegathiswaran-thiaghu/",
      icon: <SlSocialLinkedin size={20} className="text-green-500" />,
      target: "_blank",
      rel: "noopener noreferrer",
    },
  ];

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
              Get in touch
            </motion.h1>
            <motion.p
              ref={subHeadingRef}
              initial={{ opacity: 0 }}
              animate={subHeadingInView ? { opacity: 1 } : {}}
              transition={{ duration: 1.0, ease: "easeOut" }}
              className="text-base text-center text-slate-600 sora-regular text-balance w-[90%] mx-auto"
            >
              Have a question or feedback? We'd love to hear from you. Send us a
              message and we'll respond as soon as possible.
            </motion.p>
          </div>
        </div>
      </section>
      {/* Header Section Ends */}

      {/* Form Section Starts */}
      <section className="w-full py-20 bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 h-full w-[90%] mx-auto gap-20 md:gap-10 lg:gap-0">
          {/* Left Content */}
          <div className="flex flex-col items-start justify-center w-full h-full gap-5">
            {/* Form Container */}
            <div className="flex items-center justify-center w-[90%] md:w-full h-full md:p-10 mx-auto">
              {/* Registration Form */}
              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center w-full h-full px-5 py-10 bg-white border-2 border-green-500 shadow-xl sm:px-10 rounded-2xl min-h-100 gap-5">
                  <IoCheckmarkCircle size={60} className="text-green-500" />
                  <h3 className="text-2xl text-center text-green-500 sora-bold">
                    We’ve got your message!
                  </h3>
                  <p className="text-base text-center sora-regular">
                    Thanks for reaching out. Our team will be in touch with you
                    shortly.
                  </p>
                </div>
              ) : (
                <motion.form
                  ref={formRef}
                  variants={formVariants}
                  initial="hidden"
                  animate={formInView ? "visible" : "hidden"}
                  onSubmit={handleSubmit(
                    (data) => {
                      if (!phone || phone.replace(/\D/g, "").length < 8) {
                        setPhoneError("Enter a valid phone number");
                        return;
                      }

                      setIsSubmitted(true);

                       reset();
                       setPhone("");
                       setPhoneError("");

                      console.log({ ...data, phone });
                    },
                    () => {
                      if (!phone || phone.replace(/\D/g, "").length < 8) {
                        setPhoneError("Enter a valid phone number");
                      }
                    },
                  )}
                  className="flex flex-col items-center justify-between w-full h-full gap-8 px-5 py-10 bg-white border-2 border-green-500 shadow-2xl sm:px-10 rounded-2xl"
                >
                  {/* Name Input */}
                  <div className="relative w-full">
                    <input
                      type="text"
                      id="name"
                      placeholder=" "
                      onFocus={() => setNameFocused(true)}
                      {...register("name", {
                        required: "Full name is required",
                        minLength: {
                          value: 3,
                          message: "Name must be at least 3 characters",
                        },
                        onBlur: () => setNameFocused(false),
                      })}
                      className={`h-12 w-full rounded-lg border bg-transparent px-3 py-5 text-green-500 outline-none transition duration-300 ease-in-out sora-regular text-sm ${
                        errors.name
                          ? "border-red-500 focus:border-red-500 caret-red-500"
                          : "border-slate-300 focus:border-green-500 caret-green-500"
                      }`}
                    />
                    <label
                      htmlFor="name"
                      className={`sora-regular absolute left-3 transition-all duration-300 pointer-events-none text-xs
                ${
                  nameFocused || nameValue || errors.name
                    ? "-top-2 bg-white px-1"
                    : "top-1/2 -translate-y-1/2 sm:text-sm"
                }
                ${errors.name ? "text-red-500" : nameFocused || nameValue ? "text-green-500" : "text-slate-500"}`}
                    >
                      Full Name
                    </label>
                    {errors.name && (
                      <p className="mt-2 text-xs text-red-500 sora-regular">
                        {errors.name.message}
                      </p>
                    )}
                  </div>

                  {/* Email Input */}
                  <div className="relative w-full">
                    <input
                      type="email"
                      id="email"
                      placeholder=" "
                      onFocus={() => setEmailFocused(true)}
                      {...register("email", {
                        required: "Email address is required",
                        pattern: {
                          value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                          message: "Enter a valid email address",
                        },
                        onBlur: () => setEmailFocused(false),
                      })}
                      className={`h-12 w-full rounded-lg border  bg-transparent px-3 py-5 text-green-500 outline-none transition duration-300 ease-in-out sora-regular text-sm ${
                        errors.email
                          ? "border-red-500 focus:border-red-500 caret-red-500"
                          : "border-slate-300 focus:border-green-500 caret-green-500"
                      }`}
                    />
                    <label
                      htmlFor="email"
                      className={`sora-regular absolute left-3 transition-all duration-300 pointer-events-none text-xs
                ${
                  emailFocused || emailValue || errors.email
                    ? "-top-2 bg-white px-1"
                    : "top-1/2 -translate-y-1/2 sm:text-sm"
                }
                ${errors.email ? "text-red-500" : emailFocused || emailValue ? "text-green-500" : "text-slate-500"}`}
                    >
                      Email Address
                    </label>
                    {errors.email && (
                      <p className="mt-2 text-xs text-red-500 sora-regular">
                        {errors.email.message}
                      </p>
                    )}
                  </div>

                  {/* Phone Number Input */}
                  <div
                    className={`relative w-full ${phoneError ? "phone-error" : ""}`}
                  >
                    <PhoneInput
                      defaultCountry="my"
                      value={phone}
                      onChange={(phone, meta) => {
                        setPhone(phone);
                        const hasTyped = phone !== `+${meta.country.dialCode}`;
                        setHasInput(hasTyped);

                        if (!hasTyped) {
                          setPhoneError("");
                          return;
                        }

                        if (phone.length < 8) {
                          setPhoneError("Enter a valid phone number");
                        } else {
                          setPhoneError("");
                        }
                      }}
                      onFocus={() => setIsFocused(true)}
                      onBlur={() => {
                        setIsFocused(false);
                        if (hasInput && phone.length < 8) {
                          setPhoneError("Enter a valid phone number");
                        }
                      }}
                    />
                    <label
                      className={`sora-regular bg-white absolute z-10 transition-all duration-300 pointer-events-none
                ${
                  isFocused || hasInput || phoneError
                    ? "-top-2 left-3 text-xs px-1"
                    : "left-14 top-1/2 -translate-y-1/2 text-slate-500 text-xs sm:text-sm"
                }  ${phoneError ? "text-red-500" : isFocused || hasInput ? "text-green-500" : "text-slate-500"}`}
                    >
                      Phone Number
                    </label>
                    {phoneError && (
                      <p className="mt-2 text-xs text-red-500 sora-regular">
                        {phoneError}
                      </p>
                    )}
                  </div>

                  {/* Subject Input */}
                  <div className="relative w-full">
                    <input
                      type="text"
                      id="subject"
                      placeholder=" "
                      onFocus={() => setSubjectFocused(true)}
                      {...register("subject", {
                        required: "Subject is required",
                        onBlur: () => setSubjectFocused(false),
                      })}
                      className={`h-12 w-full rounded-lg border  bg-transparent px-3 py-5 text-green-500 outline-none transition duration-300 ease-in-out sora-regular text-sm ${
                        errors.subject
                          ? "border-red-500 focus:border-red-500 caret-red-500"
                          : "border-slate-300 focus:border-green-500 caret-green-500"
                      }`}
                    />
                    <label
                      htmlFor="subject"
                      className={`sora-regular absolute left-3 transition-all duration-300 pointer-events-none text-xs
                ${
                  subjectFocused || subjectValue || errors.subject
                    ? "-top-2 bg-white px-1"
                    : "top-1/2 -translate-y-1/2 sm:text-sm"
                }
                ${errors.subject ? "text-red-500" : subjectFocused || subjectValue ? "text-green-500" : "text-slate-500"}`}
                    >
                      Subject
                    </label>
                    {errors.subject && (
                      <p className="mt-2 text-xs text-red-500 sora-regular">
                        {errors.subject.message}
                      </p>
                    )}
                  </div>

                  {/* Message Textarea */}
                  <div className="relative w-full">
                    <textarea
                      id="message"
                      placeholder=" "
                      onFocus={() => setMessageFocused(true)}
                      {...register("message", {
                        required: "Message is required",
                        onBlur: () => setMessageFocused(false),
                      })}
                      className={`w-full min-h-40 rounded-lg border bg-transparent px-3 py-3 text-green-500 outline-none transition duration-300 ease-in-out sora-regular text-sm resize-none ${
                        errors.message
                          ? "border-red-500 focus:border-red-500 caret-red-500"
                          : "border-slate-300 focus:border-green-500 caret-green-500"
                      }`}
                    />

                    <label
                      htmlFor="message"
                      className={`sora-regular absolute left-3 transition-all duration-300 pointer-events-none text-xs
                      ${
                        messageFocused || messageValue || errors.message
                          ? "-top-2 bg-white px-1"
                          : "top-3 sm:text-sm"
                      }
                      ${
                        errors.message
                          ? "text-red-500"
                          : messageFocused || messageValue
                            ? "text-green-500"
                            : "text-slate-500"
                      }`}
                    >
                      Message
                    </label>

                    {errors.message && (
                      <p className="mt-2 text-xs text-red-500 sora-regular">
                        {errors.message.message}
                      </p>
                    )}
                  </div>

                  {/* Register Button */}
                  <button
                    type="submit"
                    className="w-full h-12 text-sm text-white transition duration-300 ease-in-out bg-green-500 rounded-md sm:text-base sora-regular hover:text-slate-950 hover:cursor-pointer hover:shadow-xl"
                  >
                    Send Message
                  </button>
                </motion.form>
              )}
            </div>
          </div>

          {/* Right Content */}
          <div className="flex flex-col items-center w-[90%] md:w-full h-full mx-auto justify-between gap-10 lg:p-10">
            {/* First Container */}
            <motion.div
              ref={contactRef}
              initial={{ opacity: 0, x: 20 }}
              animate={contactInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 1.0, ease: "easeOut" }}
              className="w-full md:w-[90%] lg:w-full mx-auto h-auto p-8 bg-green-500 rounded-2xl shadow-lg"
            >
              <div className="flex flex-col w-full gap-5">
                <h2 className="text-xl text-white sora-bold">
                  Contact Information
                </h2>

                <div className="flex flex-col items-start gap-4">
                  {contactInfo.map((contact) => (
                    <div key={contact.id} className="flex items-start gap-3">
                      <div className="flex items-center p-3 rounded-lg bg-slate-950">
                        {contact.icon}
                      </div>
                      <div className="flex flex-col gap-1">
                        <h3 className="text-base md:text-lg text-slate-950 sora-semibold">
                          {contact.heading}
                        </h3>
                        <div className="flex flex-col justify-center">
                          <p className="text-sm md:text-base text-slate-100 dm-regular text-balance">
                            {contact.info}
                          </p>
                          <p className="text-sm md:text-base text-slate-100 dm-regular text-balance">
                            {contact.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Second Container */}
            <motion.div
              ref={socialContentRef}
              initial={{ opacity: 0, x: 20 }}
              animate={socialContentInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 1.0, ease: "easeOut" }}
              className="w-full md:w-[90%] lg:w-full mx-auto h-auto p-8 bg-green-500 rounded-2xl shadow-lg"
            >
              <div className="flex flex-col w-full gap-5">
                <div className="flex flex-col gap-4">
                  <h2 className="text-xl text-white sora-bold">Follow Us</h2>
                  <p className="text-sm md:text-base text-slate-100 dm-regular w-[90%]">
                    Stay updated with our latest features, tips, and language
                    learning content.
                  </p>
                </div>

                <motion.div
                  ref={socialRef}
                  variants={socialContainerVariants}
                  initial="hidden"
                  animate={socialInView ? "visible" : "hidden"}
                  className="flex items-start gap-4"
                >
                  {socialLinks.map((social) => (
                    <motion.a
                      key={social.id}
                      href={social.href}
                      target={social.target}
                      rel={social.rel}
                      variants={socialItemVariants}
                      className="flex items-start gap-3"
                    >
                      <div className="flex items-center p-3 rounded-lg bg-slate-950 hover:cursor-pointer hover:bg-white transition duration-300 ease-in-out shadow-2xl">
                        {social.icon}
                      </div>
                    </motion.a>
                  ))}
                </motion.div>
              </div>
            </motion.div>

            {/* Third Container */}
            <motion.div
              ref={needHelpRef}
              initial={{ opacity: 0, x: 20 }}
              animate={needHelpInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 1.0, ease: "easeOut" }}
              className="w-full md:w-[90%] lg:w-full mx-auto h-auto p-8 bg-green-500 rounded-2xl shadow-lg"
            >
              <div className="flex flex-col w-full gap-5">
                <div className="flex flex-col gap-4">
                  <h2 className="text-xl text-white sora-bold">
                    Need Help Fast?
                  </h2>
                  <p className="text-sm md:text-base text-slate-100 dm-regular w-[90%]">
                    Check out our Help Center for instant answers to common
                    questions.
                  </p>
                </div>

                <Link to="*">
                  <button className="flex gap-4 px-4 py-3 text-sm text-green-500 transition duration-300 ease-in-out bg-white rounded w-fit hover:bg-slate-950 hover:cursor-pointer sora-medium">
                    Visit Help Center
                  </button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* Form Section Ends */}

      {/* Map Section Starts */}
      <section className="w-full py-20 bg-slate-50 flex justify-center items-center">
        <motion.div
          ref={mapRef}
          initial={{ opacity: 0 }}
          animate={mapInView ? { opacity: 1 } : {}}
          transition={{ duration: 1.0, ease: "easeOut" }}
          className="w-full h-full"
        >
          <iframe
            title="Location Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3152.4226125588425!2d-122.40693502460223!3d37.803569010501576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808580f708720425%3A0xf5b625cd44cd912a!2s123%20Street%2C%20San%20Francisco%2C%20CA%2094103%2C%20USA!5e0!3m2!1sen!2smy!4v1777000973914!5m2!1sen!2smy"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="min-h-96 rounded-2xl w-[80%] mx-auto"
          ></iframe>
        </motion.div>
      </section>
      {/* Map Section Starts */}
    </>
  );
};

export default Contact;
