"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { FileText, Radio, ShieldCheck } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      step: "01",
      title: "Submit Blood Request",
      description: "Provide the required blood group, hospital location, and point of contact. Our system instantly verifies the details.",
      icon: FileText,
      colorClass: "bg-brand-red/10 text-brand-red dark:bg-brand-red/20",
    },
    {
      step: "02",
      title: "AI-Powered Dispatching",
      description: "Our matching engine identifies and alerts verified active donors closest to the requested hospital location.",
      icon: Radio,
      colorClass: "bg-brand-teal/10 text-brand-teal dark:bg-brand-teal/20",
    },
    {
      step: "03",
      title: "Connect & Save Lives",
      description: "Recipients coordinate directly with responding donors to organize immediate blood donations and save a life.",
      icon: ShieldCheck,
      colorClass: "bg-brand-blue/10 text-brand-blue dark:bg-brand-blue/20",
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  } as const;

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 18,
      },
    },
  } as const;

  return (
    <section id="how-it-works" className="py-20 bg-neutral-50 dark:bg-neutral-900/20 border-y border-neutral-200/80 dark:border-neutral-800/80 transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h2 className="text-3xl font-extrabold tracking-tight text-neutral-900 dark:text-white sm:text-4xl">
            How it Works
          </h2>
          <div className="w-12 h-1 bg-brand-red mx-auto rounded-full" />
          <p className="text-lg text-neutral-600 dark:text-neutral-400 font-medium">
            A simplified, secure process designed to link emergency blood seekers with volunteer donors in minutes.
          </p>
        </div>

        {/* Steps Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {steps.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                className="relative bg-white dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800/80 rounded-3xl p-8 shadow-md hover:shadow-2xl dark:hover:shadow-neutral-950/50 hover:border-brand-red/25 dark:hover:border-brand-red/35 transition-all duration-300 group hover:-translate-y-1.5"
              >
                {/* Step Index Badge */}
                <span className="absolute top-6 right-8 text-5xl font-black text-neutral-100 dark:text-neutral-800 group-hover:text-brand-red/10 transition-colors duration-300 select-none">
                  {item.step}
                </span>

                {/* Icon Box */}
                <div className={`flex h-12 w-12 items-center justify-center rounded-2xl ${item.colorClass} mb-6`}>
                  <Icon className="h-6 w-6" />
                </div>

                {/* Title & Description */}
                <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
