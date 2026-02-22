'use client'

import { useState } from "react";
import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="relative flexBetween max-container padding-container top-0 z-30 py-5 bg-white">
      {/* Logo */}
      <Link href="/">
        <Image src="/Mainlogo.png" alt="logo" width={90} height={60} />
      </Link>

      {/* Desktop Links */}
      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
          >
            {link.label}
          </Link>
        ))}
      </ul>

      {/* Desktop Button */}
      <div className="lg:flexCenter hidden">
        <Button
          type="button"
          title="Get a Quote"
          icon="/quotation.png"
          variant="btn_dark_green"
        />
      </div>

      {/* Mobile Hamburger */}
      <div
        className="inline-block cursor-pointer lg:hidden"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      >
        <Image src="/menu.svg" alt="menu" width={32} height={32} />
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 w-full bg-gray-900 flex flex-col items-center gap-6 py-6 lg:hidden z-50">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.key}
              href={link.href}
              className="regular-16 text-white flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}

          <Button
            type="button"
            title="Get a Quote"
            icon="/quotation.png"
            variant="btn_dark_green"
          />
        </div>
      )}
    </nav>
  );
};

export default Navbar;