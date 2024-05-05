/* eslint-disable no-underscore-dangle */
import { Button } from "@/components/Button"
import {
  artTypeOptions,
  averagePriceOptions,
  locationOptions,
  locationTypeOptions,
} from "@/pages/constants"
import Link from "next/link"
import { useState } from "react"

export const Accordion = ({ locations, handleDelete }) => {
  const [selected, setSelected] = useState(null)
  const toggle = (locationSelected) => {
    if (selected === locationSelected) {
      return setSelected(null)
    }

    return setSelected(locationSelected)
  }
  const getLabel = (options, value) => {
    const option = options.find((opt) => opt.value === value)
      ? options.find((opt) => opt.value === value)
      : options.find((opt) => opt.type === value)

    return option ? option.label : option.value
  }

  return (
    <div className="flex flex-col gap-4">
      {locations.map((location, locationSelected) => (
        <div
          key={location._id}
          className="rounded-lg border-4 border-yellow-500 p-2"
        >
          <div onClick={() => toggle(locationSelected)}>
            <div className="flex items-center justify-between text-xl font-medium leading-normal mb-0">
              <h2>{location.name}</h2>
              <span className="mr-2">
                {selected === locationSelected ? "-" : "+"}
              </span>
            </div>
            <p className="text-sm text-gray-500 leading-normal mb-0">
              {getLabel(locationOptions, location.location)}
            </p>
          </div>
          <div>
            <p>
              {selected === locationSelected
                ? `${location.address} - ${location.city} (${location.zip}) - ${location.country}`
                : `${location.city} (${location.zip}) - ${location.country}`}
            </p>
          </div>
          <div
            className={
              selected === locationSelected
                ? "h-auto transition-all duration-500 ease-in-out"
                : "max-h-0 overflow-hidden transition-all duration-500 ease-in-out"
            }
          >
            <p>
              Type :{" "}
              {getLabel(
                locationTypeOptions[location.location],
                location.locationType,
              )}
            </p>
            {location.locationArtType && (
              <p>
                Type d'art :{" "}
                {getLabel(artTypeOptions, location.locationArtType)}
              </p>
            )}
            {location.locationStarNumber !== null && (
              <div className="flex ">
                <p>Nombre d'étoiles : </p>
                <div>
                  {Array(parseInt(location.locationStarNumber, 10))
                    .fill()
                    .map((_, index) => (
                      <span key={index} className="text-yellow-500">
                        &#9733;
                      </span>
                    ))}
                </div>
              </div>
            )}
            {location.locationIsPublic !== null && (
              <p>
                {location.locationIsPublic ? (
                  <span>✔️ Public</span>
                ) : (
                  <span>❌ Privée</span>
                )}
              </p>
            )}
            {location.locationIsFree !== null && (
              <p>
                {location.locationIsFree ? (
                  <span>✔️ Gratuit</span>
                ) : (
                  <span>❌ Payant</span>
                )}
              </p>
            )}
            {(location.locationAveragePrice || location.locationPrice) && (
              <p>
                Prix :{" "}
                {location.locationAveragePrice
                  ? getLabel(averagePriceOptions, location.locationAveragePrice)
                  : location.locationPrice}
              </p>
            )}
            <div>
              <Link href={`/locations/${location._id}/edit`}>✏️</Link>
              <Button
                type="button"
                onClick={handleDelete(location._id)}
                variant="none"
                size="lg"
              >
                🗑️
              </Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
