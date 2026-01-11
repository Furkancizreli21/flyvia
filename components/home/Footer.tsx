import React from "react";
import { Facebook, Instagram, Twitter } from "lucide-react";
import Image from "next/image";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: "COMPANY",
      links: ["About Us", "Careers", "Press", "Blog"],
    },
    {
      title: "SUPPORT",
      links: ["Contact", "FAQ", "Cancellation", "Help Center"],
    },
    {
      title: "LEGAL",
      links: ["Terms of Use", "Privacy Policy", "Cookie Policy"],
    },
  ];

  return (
    <footer className="bg-[#0a1128] text-gray-400 py-12 px-6 border-t border-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="flex flex-col space-y-6">
            <div className="flex items-center space-x-2 text-white">
              <div className="relative w-12 h-12 flex items-center justify-center">
                <Image src="/home/icon.png" fill alt="icon" />
              </div>
              <span className="text-2xl font-bold">FlyVia</span>
            </div>
            <p className="text-sm leading-relaxed max-w-xs">
              You are at the right place to plan your dream vacation and find the best car rental deals. We are here for you to
              make unforgettable memories.
            </p>
            <div className="flex space-x-5">
              <a href="#" className="hover:text-blue-400 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-pink-400 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-blue-300 transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Link Sections */}
          {footerLinks.map((section, index) => (
            <div key={index}>
              <h4 className="text-white font-bold mb-6 tracking-wider">{section.title}</h4>
              <ul className="space-y-4">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a href="#" className="hover:text-white transition-colors text-sm">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800 text-center">
          <p className="text-xs tracking-wide">© {currentYear} VoyagePlus. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
