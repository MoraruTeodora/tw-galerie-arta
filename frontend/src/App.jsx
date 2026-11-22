import { Route, Routes } from "react-router-dom";

import Layout from "./components/Layout.jsx";
import OperePage from "./pages/OperePage.jsx";
import OperaDetaliuPage from "./pages/OperaDetaliuPage.jsx";
import DesprePage from "./pages/DesprePage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";

// Harta rutelor. Layout înconjoară fiecare pagină.
export default function App() {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route path="/" element={<OperePage />} />
                <Route path="/opere/:id" element={<OperaDetaliuPage />} />
                <Route path="/despre" element={<DesprePage />} />
                <Route path="*" element={<NotFoundPage />} />
            </Route>
        </Routes>
    );
}
