export default function OperaCard({ opera }) {
    return (
        <li className={opera.expusa ? "card" : "card done"}>
            <div>
                <h3 className="card-title">
                    <img src="/paleta.svg" alt="Paleta SVG" className="title-icon" />
                    {opera.titlu}
                </h3>
                <p><strong>Type:</strong> {opera.tip} | <strong>Category:</strong> {opera.categorie}</p>
                <p><strong>Manager:</strong> {opera.administrator}</p>
            </div>
            <span className="status">{opera.expusa ? "On Display" : "In Storage"}</span>
        </li>
    );
}