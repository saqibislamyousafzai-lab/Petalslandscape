import { FOOTER_CONTACT_INFO, FOOTER_LINKS, SOCIALS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-900 text-gray-300">
      <div className="max-container padding-container py-14">
        
        {/* Top Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 items-start">
          
          {/* Logo + Short About */}
          <div>
            <Link href="/">
              <Image
                src="/MainLogo.png"
                alt="Petals Landscape Logo"
                width={120}
                height={40}
                className="mb-4"
              />
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed">
              Professional landscaping solutions designed to transform
              your outdoor spaces with beauty and functionality.
            </p>
          </div>

          {/* Footer Links */}
          {FOOTER_LINKS.map((column) => (
            <div key={column.title}>
              <h4 className="text-white font-semibold mb-4">
                {column.title}
              </h4>
              <ul className="space-y-2 text-sm">
                {column.links.map((link, index) => (
                  <li key={`${column.title}-${index}`}>
                    <Link
                      href="/"
                      className="hover:text-green-400 transition"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact + Social */}
          <div>
            <h4 className="text-white font-semibold mb-4">
              {FOOTER_CONTACT_INFO.title}
            </h4>

            <ul className="space-y-2 text-sm mb-6">
              {FOOTER_CONTACT_INFO.links.map((item, index) => (
                <li key={`${item.label}-${index}`}>
                  <span className="font-medium text-gray-200">
                    {item.label}:{" "}
                  </span>
                  <span className="text-gray-400">
                    {item.value}
                  </span>
                </li>
              ))}
            </ul>

            <h4 className="text-white font-semibold mb-3">
              {SOCIALS.title}
            </h4>
            <div className="flex gap-4">
              {SOCIALS.links.map((link, index) => (
                <Link key={index} href="/">
                  {/* If you have icons */}
                  {/* <Image src={link} alt="social" width={20} height={20} /> */}
                  <div className="w-8 h-8 bg-gray-700 rounded-full hover:bg-green-500 transition" />
                </Link>
              ))}
            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Petals Landscape. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;