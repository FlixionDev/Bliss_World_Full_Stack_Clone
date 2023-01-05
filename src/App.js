import "./App.css";

import Cartmodal from "./Components/CartPage/Cartmodal";
import { AllRoutes } from "./AllRoutes";
import "./Components/LandingPage/SlickSlider/css/SlickSlider.css";

import UpperNavbar from "./Components/Navbar/UpperNavbar";
import LowerNavbar from "./Components/Navbar/LowerNavbar";
import Footer from "./Components/Footer/Footer";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
    <div className="App">
      <ChakraProvider>
        <div >
          <UpperNavbar />
          <LowerNavbar />
        </div>
      </ChakraProvider>

      <div>
        <AllRoutes />
      </div>
      
      <Footer />
    </div>
  );
}

export default App;
