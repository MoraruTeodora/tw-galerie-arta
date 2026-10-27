import OperaCard from "./OperaCard.jsx";

export default function OperaList({ opereArta, onToggle, onDelete }) {
    if (opereArta.length === 0) {
        return <p className="empty">Nu există nicio operă de artă în inventar.</p>;
    }

    return (
        <ul className="task-list">
            {opereArta.map((opera) => (
                <OperaCard 
                    key={opera.id} 
                    opera={opera} 
                    onToggle={onToggle} 
                    onDelete={onDelete} 
                />
            ))}
        </ul>
    );
}