export interface GejalaPayload {
  title: string;
  description: string;
  level: string;
}

export async function fetchAllGejala(token?: string) {
  const res = await fetch("https://dearbaby.gilanghuda.my.id/api/gejala/get-all", {
    method: "GET",
    headers: token ? { Cookie: `api_token=${token}` } : {},
    cache: "no-store",
  });
  if (!res.ok) return [];
  const json = await res.json();
  return json.data || [];
}

export async function deleteGejala(id: number, token?: string) {
  const res = await fetch(`https://dearbaby.gilanghuda.my.id/api/gejala/delete?id=${id}`, {
    method: "DELETE",
    headers: token ? { Cookie: `api_token=${token}` } : {},
    cache: "no-store",
  });
  return res.ok;
}

export async function editGejala(id: number, payload: GejalaPayload, token?: string) {
  const res = await fetch(`https://dearbaby.gilanghuda.my.id/api/gejala/edit?id=${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      ...(token ? { Cookie: `api_token=${token}` } : {}),
    },
    body: JSON.stringify(payload),
    cache: "no-store",
  });
  return res.ok;
}

export async function createGejala(payload: GejalaPayload, token?: string) {
  const res = await fetch("https://dearbaby.gilanghuda.my.id/api/gejala/create", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...(token ? { Cookie: `api_token=${token}` } : {}),
    },
    body: JSON.stringify(payload),
    cache: "no-store",
  });
  return res.ok;
}
