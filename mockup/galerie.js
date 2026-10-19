const opereArta = [
    { id: 1, titlu: "Noapte Înstelată", expusa: true, tip: "Pictură", categorie: "Modern", administrator: "Teodora Moraru" },
    { id: 2, titlu: "Gânditorul", expusa: false, tip: "Sculptură", categorie: "Clasic", administrator: "Teodora Moraru" },
    { id: 3, titlu: "Peisaj de toamnă", expusa: true, tip: "Fotografie", categorie: "Contemporan", administrator: "Teodora Moraru" }
];

const TIPURI_ARTA = ["Pictură", "Sculptură", "Fotografie"];

function listeazaTitluri(lista) {
    return lista.map((o) => o.titlu);
}

function numaraExpuse(lista) {
    return lista.filter((o) => o.expusa).length;
}

function cautaDupaTitlu(lista, text) {
    const textMic = text.toLowerCase();
    return lista.filter((o) => o.titlu.toLowerCase().includes(textMic));
}

function nextId(lista) {
    return lista.reduce((max, o) => Math.max(max, o.id), 0) + 1;
}

function adaugaOpera(lista, titlu, tip, categorie = "Contemporan") {
    const titluCurat = titlu.trim();
    
    if (titluCurat === "") {
        console.log("Titlul nu poate fi gol!");
        return lista;
    }
    if (!TIPURI_ARTA.includes(tip)) {
        console.log(`Tip invalid: ${tip}`);
        return lista;
    }

    const nouaOpera = {
        id: nextId(lista),
        titlu: titluCurat,
        expusa: true,
        tip: tip,
        categorie: categorie,
        administrator: "Teodora Moraru"
    };

    return [...lista, nouaOpera];
}

function comutaStare(lista, id) {
    return lista.map((o) => 
        o.id === id ? { ...o, expusa: !o.expusa } : o
    );
}

function stergeOpera(lista, id) {
    return lista.filter((o) => o.id !== id);
}

console.log("--- Citire ---");
console.log("Titluri:", listeazaTitluri(opereArta).join(", "));
console.log("Opere expuse:", numaraExpuse(opereArta));
console.log("Căutare 'toamna':", listeazaTitluri(cautaDupaTitlu(opereArta, "toamna")).join(", "));

console.log("--- Adăugare ---");
let listaNoua = adaugaOpera(opereArta, "Mona Lisa", "Pictură", "Clasic");
console.log("Lista nouă:", listaNoua.length, "opere");
console.log("Originalul a rămas cu:", opereArta.length, "opere");

console.log("--- Modificare și ștergere ---");
listaNoua = comutaStare(listaNoua, 1);
console.log("După retragerea (debifarea) id 1, opere expuse:", numaraExpuse(listaNoua));
listaNoua = stergeOpera(listaNoua, 3);
console.log("După ștergerea id 3:", listeazaTitluri(listaNoua).join(", "));

console.log("--- Validare ---");
adaugaOpera(listaNoua, "   ", "Pictură");
adaugaOpera(listaNoua, "Statuie", "Ceramică");