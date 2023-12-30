import BurgerDay from "./components/BurgerDay";
import Delivery from "./components/Delivery";
import Events from "./components/Events";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Ingredients from "./components/Ingredients";
import Menu from "./components/Menu";
import Navbar from "./components/Navbar";
import Reviews from "./components/Reviews";
import Signature from "./components/Signature";
import Specials from "./components/Specials";


function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Specials />
      <Ingredients />
      <Menu />
      <Signature />
      <Delivery />
      <Reviews />
      <BurgerDay />
      <Events />
      <Footer />
    </>
  );
}

export default App;
