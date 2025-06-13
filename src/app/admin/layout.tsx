import AdminSidebar from "@/components/admin/sidebar-admin";
import React from "react";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const cookieStore = cookies();
  const token = (await cookieStore).get("api_token")?.value;

  if (!token) {
    redirect("/login");
  }

  // Fetch current user with the token
  const res = await fetch("https://dearbaby.gilanghuda.my.id/api/auth/current-user", {
    method: "GET",
    headers: {
      Cookie: `api_token=${token}`,
    },
    // credentials: "include", // Tidak perlu di server component
  });

  if (!res.ok) {
    redirect("/unauthorized");
  }

  const data = await res.json();

  if (!data?.user || data.user.family_role !== "admin") {
    redirect("/unauthorized");
  }

  return (
    <div className="flex min-h-screen bg-[#F7F8FA]">
      <AdminSidebar />
      <main className="flex-1 p-8">{children}</main>
    </div>
  );
}
