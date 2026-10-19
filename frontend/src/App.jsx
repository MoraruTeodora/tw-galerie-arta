import "./App.css";

const opereArta = [
    { id: 1, titlu: "Noapte Înstelată", expusa: true, tip: "Pictură", categorie: "Modern", administrator: "Teodora Moraru" },
    { id: 2, titlu: "Gânditorul", expusa: false, tip: "Sculptură", categorie: "Clasic", administrator: "Teodora Moraru" },
    { id: 3, titlu: "Peisaj de toamnă", expusa: true, tip: "Fotografie", categorie: "Contemporan", administrator: "Teodora Moraru" }
];

export default function App() {
    const opereExpuse = opereArta.filter((o) => o.expusa).length;

    return (
        <>
            <header>
                <h1>Management Galerie de Artă</h1>
                <p>Urmărește operele de artă și starea inventarului.</p>
                <p className="app-count">
                    {opereArta.length} opere, dintre care {opereExpuse} expuse
                </p>
            </header>
            <main>
                <section className="card">
                    <div>
                        <h2>Inventar Opere</h2>
                        {/* Temporar: date brute; componentele apar în Etapa 4 */}
                        <pre>{JSON.stringify(opereArta, null, 2)}</pre>
                    </div>
                </section>
            </main>
        </>
    );
}