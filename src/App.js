import logo from "./logo.svg";
import "./App.css";
import Navbar from "./pages/Home/Navbar/Navbar";
import Header from "./pages/Home/Header/Header";
import Footer from "./pages/Home/Footer/Footer";
import Packages from "./pages/Home/Packages/Packages";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Header></Header>
      <Packages></Packages>
      <Footer></Footer>
    </div>
  );
}

export default App;
