
import { useState, useEffect } from "react";

import OperaList from "../components/OperaList.jsx";
import OperaForm from "../components/OperaForm.jsx";

import {
    fetchOpere,
    createOpera,
    updateOpera,
    deleteOpera,
} from "../api.js";

export default function OperePage() {
    const [opereArta, setOpereArta] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [actionError, setActionError] = useState("");
    const [operaSelectata, setOperaSelectata] = useState(null);

    useEffect(() => {
        let ignore = false;

        async function load() {
            try {
                const data = await fetchOpere();

                if (!ignore) {
                    setOpereArta(data);
                }
            } catch (err) {
                if (!ignore) {
                    setError(err.message);
                }
            } finally {
                if (!ignore) {
                    setLoading(false);
                }
            }
        }

        load();

        return () => {
            ignore = true;
        };
    }, []);

    // ADĂUGARE operă - POST
    async function handleAdd(operaNoua) {
        setActionError("");

        try {
            const operaSalvata = await createOpera(operaNoua);
            setOpereArta((prev) => [...prev, operaSalvata]);
        } catch (err) {
            throw new Error("Nu s-a putut adăuga opera: " + err.message);
        }
    }

    // MODIFICARE stare operă - PATCH
    async function handleToggle(id) {
        const opera = opereArta.find((o) => o.id === id);

        if (!opera) return;

        setActionError("");

        try {
            const actualizata = await updateOpera(id, {
                expusa: !opera.expusa,
            });

            setOpereArta((prev) =>
                prev.map((o) => o.id === id ? actualizata : o)
            );

            setOperaSelectata((prev) =>
                prev?.id === id ? actualizata : prev
            );
        } catch (err) {
            setActionError("Nu s-a putut modifica opera: " + err.message);
        }
    }

    // ȘTERGERE operă - DELETE
    async function handleDelete(id) {
        setActionError("");

        try {
            await deleteOpera(id);

            setOpereArta((prev) =>
                prev.filter((o) => o.id !== id)
            );

            setOperaSelectata((prev) =>
                prev?.id === id ? null : prev
            );
        } catch (err) {
            setActionError("Nu s-a putut șterge opera: " + err.message);
        }
    }

    const opereExpuse = opereArta.filter((o) => o.expusa).length;

    return (
        <main>
            <section>
                <h2>Artwork Inventory</h2>

                <OperaForm onAdd={handleAdd} />

                {actionError && (
                    <p className="error" data-testid="action-error">
                        {actionError}
                    </p>
                )}

                {loading && (
                    <p className="info" data-testid="loading">
                        Se încarcă galeria...
                    </p>
                )}

                {error && (
                    <p className="error" data-testid="error">
                        Nu am putut încărca datele: {error}.
                        Rulează <code>npm run api</code>?
                    </p>
                )}

                {!loading && !error && (
                    <>
                        <p>
                            {opereArta.length} artworks,{" "}
                            {opereExpuse} on display
                        </p>

                        <OperaList
                            opereArta={opereArta}
                            onToggle={handleToggle}
                            onDelete={handleDelete}
                            onOpenModal={setOperaSelectata}
                        />
                    </>
                )}
            </section>

            {/* POP-UP cu detaliile operei */}
            {operaSelectata && (
                <div
                    className="modal-overlay"
                    onClick={() => setOperaSelectata(null)}
                >
                    <div
                        className="modal-content"
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby="modal-title"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            className="modal-close"
                            onClick={() => setOperaSelectata(null)}
                            aria-label="Închide pop-up-ul"
                        >
                            ×
                        </button>

                        <h2 id="modal-title">
                            {operaSelectata.titlu}
                        </h2>

                        <img
                            src={operaSelectata.imagine}
                            alt={operaSelectata.titlu}
                            className="modal-image"
                        />

                        <p><strong>Artist:</strong> {operaSelectata.artist}</p>
                        <p><strong>An:</strong> {operaSelectata.an}</p>
                        <p><strong>Tip:</strong> {operaSelectata.tip}</p>
                        <p><strong>Categorie:</strong> {operaSelectata.categorie}</p>
                        <p>
                            <strong>Administrator:</strong>{" "}
                            {operaSelectata.administrator}
                        </p>
                        <p>
                            <strong>Stare:</strong>{" "}
                            {operaSelectata.expusa ? "Expusă" : "În depozit"}
                        </p>
                    </div>
                </div>
            )}
        </main>
    );
}
