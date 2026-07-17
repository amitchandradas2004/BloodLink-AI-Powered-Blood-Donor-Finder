"use client";

import * as React from "react";
import { motion, useInView } from "framer-motion";
import { Users, HeartHandshake, Map } from "lucide-react";

interface CounterProps {
  target: number;
  duration?: number;
}

function StatCounter({ target, duration = 1.5 }: CounterProps) {
  const [count, setCount] = React.useState(0);
  const ref = React.useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  React.useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = target;
    const incrementTime = 25; // Interval time in ms
    const totalSteps = (duration * 1000) / incrementTime;
    const stepValue = end / totalSteps;

    const timer = setInterval(() => {
      start += stepValue;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [isInView, target, duration]);

  return <span ref={ref}>{count.toLocaleString()}</span>;
}

export default function LiveStats() {
  const stats = [
    {
      label: "Donors Registered",
      value: 142850,
      suffix: "+",
      icon: Users,
      description: "Active volunteers ready to answer critical requests.",
    },
    {
      label: "Requests Fulfilled",
      value: 98420,
      suffix: "+",
      icon: HeartHandshake,
      description: "Life-saving donor-recipient connections completed.",
    },
    {
      label: "Cities Covered",
      value: 420,
      suffix: "+",
      icon: Map,
      description: "Providing regional support across major metropolitan areas.",
    },
  ];

  return (
    <section id="live-stats" className="relative py-16 bg-neutral-100 dark:bg-neutral-900/10 border-b border-neutral-200 dark:border-neutral-800 overflow-hidden transition-colors duration-300">
      
      {/* Decorative Blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full bg-brand-red/5 dark:bg-brand-red/10 blur-[120px] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white border border-neutral-200 dark:bg-neutral-900 dark:border-neutral-800 rounded-3xl p-8 text-center flex flex-col items-center justify-between shadow-lg hover:shadow-2xl hover:border-brand-red/20 dark:hover:border-brand-red/30 transition-all duration-300"
              >
                {/* Icon Wrapper */}
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-red/10 text-brand-red mb-6 border border-brand-red/20 shadow-inner">
                  <Icon className="h-7 w-7" />
                </div>

                {/* Big Counter */}
                <div className="text-4xl sm:text-5xl font-black tracking-tight text-neutral-900 dark:text-white mb-2">
                  <StatCounter target={stat.value} />
                  <span className="text-brand-red">{stat.suffix}</span>
                </div>

                {/* Labels */}
                <h3 className="text-lg font-bold text-neutral-800 dark:text-neutral-200 mb-2">
                  {stat.label}
                </h3>
                <p className="text-xs text-neutral-500 dark:text-neutral-400 max-w-xs leading-relaxed">
                  {stat.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
