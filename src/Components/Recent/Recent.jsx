import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { ShoppingCart } from "lucide-react";
import SectionTitle from "../SectionTitle/SectionTitle";

const Recent = () => {

    const features = [
        {
            title: 'Single Glaze window glass(4-12mm)',
            status: 'New',
        
            image: '/assets/features/product_1.png',
            alt:"single glaze window glass"
      
        },
        {
            title: 'Customized office cabin glass',
            status: 'Sales',
          
            image: '/assets/features/product_2.png',
            alt:"customized office cabin glass"
        },
        {
            title: 'Elegent Stair Railing glass',
          
            image: '/assets/products/productstair_2.jpg',
            alt:"elegent stair railing glass"
        },
        {
            title: 'Shower Cabin Glass',
            status: 'New',
          
            image: '/assets/features/product_4.png',
            alt:"shower cabin glass"
           
        },
        {
            title: 'Single Glaze window glass(4-12mm)',
            status: 'New',
          
            image: '/assets/features/product_1.png',
            alt:"single glaze window glass"
           
        },
        {
            title: 'Customized office cabin glass',
            status: 'Sales',
         
            image: '/assets/features/product_2.png',
            alt:"customized office cabin glass"
        },
        {
            title: 'Elegent Stair Railing glass',
        
            image: '/assets/products/productstair_3.jpg',
            alt:"elegent stair railing glass"
        },
        {
            title: 'Shower Cabin Glass',
            status: 'New',
        
            image: '/assets/features/product_4.png',
            alt:"shower cabin glass"
           
        },
    ];

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1, // Changed to 1 to ensure smoother scrolling
        responsive: [
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true,
                    arrows: false,
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    dots: true,
                    arrows: false,
                }
            }
        ]
    };

    return (
        <div className="container mx-auto px-4">
            <SectionTitle title="Recently Added" mb={'mb-11'} />

            <div className="slider-container features_slider w-full min-h-[420px] flex justify-center">
                <div className="w-full max-w-[90%] px-4">
                    <Slider {...settings}>
                        {features.map((feature, index) => (
                            <div key={index} className="p-4 h-[420px] flex flex-col justify-between">
                                <div className="feature_image h-[312px] mb-4 relative">
                                    <img
                                        className="w-full h-full object-cover rounded-lg"
                                        src={feature?.image}
                                        alt={feature?.title}
                                    />
                                    {feature?.status && (
                                        <div className="absolute top-4 left-4 bg-[#007580] text-white px-2 py-1 rounded-lg">
                                            <button className="text-sm font-inter font-normal">{feature?.status}</button>
                                        </div>
                                    )}
                                </div>
                                <div className="feature_content min-h-[108px]">
                                    <div className="flex items-center justify-between mb-2">
                                        <h4 className="text-xl text-white capitalize font-inter font-normal">
                                            {feature?.title}
                                        </h4>
                                    </div>
                                    <p className="text-xl flex items-center gap-2 text-white font-semibold font-inter">
                                        {feature?.price}
                                        {feature?.currentPrice && (
                                            <span className="text-sm text-[#9a9caa] font-inter font-normal line-through">
                                                {feature?.currentPrice}
                                            </span>
                                        )}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    );
};

export default Recent;