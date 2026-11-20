
import { Link } from "react-router-dom";

export default function OperaCard({
    opera,
    onToggle,
    onDelete,
    onOpenModal,
}) {
    return (
        <li
            className={opera.expusa ? "card" : "card done"}
            data-testid="item"
            data-id={opera.id}
        >
            <div className="card-info task-main">
                <input
                    type="checkbox"
                    checked={opera.expusa}
                    onChange={() => onToggle(opera.id)}
                    data-testid="item-toggle"
                    aria-label={`Schimbă starea pentru ${opera.titlu}`}
                />

                <button
                    type="button"
                    className="image-modal-trigger"
                    onClick={() => onOpenModal(opera)}
                    aria-label={`Vezi ${opera.titlu}`}
                >
                    <img
                        src={opera.imagine}
                        alt={opera.titlu}
                        className="opera-imagine"
                    />
                </button>

                <div className="opera-info">
                    <h3 className="card-title">
                        <Link
                            to={`/opere/${opera.id}`}
                            data-testid="item-link"
                        >
                            {opera.titlu}
                        </Link>
                    </h3>

                    <p><strong>Tip:</strong> {opera.tip}</p>
                    <p><strong>Categorie:</strong> {opera.categorie}</p>
                    <p><strong>Administrator:</strong> {opera.administrator}</p>
                </div>
            </div>

            <div className="card-actions">
                <span className="status">
                    {opera.expusa ? "On Display" : "In Storage"}
                </span>

                <button
                    className="btn-danger"
                    onClick={() => onDelete(opera.id)}
                    aria-label={`Șterge ${opera.titlu}`}
                    data-testid="item-delete"
                >
                    Șterge
                </button>
            </div>
        </li>
    );
}
