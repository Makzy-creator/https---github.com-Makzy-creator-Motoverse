
// const App = () => {
//   return (
//     <div>
//       <Frame />
//     </div>
//   )
// }

// export default App

// App.jsx (or your root component)
// import './App.css'; // Import global CSS file

// function App() {
//   return (
//     <div className="scrollbar-none">
//       {/* Your app content here */}
//     </div>
//   );
// }





import {
  Routes,
  Route,
} from "react-router-dom";
import Navbar from "./Components/LandingPage/Navbar";
import Hero from "./Components/LandingPage/Hero";
import Home from "./Pages/Home";
import Buyer from "./Pages/Buyer";
import Buyer1 from "./Pages/Buyer1";
import Hero2 from "./Components/LandingPage/Hero2";
import Card from "./Components/LandingPage/Card";
import About from "./Components/LandingPage/About";
import Products from "./Components/LandingPage/Products";
import CarProducts from "./Components/LandingPage/CarProducts";
import CarsPage from "./Components/LandingPage/CarsPage";
import ProgressBarSet from "./Components/LandingPage/ProgressBarSet";
import HowItWorks from "./Components/LandingPage/HowItWorks";
import Testmonials from "./Components/LandingPage/Testmonials";
import Team from "./Components/LandingPage/Team";
import { Theme } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css"
import Login from "./Components/Login";


function App() {
 
  return (
    <Theme>
      <Routes>
      <Route path="/Navbar" element={<Navbar />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/" element={<Hero />} />
      <Route path="/Home" element={<Home />} />
      <Route path="/buyer1" element={<Buyer />} />
      <Route path="/buyer" element={<Buyer1 />} />
      <Route path="/Hero2" element={<Hero2 />} />
      <Route path="/card" element={<Card />} />
      <Route path="/About" element={<About />} />
      <Route path="/Products" element={<Products />} />
      <Route path="/CarsPage" element={<CarsPage />} />
      <Route path="/ProgressBarSet" element={<ProgressBarSet />} />
      <Route path="/HowItWorks" element={<HowItWorks />} />
      <Route path="/Testimonials" element={<Testmonials/>} />
      <Route path="/Team" element={<Team/>} />
      <Route path="/CarProducts" element={<CarProducts/>} />
   </Routes>
    </Theme>
  );
}
export default App;
