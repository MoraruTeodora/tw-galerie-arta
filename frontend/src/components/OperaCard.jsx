export default function OperaCard({ opera, onToggle, onDelete, onOpenModal }) {
    return (
        <li className={opera.expusa ? "card" : "card done"}>
            <div className="card-info task-main">
                <input
                    type="checkbox"
                    checked={opera.expusa}
                    onChange={() => onToggle(opera.id)}
                />
                
                {/* Imaginea pe care dai click pentru a deschide fereastra mare */}
                <img 
                    src={opera.imagine} 
                    alt={opera.titlu} 
                    className="opera-imagine" 
                    onClick={() => onOpenModal(opera)}
                    title="Click pentru a vedea detaliile"
                />

                <div>
                    <h3 className="card-title">
                        <img src="/paleta.svg" alt="Paleta SVG" className="title-icon" />
                        {opera.titlu}
                    </h3>
                    <p><strong>Type:</strong> {opera.tip} | <strong>Category:</strong> {opera.categorie}</p>
                    <p><strong>Manager:</strong> {opera.administrator}</p>
                </div>
            </div>
            
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