import { mw } from "@/api/mw"
import { deleteLocation, readLocation, updateLocation } from "@/db/crud"

const handle = mw(async (req, res) => {
  const { locationId } = req.query

  if (req.method === "GET") {
    const location = await readLocation(locationId)

    if (!location) {
      res.status(404).send({ error: "Not found" })

      return
    }

    res.send(location)

    return
  }

  if (req.method === "PATCH") {
    const location = req.body.location.trim()
    const name = req.body.name.trim()
    const address = req.body.address.trim()
    const city = req.body.city.trim()
    const { zip } = req.body
    const country = req.body.country.trim()
    const locationType = req.body.locationType.trim()
    const { locationStarNumber } = req.body
    const { locationAveragePrice } = req.body
    const { locationArtType } = req.body
    const { locationIsPublic } = req.body
    const { locationIsFree } = req.body
    const { locationPrice } = req.body
    const updatedLocation = await updateLocation(locationId, {
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

    if (!updatedLocation) {
      res.status(404).send({ error: "Not found" })

      return
    }

    res.send(updatedLocation)

    return
  }

  if (req.method === "DELETE") {
    const locationToBeDelete = await deleteLocation(locationId)

    if (!locationToBeDelete) {
      res.status(404).send({ error: "Not found" })

      return
    }

    res.send(locationToBeDelete)

    return
  }

  res.status(404).send({ error: "Not found" })
})

export default handle
