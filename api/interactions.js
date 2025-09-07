export default function handler(req, res) {
  if (req.method === "POST") {
    const interaction = req.body;

    // ✅ Discord PING doğrulaması (Validation için zorunlu)
    if (interaction.type === 1) {
      return res.status(200).json({ type: 1 });
    }

    // Slash veya buton olmasa bile diğer POSTları kabul et
    return res.status(200).end();
  }

  // GET veya başka methodlar reddedilir
  res.status(405).end(); // Method Not Allowed
}
