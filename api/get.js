import { cache } from './set.js'

export default function handler(req, res) {
  res.status(200).send(cache || "-- Nenhum código enviado ainda")
}
