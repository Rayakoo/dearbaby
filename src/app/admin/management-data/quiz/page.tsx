import React from "react";
import QuizTableAdmin from "@/components/admin/quiz-table-admin";
import { cookies } from "next/headers";

export default async function QuizPage() {
  const cookieStore = cookies();
  const token = (await cookieStore).get("api_token")?.value || "";

  console.log("Token di page:", token); // Debugging line to check token value

  return (
    <div>
      <h1 className="text-2xl font-bold mb-8 text-purple-700">Quiz</h1>
      <QuizTableAdmin token={token} />
    </div>
  );
}