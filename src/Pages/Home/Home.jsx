import AboutSection from "../../Components/About/About";
import Banner from "../../Components/Banner/Banner";
import Brand from "../../Components/Brand/Brand";
import Categories from "../../Components/Categories/Categories";
import Client from "../../Components/Client/Client";
import Product from "../../Components/Product/Product";
import Recent from "../../Components/Recent/Recent";
import Delivery from './../../Components/Delivery/Delivery';
import Features from './../../Components/Features/Features';

const Home = () => {
    return (
        <div>



            {/* banner component  */}
            <div className="w-full min-h-[850px] bg-[#f0f2f3] flex items-center justify-center rounded-b-3xl">

                <Banner></Banner>
            </div>
            
           

            {/* delivery component */}
            <div className="delivery_component w-full min-h-[#150px]">
                <Delivery></Delivery>
            </div>
{/* Brand component */}
<div className="brand flex items-center justify-center w-full mt-8 mb-32 sm:mb-20 md:mb-20 lg:mb-20">
  <Brand></Brand>
</div>

{/* About section */}
<div className="Aboutsection w-full mt-20 sm:mt-20 md:mt-20 lg:mt-20">
  <AboutSection></AboutSection>
</div>
            {/*  */}

            {/* features component */}
            <div className="w-full flex items-center justify-center mb-[80px]">
                <Features></Features>
            </div>

            {/* features component */}
            {/* <div className="w-full flex items-center justify-center mb-[80px]">
                <Categories></Categories>
            </div> */}

            {/* product component  */}
            <div className="w-full flex items-center justify-center pb-[80px]">
                <Product></Product>
            </div>


            {/* client say component  */}
            <div className="w-full flex items-center justify-center bg-[#f0f2f3] min-h-[589px] pb-[80px] pt-[80px]">

                <Client></Client>

            </div>


            {/* Recent component  */}
            <div className="w-full flex items-center justify-center pb-[80px] pt-[80px]">
                <Recent></Recent>
            </div>

        </div>
    );
};

export default Home;