import fs from "fs";
import path from "path";

export async function GET() {
  try {
    const diaryPath = path.join(process.cwd(), "public", "data-diary.json");

    if (!fs.existsSync(diaryPath)) {
      return new Response(JSON.stringify([]), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    }

    const fileContent = fs.readFileSync(diaryPath, "utf8");
    return new Response(fileContent, {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });

  } catch (error) {
    return new Response(JSON.stringify({ success: false, error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}


export async function POST(req) {
  try {
    const diaryPath = path.join(process.cwd(), "public", "data-diary.json");
    const { moodCheck, message } = await req.json();
    const today = new Date().toISOString().split("T")[0];

    // Baca data lama
    let diaryData = [];
    if (fs.existsSync(diaryPath)) {
      const fileContent = fs.readFileSync(diaryPath, "utf8");
      diaryData = JSON.parse(fileContent);
    }

    // Periksa apakah sudah ada entri untuk hari ini
    const existingIndex = diaryData.findIndex(entry => entry.Tanggal === today);
    
    if (existingIndex !== -1) {
      // Jika ada data hari ini, update pesan dan moodnya
      diaryData[existingIndex].MoodCheck = moodCheck;
      diaryData[existingIndex].Pesan = message;
    } else {
      // Jika belum ada, tambahkan entri baru
      diaryData.push({ Tanggal: today, MoodCheck: moodCheck, Pesan: message });
    }

    // Simpan perubahan
    fs.writeFileSync(diaryPath, JSON.stringify(diaryData, null, 2), "utf8");

    return new Response(JSON.stringify({ success: true, data: diaryData[existingIndex] ?? diaryData[diaryData.length - 1] }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });

  } catch (error) {
    return new Response(JSON.stringify({ success: false, error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
