import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./../Components/Navbar/Navbar";
import Home from "../Pages/Home/Home";
import Auth from "../Pages/Auth/Auth";
import Login from "../Pages/Auth/Login/Login";
import Register from "../Pages/Auth/Register/Register";
import Error from "../Pages/Error/Error";
import AuthCheck from "../AuthCheck/AuthCheck";
import Footer from "../Components/Footer/Footer";
import AboutSection from "../Components/About/About";
import Features from "../Components/Features/Features";
import Client from "../Components/Client/Client";
import Product from "../Components/Product/Product";
import Recent from "../Components/Recent/Recent";
import Categories from "../Components/Categories/Categories";
const RedirectOnRefresh = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to home page on component mount (initial load or refresh)
    navigate("/", { replace: true });
  }, []); // Empty dependency array ensures it runs only once on mount

  return null; // This component doesn't render anything
};

const MainLayout = () => {
  return (
    <BrowserRouter>
      {/* navbar */}
      <Navbar />
      <Routes>
        {/* Main home route */}
        <Route
          path="/"
          element={
            <AuthCheck>
              <Home />
            </AuthCheck>
          }
        />
        {/* authentication route */}
        <Route path="/auth" element={<Auth />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
        {/* features route */}
        <Route path="/Features" element={<Features />} />
        {/* about route */}
        <Route path="/About" element={<AboutSection />} />
        {/* client route */}
        <Route path="/Client" element={<Client />} />
        {/* categories route */}
        <Route path="/Categories" element={<Categories />}/>
        {/* product route */}
        <Route path="/Products" element={<Product />} />
        {/* recently-added route */}
        <Route path="/Recent" element={<Recent />} />
        {/* contact route */}
        <Route path="/Contact" element={<Recent />} /> {/* Update to Contact component if available */}
        {/* not found routes */}
        <Route path="*" element={<Error />} />
      </Routes>
      {/* footer component */}
      <Footer />
    </BrowserRouter>
  );
};

export default MainLayout;