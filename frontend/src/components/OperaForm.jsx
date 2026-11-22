
import { useState } from "react";
import { CATEGORII, TIPURI } from "../constants.js";
import styles from "./OperaForm.module.css";

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
            return "The artwork title is required.";
        }

        if (!artist.trim()) {
            setCampInvalid("artist");
            return "The artist name is required.";
        }

        const anNumeric = Number(an);

        if (!an.trim()) {
            setCampInvalid("an");
            return "The year is required.";
        }

        if (
            !Number.isInteger(anNumeric) ||
            anNumeric < 1450 ||
            anNumeric > AN_CURENT
        ) {
            setCampInvalid("an");
            return `The year must be between 1450 and ${AN_CURENT}.`;
        }

        if (!imagine.trim()) {
            setCampInvalid("imagine");
            return "The image path is required.";
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
            className={styles.form}
            onSubmit={handleSubmit}
            noValidate
            data-testid="form"
        >
            <h3>Add a new artwork</h3>

            <label>
                Artwork title
                <input
                    type="text"
                    value={titlu}
                    onChange={(e) => {
                        setTitlu(e.target.value);
                        setCampInvalid("");
                        setEroare("");
                    }}
                    placeholder="E.g.: Mona Lisa"
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
                    placeholder="E.g.: Leonardo da Vinci"
                    aria-invalid={campInvalid === "artist"}
                    data-testid="form-artist"
                />
            </label>

            <label>
                Year
                <input
                    type="number"
                    value={an}
                    onChange={(e) => {
                        setAn(e.target.value);
                        setCampInvalid("");
                        setEroare("");
                    }}
                    placeholder="E.g.: 1503"
                    aria-invalid={campInvalid === "an"}
                    data-testid="form-an"
                />
            </label>

            <label>
                Type
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
                Category
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
                Image path
                <input
                    type="text"
                    value={imagine}
                    onChange={(e) => {
                        setImagine(e.target.value);
                        setCampInvalid("");
                        setEroare("");
                    }}
                    placeholder="E.g.: /mona_lisa.jpg"
                    aria-invalid={campInvalid === "imagine"}
                    data-testid="form-imagine"
                />
            </label>

            <label className={styles.checkbox}>
                <input
                    type="checkbox"
                    checked={expusa}
                    onChange={(e) => setExpusa(e.target.checked)}
                    data-testid="form-expusa"
                />
                Artwork is on display
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
                {trimite ? "Saving..." : "Add artwork"}
            </button>
        </form>
    );
}
