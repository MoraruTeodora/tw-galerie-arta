
import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";

function temaInitiala() {
    return window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
}

export default function Layout() {
    const [tema, setTema] = useState(temaInitiala);

    function handleTema() {
        const noua = tema === "dark" ? "light" : "dark";

        setTema(noua);
        document.documentElement.dataset.theme = noua;
    }

    return (
        <>
            <header className="app-header">
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

                <button
                    className="theme-toggle"
                    onClick={handleTema}
                    aria-pressed={tema === "dark"}
                >
                    {tema === "dark"
                        ? "☀️ Mod luminos"
                        : "🌙 Mod întunecat"}
                </button>

                <div className="header-decor">
                    <div className="header-text-container">
                        <h1>Art Gallery Management</h1>
                        <p>Track artworks and inventory status.</p>
                    </div>
                </div>

                <nav className="main-nav" data-testid="nav">
                    <NavLink to="/" end>
                        Galerie
                    </NavLink>

                    <NavLink to="/despre">
                        Despre
                    </NavLink>
                </nav>
            </header>

            <Outlet />

            <footer className="site-footer">
                <div className="footer-content">
                    <div className="site-logo">
                        <span className="logo-box">AG</span>
                        <span className="logo-text">Art Gallery</span>
                    </div>

                    <p className="footer-desc">
                        A space where art, creativity and timeless
                        beauty come together. Discover, explore and
                        preserve extraordinary works of art.
                    </p>
                </div>

                <hr className="footer-divider" />

                <p className="footer-copy">
                    &copy; 2026 Art Gallery Management.
                    All rights reserved.
                </p>
            </footer>
        </>
    );
}
