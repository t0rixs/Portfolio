import Tech from "./components/Tech/Tech";
import Activity from "./components/Activity/Activity";
import Footer from "./components/shared/Footer";
import Aboutme from "./components/Aboutme/Aboutme";
import { HashRouter, Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { useShortcut } from "./components/shared/shortcut";
import Header from "./components/shared/Header";
import Background from "./components/shared/Background";
import ScrollTo from "./components/shared/ScrollTo";
import Contact from "./components/Contact/Contact";

/* ここが Router 内で動く本体 */
function AnimatedRoutes() {
  const location = useLocation();
  const navigate = useNavigate();

  useShortcut("ArrowLeft", () => {
    if (location.pathname === "/") navigate("/act");
    else if (location.pathname === "/act") navigate("/");
  });

  useShortcut("ArrowRight", () => {
    if (location.pathname === "/") navigate("/act");
    else if (location.pathname === "/act") navigate("/");
  });



  return (
    <>
      <Background />
      <ScrollTo />
      <Header location={location.pathname} />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/tech" element={<Tech />} />
          <Route path="/act" element={<Activity />} />
          <Route path="/" element={<Aboutme />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

/* App は Router の殻だけ */
export default function App() {
  return (
    <HashRouter>
      <AnimatedRoutes />
      <Footer />
    </HashRouter>
  );
}
