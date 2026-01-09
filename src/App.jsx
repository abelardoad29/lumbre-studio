import { Navigate, Route, Routes } from "react-router-dom";
import LandingEN from "./pages/LandingEN.jsx";
import LandingES from "./pages/LandingES.jsx";

const WHATSAPP_LINK = "";
const INSTAGRAM_LINK = "https://instagram.com/lumbre.studiomx";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={<LandingEN instagramLink={INSTAGRAM_LINK} whatsappLink={WHATSAPP_LINK} />}
      />
      <Route
        path="/es"
        element={<LandingES instagramLink={INSTAGRAM_LINK} whatsappLink={WHATSAPP_LINK} />}
      />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
