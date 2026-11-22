import { Link } from "react-router-dom";

export default function NotFoundPage() {
    return (
        <section className="panel" data-testid="not-found">
            <h2>404 - Page not found</h2>

            <p className="info">
                Sorry, the page you are looking for does not exist.
            </p>

            <Link to="/">Back to the gallery</Link>
        </section>
    );
}
