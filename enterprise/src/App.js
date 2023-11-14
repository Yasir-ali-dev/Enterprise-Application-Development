import "./App.css";
import HeroSection from "./component/HeroSection";
import Project from "./component/Project";
import { BuyerReview, SellerReview } from "./component/Reviews";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./component/Layout";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<HeroSection />} />
            <Route path="/projects" element={<Project />} />
            <Route path="/buyerReview" element={<BuyerReview />} />
            <Route path="/sellerReview" element={<SellerReview />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
