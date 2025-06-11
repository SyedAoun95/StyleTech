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
    },
    {
      title: "Shop Front Glass",
      status: "Sales",
      // price: "Hot seller available in all different styles",
      image: "/assets/products/product_2.png",
      product: "newest",
    },
    {
      title: "Shop Front Glass Door",
      status: "New",
    //   price: "$250",
    //   currentPrice: "$200",
      image: "/assets/products/product_3.png",
      product: "newest",
    },
    {
      title: "Double Glaze Windows",
      status: "Sales",
    //   price: "$250",
      image: "/assets/products/product_4.png",
      product: "newest",
    },
    {
      title: "Stairs & Railings Glass",
      status: "Sales",
    //   price: "$250",
      image: "/assets/products/product_5.png",
      product: "trending",
    },
    {
      title: "Shower Cabins",
      status: "New",
    //   price: "$250",
    //   currentPrice: "$200",
      image: "/assets/products/product_6.png",
      product: "trending",
    },
    {
      title: "Double Glaze window",
      status: "Sales",
    //   price: "$250",
      image: "/assets/products/product_7.png",
      product: "trending",
    },
    {
      title: "Georgian Windows of your choice",
      status: "Sales",
    //   price: "$250",
      image: "/assets/products/product_8.png",
      product: "trending",
    },
    {
      title: "Georgian Bar Special Designs Windows",
      status: "New",
    //   price: "$250",
    //   currentPrice: "$200",
      image: "/assets/products/img1.jpg",
      product: "best_seller",
    },
    {
      title: "Shop Front Glass",
      status: "Sales",
    //   price: "$250",
      image: "/assets/products/product_2.png",
      product: "best_seller",
    },
    {
      title: "Shop Front Glass Door",
      status: "Sales",
    //   price: "$250",
      image: "/assets/products/product_3.png",
      product: "best_seller",
    },
    {
      title: "Stairs & Railings Glass",
      status: "Sales",
    //   price: "$250",
      image: "/assets/products/product_5.png",
      product: "best_seller",
    },
    {
      title: "Shower Cabins",
      status: "Sales",
    //   price: "$250",
      image: "/assets/products/product_6.png",
      product: "featured",
    },
    {
      title: "Double Glaze window glass",
      status: "Sales",
    //   price: "$250",
      image: "/assets/products/product_7.png",
      product: "featured",
    },
    {
      title: "Custom Window glass of your choice",
      status: "Sales",
    //   price: "$250",
      image: "/assets/products/product_8.png",
      product: "featured",
    },
    {
      title: "/assets/products/img1.jpg",
      status: "Sales",
    //   price: "$250",
      image: "/assets/products/product_1.png",
      product: "featured",
    },
    {
      title: "Shop Front Glass",
      status: "Sales",
    //   price: "$250",
      image: "/assets/products/product_2.png",
      product: "all",
    },
    {
      title: "Shop Front Glass Door",
      status: "Sales",
    //   price: "$250",
      image: "/assets/products/product_3.png",
      product: "all",
    },
    {
      title: "Double Glaze Windows",
      status: "Sales",
    //   price: "$250",
      image: "/assets/products/product_4.png",
      product: "all",
    },
    {
      title: "Elegent stair railing glass",
      status: "Sales",
    //   price: "$250",
      image: "/assets/products/product_5.png",
      product: "all",
    },
    {
      title: "Shower Cabin glass",
      status: "Sales",
    //   price: "$250",
      image: "/assets/products/product_6.png",
      product: "all",
    },
    {
      title: "Double glaze window glass",
      status: "Sales",
    //   price: "$250",
      image: "/assets/products/product_7.png",
      product: "all",
    },
    {
      title: "Custom georgian Window glass of your choice",
      status: "Sales",
    //   price: "$250",
      image: "/assets/products/product_8.png",
      product: "all",
    },
    {
      title: "Georgian Bar Special Designs Windows",
      status: "Sales",
    //   price: "$250",
      image: "/assets/products/img2.jpg",
      product: "all",
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
