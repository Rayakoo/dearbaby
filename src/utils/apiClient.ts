"use server";

type DiaryEntry = {
  message: string;
  moodcheck: string;
  user_id: string;
  created_at: string;
};

export async function fetchDiaries(token: string) {
  const res = await fetch("https://dearbaby.gilanghuda.my.id/api/diary/get-all", {
    method: "GET",
    headers: token ? { Cookie: `api_token=${token}` } : {},
    credentials: "include",
    cache: "no-store",
  });


  if (!res.ok) {
    console.error("Error fetching diaries:", res.status, await res.text());
    return [];
  }

  console.log("INIII FECTH:", token);

  const responseJson = await res.json();

  // **Ambil hanya bagian `data` yang berisi daftar diary**
  const diaries = responseJson.data;
  
  if (!Array.isArray(diaries)) {
    console.error("Data yang diterima bukan array, periksa API.");
    return [];
  }

  return diaries.map((d) => ({
    Tanggal: d.created_at.split(" ")[0], // Pastikan hanya tanggal (YYYY-MM-DD)
    MoodCheck: Number(d.moodcheck), // Pastikan dikonversi ke angka
    Pesan: d.message,
  }));
}



export async function createDiary(token: string, payload: DiaryEntry) {
  console.log("Payload yang dikirim:", JSON.stringify(payload, null, 2));
  console.log("Memanggil createDiary...");
  



  const res = await fetch("https://dearbaby.gilanghuda.my.id/api/diary/create", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...(token ? { Cookie: `api_token=${token}` } : {}),
    },
    credentials: "include",
    body: JSON.stringify(payload),
    cache: "no-store",
  });

  console.log("INIII CREATE:", token);

  const responseText = await res.text();
  console.log("Status:", res.status, "Response:", responseText);

  if (!res.ok) {
    console.error("Error creating diary:", res.status, responseText);
    return false;
  }

  return true;
}


export async function updateDiary(token: string, diaryId: string, payload: Partial<DiaryEntry>) {
  const res = await fetch(`https://dearbaby.gilanghuda.my.id/api/diary/${diaryId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      ...(token ? { Cookie: `api_token=${token}` } : {}),
    },
    credentials: "include",
    body: JSON.stringify(payload),
    cache: "no-store",
  });

  if (!res.ok) {
    console.error("Error updating diary:", res.status, await res.text());
    return false;
  }

  return true;
}

export async function deleteDiary(token: string, diaryId: string) {
  const res = await fetch(`https://dearbaby.gilanghuda.my.id/api/diary/${diaryId}`, {
    method: "DELETE",
    headers: token ? { Cookie: `api_token=${token}` } : {},
    credentials: "include",
    cache: "no-store",
  });

  if (!res.ok) {
    console.error("Error deleting diary:", res.status, await res.text());
    return false;
  }

  return true;
}
