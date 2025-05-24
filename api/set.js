let cache = "";

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const body = await req.json();
      cache = body.codigo || "";
      res.status(200).json({ status: "ok" });
    } catch (err) {
      res.status(500).json({ error: "Erro no JSON" });
    }
  } else {
    res.status(405).send("Método não permitido");
  }
}
