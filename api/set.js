let codigo = ""

export default async function handler(req, res) {
  if (req.method === "POST") {
    const body = await req.json()
    codigo = body.codigo || ""
    res.status(200).json({ status: "ok" })
  } else {
    res.status(405).send("Método não permitido")
  }
}
