import SectionTitle from "../SectionTitle/SectionTitle";

const AboutSection = () => {
  return (
    <div className="lg:container mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8 mt-12 sm:mt-10 md:mt-10 lg:mt-8 mb-8 sm:mb-10 lg:mb-8 overflow-hidden">
      <SectionTitle title="About Us" mb="mb-6 lg:mb-8" className="text-center" />

      <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 lg:gap-8 min-h-0">
        {/* Text Content */}
        <div className="lg:w-1/2">
          <h2 className="text-2xl sm:text-3xl font-inter font-semibold text-white mb-4 border-l-4 border-blue-500 pl-4">
            Our Story
          </h2>
          <p className="text-base sm:text-lg text-white font-inter font-normal leading-relaxed bg-clip-padding max-h-[200px] sm:max-h-[250px] overflow-y-auto">
         StyleTech Windows is a premium provider of double-glazed and Georgian windows, offering a perfect balance of elegance, efficiency, and endurance. With a commitment to innovation and design, we bring stylish and functional window solutions for every kind of home or project. We stand apart with our quality craftsmanship, customizable options, and energy-efficient solutions—delivering windows that truly frame your future with style.
        We are a dedicated team passionate about enhancing living spaces through superior window technology. Our expertise ensures that each product is crafted with precision, tailored to meet the unique needs of our clients. At StyleTech Windows, we prioritize sustainability and performance, integrating advanced materials and techniques to provide long-lasting value.
          </p>
        </div>

        {/* Image Gallery */}
        <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4 lg:gap-4 min-h-0">
          <div className="w-full h-[150px] sm:h-[200px] lg:h-[250px]">
            <img
              className="w-full h-full object-cover rounded-lg"
              src="/assets/features/product_1.png"
              alt="About Image 1"
            />
          </div>
          <div className="w-full h-[150px] sm:h-[200px] lg:h-[250px]">
            <img
              className="w-full h-full object-cover rounded-lg"
              src="/assets/features/product_2.png"
              alt="About Image 2"
            />
          </div>
          <div className="w-full h-[150px] sm:h-[200px] lg:h-[250px] sm:col-span-2">
            <img
              className="w-full h-full object-cover rounded-lg"
              src="/assets/features/product_5.png"
              alt="About Image 3"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;