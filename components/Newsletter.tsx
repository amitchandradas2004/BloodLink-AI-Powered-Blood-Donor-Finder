"use client";

import * as React from "react";
import { Mail, CheckCircle2 } from "lucide-react";

export default function Newsletter() {
  const [email, setEmail] = React.useState("");
  const [submitted, setSubmitted] = React.useState(false);
  const [error, setError] = React.useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      setError("Please enter a valid email address.");
      return;
    }
    setError("");
    setSubmitted(true);
    setEmail("");
  };

  return (
    <section className="py-20 bg-white dark:bg-neutral-950 transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Banner container with deep red/coral gradients */}
        <div className="relative overflow-hidden bg-gradient-to-br from-brand-red to-red-800 dark:from-red-950 dark:to-neutral-900 rounded-3xl p-8 md:p-12 lg:p-16 shadow-xl shadow-brand-red/10">
          
          {/* Subtle grid pattern overlay */}
          <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

          <div className="relative grid gap-8 lg:grid-cols-12 items-center z-10">
            
            {/* Title / Description */}
            <div className="lg:col-span-7 space-y-4 text-white">
              <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
                Ready to make a difference?
              </h2>
              <p className="text-base sm:text-lg text-red-100 max-w-xl leading-relaxed">
                Join our newsletter to stay updated on local blood drives, critical shortages, health resources, and platform upgrades.
              </p>
            </div>

            {/* Form Input / Success panel */}
            <div className="lg:col-span-5 w-full">
              {submitted ? (
                <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl text-white flex items-center gap-4 animate-fade-in">
                  <CheckCircle2 className="h-10 w-10 text-emerald-400 shrink-0" />
                  <div>
                    <h3 className="font-bold text-lg">Thank you!</h3>
                    <p className="text-sm text-red-150">You&apos;ve successfully subscribed to our updates.</p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3">
                  <div className="flex flex-col sm:flex-row gap-3">
                    <div className="relative flex-grow">
                      <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 h-5 w-5 text-red-200" />
                      <input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                          if (error) setError("");
                        }}
                        className="w-full h-12 pl-11 pr-4 rounded-xl bg-white/15 border border-white/20 text-white placeholder-red-200 focus:outline-none focus:ring-2 focus:ring-white/80 focus:border-transparent transition-all text-sm font-medium"
                        aria-label="Email address"
                      />
                    </div>
                    
                    <button
                      type="submit"
                      className="h-12 px-6 bg-white hover:bg-neutral-100 text-brand-red dark:text-red-950 font-bold text-sm rounded-xl shadow transition-colors duration-200 cursor-pointer shrink-0 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-brand-red min-h-[44px]"
                    >
                      Subscribe
                    </button>
                  </div>

                  {error && (
                    <p className="text-xs font-bold text-white bg-red-600/40 border border-red-500/30 px-3 py-1.5 rounded-lg animate-shake">
                      {error}
                    </p>
                  )}
                </form>
              )}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
