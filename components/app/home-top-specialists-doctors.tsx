"use client";
import Image from "next/image";
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/hooks/use-outside-click";

export function HomeTopSpecialistsDoctors() {
  const [active, setActive] = useState<(typeof cards)[number] | boolean | null>(
    null
  );
  const ref = useRef<HTMLDivElement>(null);
  const id = useId();

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <>
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-10"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0  grid place-items-center z-[100]">
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
                transition: {
                  duration: 0.05,
                },
              }}
              className="flex  absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-full max-w-[500px]  h-full md:h-fit md:max-h-[90%]  flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden"
            >
              <motion.div layoutId={`image-${active.title}-${id}`}>
                <Image
                  priority
                  width={500}
                  height={500}
                  src={active.src}
                  alt={active.title}
                  className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg "
                />
              </motion.div>

              <div>
                <div className="flex justify-between items-start p-4">
                  <div className="">
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="font-bold text-neutral-700 dark:text-neutral-200"
                    >
                      {active.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.description}-${id}`}
                      className="text-neutral-600 dark:text-neutral-400"
                    >
                      {active.description}
                    </motion.p>
                  </div>

                  <motion.a
                    layoutId={`button-${active.title}-${id}`}
                    href={active.ctaLink}
                    target="_blank"
                    className="px-4 py-3 text-sm rounded-full font-bold bg-orange-400 text-white"
                  >
                    {active.ctaText}
                  </motion.a>
                </div>
                <div className="pt-4 relative px-4">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-neutral-600 text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400 [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
                  >
                    {typeof active.content === "function"
                      ? active.content()
                      : active.content}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <ul className="max-w-5xl mx-auto w-full gap-4 space-y-4 ">
        {cards.map((card, index) => (
          <motion.div
            layoutId={`card-${card.title}-${id}`}
            key={`card-${card.title}-${id}`}
            onClick={() => setActive(card)}
            className="p-4 flex flex-col md:flex-row justify-between items-center border border-gray-500/20 md:border-gray-500/50  hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-xl cursor-pointer"
          >
            <div className="flex gap-4 flex-col md:flex-row ">
              <motion.div layoutId={`image-${card.title}-${id}`}>
                <Image
                  width={300}
                  height={300}
                  src={card.src}
                  alt={card.title}
                  className="h-40 w-40 md:h-30 md:w-30 rounded-lg object-cover object-top"
                />
              </motion.div>
              <div className="flex flex-col justify-center">
                <motion.h3
                  layoutId={`title-${card.title}-${id}`}
                  className="font-medium text-neutral-800 dark:text-neutral-200 text-center md:text-left"
                >
                  {card.title}
                </motion.h3>
                <motion.p
                  layoutId={`description-${card.description}-${id}`}
                  className="text-neutral-600 dark:text-neutral-400 text-center md:text-left"
                >
                  {card.description}
                </motion.p>
              </div>
            </div>
            <motion.button
              layoutId={`button-${card.title}-${id}`}
              className="px-4 py-2 text-sm rounded-full font-bold bg-gray-100 hover:bg-orange-400 hover:text-white text-black mt-4 md:mt-0"
            >
              {card.ctaText}
            </motion.button>
          </motion.div>
        ))}
      </ul>
    </>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};

const cards = [
  {
    title: "Cardiologist",
    description: "Dr. John Smith",
    src: "/assets/img6.jpg",
    ctaText: "Check",
    ctaLink: "/",
    content: () => {
      return (
        <p>
          Dr. John Smith is a renowned cardiologist with over 20 years of
          experience in diagnosing and treating heart conditions. He completed
          his medical degree at Harvard Medical School and his residency at the
          Mayo Clinic. <br /> <br /> Dr. Smith specializes in interventional
          cardiology and has a keen interest in preventive cardiology. His
          patients appreciate his compassionate approach and dedication to
          improving heart health through advanced medical treatments and
          lifestyle modifications.
        </p>
      );
    },
  },
  {
    title: "Neurologist",
    description: "Dr. Emily Johnson",
    src: "/assets/img7.jpg",
    ctaText: "Check",
    ctaLink: "/",
    content: () => {
      return (
        <p>
          Dr. Emily Johnson is a distinguished neurologist who has been
          practicing for over 15 years. She earned her medical degree from
          Stanford University School of Medicine and completed her residency at
          Johns Hopkins Hospital. <br /> <br /> Dr. Johnson specializes in
          treating neurological disorders such as epilepsy, multiple sclerosis,
          and Parkinson's disease. Her holistic approach to patient care and her
          commitment to staying abreast of the latest medical advancements make
          her a trusted expert in her field.
        </p>
      );
    },
  },

  {
    title: "Orthopedic Surgeon",
    description: "Dr. Michael Brown",
    src: "/assets/img8.jpg",
    ctaText: "Check",
    ctaLink: "/",
    content: () => {
      return (
        <p>
          Dr. Michael Brown is a highly skilled orthopedic surgeon with over 18
          years of experience. He received his medical training at the
          University of California, San Francisco, and completed his residency
          at the Cleveland Clinic. <br /> <br /> Dr. Brown specializes in joint
          replacement surgery and sports medicine. His expertise in minimally
          invasive surgical techniques and his commitment to patient
          rehabilitation have earned him a reputation for excellence in
          orthopedic care.
        </p>
      );
    },
  },
  {
    title: "Dermatologist",
    description: "Dr. Sarah Lee",
    src: "/assets/img9.jpg",
    ctaText: "Check",
    ctaLink: "/",
    content: () => {
      return (
        <p>
          Dr. Sarah Lee is a board-certified dermatologist with over 12 years of
          experience in treating a wide range of skin conditions. She graduated
          from Yale School of Medicine and completed her residency at
          NewYork-Presbyterian Hospital. <br /> <br /> Dr. Lee's areas of
          expertise include acne treatment, skin cancer detection and treatment,
          and cosmetic dermatology. She is known for her personalized approach
          to patient care and her commitment to using the latest dermatological
          technologies.
        </p>
      );
    },
  },
  {
    title: "Pediatrician",
    description: "Dr. David Williams",
    src: "/assets/img10.jpg",
    ctaText: "Check",
    ctaLink: "/",
    content: () => {
      return (
        <p>
          Dr. David Williams is a compassionate pediatrician with over 10 years
          of experience in providing medical care to children. He earned his
          medical degree from the University of Pennsylvania School of Medicine
          and completed his residency at Children's Hospital of Philadelphia.{" "}
          <br /> <br /> Dr. Williams specializes in childhood development,
          preventive care, and the treatment of common pediatric illnesses.
          Parents trust his gentle approach and dedication to ensuring the
          health and well-being of their children.
        </p>
      );
    },
  },
];
