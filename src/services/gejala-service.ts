export async function fetchAllGejala() {
  const res = await fetch("https://dearbaby.gilanghuda.my.id/api/gejala/get-all", {
    method: "GET",
    cache: "no-store",
  });
  if (!res.ok) return [];
  const json = await res.json();
  return json.data || [];
}
