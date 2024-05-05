import { mw } from "@/api/mw"
import { createLocation, readLocations } from "@/db/crud"

const handle = mw(async (req, res) => {
  if (req.method === "GET") {
    const locations = await readLocations()
    res.send(locations)

    return
  }

  if (req.method === "POST") {
    const { location } = req.body
    const name = req.body.name.trim()
    const address = req.body.address.trim()
    const city = req.body.city.trim()
    const zip = req.body.zip.trim()
    const country = req.body.country.trim()
    const { locationType } = req.body
    const { locationStarNumber } = req.body
    const { locationAveragePrice } = req.body
    const { locationArtType } = req.body
    const { locationIsPublic } = req.body
    const { locationIsFree } = req.body
    const { locationPrice } = req.body
    const options = [location, name, address, city, zip, country]
    for (const element of options) {
      if (!element) {
        res.status(422).send({ error: `missing ${element} argument` })

        return
      }
    }
    const newLocation = await createLocation({
      location,
      name,
      address,
      city,
      zip,
      country,
      locationType,
      locationStarNumber,
      locationAveragePrice,
      locationArtType,
      locationIsPublic,
      locationIsFree,
      locationPrice,
    })
    res.send(newLocation)

    return
  }

  res.status(404).send({ error: "Not found" })
})

export default handle
