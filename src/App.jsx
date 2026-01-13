import { Navigate, Route, Routes } from "react-router-dom";
import LandingEN from "./pages/LandingEN.jsx";
import LandingES from "./pages/LandingES.jsx";
import FloatingInstagramButton from "./components/FloatingInstagramButton.jsx";
import { useAutoLanguageRedirect } from "./hooks/useAutoLanguageRedirect";

const WHATSAPP_LINK = "https://wa.me/5216682471627";
const INSTAGRAM_URL = "https://instagram.com/lumbre.studiomx";

function App() {
  useAutoLanguageRedirect();

  return (
    <>
      <Routes>
        <Route path="/" element={<LandingEN whatsappLink={WHATSAPP_LINK} />} />
        <Route path="/es" element={<LandingES whatsappLink={WHATSAPP_LINK} />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <FloatingInstagramButton url={INSTAGRAM_URL} />
    </>
  );
}

export default App;
