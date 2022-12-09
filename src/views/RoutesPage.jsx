import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import PageNotFound from "./notFound/pageNotFound";
import Header from "../components/Headers/Header";
//import Footer from "../components/Footers/Footer";
import Home from "./Home/home";

function RoutesPage() {
  return (
    <div className="App">
      <div className="fixed-header-fill show-md">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={<Home />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
          {/* <Footer /> */}
        </BrowserRouter>
      </div>
    </div>
  );
}
export default RoutesPage;
