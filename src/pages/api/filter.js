import { mw } from "@/api/mw"
import { filterLocations } from "@/db/crud"

const handle = mw(async (req, res) => {
  if (req.method === "POST") {
    const { body } = req
    const data = await filterLocations(body)
    res.send(data)
  }
})

export default handle
