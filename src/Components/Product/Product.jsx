import { useState } from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import { ShoppingCart } from "lucide-react";

const Product = () => {
  const [active, setActive] = useState({ id: 0, product: "all" });

  const productTitle = [
    { id: 0, title: "all", product: "all" },
    { id: 1, title: "newest", product: "newest" },
    { id: 2, title: "trending", product: "trending" },
    { id: 3, title: "best seller", product: "best_seller" },
  ];

  const products = [
    {
      title: "Georgian Bar Special Designs Windows",
      status: "New",
      image: "/assets/products/img1.jpg",
      product: "newest",
      alt: "Georgian Bar special design window with stylish glass"
    },
    {
      title: "Shop Front Glass",
      status: "Sales",
      
      image: "/assets/products/product_2.png",
      product: "newest",
        alt: "Clear tempered glass for shop front installations"
    },
    {
      title: "Shop Front Glass Door",
      status: "New",
 
      image: "/assets/products/product_3.png",
      product: "newest",
        alt: "Tempered glass door designed for shop fronts"
    },
    {
      title: "Double Glaze Windows",
      status: "Sales",
   
      image: "/assets/products/Doubleglze.jpg",
      product: "newest",
        alt: "Double glaze insulated windows for energy efficiency"
    },
    {
      title: "Stairs & Railings Glass",
      status: "Sales",

      image: "/assets/products/product_5.png",
      product: "trending",
        alt: "Modern glass panels for stair railings"
    },
    {
      title: "Shower Cabins",
      status: "New",
  
      image: "/assets/products/product_6.png",
      product: "trending",
        alt: "Tempered glass shower cabin for bathrooms"
    },
    {
      title: "Double Glaze window",
      status: "Sales",

      image: "/assets/products/Doubleglazehouse.jpg",
      product: "trending",
        alt: "Double glaze window glass with insulation"
    },
    {
      title: "Georgian Windows of your choice",
      status: "Sales",
   
      image: "/assets/products/georgian-9.jpg",
      product: "trending",
       alt: "Georgian Bar special design window with stylish glass"
    },
    {
      title: "Georgian Bar Special Designs Windows",
      status: "New",
  
      image: "/assets/products/img1.jpg",
      product: "best_seller",
        alt: "Georgian Bar special design window with stylish glass"
    },
    {
      title: "Shop Front Glass",
      status: "Sales",
 
      image: "/assets/products/product_2.png",
      product: "best_seller",
        alt: "Tempered glass door designed for shop fronts"
    },
    {
      title: "Shop Front Glass Door",
      status: "Sales",
   
      image: "/assets/products/product_3.png",
      product: "best_seller",
        alt: "Tempered glass door designed for shop fronts"
    },
    {
      title: "Stairs & Railings Glass",
      status: "Sales",
    
      image: "/assets/products/product_5.png",
      product: "best_seller",
      alt: "Glass staircases and railings for homes"
    },
    {
      title: "Shower Cabins",
      status: "Sales",
   
      image: "/assets/products/product_6.png",
      product: "featured",
      alt: "Glass shower cubicles for bathrooms"
    },
    {
      title: "Double Glaze window glass",
      status: "Sales",
   
      image: "/assets/products/Doubleglaze3.jpg",
      product: "featured",
        alt: "Double glaze insulated windows for energy efficiency"
    },
    {
      title: "Custom Window glass of your choice",
      status: "Sales",
  
      image: "/assets/products/georgen-8.jpg",
      product: "featured",
      alt: "Modern glass panels for windows"
      
    },
    {
      title: "/assets/products/img1.jpg",
      status: "Sales",
  
      image: "/assets/products/product_1.png",
      product: "featured",
        alt: "Georgian Bar special design window with stylish glass"
    },
    {
      title: "Shop Front Glass",
      status: "Sales",

      image: "/assets/products/product_2.png",
      product: "all",
        alt: "Clear tempered glass for shop front installations"
    },
    {
      title: "Shop Front Glass Door",
      status: "Sales",
 
      image: "/assets/products/product_3.png",
      product: "all",
   alt: "Tempered glass door designed for shop fronts"
    },
    {
      title: "Double Glaze Windows",
      status: "Sales",
   
      image: "/assets/products/Doubleglze.jpg",
      product: "all",
      alt: "Double glaze insulated windows for energy efficiency"
    },
    {
      title: "Elegent stair railing glass",
      status: "Sales",

      image: "/assets/products/product_5.png",
      product: "all",
       alt: "Modern glass panels for stair railings"
    },
    {
      title: "Shower Cabin glass",
      status: "Sales",
  
      image: "/assets/products/product_6.png",
      product: "all",
      alt: "Tempered glass shower cabin for bathrooms"
    },
    {
      title: "Double glaze window glass",
      status: "Sales",
  
      image: "assets/products/Doubleglazehouse.jpg",
      product: "all",
        alt: "Double glaze window glass with insulation"
    },
    {
      title: "Custom georgian Window glass of your choice",
      status: "Sales",
  
      image: "/assets/products/product_8.png",
      product: "all",
      alt: "Custom georgian window glass for homes"
    },
    {
      title: "Georgian Bar Special Designs Windows",
      status: "Sales",

      image: "/assets/products/img2.jpg",
      product: "all",
      alt: "Georgian bar special designs windows"
    },
  ];

  const productFilter = products.filter((product) => product.product === active.product);

  return (
    <div className="lg:container mx-auto">
      <div className="flex flex-col items-center justify-center">
        <SectionTitle title="our product" textAlign="center" mb="mb-5" />

        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mb-11 px-2">

          {productTitle.map((title) => (
            <button
              key={title.id}
              onClick={() => setActive({ id: title.id, product: title.product })}
              className={`text-base font-black uppercase font-inter cursor-pointer ${
                active.id === title.id ? "text-white" : "text-[#9a9caa]"
              }`}
            >
              {title.title}
            </button>
          ))}
        </div>
      </div>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4">

        {productFilter.map((product, index) => (
          <div key={index} className="p-4">
            <div className="feature_image mb-4 relative">
             <img 
  className="w-full h-[312px] rounded-lg object-cover" 
  src={product?.image} 
  alt={product?.title}  
/>

              {product.status && (
                <div className="absolute top-4 left-4 bg-[#007580] text-white px-2 py-1 rounded-lg">
                  <span className="text-sm font-inter font-normal">{product.status}</span>
                </div>
              )}
            </div>

            <div className="feature_content">
              <div className="flex items-center justify-between">
                <h4 className="text-xl text-white capitalize font-inter font-normal mb-4">
                  {product.title}
                </h4>
                
              </div>
              <p className="text-xl flex items-center gap-2 text-white font-semibold font-inter">
                {product.price}
                {product.currentPrice && (
                  <span className="text-sm text-[#9a9caa] font-inter font-normal">
                    {product.currentPrice}
                  </span>
                )}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
