
import { Routes, Route } from "react-router-dom";

import Layout from "./layout/Layout.jsx";
import OperePage from "./pages/OperePage.jsx";
import OperaDetailPage from "./pages/OperaDetailPage.jsx";
import DesprePage from "./pages/DesprePage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        {/* Pagina principală - lista operelor */}
        <Route
          path="/"
          element={<OperePage />}
        />

        {/* Pagina cu detaliile unei opere */}
        <Route
          path="/opere/:id"
          element={<OperaDetailPage />}
        />

        {/* Pagina Despre */}
        <Route
          path="/despre"
          element={<DesprePage />}
        />

        {/* Pagina pentru rute inexistente */}
        <Route
          path="*"
          element={<NotFoundPage />}
        />
      </Route>
    </Routes>
  );
}
