import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import styles from "./Layout.module.css";

function temaInitiala() {
    return window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
}

// NavLink marchează singur pagina curentă
function navClass({ isActive }) {
    return isActive ? `${styles.link} ${styles.active}` : styles.link;
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
            <header className={styles.header}>
                <div className={styles.leftPanel}>
                    <div className={styles.logo}>
                        <span className={styles.logoBox}>AG</span>
                        <span className={styles.logoText}>Art Gallery</span>
                    </div>

                    <div className={styles.scene}>
                        <div className={styles.canvas}>
                            <div className={styles.splash}></div>
                            <div className={styles.sparkle}>✨</div>
                        </div>
                        <div className={styles.brush}>🖌️</div>
                    </div>
                </div>

                <button
                    className={styles.themeToggle}
                    onClick={handleTema}
                    aria-pressed={tema === "dark"}
                >
                    {tema === "dark"
                        ? "☀️ Light mode"
                        : "🌙 Dark mode"}
                </button>

                <div className={styles.decor}>
                    <div>
                        <h1>Art Gallery Management</h1>
                        <p>Track artworks and inventory status.</p>
                    </div>
                </div>

                <nav className={styles.nav} data-testid="nav">
                    <NavLink to="/" end className={navClass}>
                        Gallery
                    </NavLink>

                    <NavLink to="/despre" className={navClass}>
                        About
                    </NavLink>
                </nav>
            </header>

            <main className={styles.main}>
                <Outlet />
            </main>

            <footer className={styles.footer}>
                <div className={styles.logo}>
                    <span className={styles.logoBox}>AG</span>
                    <span className={styles.logoText}>Art Gallery</span>
                </div>

                <p className={styles.footerDesc}>
                    A space where art, creativity and timeless
                    beauty come together. Discover, explore and
                    preserve extraordinary works of art.
                </p>

                <hr className={styles.divider} />

                <p className={styles.copy}>
                    &copy; 2026 Art Gallery Management.
                    All rights reserved.
                </p>
            </footer>
        </>
    );
}
