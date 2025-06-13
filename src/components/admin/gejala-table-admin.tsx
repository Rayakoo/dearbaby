"use client";
import React, { useState } from "react";

type Gejala = {
  id: string;
  nama: string;
  deskripsi: string;
  level: "Ringan" | "Sedang" | "Serius";
};

const LEVELS = ["Ringan", "Sedang", "Serius"] as const;

const initialData: Gejala[] = [
  {
    id: "01",
    nama: "Sakit Kepala",
    deskripsi:
      "Semakin penting untuk memastikan kesehatan Bunda dan buah hati. Kami dapat membantu yang dapat memenuhi kebutuhan Bunda dengan nyaman.",
    level: "Ringan",
  },
];

export default function GejalaTableAdmin() {
  const [data, setData] = useState<Gejala[]>(initialData);
  const [showForm, setShowForm] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  const [editIdx, setEditIdx] = useState<number | null>(null);
  const [deleteIdx, setDeleteIdx] = useState<number | null>(null);

  const [form, setForm] = useState<{ nama: string; deskripsi: string; level: Gejala["level"] }>(
    { nama: "", deskripsi: "", level: "Ringan" }
  );

  // Open add form
  const openAdd = () => {
    setEditIdx(null);
    setForm({ nama: "", deskripsi: "", level: "Ringan" });
    setShowForm(true);
  };

  // Open edit form
  const openEdit = (idx: number) => {
    setEditIdx(idx);
    setForm({
      nama: data[idx].nama,
      deskripsi: data[idx].deskripsi,
      level: data[idx].level,
    });
    setShowForm(true);
  };

  // Save form (add or edit)
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editIdx === null) {
      setData([
        ...data,
        {
          id: (data.length + 1).toString().padStart(2, "0"),
          nama: form.nama,
          deskripsi: form.deskripsi,
          level: form.level,
        },
      ]);
    } else {
      setData(
        data.map((g, idx) =>
          idx === editIdx
            ? { ...g, nama: form.nama, deskripsi: form.deskripsi, level: form.level }
            : g
        )
      );
    }
    setShowForm(false);
  };

  // Open delete dialog
  const openDelete = (idx: number) => {
    setDeleteIdx(idx);
    setShowDelete(true);
  };

  // Confirm delete
  const handleDelete = () => {
    if (deleteIdx !== null) {
      setData(data.filter((_, idx) => idx !== deleteIdx));
      setShowDelete(false);
      setDeleteIdx(null);
    }
  };

  return (
    <div>
      {/* Tombol Tambah Data */}
      <div className="flex items-center mb-6">
        <button
          className="flex items-center gap-2 bg-white rounded-xl px-8 py-4 shadow text-lg font-medium text-gray-700 hover:bg-[#F5F3FF] transition"
          onClick={openAdd}
        >
          Tambah Data
          <span className="text-2xl text-purple-700">+</span>
        </button>
      </div>
      {/* Tabel */}
      <div className="bg-white rounded-2xl p-6 shadow">
        <div className="font-semibold text-xl mb-4 text-purple-700">Tabel Gejala</div>
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead>
              <tr className="bg-[#F5F3FF] text-purple-700">
                <th className="px-4 py-2 text-left font-semibold">ID</th>
                <th className="px-4 py-2 text-left font-semibold">Nama Gejala</th>
                <th className="px-4 py-2 text-left font-semibold">Deskripsi</th>
                <th className="px-4 py-2 text-left font-semibold">Kategori</th>
                <th className="px-4 py-2 text-center font-semibold"></th>
              </tr>
            </thead>
            <tbody>
              {data.map((g, idx) => (
                <tr key={g.id} className="border-b last:border-b-0">
                  <td className="px-4 py-2 align-top text-black">{g.id}</td>
                  <td className="px-4 py-2 align-top  text-black">{g.nama}</td>
                  <td className="px-4 py-2 align-top  text-black">{g.deskripsi}</td>
                  <td className="px-4 py-2 align-top text-black" >{g.level}</td>
                  <td className="px-4 py-2 align-top text-center flex gap-2 justify-center">
                    {/* Edit */}
                    <button
                      className="p-2 hover:bg-gray-100 rounded"
                      onClick={() => openEdit(idx)}
                      title="Edit"
                    >
                      <svg width="22" height="22" fill="none" viewBox="0 0 24 24">
                        <path d="M16.475 5.408l2.117 2.117a1.5 1.5 0 010 2.121l-8.485 8.485a1.5 1.5 0 01-1.06.44H7v-2.05a1.5 1.5 0 01.44-1.06l8.485-8.485a1.5 1.5 0 012.121 0z" stroke="#F59E42" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M15 7l2 2" stroke="#F59E42" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </button>
                    {/* Delete */}
                    <button
                      className="p-2 hover:bg-gray-100 rounded"
                      onClick={() => openDelete(idx)}
                      title="Delete"
                    >
                      <svg width="22" height="22" fill="none" viewBox="0 0 24 24">
                        <path d="M7 7v10a2 2 0 002 2h6a2 2 0 002-2V7" stroke="#F04438" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M9 7V5a2 2 0 012-2h2a2 2 0 012 2v2" stroke="#F04438" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M4 7h16" stroke="#F04438" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </button>
                  </td>
                </tr>
              ))}
              {data.length === 0 && (
                <tr>
                  <td colSpan={5} className="text-center py-8 text-purple-700">
                    Tidak ada data gejala.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Overlay Form Tambah/Edit */}
      {showForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm">
          <form
            className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md"
            onSubmit={handleSubmit}
          >
            <h2 className="text-xl font-bold mb-6 text-purple-700">
              {editIdx === null ? "Tambah Gejala" : "Ubah Gejala"}
            </h2>
            <div className="mb-4">
              <label className="block mb-1 font-medium text-gray-700">Nama Gejala</label>
              <input
                type="text"
                className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-300 text-black"
                value={form.nama}
                onChange={e => setForm({ ...form, nama: e.target.value })}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block mb-1 font-medium text-gray-700">Deskripsi</label>
              <textarea
                className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-300 text-black"
                value={form.deskripsi}
                onChange={e => setForm({ ...form, deskripsi: e.target.value })}
                rows={3}
                required
              />
            </div>
            <div className="mb-6">
              <label className="block mb-1 font-medium text-gray-700">Kategori</label>
              <select
                className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-300"
                value={form.level}
                onChange={e => setForm({ ...form, level: e.target.value as Gejala["level"] })}
                required
              >
                {LEVELS.map(lvl => (
                  <option key={lvl} value={lvl}>{lvl}</option>
                ))}
              </select>
            </div>
            <div className="flex justify-end gap-2">
              <button
                type="button"
                className="px-4 py-2 rounded bg-gray-100 text-gray-700 hover:bg-gray-200"
                onClick={() => setShowForm(false)}
              >
                Batal
              </button>
              <button
                type="submit"
                className="px-4 py-2 rounded bg-purple-700 text-white hover:bg-purple-800"
              >
                {editIdx === null ? "Tambahkan" : "Ubah Data"}
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Overlay Konfirmasi Hapus */}
      {showDelete && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm">
          <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-sm flex flex-col items-center">
            <h2 className="text-lg font-bold mb-4 text-gray-800 text-center">
              Apakah anda yakin untuk menghapus data?
            </h2>
            <div className="flex gap-4 mt-2">
              <button
                className="px-6 py-2 rounded bg-purple-700 text-white hover:bg-purple-800"
                onClick={handleDelete}
              >
                Iya
              </button>
              <button
                className="px-6 py-2 rounded bg-red-100 text-red-700 hover:bg-red-200"
                onClick={() => setShowDelete(false)}
              >
                Tidak
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
