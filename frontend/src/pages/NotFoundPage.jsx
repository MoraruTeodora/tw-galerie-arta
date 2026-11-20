
import { Link } from "react-router-dom";

export default function NotFoundPage() {
    return (
        <main>
            <section data-testid="not-found">
                <h2>404 - Pagina nu a fost găsită</h2>

                <p>
                    Ne pare rău, pagina pe care o cauți
                    nu există.
                </p>

                <Link to="/">
                    Înapoi la galerie
                </Link>
            </section>
        </main>
    );
}
