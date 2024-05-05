import { Accordion } from "@/components/Accordion"
import { Button } from "@/components/Button"
import { LocationTypeMenu } from "@/components/LocationTypeMenu"
import { PopUp } from "@/components/PopUp"
import { locationFilterOptions } from "@/pages/constants"
import axios from "axios"
import { useState } from "react"
import { FilterForm } from "@/components/Filter/FilterForm"
import { Error } from "@/components/Error"
import Image from "next/image"

export const getServerSideProps = async () => {
  const { data } = await axios("http://localhost:3000/api/locations")

  return {
    props: { initialLocations: Object.values(data) },
  }
}
const LocationsPage = ({ initialLocations }) => {
  const [locations, setLocations] = useState(initialLocations)
  const handleDelete = (locationId) => async () => {
    const deletedLocation = locations.find(({ _id }) => _id === locationId)
    const newLocations = locations.filter(({ _id }) => _id !== locationId)
    setLocations(newLocations)

    try {
      await axios.delete(`http://localhost:3000/api/locations/${locationId}`)
    } catch (err) {
      setLocations([...newLocations, deletedLocation])
    }
  }
  const initialBodyState = {
    location: null,
    locationType: {},
    locationStarNumber: {},
    locationArtType: {},
    locationIsFree: null,
    locationIsPublic: null,
    locationAveragePrice: {},
    locationPriceMin: 1,
    locationPriceMax: 100,
  }
  const [body, setBody] = useState(initialBodyState)
  const resetBody = () => {
    setBody((prevState) => ({
      ...initialBodyState,
      location: prevState.location,
    }))
  }
  const handleChange = (label, value) => {
    setBody((prevState) => ({
      ...prevState,
      [label]: value,
    }))
  }
  const handleCheckboxChange = (label, value) => {
    if (typeof value === "boolean" || parseInt(value, 10)) {
      setBody((prevState) => ({
        ...prevState,
        [label]: value,
      }))
    } else {
      setBody((prevState) => ({
        ...prevState,
        [label]: {
          ...prevState[label],
          [value]: !prevState[label][value],
        },
      }))
    }
  }
  const handleClick = async (label, event) => {
    let requestBody = {}

    if (event) {
      requestBody = {
        location: event,
      }
    }

    const { data } = await axios.post(
      "http://localhost:3000/api/filter",
      requestBody,
    )
    setLocations(data)
    resetBody()
    handleChange(label, event)
  }
  const [popup, setPopup] = useState(false)
  const togglePopUp = () => {
    setPopup(!popup)
  }
  const cleanData = (json) => {
    const dataArray = []
    for (const key in json) {
      if (json[key] === true) {
        dataArray.push(key)
      }
    }

    return dataArray
  }
  const submitPopUp = async () => {
    setPopup(!popup)
    const requestBody = {}
    for (const [key, value] of Object.entries(body)) {
      if (key === "location" || typeof value === "boolean") {
        requestBody[key] = value
      } else if (parseInt(value, 10)) {
        continue
      } else {
        const dataArray = cleanData(value)

        if (dataArray.length !== 0) {
          requestBody[key] = { $in: dataArray }
        }
      }
    }

    if (body.location === "museum" || body.location === "park") {
      if (body.locationIsFree === false) {
        requestBody.locationPrice = {
          $gte: body.locationPriceMin,
          $lte: body.locationPriceMax,
        }
      }
    }

    const { data } = await axios.post(
      "http://localhost:3000/api/filter",
      requestBody,
    )

    if (data.length !== 0) {
      setLocations(data)
    } else {
      setLocations(null)
    }
  }

  return (
    <div>
      <div className="flex items-center justify-center bg-yellow-200 rounded-lg mb-4">
        <LocationTypeMenu
          options={locationFilterOptions}
          ifClick={handleClick}
          label="location"
          state=""
        ></LocationTypeMenu>
        {body.location && (
          <div className="flex">
            <div className="border-l border-yellow-500 pl-7">
              <Button onClick={togglePopUp}>Filtres</Button>
            </div>
            <div>
              <Button
                onClick={() => {
                  handleClick("location", body.location)
                }}
              >
                <Image
                  className="pointer-events-none"
                  src={"/trash.png"}
                  alt={`Poubelle`}
                  width={28}
                  height={10}
                  quality={80}
                />
              </Button>
            </div>
          </div>
        )}
      </div>
      {popup && (
        <PopUp
          title="Filtres"
          onSubmit={submitPopUp}
          onRemove={togglePopUp}
          onClose={togglePopUp}
          labelButton="Appliquer"
        >
          <div>
            <FilterForm ifClick={handleCheckboxChange} body={body}></FilterForm>
          </div>
        </PopUp>
      )}
      {locations && (
        <Accordion
          locations={locations}
          className="flex gap-2 py-1"
          handleDelete={handleDelete}
        ></Accordion>
      )}
      {!locations && (
        <Error label="Désolé, nous n'avons pas trouvé ce que vous recherchez."></Error>
      )}
    </div>
  )
}

export default LocationsPage
