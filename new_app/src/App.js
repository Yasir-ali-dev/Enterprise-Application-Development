import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarContainer from "./components/NavbarContainer";
import Welcome from "./components/Welcome";
import Auctions from "./components/Auctions";
import { Discover } from "./components/Discover";
import Footer from "./components/Footer";

function App() {
  return (
    <div style={{ backgroundColor: "1F1D2B" }}>
      <NavbarContainer />
      <Welcome />
      <Auctions />
      <Discover />
      <Footer />
    </div>
  );
}

export default App;
