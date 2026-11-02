import { useState } from "react";
import "./App.css";
import OperaList from "./components/OperaList.jsx";

// Am adăugat artist, an și o imagine pentru fiecare 
const OPERE_INITIALE = [
    { id: 1, titlu: "Noapte Înstelată", expusa: true, tip: "Painting", categorie: "Modern", administrator: "Teodora Moraru", artist: "Vincent van Gogh", an: 1889, imagine: "/noaptea_instelata.jpg" },
    { id: 2, titlu: "Gânditorul", expusa: false, tip: "Sculpture", categorie: "Classic", administrator: "Teodora Moraru", artist: "Auguste Rodin", an: 1902, imagine: "/ganditorul.jpg" },
    { id: 3, titlu: "Peisaj de toamnă", expusa: true, tip: "Photography", categorie: "Contemporary", administrator: "Teodora Moraru", artist: "Ansel Adams", an: 1942, imagine: "/peisaj_de_toamna.jpg" }
];

function temaInitiala() {
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export default function App() {
    const [opereArta, setOpereArta] = useState(OPERE_INITIALE);
    const [tema, setTema] = useState(temaInitiala);
    const [operaSelectata, setOperaSelectata] = useState(null); // Memoria pentru modal

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
                {/* PANOU STÂNGA: Logo + Ilustrația animată */}
                <div className="header-left-panel">
                    <div className="site-logo">
                        <span className="logo-box">AG</span>
                        <span className="logo-text">Art Gallery</span>
                    </div>
                    
                    <div className="animated-art-scene">
                        <div className="art-canvas">
                            <div className="art-splash"></div>
                            <div className="art-sparkle">✨</div>
                        </div>
                        <div className="art-brush">🖌️</div>
                    </div>
                </div>

                {/* BUTON TEMĂ (Dreapta) */}
                <button className="theme-toggle" onClick={handleTema} aria-pressed={tema === "dark"}>
                    {tema === "dark" ? "☀️ Mod luminos" : "🌙 Mod întunecat"}
                </button>
                
                {/* CENTRU: Titlu principal */}
                <div className="header-decor">
                    <div className="header-text-container">
                        <h1>Art Gallery Management</h1>
                        <p>Track artworks and inventory status.</p>
                        <p className="app-count">
                            {opereArta.length} artworks, {opereExpuse} on display
                        </p>
                    </div>
                </div>
            </header>
            
            <main>
                <section>
                    <h2>Artwork Inventory</h2>
                    <OperaList 
                        opereArta={opereArta} 
                        onToggle={handleToggle} 
                        onDelete={handleDelete} 
                        onOpenModal={setOperaSelectata} 
                    />
                </section>
            </main>

            {/* SUBSOLUL (FOOTER) */}
            <footer className="site-footer">
                <div className="footer-content">
                    <div className="site-logo">
                        <span className="logo-box">AG</span>
                        <span className="logo-text">Art Gallery</span>
                    </div>
                    <p className="footer-desc">
                        A space where art, creativity and timeless beauty come together. Discover, explore and preserve extraordinary works of art.
                    </p>
                </div>
                <hr className="footer-divider" />
                <p className="footer-copy">&copy; 2026 Art Gallery Management. All rights reserved.</p>
            </footer>

            {/* FEREASTRA MODALĂ (DETALII) */}
            {operaSelectata && (
                <div className="modal-overlay" onClick={() => setOperaSelectata(null)}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <button className="modal-close" onClick={() => setOperaSelectata(null)}>✖</button>
                        <img src={operaSelectata.imagine} alt={operaSelectata.titlu} className="modal-image" />
                        
                        <div className="modal-details">
                            <h2 className="modal-title">{operaSelectata.titlu}</h2>
                            <p><strong>Artist:</strong> {operaSelectata.artist}</p>
                            <p><strong>Anul realizării:</strong> {operaSelectata.an}</p>
                            <p><strong>Categorie:</strong> {operaSelectata.categorie} ({operaSelectata.tip})</p>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}