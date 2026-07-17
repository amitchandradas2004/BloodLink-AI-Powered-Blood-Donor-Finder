"use client";

import * as React from "react";
import { Droplet, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const links = [
    { name: "How It Works", href: "#how-it-works" },
    { name: "Live Stats", href: "#live-stats" },
    { name: "Compatibility Matrix", href: "#compatibility" },
    { name: "Urgent Requests", href: "#urgent-requests" },
    { name: "Frequently Asked Questions", href: "#faq" },
  ];

  const resources = [
    { name: "Donor Eligibility Guidelines", href: "#" },
    { name: "Blood Donation FAQs", href: "#" },
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
  ];

  return (
    <footer className="bg-neutral-900 text-neutral-400 border-t border-neutral-800 transition-colors duration-300">
      
      {/* Upper Footer section */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-12">
          
          {/* Brand info column */}
          <div className="sm:col-span-2 md:col-span-3 lg:col-span-4 space-y-6">
            <a href="#" className="flex items-center gap-2 group focus:outline-none w-fit">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-red text-white transition-transform group-hover:scale-110">
                <Droplet className="h-6 w-6 fill-current animate-pulse" />
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                Blood<span className="text-brand-red">Link</span>
              </span>
            </a>
            <p className="text-sm leading-relaxed text-neutral-400 max-w-sm">
              Our AI-powered platform connects blood seekers with voluntary local donors instantly, facilitating real-time updates and direct matching without intermediate delays.
            </p>
          </div>

          {/* Quick links */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-sm font-extrabold text-neutral-100 uppercase tracking-wider">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {links.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-sm font-extrabold text-neutral-100 uppercase tracking-wider">
              Resources
            </h3>
            <ul className="space-y-2">
              {resources.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-sm font-extrabold text-neutral-100 uppercase tracking-wider">
              Contact Us
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2.5">
                <Mail className="h-5 w-5 text-brand-red shrink-0" />
                <a href="mailto:support@bloodlink.org" className="hover:text-white transition-colors">
                  support@bloodlink.org
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone className="h-5 w-5 text-brand-red shrink-0" />
                <a href="tel:+15550004357" className="hover:text-white transition-colors">
                  +1 (555) 000-HELP
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="h-5 w-5 text-brand-red shrink-0" />
                <span>
                  100 Medical Center Pkwy,<br />
                  Suite 400, Chicago, IL
                </span>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom copyright & socials */}
      <div className="bg-neutral-950/80 py-8 border-t border-neutral-850">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs text-neutral-500 text-center md:text-left">
            &copy; {currentYear} BloodLink Community Project. All rights reserved. Designed to help people connect and save lives.
          </p>

          {/* Social icons */}
          <div className="flex gap-4">
            {[
              {
                name: "Facebook",
                href: "#",
                icon: (props: React.SVGProps<SVGSVGElement>) => (
                  <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
                    <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z" />
                  </svg>
                ),
              },
              {
                name: "Twitter",
                href: "#",
                icon: (props: React.SVGProps<SVGSVGElement>) => (
                  <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                ),
              },
              {
                name: "GitHub",
                href: "https://github.com",
                icon: (props: React.SVGProps<SVGSVGElement>) => (
                  <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
                    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.137 20.162 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                  </svg>
                ),
              },
              {
                name: "LinkedIn",
                href: "#",
                icon: (props: React.SVGProps<SVGSVGElement>) => (
                  <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                ),
              },
            ].map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.href}
                  className="flex h-11 w-11 items-center justify-center rounded-xl bg-neutral-900 border border-neutral-850 hover:bg-neutral-800 text-neutral-400 hover:text-white transition-all focus:outline-none"
                  aria-label={social.name}
                >
                  <Icon className="h-5 w-5" />
                </a>
              );
            })}
          </div>
        </div>
      </div>

    </footer>
  );
}
