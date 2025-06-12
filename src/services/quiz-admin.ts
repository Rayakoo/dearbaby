"use server";

export async function fetchQuizzes(token: string) {
  const res = await fetch("https://dearbaby.gilanghuda.my.id/api/quizzes", {
    method: "GET",
    headers: {
      Cookie: `api_token=${token}`,
    },
    cache: "no-store",
  });
  if (!res.ok) return [];
  const quizzes = await res.json();
  return Array.isArray(quizzes)
    ? quizzes.map((q, idx) => ({
        id: (q.id || idx + 1).toString().padStart(2, "0"),
        title: q.title,
        description: q.description,
        questions: q.questions,
      }))
    : [];
}

export async function createQuiz(token: string, payload: any) {
  const res = await fetch("https://dearbaby.gilanghuda.my.id/api/quizzes/create", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Cookie: `api_token=${token}`,
    },
    body: JSON.stringify(payload),
    cache: "no-store",
  });
  if (!res.ok) return false;
  return true;
}
