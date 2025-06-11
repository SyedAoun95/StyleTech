import SectionTitle from "../SectionTitle/SectionTitle";

const ProjectSection = () => {
  return (
    <div className="lg:container mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8 mt-12 sm:mt-10 md:mt-10 lg:mt-8 mb-8 sm:mb-10 lg:mb-8 overflow-hidden">
      <SectionTitle title="Our Projects" mb="mb-6 lg:mb-8" className="text-center" />

      <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 lg:gap-8 min-h-0">
        {/* Text Content */}
        <div className="lg:w-1/2">
          <h2 className="text-2xl sm:text-3xl font-inter font-semibold text-white mb-4 border-l-4 border-blue-500 pl-4">
            Featured Projects
          </h2>
          <p className="text-base sm:text-lg text-[#9a9caa] font-inter font-normal leading-relaxed bg-clip-padding max-h-[200px] sm:max-h-[250px] overflow-y-auto">
            Discover our latest window and door installations showcasing custom designs, premium quality, and energy efficiency. Each project reflects our commitment to excellence and client satisfaction. From modern homes to classic architectures, we bring your vision to life with professional and timely service.
          </p>
        </div>

        {/* Image Gallery */}
        <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4 lg:gap-4 min-h-0">
          <div className="w-full h-[150px] sm:h-[200px] lg:h-[250px]">
            <img
              className="w-full h-full object-cover rounded-lg"
              src="/src/assets/projects/project_1.png"
              alt="Project Image 1"
            />
          </div>
          <div className="w-full h-[150px] sm:h-[200px] lg:h-[250px]">
            <img
              className="w-full h-full object-cover rounded-lg"
              src="/src/assets/projects/project_2.png"
              alt="Project Image 2"
            />
          </div>
          <div className="w-full h-[150px] sm:h-[200px] lg:h-[250px] sm:col-span-2">
            <img
              className="w-full h-full object-cover rounded-lg"
              src="/src/assets/projects/project_3.png"
              alt="Project Image 3"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectSection;