"use client";

import * as React from "react";
import { Clock, MapPin, Phone } from "lucide-react";

interface EmergencyRequest {
  id: number;
  name: string;
  group: string;
  hospital: string;
  location: string;
  urgency: "Critical" | "High" | "Normal";
  time: string;
  phone: string;
}

const urgentRequests: EmergencyRequest[] = [
  {
    id: 1,
    name: "Aiden Fletcher",
    group: "O-",
    hospital: "Metropolitan Medical Center",
    location: "Chicago, IL",
    urgency: "Critical",
    time: "Required in 2 hours",
    phone: "+1 (555) 123-0001",
  },
  {
    id: 2,
    name: "Sarah Jenkins",
    group: "AB-",
    hospital: "St. Jude Hospital",
    location: "Memphis, TN",
    urgency: "Critical",
    time: "Required in 3 hours",
    phone: "+1 (555) 123-0002",
  },
  {
    id: 3,
    name: "David Martinez",
    group: "B-",
    hospital: "Mercy Health Hospital",
    location: "Los Angeles, CA",
    urgency: "High",
    time: "Required in 6 hours",
    phone: "+1 (555) 123-0003",
  },
  {
    id: 4,
    name: "Sophia Reynolds",
    group: "A+",
    hospital: "General Health Clinic",
    location: "New York, NY",
    urgency: "Normal",
    time: "Required by tonight",
    phone: "+1 (555) 123-0004",
  },
  {
    id: 5,
    name: "Marcus Vance",
    group: "O+",
    hospital: "St. Luke's Hospital",
    location: "Houston, TX",
    urgency: "High",
    time: "Required in 8 hours",
    phone: "+1 (555) 123-0005",
  },
  {
    id: 6,
    name: "Elena Gilbert",
    group: "A-",
    hospital: "Grace Medical Center",
    location: "Boston, MA",
    urgency: "Critical",
    time: "Required in 4 hours",
    phone: "+1 (555) 123-0006",
  },
];

export default function UrgentRequests() {
  // Duplicate for seamless infinite marquee scroll
  const marqueeItems = [...urgentRequests, ...urgentRequests];

  return (
    <section id="urgent-requests" className="py-20 bg-neutral-50 dark:bg-neutral-900/10 border-b border-neutral-200/50 dark:border-neutral-800/50 overflow-hidden transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h2 className="text-3xl font-extrabold tracking-tight text-neutral-900 dark:text-white sm:text-4xl">
            Urgent Blood Requests
          </h2>
          <div className="w-12 h-1 bg-brand-red mx-auto rounded-full" />
          <p className="text-lg text-neutral-600 dark:text-neutral-400 font-medium">
            Real-time emergency requests. Hover to pause the feed, review details, and connect with families.
          </p>
        </div>

      </div>

      {/* Infinite Scrolling Ticker (Full Width container) */}
      <div className="relative mt-12 w-full overflow-hidden py-4 mask-gradient">
        {/* Shadow Overlays for Fade effects on edges */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-neutral-50 to-transparent dark:from-neutral-950 z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-neutral-50 to-transparent dark:from-neutral-950 z-10" />

        <div className="flex w-max animate-marquee">
          {marqueeItems.map((item, idx) => {
            // Urgency color coding matching theme and dark mode contrast
            let borderClass = "border-neutral-200 dark:border-neutral-800";
            let badgeClass = "bg-neutral-100 text-neutral-700 dark:bg-neutral-800 dark:text-neutral-300";
            let pulseColor = "bg-neutral-500";

            if (item.urgency === "Critical") {
              borderClass = "border-red-500/70 dark:border-red-500/60 shadow-lg shadow-red-500/5";
              badgeClass = "bg-red-50 dark:bg-red-950/30 text-red-600 dark:text-red-400 border border-red-200/50 dark:border-red-800/40";
              pulseColor = "bg-red-500";
            } else if (item.urgency === "High") {
              borderClass = "border-brand-orange/70 dark:border-brand-orange/60 shadow-lg shadow-brand-orange/5";
              badgeClass = "bg-amber-50 dark:bg-amber-950/30 text-brand-orange dark:text-amber-400 border border-amber-200/50 dark:border-amber-800/40";
              pulseColor = "bg-brand-orange";
            } else if (item.urgency === "Normal") {
              borderClass = "border-brand-teal/70 dark:border-brand-teal/60 shadow-lg shadow-brand-teal/5";
              badgeClass = "bg-teal-50 dark:bg-teal-950/30 text-brand-teal dark:text-brand-teal-hover border border-teal-200/50 dark:border-teal-800/40";
              pulseColor = "bg-brand-teal";
            }

            return (
              <div
                key={`${item.id}-${idx}`}
                className={`mx-4 w-[320px] shrink-0 bg-white dark:bg-neutral-900 border rounded-3xl p-6 transition-all duration-300 flex flex-col justify-between hover:scale-[1.02] hover:shadow-xl ${borderClass}`}
              >
                {/* Header */}
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center gap-2">
                    <span className="relative flex h-2 w-2">
                      <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${pulseColor}`} />
                      <span className={`relative inline-flex rounded-full h-2 w-2 ${pulseColor}`} />
                    </span>
                    <span className="text-xs font-bold text-neutral-500 dark:text-neutral-400 uppercase tracking-wider">
                      {item.hospital.split(" ")[0]}
                    </span>
                  </div>
                  
                  <span className={`px-2.5 py-0.5 rounded-full text-xs font-bold ${badgeClass}`}>
                    {item.urgency}
                  </span>
                </div>

                {/* Patient / Blood */}
                <div className="mb-4">
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="text-3xl font-black text-brand-red">
                      {item.group}
                    </span>
                    <span className="text-base font-bold text-neutral-800 dark:text-neutral-100">
                      For {item.name}
                    </span>
                  </div>
                  
                  <div className="space-y-1.5 text-xs text-neutral-500 dark:text-neutral-400 mt-2">
                    <p className="flex items-center gap-1.5 font-medium">
                      <MapPin className="h-3.5 w-3.5 text-neutral-400 shrink-0" />
                      {item.hospital}, {item.location}
                    </p>
                    <p className="flex items-center gap-1.5 font-medium">
                      <Clock className="h-3.5 w-3.5 text-neutral-400 shrink-0" />
                      {item.time}
                    </p>
                  </div>
                </div>

                {/* Call to Action */}
                <a
                  href={`tel:${item.phone}`}
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-2xl text-xs font-bold text-white bg-neutral-900 hover:bg-neutral-800 dark:bg-neutral-800 dark:hover:bg-neutral-750 transition-colors duration-200 shadow-md min-h-[44px]"
                >
                  <Phone className="h-3.5 w-3.5" /> Contact Family
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
