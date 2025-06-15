import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SectionTitle from "./../SectionTitle/SectionTitle";

const Categories = () => {
    const categories = [
       
        {
            title: "Double glaze window glass",
            products: "A sleek combination of quality plus luxury",
            image: "/assets/categories/categories_8.jpg",
            alt:"Double glaze window glass"
        },
        {
            title: "Double glaze window glass",
            products: "A sleek combination of quality plus luxury",
            image: "/assets/products/Doubleglaze3.jpg",
            alt:"Double glaze window glass"
        },
        {
            title: "Elegnt Stair Railing Glass",
            products: "A sleek combination of quality plus luxury",
            image: "/assets/categories/categories_1.jpg",
            alt:"elegent stair railing glass"
        },
        {
            title: "Customized Glass Door",
            products: "premium quality glass with installation of your own design",
            image: "/assets/categories/categories_2.jpg",
            alt:"customized glass door"
        },
        {
            title: "Laminated Glass(4-12mm)",
            products: "tempered Glass with sleek designs of your choice",
            image: "/assets/categories/categories_3.jpg",
            alt:"laminated glass"
        },
        {
            title: "Double glaze window for your house ",
            products: "Customize it for your choice",
            image: "/assets/products/Doubleglazehouse.jpg",
            alt:"single glaze glass"
        },
    ];

    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "160px",
        slidesToShow: 3,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 3000,
        dots: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    centerPadding: "80px",
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    centerPadding: "40px",
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    centerPadding: "20px",
                },
            },
        ],
    };

    return (
        <div className="py-8">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <SectionTitle title="Top Categories" mb="mb-8 lg:mb-11" />

                <div className="slider-container features_slider w-full">
                    <Slider {...settings}>
                        {categories?.map((category, index) => (
                            <div key={index} className="p-2 sm:p-4">
                                <div className="feature_image mb-4 relative">
                                    <img
                                        className="w-full h-[300px] sm:h-[350px] lg:h-[424px] rounded-lg object-cover"
                                        src={category?.image}
                                        alt={category?.title}
                                    />
                                    <div className="absolute bottom-0 left-0 w-full h-[85px] bg-[#000000] bg-opacity-50 flex flex-col justify-center p-3 sm:p-4">
                                        <h4 className="text-lg sm:text-xl text-white font-semibold font-inter mb-2 capitalize">
                                            {category?.title}
                                        </h4>
                                        <p className="text-xs sm:text-sm text-white capitalize font-normal font-inter">
                                            {category?.products}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    );
};

export default Categories;