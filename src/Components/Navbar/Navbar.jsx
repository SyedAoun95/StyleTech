import { Menu, Phone, MapPin, Clock9 } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import Logo from '../../Logo.png';
 
const Navbar = () => {
  return (
    <div>
      {/* Navbar Top - Hidden on Mobile */}
      <div className="hidden md:flex items-center justify-center bg-[#66a6b6] h-[100px] w-full">
        <div className="lg:container flex justify-between items-center px-4">
          <img
            src={Logo}
            alt="Site Logo"
            className="h-39 w-auto object-contain mr-2"
          />
          <div className="flex items-center gap-6">
            <Link className="flex items-center gap-2 text-xl text-white font-inter font-medium capitalize">
              <Clock9 size={34} color="red" />
              <div className="flex flex-col">
                Work Timing
                <span className="text-base">9:00AM to 5:00 PM</span>
              </div>
            </Link>
            <Link className="flex items-center gap-2 text-xl text-white font-inter font-medium capitalize">
              <MapPin size={32} color="red" />
              <div className="flex flex-col">
                Address
                <span className="text-base">Main Lehtrar Road ,Islamabad</span>
              </div>
            </Link>
            <Link className="flex items-center gap-2 text-xl text-white font-inter font-medium capitalize">
              <Phone size={32} color="red" />
              <div className="flex flex-col">
                Call us today
                <span className="text-base">+92 306 1118906</span>
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* Navbar Bottom */}
      <div className="flex items-center justify-center w-full h-[70px] bg-white border-b-[1px] border-[#e1e3e5]">
        <div className="lg:container flex items-center justify-between px-4">
          <div className="flex items-center gap-4 md:gap-8 w-full md:w-auto justify-between">
            {/* Logo - Left on Mobile */}
            <div className="md:hidden">
              <img
                src={Logo}
                alt="Site Logo"
                className="h-32 w-auto object-contain"
              />
            </div>

            {/* All Categories Dropdown - Only on Mobile */}
            <div className="dropdown dropdown-end md:hidden">
              <div tabIndex={0} role="button" className="btn m-1 flex items-center gap-2 md:gap-5 capitalize">
                <Menu />
                <span className="text-sm md:text-sm">All Categories</span>
              </div>
              <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-10 w-52 p-2 shadow-sm">
                  <li><Link to="/">Home</Link></li>
                <li><Link to="/Products">Product</Link></li>
                <li><Link to="/Features">Features</Link></li>
                     <li><Link to="/Categories">Categories</Link></li>
                <li><Link to="/Client">Clients</Link></li>
                <li><Link to="/Recent">Recently Added</Link></li>
                <li><Link to="/Recent">Contact</Link></li>
                
              </ul>
            </div>

            {/* Navigation Links - Hidden on Mobile */}
            <nav className="hidden md:flex items-center gap-8">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `text-lg font-inter font-medium capitalize ${isActive ? 'text-[#029fae]' : 'text-[#636270]'}`
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/Features"
                className={({ isActive }) =>
                  `text-lg font-inter font-medium capitalize ${isActive ? 'text-[#029fae]' : 'text-[#636270]'}`
                }
              >
                Features
              </NavLink>
              <NavLink
                to="/Products"
                className={({ isActive }) =>
                  `text-lg font-inter font-medium capitalize ${isActive ? 'text-[#029fae]' : 'text-[#636270]'}`
                }
              >
                Product
              </NavLink>
              <NavLink
                to="/Client"
                className={({ isActive }) =>
                  `text-lg font-inter font-medium capitalize ${isActive ? 'text-[#029fae]' : 'text-[#636270]'}`
                }
              >
                Client
              </NavLink>

              <NavLink
                to="/Categories"
                className={({ isActive }) =>
                  `text-lg font-inter font-medium capitalize ${isActive ? 'text-[#029fae]' : 'text-[#636270]'}`
                }
              >
           Categories
              </NavLink>
              <NavLink
                to="/Recent"
                className={({ isActive }) =>
                  `text-lg font-inter font-medium capitalize ${isActive ? 'text-[#029fae]' : 'text-[#636270]'}`
                }
              >
                Recently Added
              </NavLink>
              <NavLink
                to="/About"
                className={({ isActive }) =>
                  `text-lg font-inter font-medium capitalize ${isActive ? 'text-[#029fae]' : 'text-[#636270]'}`
                }
              >

                About
              </NavLink>
             
             
              <NavLink
                to="/Recent"
                className={({ isActive }) =>
                  `text-lg font-inter font-medium capitalize ${isActive ? 'text-[#029fae]' : 'text-[#636270]'}`
                }
              >
                Contact Us
              </NavLink>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;