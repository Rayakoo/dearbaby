import React from "react";
import { cookies } from "next/headers";
import { fetchAllGejala } from "@/services/gejala-service";
import GejalaTableAdmin from "@/components/admin/gejala-table-admin";

export default async function GejalaPage() {
  const cookieStore = cookies();
  const token = (await cookieStore).get("api_token")?.value || "";
  const gejalaList = await fetchAllGejala(token);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-8 text-purple-700">Gejala</h1>
      <GejalaTableAdmin initialData={gejalaList} />
    </div>
  );
}