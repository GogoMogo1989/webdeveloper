import { StrictMode, Suspense, lazy } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./context/languageContext.jsx";
import "./index.css";
import { HelmetProvider } from "react-helmet-async";
import SuspensePage from "./pages/Suspense.jsx";
const MainLayout = lazy(() => import("./layout/MainLayout.jsx"));

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HelmetProvider>
      <LanguageProvider>
        <Router>
          <Suspense fallback={<SuspensePage />}>
            <Routes>
              <Route path="/" element={<MainLayout />} />
            </Routes>
          </Suspense>
        </Router>
      </LanguageProvider>
    </HelmetProvider>
  </StrictMode>
);
