import "./App.css";
import Countries from "./Components/Countries/Countries";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import CountryDetails from './Components/CountryDetails/CountryDetails'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Countries />} />
          <Route path="/countries" element={<Countries />} />
          <Route path="/country/:countryId" element={<CountryDetails/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
