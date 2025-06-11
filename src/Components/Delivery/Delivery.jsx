import { Clock3, Percent, ShieldCheck, Truck } from "lucide-react";

const Delivery = () => {
    return (
        <div className="container bg-white mx-auto shadow-md p-4 sm:p-5 md:p-7 rounded-2xl sm:mx-auto mb-6 sm:mb-8 md:mb-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
                <div className="delivery_wrapper">
                    <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
                        <p><Percent color="#9a9caa" size='2rem' sm:size='2.5rem' md:size='3rem' /></p>
                        <div>
                            <h4 className="text-base sm:text-lg text-[#272343] capitalize font-inter font-medium mb-1.5 sm:mb-2 md:mb-2.5">Discount</h4>
                            <p className="text-sm sm:text-base text-[#9a9caa] font-inter font-normal">every week new sales</p>
                        </div>
                    </div>
                </div>

                <div className="delivery_wrapper">
                    <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
                        <p><Truck color="#9a9caa" size='2rem' sm:size='2.5rem' md:size='3rem' /></p>
                        <div>
                            <h4 className="text-base sm:text-lg text-[#272343] capitalize font-inter font-medium mb-1.5 sm:mb-2 md:mb-2.5">Service at your door-step</h4>
                            <p className="text-sm sm:text-base text-[#9a9caa] font-inter font-normal">book your order now</p>
                        </div>
                    </div>
                </div>

                <div className="delivery_wrapper">
                    <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
                        <p><Clock3 color="#9a9caa" size='2rem' sm:size='2.5rem' md:size='3rem' /></p>
                        <div>
                            <h4 className="text-base sm:text-lg text-[#272343] capitalize font-inter font-medium mb-1.5 sm:mb-2 md:mb-2.5">Great Support 24/7</h4>
                            <p className="text-sm sm:text-base text-[#9a9caa] font-inter font-normal">We care your experiences</p>
                        </div>
                    </div>
                </div>

                <div className="delivery_wrapper">
                    <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
                        <p><ShieldCheck color="#9a9caa" size='2rem' sm:size='2.5rem' md:size='3rem' /></p>
                        <div>
                            <h4 className="text-base sm:text-lg text-[#272343] capitalize font-inter font-medium mb-1.5 sm:mb-2 md:mb-2.5">Secure Payment</h4>
                            <p className="text-sm sm:text-base text-[#9a9caa] font-inter font-normal">100% Secure Payment Method</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Delivery;