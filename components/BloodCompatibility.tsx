"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Award, ArrowRightLeft } from "lucide-react";

interface Compatibility {
  donateTo: string[];
  receiveFrom: string[];
  description: string;
}

const compatibilityMap: Record<string, Compatibility> = {
  "O-": {
    donateTo: ["O-", "O+", "A-", "A+", "B-", "B+", "AB-", "AB+"],
    receiveFrom: ["O-"],
    description: "Universal Donor: O- can be given to anyone in an emergency, but O- individuals can only receive O- blood.",
  },
  "O+": {
    donateTo: ["O+", "A+", "B+", "AB+"],
    receiveFrom: ["O-", "O+"],
    description: "Most Common Type: O+ is the most common blood type, critical for transfusion to positive blood types.",
  },
  "A-": {
    donateTo: ["A-", "A+", "AB-", "AB+"],
    receiveFrom: ["O-", "A-"],
    description: "Rare Match: Critical type for patients with A- or AB- blood. Can receive from O- and A-.",
  },
  "A+": {
    donateTo: ["A+", "AB+"],
    receiveFrom: ["O-", "O+", "A-", "A+"],
    description: "Highly Needed: One of the most common groups. Can receive from all positive/negative O and A types.",
  },
  "B-": {
    donateTo: ["B-", "B+", "AB-", "AB+"],
    receiveFrom: ["O-", "B-"],
    description: "Rare Type: Less than 2% of the population has B- blood. Highly valuable for matching patients.",
  },
  "B+": {
    donateTo: ["B+", "AB+"],
    receiveFrom: ["O-", "O+", "B-", "B+"],
    description: "Important Type: Can receive blood from O and B positive or negative donors.",
  },
  "AB-": {
    donateTo: ["AB-", "AB+"],
    receiveFrom: ["O-", "A-", "B-", "AB-"],
    description: "Rarest Type: The rarest blood type. Can receive from all negative blood types.",
  },
  "AB+": {
    donateTo: ["AB+"],
    receiveFrom: ["O-", "O+", "A-", "A+", "B-", "B+", "AB-", "AB+"],
    description: "Universal Recipient: AB+ individuals can safely receive red blood cells from any blood type.",
  },
};

export default function BloodCompatibility() {
  const [selectedGroup, setSelectedGroup] = React.useState("O-");
  const listGroups = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];

  const activeCompat = compatibilityMap[selectedGroup];

  return (
    <section id="compatibility" className="py-20 bg-white dark:bg-neutral-950 transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h2 className="text-3xl font-extrabold tracking-tight text-neutral-900 dark:text-white sm:text-4xl">
            Blood Type Compatibility
          </h2>
          <div className="w-12 h-1 bg-brand-red mx-auto rounded-full" />
          <p className="text-lg text-neutral-600 dark:text-neutral-400 font-medium">
            Understanding donor compatibility is crucial. Select a blood type below to explore safe donation matching.
          </p>
        </div>

        {/* Compatibility Matrix Container */}
        <div className="mt-16 grid gap-12 lg:grid-cols-12 items-start">
          
          {/* Left Panel: Selection Grid */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-neutral-50/50 dark:bg-neutral-900/60 backdrop-blur-sm border border-neutral-200/80 dark:border-neutral-800/80 p-6 rounded-3xl shadow-lg">
              <h3 className="text-lg font-bold text-neutral-900 dark:text-white mb-4 flex items-center gap-2">
                <ArrowRightLeft className="h-5 w-5 text-brand-red" />
                Select Blood Type
              </h3>
              
              <div className="grid grid-cols-4 gap-3">
                {listGroups.map((group) => {
                  const isSelected = selectedGroup === group;
                  return (
                    <button
                      key={group}
                      onClick={() => setSelectedGroup(group)}
                      className={`h-14 rounded-2xl font-bold text-base transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-brand-red/50 ${
                        isSelected
                          ? "bg-brand-red text-white shadow-lg shadow-brand-red/30 scale-105 border border-transparent"
                          : "bg-white dark:bg-neutral-800 border border-neutral-250/70 dark:border-neutral-700 hover:border-brand-red/40 hover:bg-neutral-50 dark:hover:bg-neutral-750 text-neutral-800 dark:text-neutral-250 shadow-sm"
                      }`}
                    >
                      {group}
                    </button>
                  );
                })}
              </div>

              {/* Description box */}
              <div className="mt-6 p-4 rounded-2xl bg-brand-red/5 dark:bg-brand-red/10 border border-brand-red/20 text-xs sm:text-sm text-neutral-750 dark:text-neutral-300 leading-relaxed flex items-start gap-3 shadow-inner">
                <Award className="h-5 w-5 text-brand-red shrink-0 mt-0.5" />
                <p>{activeCompat.description}</p>
              </div>
            </div>
          </div>

          {/* Right Panel: Result visualization */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Can Donate To Section */}
            <div className="border border-neutral-200/80 dark:border-neutral-800/85 p-6 rounded-3xl bg-neutral-50/40 dark:bg-neutral-900/30 shadow-md">
              <h4 className="text-md font-bold text-neutral-900 dark:text-white mb-4 flex items-center gap-2">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-brand-red text-white text-xs font-bold">✓</span>
                Can Donate To:
              </h4>
              <div className="grid grid-cols-4 sm:grid-cols-8 gap-3">
                {listGroups.map((group) => {
                  const canDonate = activeCompat.donateTo.includes(group);
                  return (
                    <motion.div
                      key={`donate-${group}`}
                      animate={{ scale: canDonate ? 1.05 : 1 }}
                      className={`h-12 rounded-xl flex items-center justify-center font-bold text-sm border transition-all duration-300 ${
                        canDonate
                          ? "bg-emerald-50/90 dark:bg-emerald-950/40 border-emerald-500 text-emerald-700 dark:text-emerald-400 shadow-md shadow-emerald-500/5 font-extrabold"
                          : "bg-neutral-100/50 dark:bg-neutral-800/20 border-neutral-200/50 dark:border-neutral-800/80 text-neutral-400 dark:text-neutral-600 opacity-50"
                      }`}
                    >
                      {group}
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Can Receive From Section */}
            <div className="border border-neutral-200/80 dark:border-neutral-800/85 p-6 rounded-3xl bg-neutral-50/40 dark:bg-neutral-900/30 shadow-md">
              <h4 className="text-md font-bold text-neutral-900 dark:text-white mb-4 flex items-center gap-2">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-brand-teal text-white text-xs font-bold">✓</span>
                Can Receive From:
              </h4>
              <div className="grid grid-cols-4 sm:grid-cols-8 gap-3">
                {listGroups.map((group) => {
                  const canReceive = activeCompat.receiveFrom.includes(group);
                  return (
                    <motion.div
                      key={`receive-${group}`}
                      animate={{ scale: canReceive ? 1.05 : 1 }}
                      className={`h-12 rounded-xl flex items-center justify-center font-bold text-sm border transition-all duration-300 ${
                        canReceive
                          ? "bg-brand-teal/15 dark:bg-brand-teal/20 border-brand-teal text-brand-teal dark:text-brand-teal-hover shadow-md shadow-brand-teal/5 font-extrabold"
                          : "bg-neutral-100/50 dark:bg-neutral-800/20 border-neutral-200/50 dark:border-neutral-800/80 text-neutral-400 dark:text-neutral-600 opacity-50"
                      }`}
                    >
                      {group}
                    </motion.div>
                  );
                })}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
