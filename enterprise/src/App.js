import "./App.css";
import Header from "./component/Header";
import HeroSection from "./component/HeroSection";
import Project from "./component/Project";
import Contact from "./component/Contact";
import { BuyerReview, SellerReview } from "./component/Reviews";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./component/Footer";
function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <Project />
      <Contact />
      <BuyerReview />
      <SellerReview />
      <Footer />
    </div>
  );
}

export default App;
