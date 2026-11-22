import OperaCard from "./OperaCard.jsx";
import styles from "./OperaList.module.css";

export default function OperaList({
    opereArta,
    onToggle,
    onDelete,
    onOpenModal,
}) {
    if (opereArta.length === 0) {
        return (
            <p className="empty" data-testid="empty">
                There are no artworks in the inventory.
            </p>
        );
    }

    return (
        <ul className={styles.list}>
            {opereArta.map((opera) => (
                <OperaCard
                    key={opera.id}
                    opera={opera}
                    onToggle={onToggle}
                    onDelete={onDelete}
                    onOpenModal={onOpenModal}
                />
            ))}
        </ul>
    );
}
