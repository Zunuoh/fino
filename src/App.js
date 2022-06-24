import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Homescreen from "./components/homescreen/Homescreen";
import ContactusScreen from "./components/contact/ContactusScreen";
import Aboutus from "./components/aboutus/Aboutus";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
  <Router>
    <Routes>
      <Route path="/" element={<Homescreen/>}/>
      <Route path="/contactus" element={<ContactusScreen/>}/>
      <Route path="/aboutus" element={<Aboutus/>}/>

    </Routes>
  </Router>
    );
}

export default App;
