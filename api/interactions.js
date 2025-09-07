export default function handler(req, res) {
  if (req.method === "POST") {
    const interaction = req.body;

    // Slash komutları
    if (interaction.type === 2) {
      if (interaction.data.name === "yardım") {
        return res.status(200).json({
          type: 4, // CHANNEL_MESSAGE_WITH_SOURCE
          data: { content: "Merhaba! İşte yardım komutunuz." }
        });
      }
    }

    // Buton etkileşimleri
    if (interaction.type === 3) {
      if (interaction.data.custom_id === "buton1") {
        return res.status(200).json({
          type: 4,
          data: { content: "Butona tıkladınız!" }
        });
      }
    }

    return res.status(200).end();
  }

  res.status(405).end(); // Method Not Allowed
}
