import { Armchair, Banknote, CreditCard, Facebook, Instagram, Phone, MapPin } from "lucide-react";
import { AiFillTikTok } from "react-icons/ai";
import { FaSquareWhatsapp } from "react-icons/fa6";
import emailjs from '@emailjs/browser';
import React, { useRef } from 'react';
import { Link } from "react-router";

const Footer = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_fbmzxsc', 'template_spuhzmf', form.current, {
        publicKey: 'j1GqPMvFZhOe0h2f2',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          alert('Message sent, our team will contact you soon ');
          form.current.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
          alert('Failed to send message. Please try again.');
        },
      );
  };

  return (
    <footer className="px-4 lg:px-0">
      <div className="footer_top mx-h-[343px] w-full border-t border-b border-[#e1e3e5] pt-[80px] pb-[60px]">
        <div className="lg:container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="order-2 lg:order-none">
              <div className="logo_wrapper mb-7 flex items-center gap-3">
  <a 
    href="https://maps.app.goo.gl/72sudM7iXLsEFNde8?g_st=aw" 
    target="_blank" 
    rel="noopener noreferrer"
    className="inline-flex items-center justify-center"
  >
    <img 
      src="data:image/jpeg;base64,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"
      alt="Google Maps Pin"
      className="w-12 h-12 object-contain" // adjust size as needed
    />
  </a>
  <Link to="/" className="text-3xl text-white font-inter font-medium capitalize flex items-center gap-2">StyleTech Windows</Link>
</div>

              <div className="footer_social flex items-center gap-3">
                <Link className="p-3 rounded-full border-[#007580] inline-block border-[1px]" to="https://www.facebook.com/share/18u1qqfBsW/">
                  <Facebook size="2rem" color="#1877F2" />
                </Link>
                <Link className="p-3 inline-block" to="https://www.tiktok.com/@styletech.windows?_t=ZS-8xDghSVY2ev&_r=1">
                  <AiFillTikTok size="2rem" color="#000000" />
                </Link>
                <Link className="p-3 inline-block" to="https://www.instagram.com/styletechwindows?igsh=ejNidTkxYWl4ejFz">
                  <Instagram size="2rem" color="#E4405F" />
                </Link>
                <Link className="p-3 inline-block" to="https://wa.me/+923061118906">
                  <FaSquareWhatsapp size="2rem" color="#25D366" />
                </Link>
                <a className="p-3 inline-block" href="tel:+923061118906">
                  <Phone size="2rem" color="#007580" />
                </a>
              </div>
            </div>
            <div className="footer_wrapper order-3 lg:order-none">
              <h3 className="text-xl text-[#9a9caa] font-inter font-medium uppercase">category</h3>
              <ul className="space-y-2 mt-4">
                <li><Link className="text-base text-white font-inter font-normal capitalize" to="/">Home</Link></li>
                <li><Link className="text-base text-white font-inter font-normal capitalize" to="/Products">Products</Link></li>
                <li><Link className="text-base text-white font-inter font-normal capitalize" to='/client'>Client</Link></li>
                <li><Link className="text-base text-white font-inter font-normal capitalize" to="/Categories">Categories</Link></li>
                <li><Link className="text-base text-white font-inter font-normal capitalize" to="/Recent">Recently-added</Link></li>
                <li><Link className="text-base text-white font-inter font-normal capitalize" to="/Recent">Contact</Link></li>
              </ul>
            </div>
            <div className="footer_wrapper order-4 lg:order-none">
              <h3 className="text-xl text-[#9a9caa] font-inter font-medium uppercase">support</h3>
              <ul className="space-y-2 mt-4">
                <li><Link className="text-base text-white font-inter font-normal capitalize">help & support</Link></li>
                <li><Link className="text-base text-white font-inter font-normal capitalize">terms & condition</Link></li>
                <li><Link className="text-base text-white font-inter font-normal capitalize">privacy policy</Link></li>
                <li><Link className="text-base text-white font-inter font-normal capitalize">help</Link></li>
              </ul>
            </div>
            <div className="newsletter order-1 lg:order-4">
              <h2 className="text-xl text-white font-inter font-medium uppercase mb-5">Contact us</h2>
              <form ref={form} onSubmit={sendEmail} className="max-w-[424px] w-full flex flex-col gap-2">
                <div className="flex gap-2">
                  <input type="text" name="first_name" placeholder="First Name" className="max-w-[212px] w-full h-[46px] border-[#e1e3e5] border-[1px] rounded-lg pl-2 text-white" required />
                  <input type="text" name="last_name" placeholder="Last Name" className="max-w-[212px] w-full h-[46px] border-[#e1e3e5] border-[1px] rounded-lg pl-2 text-white" required />
                </div>
                <input type="tel" name="phone_number" placeholder="Your Number" className="max-w-[424px] w-full h-[46px] border-[#e1e3e5] border-[1px] rounded-lg pl-2 text-white" required />
                <input type="email" name="user_email" placeholder="Your Email" className="max-w-[424px] w-full h-[46px] border-[#e1e3e5] border-[1px] rounded-lg pl-2 text-white" required />
                <textarea name="message" placeholder="Your Message" className="max-w-[424px] w-full h-[92px] border-[#e1e3e5] border-[1px] rounded-lg pl-2 pt-2 resize-none text-white" required />
                <button type="submit" className="text-base text-white font-semibold capitalize w-[200px] h-[40px] bg-[#007580] rounded-full cursor-pointer">Send</button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="footer_bottom w-full h-[75px] flex items-center justify-center">
        <div className="lg:container mx-auto">
          <div className="flex items-center justify-between">
            <p className="text-base text-white font-normal font-inter">@ 2025 Aoun Naqvi - Designed & Developed by <span className="text-white">Aoun Codes</span></p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
