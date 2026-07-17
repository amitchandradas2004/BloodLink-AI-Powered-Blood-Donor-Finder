"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

interface Testimonial {
  name: string;
  role: "Recipient" | "Donor" | "Family Member";
  story: string;
  bloodGroup: string;
  initials: string;
  colorClass: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Amit Chandra Das",
    role: "Recipient",
    story: "During an emergency surgery last month, my blood type (O-) was out of stock. BloodLink matched us with two nearby donors within 15 minutes. Their prompt action saved my life.",
    bloodGroup: "O-",
    initials: "AD",
    colorClass: "bg-red-500/10 text-red-650 dark:bg-red-500/20 dark:text-red-400",
  },
  {
    name: "Sarah Connor",
    role: "Donor",
    story: "I love how easy BloodLink makes it to volunteer. The instant SMS notification lets me know exactly when someone in my neighborhood needs help. It's direct, verified, and impactful.",
    bloodGroup: "A+",
    initials: "SC",
    colorClass: "bg-teal-500/10 text-teal-655 dark:bg-teal-500/20 dark:text-teal-400",
  },
  {
    name: "Elena Rostova",
    role: "Family Member",
    story: "My father needed urgent AB- blood for a coronary operation in Chicago. We registered the request on BloodLink, and the AI dispatcher paired us with a volunteer donor instantly. Truly grateful.",
    bloodGroup: "AB-",
    initials: "ER",
    colorClass: "bg-blue-500/10 text-blue-650 dark:bg-blue-500/20 dark:text-blue-400",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-white dark:bg-neutral-950 transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h2 className="text-3xl font-extrabold tracking-tight text-neutral-900 dark:text-white sm:text-4xl">
            Stories of Hope
          </h2>
          <div className="w-12 h-1 bg-brand-red mx-auto rounded-full" />
          <p className="text-lg text-neutral-600 dark:text-neutral-400 font-medium">
            Hear from recipients, families, and volunteer donors who have experienced the power of instant matching.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="bg-neutral-50/50 dark:bg-neutral-900/50 backdrop-blur-sm border border-neutral-200/80 dark:border-neutral-800/80 rounded-3xl p-8 flex flex-col justify-between hover:shadow-2xl hover:border-brand-red/25 dark:hover:border-brand-red/35 transition-all duration-300 relative group hover:-translate-y-1.5"
            >
              <Quote className="absolute top-6 right-8 h-8 w-8 text-neutral-200 dark:text-neutral-800 group-hover:text-brand-red/10 transition-colors duration-300 pointer-events-none" />

              <div>
                {/* Stars rating */}
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4.5 w-4.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                <p className="text-sm sm:text-base leading-relaxed text-neutral-700 dark:text-neutral-350 italic mb-6">
                  &quot;{item.story}&quot;
                </p>
              </div>

              {/* User profile section */}
              <div className="flex items-center gap-4 pt-6 border-t border-neutral-200/50 dark:border-neutral-800/50">
                <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full font-bold text-sm ${item.colorClass}`}>
                  {item.initials}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-neutral-900 dark:text-white flex items-center gap-1.5">
                    {item.name}
                    <span className="inline-flex items-center justify-center px-1.5 py-0.5 rounded-md bg-brand-red/10 text-brand-red text-[10px] font-extrabold uppercase">
                      {item.bloodGroup}
                    </span>
                  </h4>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400 font-medium">
                    {item.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
