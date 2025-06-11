export default function handler(req, res) {
  if (req.method === "POST") {
    const { signed_request } = req.body;
    const data = parseFacebookSignedRequest(signed_request);

    if (data && data.user_id) {
      // Hapus data pengguna dari database
      deleteUserData(data.user_id);

      // Kirim respons ke Facebook
      res.json({
        url: `https://yourwebsite.com/deletion-status?id=${data.user_id}`,
        confirmation_code: `del_${data.user_id}`,
      });
    } else {
      res.status(400).json({ error: "Invalid request" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}

function parseFacebookSignedRequest(signed_request) {
  const [encoded_sig, payload] = signed_request.split(".");
  return JSON.parse(Buffer.from(payload, "base64").toString());
}

function deleteUserData(userId) {
  console.log(`Menghapus data untuk user ID: ${userId}`);
}
