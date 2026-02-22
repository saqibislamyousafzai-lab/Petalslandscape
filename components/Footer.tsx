import { FOOTER_CONTACT_INFO, FOOTER_LINKS, SOCIALS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="flexCenter mb-24">
      <div className="padding-container max-container flex w-full flex-col gap-14">
        <div className="flex flex-col items-start justify-center gap-[10%] md:flex-row">
          <Link href="/" className="mb-10">
            <Image
              src="/MainLogo.png"   // ✅ added leading slash (important in Next.js)
              alt="logo"
              width={74}
              height={29}
            />
          </Link>

          <div className="flex flex-wrap gap-10 sm:justify-between md:flex-1">
            
            {/* Footer Links */}
            {FOOTER_LINKS.map((column) => (
              <FooterColumn
                key={column.title}   // ✅ added missing key
                title={column.title}
              >
                <ul className="regular-14 flex flex-col gap-4 text-gray-30">
                  {column.links.map((link, index) => (
                    <li key={`${column.title}-${index}`}>
                      <Link href="/">{link}</Link>
                    </li>
                  ))}
                </ul>
              </FooterColumn>
            ))}

            {/* Contact Info */}
            <FooterColumn title={FOOTER_CONTACT_INFO.title}>
              {FOOTER_CONTACT_INFO.links.map((item, index) => (
                <Link
                  href="/"
                  key={`${item.label}-${index}`}  // ✅ safer key
                  className="flex gap-4 md:flex-col lg:flex-row"
                >
                  <p className="whitespace-nowrap">
                    {item.label}:
                  </p>
                  <p className="medium-14 whitespace-nowrap text-blue-70">
                    {item.value}
                  </p>
                </Link>
              ))}
            </FooterColumn>

            {/* Social Links */}
            <FooterColumn title={SOCIALS.title}>
              <ul className="regular-14 flex gap-4 text-gray-30">
                {SOCIALS.links.map((link, index) => (
                  <li key={index}>
                    <Link href="/">
                      {/* Uncomment if needed */}
                      {/* <Image src={link} alt="social icon" width={24} height={24} /> */}
                    </Link>
                  </li>
                ))}
              </ul>
            </FooterColumn>

          </div>
        </div>

        <div className="border bg-gray-20" />

        <p className="regular-14 w-full text-center text-gray-30">
          2026 Petals Landscape | All rights reserved
        </p>
      </div>
    </footer>
  );
};

type FooterColumnProps = {
  title: string;
  children: React.ReactNode;
};

const FooterColumn = ({ title, children }: FooterColumnProps) => {
  return (
    <div className="flex flex-col gap-5">
      <h4 className="bold-18 whitespace-nowrap">{title}</h4>
      {children}
    </div>
  );
};

export default Footer;