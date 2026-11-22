
export const API_URL =
    import.meta.env.VITE_API_URL ?? "http://localhost:3001";

// Funcție comună pentru cererile către server
async function request(path, options = {}) {
    const response = await fetch(`${API_URL}${path}`, {
        ...options,
        headers: {
            "Content-Type": "application/json",
            ...options.headers,
        },
    });

    if (!response.ok) {
        throw new Error(`Server error: ${response.status}`);
    }

    if (response.status === 204) {
        return null;
    }

    return response.json();
}

// CITIRE - GET: toate operele
export function fetchOpere() {
    return request("/opere");
}

// CITIRE - GET: o singură operă după ID
export function fetchOpera(id) {
    return request(`/opere/${id}`);
}

// ADĂUGARE - POST
export function createOpera(opera) {
    return request("/opere", {
        method: "POST",
        body: JSON.stringify(opera),
    });
}

// MODIFICARE - PATCH
export function updateOpera(id, changes) {
    return request(`/opere/${id}`, {
        method: "PATCH",
        body: JSON.stringify(changes),
    });
}

// ȘTERGERE - DELETE
export function deleteOpera(id) {
    return request(`/opere/${id}`, {
        method: "DELETE",
    });
}
