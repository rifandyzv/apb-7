import React from "react";
import { RiInstagramFill } from "react-icons/ri";
import { FaWhatsappSquare, FaLine } from "react-icons/fa";
import { MdMail } from "react-icons/md";
import { INSTAGRAM_LINK, WA_LINK, LINE_LINK, MAIL_LINK } from "../constant";

export default function Footer() {
  return (
    <footer>
      <div className="contact">
        <h2>Contact Us</h2>
        <div className="contact-icon">
          <a href={INSTAGRAM_LINK} target="_blank" rel="noreferrer">
            <RiInstagramFill className="contact-icon-logo"></RiInstagramFill>
          </a>
          <a href={WA_LINK} target="_blank" rel="noreferrer">
            <FaWhatsappSquare className="contact-icon-logo"></FaWhatsappSquare>
          </a>
          <a href={LINE_LINK} target="_blank" rel="noreferrer">
            <FaLine className="contact-icon-logo"></FaLine>
          </a>
          <a href={MAIL_LINK} target="_blank" rel="noreferrer">
            <MdMail className="contact-icon-logo"></MdMail>
          </a>
        </div>
      </div>
      <div className="logo">
        <img
          src={`${process.env.PUBLIC_URL}/assets/APB Logo.png`}
          alt="Logo APB"
        />
        <img
          src={`${process.env.PUBLIC_URL}/assets/STEI-HMIF-ITB-300x200 1.png`}
          alt="Logo HMIF ITB"
        />
      </div>
    </footer>
  );
}
