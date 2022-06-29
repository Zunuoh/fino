import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import HomeScreen from "./pages/homescreen/HomeScreen";
import ContactusScreen from "./pages/contact/ContactusScreen";
import AboutUs from "./pages/aboutus/AboutUs";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
  <Router>
    <Routes>
      <Route path="/" element={<HomeScreen/>}/>
      <Route path="/contactus" element={<ContactusScreen/>}/>
      <Route path="/aboutus" element={<AboutUs/>}/>

    </Routes>
  </Router>
    );
}

export default App;
