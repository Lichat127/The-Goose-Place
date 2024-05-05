import { LocationModel } from "./models/LocationModel.js"

export const createLocation = async ({
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
}) => {
  const newLocation = new LocationModel({
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

  await newLocation.save()

  return newLocation
}

export const readLocations = async () => await LocationModel.find()

export const filterLocations = async (body) => {
  const data = await LocationModel.find(body)

  if (!data) {
    return null
  }

  return data
}

export const readLocation = async (locationId) =>
  await LocationModel.findById(locationId)

export const deleteLocation = async (locationId) => {
  const location = await LocationModel.findOneAndDelete({ _id: locationId })

  if (!location) {
    return null
  }

  return location
}

export const updateLocation = async (
  locationId,
  {
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
  },
) => {
  const input = {
    location,
    name,
    address,
    city,
    zip,
    country,
    locationType,
    locationStarNumber: location === "restaurant" ? locationStarNumber : null,
    locationAveragePrice:
      location === "restaurant" || location === "bar"
        ? locationAveragePrice
        : null,
    locationArtType: location === "museum" ? locationArtType : null,
    locationIsPublic: location === "park" ? locationIsPublic : null,
    locationIsFree:
      location === "museum" || location === "park" ? locationIsFree : null,
    locationPrice:
      location === "museum" || location === "park" ? locationPrice : null,
  }
  const updatedLocation = await LocationModel.findByIdAndUpdate(
    locationId,
    input,
    {
      returnDocument: "after",
    },
  )

  return updatedLocation
}
