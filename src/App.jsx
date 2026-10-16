import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home.jsx";
import LandingEmpaqueAgricola from "./pages/LandingEmpaqueAgricola.jsx";
import LandingNominaAgricola from "./pages/LandingNominaAgricola.jsx";
import LandingControlAsistenciaQr from "./pages/LandingControlAsistenciaQr.jsx";
import NotFound from "./pages/NotFound.jsx";
import FloatingInstagramButton from "./components/FloatingInstagramButton.jsx";
import { CONTACT, whatsappUrl } from "./content/site.js";
import { useScrollReveal } from "./hooks/useScrollReveal";

const WHATSAPP_LINK = whatsappUrl();

function App() {
  const { pathname } = useLocation();
  useScrollReveal(pathname);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home lang="en" />} />
        <Route path="/es" element={<Home lang="es" />} />
        <Route
          path="/software-empaque-agricola"
          element={<LandingEmpaqueAgricola whatsappLink={WHATSAPP_LINK} />}
        />
        <Route
          path="/sistema-nomina-agricola"
          element={<LandingNominaAgricola whatsappLink={WHATSAPP_LINK} />}
        />
        <Route
          path="/control-asistencia-qr"
          element={<LandingControlAsistenciaQr whatsappLink={WHATSAPP_LINK} />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <FloatingInstagramButton url={CONTACT.instagramUrl} handle={CONTACT.instagramHandle} />
    </>
  );
}

export default App;
