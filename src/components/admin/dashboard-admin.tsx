"use client";

import React, { useEffect, useState } from "react";

type User = {
  user_id: string;
  username: string;
  email: string;
  umur_kandungan: string;
  family_role: string;
  family_id: string | null;
};

export default function DashboardTable() {
  const [selected, setSelected] = useState<"ayah" | "ibu">("ayah");
  const [counts, setCounts] = useState<{ ayah: number; ibu: number }>({
    ayah: 0,
    ibu: 0,
  });
  const [users, setUsers] = useState<User[]>([]);
  const [page, setPage] = useState(1);
  const rowsPerPage = 10;

  // Fetch counts
  useEffect(() => {
    async function fetchCounts() {
      try {
        // Ambil token dari cookie
        const token =
          typeof document !== "undefined"
            ? (document.cookie.match(/api_token=([^;]+)/)?.[1] || "")
            : "";
        const res = await fetch(
          "https://dearbaby.gilanghuda.my.id/api/auth/count-parent-roles",
          {
            method: "GET",
            headers: {
              Cookie: `api_token=${token}`,
            },
            
          }
        );
        if (res.ok) {
          const data = await res.json();
          setCounts({ ayah: data.ayah ?? 0, ibu: data.ibu ?? 0 });
        }
      } catch {
        // handle error if needed
      }
    }
    fetchCounts();
  }, []);

  // Fetch users
  useEffect(() => {
    async function fetchUsers() {
      try {
        // Ambil token dari cookie
        const token =
          typeof document !== "undefined"
            ? (document.cookie.match(/api_token=([^;]+)/)?.[1] || "")
            : "";
        const res = await fetch(
          "https://dearbaby.gilanghuda.my.id/api/auth/list-users",
          {
            method: "GET",
            headers: {
              Cookie: `api_token=${token}`,
            },
           
          }
        );
        if (res.ok) {
          const data = await res.json();
          setUsers(Array.isArray(data) ? data : []);
        }
      } catch {
        // handle error if needed
      }
    }
    fetchUsers();
  }, []);

  // Filter users by selected role
  const filteredUsers = users.filter((u) => u.family_role === selected);

  // Pagination
  const totalPages = Math.ceil(filteredUsers.length / rowsPerPage);
  const pagedUsers = filteredUsers.slice(
    (page - 1) * rowsPerPage,
    page * rowsPerPage
  );

  // Reset page to 1 if filter changes
  useEffect(() => {
    setPage(1);
  }, [selected]);

  return (
    <div className="w-full">
      <div className="flex gap-4 mb-6">
        <button
          className={`flex-1 flex flex-col items-start p-6 rounded-xl border-2 ${
            selected === "ayah"
              ? "border-[#7B61FF] bg-white"
              : "border-transparent bg-[#F5F3FF]"
          } cursor-pointer transition`}
          onClick={() => setSelected("ayah")}
        >
          <span className="text-sm text-gray-500">Total User Ayah</span>
          <div className="flex items-center gap-2 mt-2">
            <span className="bg-[#7B61FF] bg-opacity-10 p-2 rounded-full">
              <svg width="32" height="32" fill="#7B61FF">
                <circle
                  cx="16"
                  cy="16"
                  r="16"
                  fill="#7B61FF"
                  fillOpacity="0.1"
                />
                <path
                  d="M16 18c-3.31 0-6 1.34-6 3v1h12v-1c0-1.66-2.69-3-6-3zm0-2a3 3 0 100-6 3 3 0 000 6z"
                  fill="#7B61FF"
                />
              </svg>
            </span>
            <span className="text-2xl font-bold text-black">
              {counts.ayah.toLocaleString("id-ID")}
            </span>
          </div>
        </button>
        <button
          className={`flex-1 flex flex-col items-start p-6 rounded-xl border-2 ${
            selected === "ibu"
              ? "border-[#F472B6] bg-white"
              : "border-transparent bg-[#FDF2F8]"
          } cursor-pointer transition`}
          onClick={() => setSelected("ibu")}
        >
          <span className="text-sm text-gray-500">Total User Ibu</span>
          <div className="flex items-center gap-2 mt-2">
            <span className="bg-[#F472B6] bg-opacity-10 p-2 rounded-full">
              <svg width="32" height="32" fill="#F472B6">
                <circle
                  cx="16"
                  cy="16"
                  r="16"
                  fill="#F472B6"
                  fillOpacity="0.1"
                />
                <path
                  d="M16 18c-3.31 0-6 1.34-6 3v1h12v-1c0-1.66-2.69-3-6-3zm0-2a3 3 0 100-6 3 3 0 000 6z"
                  fill="#F472B6"
                />
              </svg>
            </span>
            <span className="text-2xl font-bold text-black">
              {counts.ibu.toLocaleString("id-ID")}
            </span>
          </div>
        </button>
      </div>
      <div className="bg-white rounded-xl p-6 shadow-sm">
        <div className="font-semibold text-lg mb-4">Tabel User</div>
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead>
              <tr className="bg-[#F5F3FF] text-gray-600">
                <th className="px-4 py-2 text-left">User ID</th>
                <th className="px-4 py-2 text-left">Username</th>
                <th className="px-4 py-2 text-left">Email</th>
                <th className="px-4 py-2 text-left">Umur Kandungan</th>
                <th className="px-4 py-2 text-left">Family Role</th>
                <th className="px-4 py-2 text-left">Family ID</th>
              </tr>
            </thead>
            <tbody>
              {pagedUsers.length === 0 ? (
                <tr>
                  <td colSpan={6} className="text-center py-8 text-gray-400">
                    Tidak ada data.
                  </td>
                </tr>
              ) : (
                pagedUsers.map((user) => (
                  <tr key={user.user_id} className="border-b last:border-b-0">
                    <td className="px-4 py-2">{user.user_id}</td>
                    <td className="px-4 py-2">{user.username}</td>
                    <td className="px-4 py-2">{user.email}</td>
                    <td className="px-4 py-2">{user.umur_kandungan}</td>
                    <td className="px-4 py-2">{user.family_role}</td>
                    <td className="px-4 py-2">{user.family_id ?? "-"}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
        {/* Pagination */}
        <div className="flex justify-end mt-4 gap-2">
          <button
            className="px-4 py-2 rounded bg-gray-100 text-gray-700 hover:bg-gray-200 disabled:opacity-50"
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            disabled={page === 1}
          >
            Previous
          </button>
          <span className="px-2 py-2 text-gray-700">
            {page} / {totalPages || 1}
          </span>
          <button
            className="px-4 py-2 rounded bg-gray-100 text-gray-700 hover:bg-gray-200 disabled:opacity-50"
            onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
            disabled={page === totalPages || totalPages === 0}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
