"use client";
import { createQuiz, fetchQuizzes } from "@/services/quiz-admin";
import React, { useEffect, useState } from "react";

type Quiz = {
  id: string;
  title: string;
  description: string;
  questions: Question[];
};

type Question = {
  question: string;
  options: [string, string, string, string];
  correctAnswer: string;
};

type QuizTableAdminProps = {
  token: string;
};

export default function QuizTableAdmin({ token }: QuizTableAdminProps) {
  console.log("Token di component:", token);

  const [data, setData] = useState<Quiz[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  const [deleteIdx, setDeleteIdx] = useState<number | null>(null);

  // Form Quiz
  const [form, setForm] = useState<{ title: string; description: string; jumlah: number }>({
    title: "",
    description: "",
    jumlah: 1,
  });

  // Pertanyaan
  const [showQuestions, setShowQuestions] = useState(false);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [questionForm, setQuestionForm] = useState<Question>({
    question: "",
    options: ["", "", "", ""],
    correctAnswer: "",
  });

  // Fetch quiz data from API (server action)
  useEffect(() => {
    async function getData() {
      if (token) {
        const quizzes = await fetchQuizzes(token);
        setData(quizzes);
      }
    }
    getData();
  }, [token]);

  // Open add form
  const openAdd = () => {
    setForm({ title: "", description: "", jumlah: 1 });
    setQuestions([]);
    setShowForm(true);
    setShowQuestions(false);
    setCurrentIdx(0);
  };

  // Save quiz form, lanjut ke input pertanyaan
  const handleQuizForm = (e: React.FormEvent) => {
    e.preventDefault();
    setQuestions(Array(form.jumlah).fill({ question: "", options: ["", "", "", ""], correctAnswer: "" }));
    setShowForm(false);
    setShowQuestions(true);
    setCurrentIdx(0);
    setQuestionForm({ question: "", options: ["", "", "", ""], correctAnswer: "" });
  };

  // Save pertanyaan ke array
  const handleQuestionForm = async (e: React.FormEvent) => {
    e.preventDefault();
    const updatedQuestions = [...questions];
    updatedQuestions[currentIdx] = { ...questionForm };
    setQuestions(updatedQuestions);

    if (currentIdx < form.jumlah - 1) {
      setCurrentIdx(currentIdx + 1);
      setQuestionForm(
        updatedQuestions[currentIdx + 1] || {
          question: "",
          options: ["", "", "", ""],
          correctAnswer: "",
        }
      );
    } else {
      // Selesai, simpan quiz ke API via server action
      const payload = {
        title: form.title,
        description: form.description,
        questions: updatedQuestions.map((q) => ({
          question: q.question,
          options: q.options.slice(0, 4),
          correctAnswer: q.correctAnswer,
        })),
      };
      const success = await createQuiz(token, payload);
      if (success) {
        const quizzes = await fetchQuizzes(token);
        setData(quizzes);
      }
      setShowQuestions(false);
    }
  };

  // Open delete dialog
  const openDelete = (idx: number) => {
    setDeleteIdx(idx);
    setShowDelete(true);
  };

  // Confirm delete (dummy, implement API if available)
  const handleDelete = () => {
    if (deleteIdx !== null) {
      setData(data.filter((_, idx) => idx !== deleteIdx));
      setShowDelete(false);
      setDeleteIdx(null);
    }
  };

  return (
    <div>
      {/* Tombol Tambah Quiz */}
      <div className="flex items-center mb-6">
        <button
          className="flex items-center gap-2 bg-white rounded-xl px-8 py-4 shadow text-lg font-medium text-gray-700 hover:bg-[#F5F3FF] transition"
          onClick={openAdd}
        >
          Tambah Quiz
          <span className="text-2xl text-purple-700">+</span>
        </button>
      </div>
      {/* Tabel */}
      <div className="bg-white rounded-2xl p-6 shadow">
        <div className="font-semibold text-xl mb-4 text-purple-700">Tabel Quiz</div>
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead>
              <tr className="bg-[#F5F3FF] text-purple-700">
                <th className="px-4 py-2 text-left font-semibold">ID</th>
                <th className="px-4 py-2 text-left font-semibold">Judul</th>
                <th className="px-4 py-2 text-left font-semibold">Deskripsi</th>
                <th className="px-4 py-2 text-left font-semibold">Jumlah Pertanyaan</th>
                <th className="px-4 py-2 text-center font-semibold"></th>
              </tr>
            </thead>
            <tbody>
              {data.map((q, idx) => (
                <tr key={q.id} className="border-b last:border-b-0">
                  <td className="px-4 py-2 align-top text-black">{q.id}</td>
                  <td className="px-4 py-2 align-top text-black">{q.title}</td>
                  <td className="px-4 py-2 align-top text-black">{q.description}</td>
                  <td className="px-4 py-2 align-top text-black">{q.questions?.length ?? 0}</td>
                  <td className="px-4 py-2 align-top text-center flex gap-2 justify-center">
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
                    Tidak ada data quiz.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Overlay Form Tambah Quiz */}
      {showForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm">
          <form
            className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md"
            onSubmit={handleQuizForm}
          >
            <h2 className="text-xl font-bold mb-6 text-purple-700">
              Tambah Quiz
            </h2>
            <div className="mb-4">
              <label className="block mb-1 font-medium text-gray-700">Judul</label>
              <input
                type="text"
                className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-300 text-black"
                value={form.title}
                onChange={e => setForm({ ...form, title: e.target.value })}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block mb-1 font-medium text-gray-700">Deskripsi</label>
              <textarea
                className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-300 text-black"
                value={form.description}
                onChange={e => setForm({ ...form, description: e.target.value })}
                rows={3}
                required
              />
            </div>
            <div className="mb-6">
              <label className="block mb-1 font-medium text-gray-700">Jumlah Pertanyaan</label>
              <input
                type="number"
                min={1}
                max={50}
                className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-300 text-black"
                value={form.jumlah}
                onChange={e => setForm({ ...form, jumlah: Math.max(1, Math.min(50, Number(e.target.value))) })}
                required
              />
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
                Selanjutnya
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Overlay Form Pertanyaan */}
      {showQuestions && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm">
          <form
            className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md"
            onSubmit={handleQuestionForm}
          >
            <h2 className="text-xl font-bold mb-6 text-purple-700">
              Pertanyaan {currentIdx + 1} dari {form.jumlah}
            </h2>
            <div className="mb-4">
              <label className="block mb-1 font-medium text-gray-700">Pertanyaan</label>
              <input
                type="text"
                className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-300 text-black"
                value={questionForm.question}
                onChange={e => setQuestionForm({ ...questionForm, question: e.target.value })}
                required
              />
            </div>
            {[0, 1, 2, 3].map((i) => (
              <div className="mb-4" key={i}>
                <label className="block mb-1 font-medium text-gray-700">{`Pilihan ${i + 1}`}</label>
                <input
                  type="text"
                  className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-300 text-black"
                  value={questionForm.options[i]}
                  onChange={e => {
                    const opts = [...questionForm.options] as [string, string, string, string];
                    opts[i] = e.target.value;
                    setQuestionForm({ ...questionForm, options: opts });
                  }}
                  required
                />
              </div>
            ))}
            <div className="mb-6">
              <label className="block mb-1 font-medium text-gray-700">Jawaban Benar</label>
              <select
                className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-300 text-black"
                value={questionForm.correctAnswer}
                onChange={e => setQuestionForm({ ...questionForm, correctAnswer: e.target.value })}
                required
              >
                <option value="" disabled>Pilih jawaban benar</option>
                {questionForm.options.map((opt, i) => (
                  <option key={i} value={opt}>{opt || `Pilihan ${i + 1}`}</option>
                ))}
              </select>
            </div>
            <div className="flex justify-end gap-2">
              <button
                type="button"
                className="px-4 py-2 rounded bg-gray-100 text-gray-700 hover:bg-gray-200"
                onClick={() => setShowQuestions(false)}
              >
                Batal
              </button>
              <button
                type="submit"
                className="px-4 py-2 rounded bg-purple-700 text-white hover:bg-purple-800"
              >
                {currentIdx === form.jumlah - 1 ? "Selesai" : "Selanjutnya"}
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
