"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, MapPin, CheckCircle, Phone, Heart } from "lucide-react";

interface Donor {
  name: string;
  group: string;
  location: string;
  distance: string;
  status: string;
  phone: string;
}

const mockDonors: Donor[] = [
  { name: "Marcus Carter", group: "O-", location: "New York", distance: "0.4 miles away", status: "Available Now", phone: "+1 (555) 123-4567" },
  { name: "Aria Montgomery", group: "O-", location: "New York", distance: "1.2 miles away", status: "Available Now", phone: "+1 (555) 987-6543" },
  { name: "Darius Vance", group: "A+", location: "Chicago", distance: "0.9 miles away", status: "Available Now", phone: "+1 (555) 234-5678" },
  { name: "Elena Rostova", group: "A+", location: "Chicago", distance: "2.1 miles away", status: "Available Now", phone: "+1 (555) 876-5432" },
  { name: "Kaelen Rivers", group: "B-", location: "Los Angeles", distance: "1.5 miles away", status: "Available Now", phone: "+1 (555) 345-6789" },
  { name: "Liam Chen", group: "AB+", location: "Houston", distance: "0.7 miles away", status: "Available Now", phone: "+1 (555) 765-4321" },
  { name: "Sarah Jenkins", group: "O+", location: "San Francisco", distance: "0.5 miles away", status: "Available Now", phone: "+1 (555) 456-7890" },
  { name: "Oliver Bennett", group: "A-", location: "Miami", distance: "1.8 miles away", status: "Available Now", phone: "+1 (555) 567-8901" }
];

export default function Hero() {
  const [bloodGroup, setBloodGroup] = React.useState("O-");
  const [location, setLocation] = React.useState("");
  const [searchResults, setSearchResults] = React.useState<Donor[] | null>(null);
  const [isSearching, setIsSearching] = React.useState(false);
  const [contactedIndex, setContactedIndex] = React.useState<number | null>(null);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSearching(true);
    setSearchResults(null);

    // Simulate network search latency
    setTimeout(() => {
      const normalizedLocation = location.trim().toLowerCase();
      
      const filtered = mockDonors.filter((donor) => {
        const matchesGroup = donor.group === bloodGroup;
        const matchesLocation = normalizedLocation 
          ? donor.location.toLowerCase().includes(normalizedLocation) 
          : true;
        return matchesGroup && matchesLocation;
      });

      // If no exact match, return some generic ones matching the blood group
      if (filtered.length === 0) {
        const fallback = mockDonors.filter(d => d.group === bloodGroup);
        setSearchResults(fallback.length > 0 ? fallback : mockDonors.slice(0, 2));
      } else {
        setSearchResults(filtered);
      }
      setIsSearching(false);
      
      // Auto scroll to results
      const resultsSection = document.getElementById("search-results-anchor");
      if (resultsSection) {
        resultsSection.scrollIntoView({ behavior: "smooth", block: "nearest" });
      }
    }, 800);
  };

  return (
    <section className="relative min-h-[85vh] flex flex-col justify-center py-16 lg:py-24 overflow-hidden bg-neutral-50 dark:bg-neutral-950 transition-colors duration-300">
      
      {/* Decorative Blob Shapes */}
      <div className="absolute top-1/4 left-1/10 -translate-y-1/2 w-72 h-72 rounded-full bg-brand-red/15 dark:bg-brand-red/10 blur-3xl pointer-events-none animate-float-slow" />
      <div className="absolute bottom-1/4 right-1/10 translate-y-1/2 w-96 h-96 rounded-full bg-brand-teal/15 dark:bg-brand-teal/10 blur-3xl pointer-events-none animate-float-reverse" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full z-10">
        
        {/* Main Content Info */}
        <div className="text-center max-w-3xl mx-auto space-y-6">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-brand-red/10 text-brand-red dark:bg-brand-red/20 font-semibold text-xs uppercase tracking-wider"
          >
            <Heart className="h-3.5 w-3.5 fill-current animate-pulse" /> Real-time Blood Matching
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-neutral-900 dark:text-white"
          >
            Find Blood Donors <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-brand-red to-red-500 bg-clip-text text-transparent">Instantly</span>, Save Lives.
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg lg:text-xl text-neutral-600 dark:text-neutral-400 font-medium"
          >
            Connect directly with verified local blood donors. Fully automated, instant alerts, 100% free, and always accessible in critical moments.
          </motion.p>
        </div>

        {/* Dynamic Search Bar Panel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 max-w-4xl mx-auto"
        >
          <form 
            onSubmit={handleSearch}
            className="bg-white/80 dark:bg-neutral-900/90 backdrop-blur-md p-4 md:p-6 rounded-3xl border border-neutral-200/80 dark:border-neutral-800/80 shadow-2xl flex flex-col md:flex-row gap-4 items-stretch md:items-end justify-between transition-all duration-300 hover:border-brand-red/20 dark:hover:border-brand-red/30 focus-within:ring-1 focus-within:ring-brand-red/20 dark:focus-within:ring-brand-red/30"
          >
            {/* Blood Type Selector */}
            <div className="flex-1 space-y-2">
              <label htmlFor="blood-select" className="block text-sm font-semibold text-neutral-700 dark:text-neutral-300">
                Blood Group Needed
              </label>
              <div className="relative">
                <select
                  id="blood-select"
                  value={bloodGroup}
                  onChange={(e) => setBloodGroup(e.target.value)}
                  className="w-full h-12 px-4 rounded-xl border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 text-neutral-900 dark:text-white font-medium focus:outline-none focus:ring-2 focus:ring-brand-red dark:focus:ring-brand-red/80 focus:border-transparent transition-all cursor-pointer hover:border-neutral-300 dark:hover:border-neutral-600"
                >
                  {["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"].map((group) => (
                    <option key={group} value={group}>
                      {group} Group
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* City/Location Input */}
            <div className="flex-1 space-y-2">
              <label htmlFor="location-input" className="block text-sm font-semibold text-neutral-700 dark:text-neutral-300">
                Current Location (City)
              </label>
              <div className="relative">
                <MapPin className="absolute left-3.5 top-1/2 -translate-y-1/2 h-5 w-5 text-neutral-400 dark:text-neutral-500" />
                <input
                  id="location-input"
                  type="text"
                  placeholder="e.g. New York, Chicago..."
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full h-12 pl-11 pr-4 rounded-xl border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 text-neutral-900 dark:text-white font-medium placeholder-neutral-400 dark:placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-brand-red dark:focus:ring-brand-red/80 focus:border-transparent transition-all hover:border-neutral-300 dark:hover:border-neutral-600"
                />
              </div>
            </div>

            {/* Action Search Button */}
            <div className="md:w-auto">
              <button
                type="submit"
                disabled={isSearching}
                className="w-full h-12 md:px-8 inline-flex items-center justify-center gap-2 text-base font-semibold text-white bg-brand-red rounded-xl hover:bg-brand-red-hover transition-colors duration-200 shadow-md shadow-brand-red/20 focus:outline-none focus:ring-2 focus:ring-brand-red cursor-pointer disabled:opacity-75"
              >
                {isSearching ? (
                  <>
                    <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Searching...
                  </>
                ) : (
                  <>
                    <Search className="h-5 w-5" />
                    Find Donors
                  </>
                )}
              </button>
            </div>
          </form>
        </motion.div>

        {/* Dynamic Search Results Section */}
        <div id="search-results-anchor" className="mt-8">
          <AnimatePresence>
            {searchResults && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.4 }}
                className="max-w-4xl mx-auto bg-white/95 dark:bg-neutral-900/95 border border-neutral-200/80 dark:border-neutral-800/80 rounded-3xl p-6 shadow-2xl transition-colors duration-300 overflow-hidden"
              >
                <div className="flex justify-between items-center border-b border-neutral-100 dark:border-neutral-800 pb-4 mb-4">
                  <h3 className="text-lg font-bold text-neutral-900 dark:text-white flex items-center gap-2">
                    <span className="flex h-2.5 w-2.5 rounded-full bg-emerald-500 animate-ping" />
                    Active Donors Found ({searchResults.length})
                  </h3>
                  <button 
                    onClick={() => setSearchResults(null)}
                    className="text-sm font-semibold text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-250 cursor-pointer"
                  >
                    Clear Results
                  </button>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  {searchResults.map((donor, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.05 }}
                      className="border border-neutral-200 dark:border-neutral-800 p-4 rounded-2xl bg-neutral-50 dark:bg-neutral-900/40 flex justify-between items-center hover:border-brand-red/40 dark:hover:border-brand-red/40 transition-all duration-200 shadow-sm"
                    >
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="inline-flex items-center justify-center px-2 py-0.5 rounded-lg bg-brand-red text-white text-xs font-bold">
                            {donor.group}
                          </span>
                          <span className="font-semibold text-neutral-900 dark:text-white">
                            {donor.name}
                          </span>
                        </div>
                        <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1 flex items-center gap-1">
                          <MapPin className="h-3 w-3" /> {donor.location} ({donor.distance})
                        </p>
                      </div>

                      <div>
                        {contactedIndex === idx ? (
                          <div className="flex items-center gap-1 text-emerald-600 dark:text-emerald-400 font-semibold text-sm">
                            <CheckCircle className="h-4 w-4" /> Connected
                          </div>
                        ) : (
                          <button
                            onClick={() => {
                              setContactedIndex(idx);
                              // Trigger call action
                              window.location.href = `tel:${donor.phone}`;
                            }}
                            className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-bold text-white bg-brand-teal hover:bg-brand-teal-hover rounded-xl shadow transition-colors cursor-pointer min-h-[44px]"
                          >
                            <Phone className="h-3.5 w-3.5" /> Call Now
                          </button>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
