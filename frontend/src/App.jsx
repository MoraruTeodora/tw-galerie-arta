import { useState } from "react";
import "./App.css";
import OperaList from "./components/OperaList.jsx";

const OPERE_INITIALE = [
    { id: 1, titlu: "Noapte Înstelată", expusa: true, tip: "Painting", categorie: "Modern", administrator: "Teodora Moraru" },
    { id: 2, titlu: "Gânditorul", expusa: false, tip: "Sculpture", categorie: "Classic", administrator: "Teodora Moraru" },
    { id: 3, titlu: "Peisaj de toamnă", expusa: true, tip: "Photography", categorie: "Contemporary", administrator: "Teodora Moraru" }
];

function temaInitiala() {
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export default function App() {
    const [opereArta, setOpereArta] = useState(OPERE_INITIALE);
    const [tema, setTema] = useState(temaInitiala);

    function handleToggle(id) {
        setOpereArta((prev) =>
            prev.map((o) => (o.id === id ? { ...o, expusa: !o.expusa } : o))
        );
    }

    function handleDelete(id) {
        setOpereArta((prev) => prev.filter((o) => o.id !== id));
    }

    function handleTema() {
        const noua = tema === "dark" ? "light" : "dark";
        setTema(noua);
        document.documentElement.dataset.theme = noua;
    }

    const opereExpuse = opereArta.filter((o) => o.expusa).length;

    return (
        <>
            <header className="app-header">
                <button
                    className="theme-toggle"
                    onClick={handleTema}
                    aria-pressed={tema === "dark"}
                >
                    {tema === "dark" ? "Mod luminos" : "Mod întunecat"}
                </button>
                <div className="header-decor">
                    <img src="/sevalet.svg" alt="Șevalet" className="header-icon" />
                    <div>
                        <h1>Art Gallery Management</h1>
                        <p>Track artworks and inventory status.</p>
                        <p className="app-count">
                            {opereArta.length} artworks, {opereExpuse} on display
                        </p>
                    </div>
                    <img src="/tablou.svg" alt="Tablou" className="header-icon" />
                </div>
            </header>
            <main>
                <section>
                    <h2>Artwork Inventory</h2>
                    <OperaList 
                        opereArta={opereArta} 
                        onToggle={handleToggle} 
                        onDelete={handleDelete} 
                    />
                </section>
            </main>
        </>
    );
}