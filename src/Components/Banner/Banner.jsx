import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { MoveRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Banner = () => {
   const navigate = useNavigate();
    const products = [
        
        {
            id: 1,
            title: "Frame your future with style ",
            subTitle: "welcome to StyleTech",
            image: "/assets/Banner/banner_image1.png",
            alt:"banner image 1"
        
        },
        {
            id: 2,
            title: "Premium Window Glass for Every Space",
            subTitle: "welcome to StyleTech",
            image: "/assets/Banner/banner_image3.jpg",
            alt:"banner image 3"
        },
        {
            id: 3,
            title: "Bringing Light and Elegance to Your Interiors",
            subTitle: "welcome to StyleTech",
            image: "/assets/Banner/banner_image2.png",
            alt : "banner image 2"
        },
        {
            id: 4,
            title: "Transparent Solutions, Timeless Designs.",
            subTitle: "welcome to StyleTech",
            image: "/assets/Banner/banner_image3.jpg",
              alt: "banner image 3"
        },
    ];

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        cssEase: "linear",
    };

    return (
        <div className="container mx-auto px-4 py-6">
            <div className="slider-container w-full h-auto overflow-visible">
                <Slider {...settings}>
                    {products?.map((product) => (
                        <div key={product?.id} className="banner_slide_item flex flex-col sm:flex-row items-center justify-between w-full">
                            <div className="banner_text max-w-full sm:max-w-[60%] md:max-w-[50%] p-4 sm:p-6 text-center sm:text-left">
                                <p className="text-lg sm:text-xl md:text-2xl font-inter text-[#272343] uppercase font-normal">{product?.subTitle}</p>
                                <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#272343] font-inter capitalize leading-tight sm:leading-normal md:leading-12 lg:leading-16 max-w-[631px] w-full font-bold mb-4 sm:mb-5">{product?.title}</h3>
                                 <button
                                    className="max-w-[171px] w-full mx-auto sm:mx-0 flex items-center justify-center gap-2 h-[40px] sm:h-[48px] md:h-[52px] bg-[#029fae] rounded-lg capitalize text-white cursor-pointer"
                                    onClick={() => navigate("/Recent")} // ⬅️ Step 3: Navigate on click
                                >
                                    Contact Now<MoveRight />
                                </button>
                            </div>
                            <div className="banner_image w-full h-[300px] sm:h-[400px] md:h-[700px] lg:h-[700px] md:w-[900px] lg:w-[900px] flex items-center justify-center overflow-hidden bg-transparent">
                                <img
                                    src={product?.image}
                                    alt={product?.title}
                                    className="w-full h-full object-cover rounded-xl"
                                />
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
        
    );
};

export default Banner;