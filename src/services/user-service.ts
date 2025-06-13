"use server";

export async function getCurrentUser(token?: string) 
{
    console.log("Masuk sini ga bang", token);
    const res = await fetch("http://dearbaby.gilanghuda.my.id/api/auth/current-user", {
    method: "GET",
    headers: token ? { Cookie: `api_token=${token}` } : {},
    cache: "no-store",
    credentials: "include",
  });
  if (!res.ok){
    console.error("Failed to fetch current user:", res.status, res.statusText);
    return null;  
  }
  console.log("Response status:", res.status); // Debugging line to check response status
  console.log("Response headers:", res.headers.get("Content-Type")); // Debugging line to check response headers
  console.log("Response URL:", res.url); // Debugging line to check response URL
  console.log("Response OK:", res.ok); // Debugging line to check if response is OK
  console.log("Response status text:", res.statusText); // Debugging line to check response status text

  const data = await res.json();
  console.log("Data user:", data.user); // Debugging line to check user data
  return data.user;

}
export async function logout() {
  await fetch("https://dearbaby.gilanghuda.my.id/api/auth/logout", {
    method: "POST",
    credentials: "include",
  });
}
