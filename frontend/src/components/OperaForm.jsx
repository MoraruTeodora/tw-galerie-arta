
import { useState } from "react";

const TIPURI = ["Painting", "Sculpture", "Photography"];

const CATEGORII = [
    "Modern",
    "Classic",
    "Contemporary",
    "Baroque",
    "Surrealism",
];

const AN_CURENT = new Date().getFullYear();

export default function OperaForm({ onAdd }) {
    const [titlu, setTitlu] = useState("");
    const [artist, setArtist] = useState("");
    const [an, setAn] = useState("");
    const [tip, setTip] = useState("Painting");
    const [categorie, setCategorie] = useState("Modern");
    const [imagine, setImagine] = useState("");
    const [expusa, setExpusa] = useState(false);

    const [eroare, setEroare] = useState("");
    const [campInvalid, setCampInvalid] = useState("");
    const [trimite, setTrimite] = useState(false);

    function valideaza() {
        if (!titlu.trim()) {
            setCampInvalid("titlu");
            return "Titlul operei este obligatoriu.";
        }

        if (!artist.trim()) {
            setCampInvalid("artist");
            return "Numele artistului este obligatoriu.";
        }

        const anNumeric = Number(an);

        if (!an.trim()) {
            setCampInvalid("an");
            return "Anul realizării este obligatoriu.";
        }

        if (
            !Number.isInteger(anNumeric) ||
            anNumeric < 1450 ||
            anNumeric > AN_CURENT
        ) {
            setCampInvalid("an");
            return `Anul trebuie să fie între 1450 și ${AN_CURENT}.`;
        }

        if (!imagine.trim()) {
            setCampInvalid("imagine");
            return "Calea către imagine este obligatorie.";
        }

        setCampInvalid("");
        return "";
    }

    async function handleSubmit(e) {
        e.preventDefault();

        const mesaj = valideaza();

        if (mesaj) {
            setEroare(mesaj);
            return;
        }

        setEroare("");
        setTrimite(true);

        try {
            await onAdd({
                titlu: titlu.trim(),
                artist: artist.trim(),
                an: Number(an),
                tip,
                categorie,
                imagine: imagine.trim(),
                expusa,
                administrator: "Teodora Moraru",
            });

            // Golim formularul doar după salvarea reușită
            setTitlu("");
            setArtist("");
            setAn("");
            setTip("Painting");
            setCategorie("Modern");
            setImagine("");
            setExpusa(false);
            setCampInvalid("");
        } catch (err) {
            setEroare(err.message);
        } finally {
            setTrimite(false);
        }
    }

    return (
        <form
            className="opera-form"
            onSubmit={handleSubmit}
            noValidate
            data-testid="form"
        >
            <h3>Adaugă o operă nouă</h3>

            <label>
                Titlul operei
                <input
                    type="text"
                    value={titlu}
                    onChange={(e) => {
                        setTitlu(e.target.value);
                        setCampInvalid("");
                        setEroare("");
                    }}
                    placeholder="Ex: Mona Lisa"
                    aria-invalid={campInvalid === "titlu"}
                    data-testid="form-title"
                />
            </label>

            <label>
                Artist
                <input
                    type="text"
                    value={artist}
                    onChange={(e) => {
                        setArtist(e.target.value);
                        setCampInvalid("");
                        setEroare("");
                    }}
                    placeholder="Ex: Leonardo da Vinci"
                    aria-invalid={campInvalid === "artist"}
                    data-testid="form-artist"
                />
            </label>

            <label>
                Anul realizării
                <input
                    type="number"
                    value={an}
                    onChange={(e) => {
                        setAn(e.target.value);
                        setCampInvalid("");
                        setEroare("");
                    }}
                    placeholder="Ex: 1503"
                    aria-invalid={campInvalid === "an"}
                    data-testid="form-an"
                />
            </label>

            <label>
                Tipul operei
                <select
                    value={tip}
                    onChange={(e) => setTip(e.target.value)}
                    data-testid="form-tip"
                >
                    {TIPURI.map((valoare) => (
                        <option key={valoare} value={valoare}>
                            {valoare}
                        </option>
                    ))}
                </select>
            </label>

            <label>
                Categoria
                <select
                    value={categorie}
                    onChange={(e) => setCategorie(e.target.value)}
                    data-testid="form-categorie"
                >
                    {CATEGORII.map((valoare) => (
                        <option key={valoare} value={valoare}>
                            {valoare}
                        </option>
                    ))}
                </select>
            </label>

            <label>
                Calea către imagine
                <input
                    type="text"
                    value={imagine}
                    onChange={(e) => {
                        setImagine(e.target.value);
                        setCampInvalid("");
                        setEroare("");
                    }}
                    placeholder="Ex: /mona_lisa.jpg"
                    aria-invalid={campInvalid === "imagine"}
                    data-testid="form-imagine"
                />
            </label>

            <label className="checkbox-label">
                <input
                    type="checkbox"
                    checked={expusa}
                    onChange={(e) => setExpusa(e.target.checked)}
                    data-testid="form-expusa"
                />
                Opera este expusă
            </label>

            {eroare && (
                <p
                    className="error"
                    data-testid="form-error"
                >
                    {eroare}
                </p>
            )}

            <button
                type="submit"
                disabled={trimite}
                data-testid="form-submit"
            >
                {trimite ? "Se salvează..." : "Adaugă opera"}
            </button>
        </form>
    );
}
