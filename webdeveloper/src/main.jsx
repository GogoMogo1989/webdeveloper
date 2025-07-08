import { StrictMode, Suspense, lazy } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./context/languageContext.jsx";
import "./index.css";
import { HelmetProvider } from "react-helmet-async";
import SuspensePage from "./pages/Suspense.jsx";
const BlogLayout = lazy(() => import("./layout/BlogLayout.jsx"));
const BlogDetailsLayout = lazy(() => import("./layout/BlogDetailsLayout.jsx"));
const MainLayout = lazy(() => import("./layout/MainLayout.jsx"));
const NotFoundLayout = lazy(() => import("./layout/NotFoundLayout.jsx"));

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HelmetProvider>
      <LanguageProvider>
        <Router>
          <Suspense fallback={<SuspensePage />}>
            <Routes>
              <Route path="/" element={<MainLayout />} />
              <Route path="/blog" element={<BlogLayout />} />
              <Route path="/blog/:id" element={<BlogDetailsLayout />} />
              <Route path="*" element={<NotFoundLayout />} />
            </Routes>
          </Suspense>
        </Router>
      </LanguageProvider>
    </HelmetProvider>
  </StrictMode>
);
