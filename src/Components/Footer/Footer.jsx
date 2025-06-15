import { Armchair, Banknote, CreditCard, Facebook, Instagram,} from "lucide-react";
import { AiFillTikTok } from "react-icons/ai";
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
                    alert('Message sent,our team will contact you soon ');
                    form.current.reset(); // Reset form after successful submission
                },
                (error) => {
                    console.log('FAILED...', error.text);
                    alert('Failed to send message. Please try again.');
                },
            );
    };

    return (
        <footer>
            <div className="footer_top mx-h-[343px] w-full border-t border-b border-[#e1e3e5] pt-[80px] pb-[60px]">
                <div className="lg:container mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                        <div className="order-2 lg:order-none">
                            {/* logo wrapper */}
                            <div className="logo_wrapper mb-7">
                                <Link to="/" className="text-3xl text-white font-inter font-medium capitalize flex items-center gap-2 px-20">StyleTech Windows</Link>
                            </div>
                            <p className="text-base text-white font-inter font-normal mb-4 max-w-[350px]">StyleTech Windows is a premium provider of double-glazed and Georgian windows, offering a perfect balance of elegance, efficiency, and endurance. With a commitment to innovation and design, we bring stylish and functional window solutions for every kind of home or project. </p>
                            <div className="footer_social flex items-center gap-3">
                                <Link className="p-3 rounded-full border-[#007580] inline-block border-[1px]" to="https://www.facebook.com/share/18u1qqfBsW/"><Facebook size="1.5rem" color="black" /></Link>
                                <Link className="p-3 inline-block" to="https://www.tiktok.com/@styletech.windows?_t=ZS-8xDghSVY2ev&_r=1" ><AiFillTikTok  size="1.5rem" color="black" /></Link>
                                <Link className="p-3 inline-block" to="https://www.instagram.com/styletechwindows?igsh=ejNidTkxYWl4ejFz"><Instagram size="1.5rem" color="black" /></Link>
                               
                            </div>
                        </div>
                        <div className="footer_wrapper order-3 lg:order-none">
                            <h3 className="text-xl text-[#9a9caa] font-inter font-medium uppercase">category</h3>
                            <ul className="space-y-2 mt-4">
                                <li><Link className="text-base text-white font-inter font-normal capitalize" to="/">Home</Link></li>
                                <li><Link className="text-base text-white font-inter font-normal capitalize" to="/Products">Products</Link></li>
                                <li><Link className="text-base text-white font-inter font-normal capitalize" to='/client'>Client</Link></li>
                                <li><Link className="text-base text-white font-inter font-normal capitalize"to="/Categories">Categories</Link></li>
                                <li><Link className="text-base text-white font-inter font-normal capitalize" to="/Recent">Recently-added</Link></li>
                                <li><Link className="text-base text-white font-inter font-normal capitalize"to="/Recent">Contact</Link></li>
                            </ul>
                        </div>
                        <div className="footer_wrapper order-4 lg:order-none">
                            <h3 className="text-xl text-[#9a9caa] font-inter font-medium uppercase">support</h3>
                            <ul className="space-y-2 mt-4">
                                <li><Link className="text-base text-white font-inter font-normal capitalize">help & support</Link></li>
                                <li><Link className="text-base text-white font-inter font-normal capitalize">tearms & condition</Link></li>
                                <li><Link className="text-base text-white font-inter font-normal capitalize">privacy policy</Link></li>
                                <li><Link className="text-base text-white font-inter font-normal capitalize">help</Link></li>
                            </ul>
                        </div>
                        <div className="newsletter order-1 lg:order-4">
                            <h2 className="text-xl text-white font-inter font-medium uppercase mb-5">Contact us</h2>
                            <form ref={form} onSubmit={sendEmail} className="max-w-[424px] w-full flex flex-col gap-2">
                                <div className="flex gap-2">
                                    <input 
                                        type="text" 
                                        name="first_name" 
                                        placeholder="First Name" 
                                        className="max-w-[212px] w-full h-[46px] border-[#e1e3e5] border-[1px] rounded-lg pl-2 text-white" 
                                        style={{ color: 'white' }}
                                        required 
                                    />
                                    <input 
                                        type="text" 
                                        name="last_name" 
                                        placeholder="Last Name" 
                                        className="max-w-[212px] w-full h-[46px] border-[#e1e3e5] border-[1px] rounded-lg pl-2 text-white" 
                                        style={{ color: 'white' }}
                                        required 
                                    />
                                </div>
                                <input 
                                    type="tel" 
                                    name="phone_number" 
                                    placeholder="Your Number" 
                                    className="max-w-[424px] w-full h-[46px] border-[#e1e3e5] border-[1px] rounded-lg pl-2 text-white" 
                                    style={{ color: 'white' }}
                                    required 
                                />
                                <input 
                                    type="email" 
                                    name="user_email" 
                                    placeholder="Your Email" 
                                    className="max-w-[424px] w-full h-[46px] border-[#e1e3e5] border-[1px] rounded-lg pl-2 text-white" 
                                    style={{ color: 'white' }}
                                    required 
                                />
                                <textarea 
                                    name="message" 
                                    placeholder="Your Message" 
                                    className="max-w-[424px] w-full h-[92px] border-[#e1e3e5] border-[1px] rounded-lg pl-2 pt-2 resize-none text-white" 
                                    style={{ color: 'white' }}
                                    required 
                                />
                                <button 
                                    type="submit" 
                                    className="text-base text-white font-semibold capitalize w-[200px] h-[40px] bg-[#007580] rounded-full cursor-pointer"
                                >
                                    Send
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer_bottom w-full h-[75px] flex items-center justify-center">
                <div className="lg:container mx-auto">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-base text-white font-normal font-inter">@ 2025 Aoun Naqvi- Designed & Develop <span className="text-white">Aoun Codes</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;