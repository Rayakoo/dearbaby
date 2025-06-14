export async function getCurrentUser(token?: string) {
    console.log("Memeriksa token:", token);
    const res = await fetch("http://dearbaby.gilanghuda.my.id/api/auth/current-user", {
        method: "GET",
        headers: token ? { Cookie: `api_token=${token}` } : {},
        cache: "no-store",
        credentials: "include",
    });

    if (!res.ok) {
        console.error("Gagal mendapatkan pengguna:", res.status, res.statusText);
        return null;
    }

    const data = await res.json();
    console.log("Data pengguna:", data.user);
    return data.user;
}
