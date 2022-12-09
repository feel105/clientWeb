import RoutesPage from "./views/RoutesPage";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/style.css";
import "font-awesome/css/font-awesome.min.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <ToastContainer />
      <RoutesPage />
    </>
  );
}

export default App;
