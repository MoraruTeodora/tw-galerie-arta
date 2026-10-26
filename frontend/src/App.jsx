import "./App.css";
import OperaList from "./components/OperaList.jsx";

const opereArta = [
    { id: 1, titlu: "Noapte Înstelată", expusa: true, tip: "Painting", categorie: "Modern", administrator: "Teodora Moraru" },
    { id: 2, titlu: "Gânditorul", expusa: false, tip: "Sculpture", categorie: "Classic", administrator: "Teodora Moraru" },
    { id: 3, titlu: "Peisaj de toamnă", expusa: true, tip: "Photography", categorie: "Contemporary", administrator: "Teodora Moraru" }
];

export default function App() {
    const opereExpuse = opereArta.filter((o) => o.expusa).length;

    return (
        <>
            <header>
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
                    <OperaList opereArta={opereArta} />
                </section>
            </main>
        </>
    );
}