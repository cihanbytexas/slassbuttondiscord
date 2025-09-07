// /api/interactions.js
export default function handler(req, res) {
  if (req.method === "POST") {
    const interaction = req.body;

    // Discord PING doğrulaması (Validation için zorunlu)
    if (interaction.type === 1) {
      return res.status(200).json({ type: 1 });
    }

    // Slash komutları (type = 2)
    if (interaction.type === 2) {
      if (interaction.data.name === "yardım") {
        return res.status(200).json({
          type: 4, // CHANNEL_MESSAGE_WITH_SOURCE
          data: { content: "Merhaba! İşte yardım komutunuz." }
        });
      }
      // Buraya diğer slash komutlarını ekleyebilirsin
    }

    // Buton etkileşimleri (type = 3)
    if (interaction.type === 3) {
      if (interaction.data.custom_id === "buton1") {
        return res.status(200).json({
          type: 4,
          data: { content: "Butona tıkladınız!" }
        });
      }
      // Buraya diğer butonları ekleyebilirsin
    }

    // Diğer etkileşimler için default cevap
    return res.status(200).end();
  }

  // GET veya başka method gelirse reddet
  res.status(405).end(); // Method Not Allowed
}
