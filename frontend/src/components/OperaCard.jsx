export default function OperaCard({ opera, onToggle, onDelete }) {
    return (
        <li className={opera.expusa ? "card" : "card done"}>
            <label className="card-info task-main">
                <input
                    type="checkbox"
                    checked={opera.expusa}
                    onChange={() => onToggle(opera.id)}
                />
                <div>
                    <h3 className="card-title">
                        <img src="/paleta.svg" alt="Paleta SVG" className="title-icon" />
                        {opera.titlu}
                    </h3>
                    <p><strong>Type:</strong> {opera.tip} | <strong>Category:</strong> {opera.categorie}</p>
                    <p><strong>Manager:</strong> {opera.administrator}</p>
                </div>
            </label>
            
            <div className="card-actions">
                <span className="status">{opera.expusa ? "On Display" : "In Storage"}</span>
                <button
                    className="btn-danger"
                    onClick={() => onDelete(opera.id)}
                    aria-label={`Șterge ${opera.titlu}`}
                >
                    Șterge
                </button>
            </div>
        </li>
    );
}