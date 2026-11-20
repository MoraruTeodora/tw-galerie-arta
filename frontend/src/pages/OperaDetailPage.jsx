
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchOpera } from "../api.js";

export default function OperaDetailPage() {
  const { id } = useParams();

  const [result, setResult] = useState({
    id: null,
    loading: true,
    opera: null,
    error: null,
  });

  useEffect(() => {
    let ignore = false;

    fetchOpera(id)
      .then((opera) => {
        if (!ignore) {
          setResult({
            id,
            loading: false,
            opera,
            error: null,
          });
        }
      })
      .catch((error) => {
        if (!ignore) {
          setResult({
            id,
            loading: false,
            opera: null,
            error: error.message,
          });
        }
      });

    return () => {
      ignore = true;
    };
  }, [id]);

  if (result.id !== id || result.loading) {
    return (
      <main>
        <section data-testid="detail">
          <p data-testid="loading">Se încarcă opera...</p>
        </section>
      </main>
    );
  }

  if (result.error || !result.opera) {
    return (
      <main>
        <section data-testid="detail">
          <h2>Opera nu a putut fi găsită</h2>
          <p data-testid="error">
            {result.error || "Această operă nu există."}
          </p>
          <Link to="/">Înapoi la galerie</Link>
        </section>
      </main>
    );
  }

  const opera = result.opera;

  return (
    <main>
      <section data-testid="detail">
        <Link to="/">← Înapoi la galerie</Link>

        <h2 data-testid="detail-title">{opera.titlu}</h2>

        <img
          src={opera.imagine}
          alt={opera.titlu}
          className="opera-imagine"
        />

        <p><strong>Artist:</strong> {opera.artist}</p>
        <p><strong>An:</strong> {opera.an}</p>
        <p><strong>Tip:</strong> {opera.tip}</p>
        <p><strong>Categorie:</strong> {opera.categorie}</p>
        <p><strong>Administrator:</strong> {opera.administrator}</p>
        <p>
          <strong>Stare:</strong>{" "}
          {opera.expusa ? "Expusă" : "În depozit"}
        </p>
      </section>
    </main>
  );
}
