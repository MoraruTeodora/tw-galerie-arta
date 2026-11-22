import { Link } from "react-router-dom";
import styles from "./OperaCard.module.css";

export default function OperaCard({
    opera,
    onToggle,
    onDelete,
    onOpenModal,
}) {
    return (
        <li
            className={opera.expusa ? styles.card : `${styles.card} ${styles.done}`}
            data-testid="item"
            data-id={opera.id}
        >
            <div className={styles.main}>
                <input
                    type="checkbox"
                    checked={opera.expusa}
                    onChange={() => onToggle(opera.id)}
                    data-testid="item-toggle"
                    aria-label={`Toggle status for ${opera.titlu}`}
                />

                <button
                    type="button"
                    className={styles.imageButton}
                    onClick={() => onOpenModal(opera)}
                    aria-label={`View ${opera.titlu}`}
                >
                    <img
                        src={opera.imagine}
                        alt={opera.titlu}
                        className={styles.imagine}
                    />
                </button>

                <div>
                    <h3 className={styles.title}>
                        <Link
                            to={`/opere/${opera.id}`}
                            data-testid="item-link"
                        >
                            {opera.titlu}
                        </Link>
                    </h3>

                    <p><strong>Tip:</strong> {opera.tip}</p>
                    <p><strong>Category:</strong> {opera.categorie}</p>
                    <p><strong>Administrator:</strong> {opera.administrator}</p>
                </div>
            </div>

            <div className={styles.actions}>
                <span className={styles.status}>
                    {opera.expusa ? "On Display" : "In Storage"}
                </span>

                <button
                    className="btn-danger"
                    onClick={() => onDelete(opera.id)}
                    aria-label={`Delete ${opera.titlu}`}
                    data-testid="item-delete"
                >
                    Delete
                </button>
            </div>
        </li>
    );
}
