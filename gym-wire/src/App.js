import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Pages/Shared/Header/Header";
import Footer from "./Pages/Shared/Footer/Footer";
import Home from "./Pages/Home/Home/Home";
import About from "./Pages/About/About";
import Services from "./Pages/Services/Services";
import Testimonials from "./Pages/Testimonials/Testimonials";
import Blogs from "./Pages/Blogs/Blogs";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import Contact from "./Pages/Contact/Contact";
import ContactMessage from "./Pages/Contact/ContactMessage/ContactMessage";
import NotFound from "./Pages/NotFound/NotFound";
import CheckOut from "./Pages/CheckOut/CheckOut";
import RequireAuth from "./Pages/RequireAuth/RequireAuth";
import ServiceDetails from "./Pages/Services/ServiceDetails/ServiceDetails";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/services" element={<Services />}></Route>
        <Route path="/service/:serviceId" element={<ServiceDetails/>}></Route>
        <Route path="/testimonials" element={<Testimonials />}></Route>
        <Route path="/blogs" element={<Blogs />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/contactMessage" element={<ContactMessage />}></Route>
        <Route
          path="/checkout"
          element={
            <RequireAuth>
              <CheckOut />
            </RequireAuth>
          }
        ></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
