import SectionTitle from "../SectionTitle/SectionTitle";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { ShoppingCart, User } from "lucide-react";

const Client = () => {
    const clientSays = [
        {
            id: 1,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In urna, sit amet eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In urna, sit amet eget.',
            name: 'John Doe',
            position: 'CEO, Company',
        },
        {
            id: 2,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In urna, sit amet eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In urna, sit amet eget.',
            name: 'John Doe',
            position: 'CEO, Company',
        },
        {
            id: 3,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In urna, sit amet eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In urna, sit amet eget.',
            name: 'John Doe',
            position: 'CEO, Company',
        },
        {
            id: 4,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In urna, sit amet eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In urna, sit amet eget.',
            name: 'John Doe',
            position: 'CEO, Company',
        },
    ];

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        arrows: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    dots: true,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true,
                    arrows: false,
                }
            }
        ]
    };

    return (
        <section className="w-full py-12 bg-[#1A4D5A] min-h-[400px] overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 bg-[#1A4D5A]">
                <SectionTitle 
                    title="What Our Clients Say About Us" 
                    mb="mb-12" 
                    className="text-center text-white"
                />
                <div className="w-full max-w-7xl mx-auto bg-[#1A4D5A]">
                    <Slider {...settings}>
                        {clientSays?.map((client) => (
                            <div key={client.id} className="px-4">
                                <div className="bg-gray-800 p-8 sm:p-10 lg:p-12 border border-gray-700 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                                    <p className="text-base sm:text-lg lg:text-xl text-white font-inter font-normal leading-relaxed mb-6 line-clamp-4">
                                        {client.description}
                                    </p>
                                    <div className="flex items-center gap-4">
                                        <User className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 text-gray-300" />
                                        <div>
                                            <h4 className="text-lg sm:text-xl lg:text-2xl text-white font-inter font-medium capitalize mb-1">
                                                {client.name}
                                            </h4>
                                            <p className="text-sm sm:text-base lg:text-lg text-gray-400 font-inter font-normal capitalize">
                                                {client.position}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </section>
    );
};

export default Client;