import OperaCard from "./OperaCard.jsx";

export default function OperaList({ opereArta }) {
    if (opereArta.length === 0) {
        return <p className="empty">There is no artwork in the gallery.</p>;
    }

    return (
        <ul>
            {opereArta.map((opera) => (
                <OperaCard key={opera.id} opera={opera} />
            ))}
        </ul>
    );
}