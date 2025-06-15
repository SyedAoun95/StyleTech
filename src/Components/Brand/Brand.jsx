import React from "react";

const Brand = () => {
    const brands = [
        {
            id: 1,
            image: "/assets/brands/Ghani glass logo.jpeg",
              alt: "Ghani glass logo"
        },
        {
            id: 2,
            image: "/assets/brands/Tariq glass logo.jpeg",
            alt: "Tariq glass logo"
        },
       
    ];

    return (
        <div className="container mx-auto px-4 py-6 mt-6 sm:mt-8 md:mt-10 mb-5">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-7 items-center justify-center gap-5">
                {
                    brands?.map((brand) => (
                        <div key={brand?.id} className="brand_item flex justify-center p-5">
                            <img 
                                className="w-auto h-auto max-w-full" 
                                src={brand?.image} 
                                alt={`Brand ${brand?.id}`} 
                            />
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Brand;