import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchOpera } from "../api.js";
import styles from "./OperaDetaliuPage.module.css";

export default function OperaDetaliuPage() {
    const { id } = useParams(); // text din URL, de exemplu "3"

    // id-ul din rezultat arată pentru ce adresă s-a încărcat opera,
    // ca la schimbarea adresei să nu se afișeze o operă veche
    const [result, setResult] = useState({
        id: null,
        opera: null,
        error: null,
    });

    // Se reîncarcă dacă se schimbă id-ul din adresă
    useEffect(() => {
        let ignore = false;

        fetchOpera(id)
            .then((opera) => {
                if (!ignore) setResult({ id, opera, error: null });
            })
            .catch((err) => {
                if (!ignore) setResult({ id, opera: null, error: err.message });
            });

        return () => {
            ignore = true;
        };
    }, [id]);

    if (result.id !== id) {
        return (
            <section className="panel">
                <p className="info" data-testid="loading">
                    Loading the artwork...
                </p>
            </section>
        );
    }

    if (result.error) {
        return (
            <section className="panel">
                <p className="error" data-testid="error">
                    The artwork could not be loaded: {result.error}
                </p>
                <Link to="/">Back to the gallery</Link>
            </section>
        );
    }

    const opera = result.opera;

    return (
        <section className={`panel ${styles.detail}`} data-testid="detail">
            <Link to="/" className={styles.back}>
                ← Back to the gallery
            </Link>

            <h2 className={styles.title} data-testid="detail-title">
                {opera.titlu}
            </h2>

            <div className={styles.content}>
                <img
                    src={opera.imagine}
                    alt={opera.titlu}
                    className={styles.imagine}
                />

                <dl className={styles.fields}>
                    <dt>Artist</dt>
                    <dd>{opera.artist}</dd>
                    <dt>Year</dt>
                    <dd>{opera.an}</dd>
                    <dt>Tip</dt>
                    <dd>{opera.tip}</dd>
                    <dt>Category</dt>
                    <dd>{opera.categorie}</dd>
                    <dt>Administrator</dt>
                    <dd>{opera.administrator}</dd>
                    <dt>Status</dt>
                    <dd className={opera.expusa ? styles.expusa : styles.stocata}>
                        {opera.expusa ? "On display" : "In storage"}
                    </dd>
                    <dt>ID</dt>
                    <dd>{opera.id}</dd>
                </dl>
            </div>
        </section>
    );
}
