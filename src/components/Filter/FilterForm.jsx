import { BarFilter } from "@/components/Filter/BarFilter"
import { MuseumFilter } from "@/components/Filter/MuseumFilter"
import { ParkFilter } from "@/components/Filter/ParkFilter"
import { RestaurantFilter } from "@/components/Filter/RestaurantFilter"
import { Options } from "@/components/Options"
import { locationTypeOptions } from "@/pages/constants"

const value = (ifClick, body) => {
  switch (body.location) {
    case "bar":
      return <BarFilter body={body} ifClick={ifClick}></BarFilter>

    case "museum":
      return <MuseumFilter body={body} ifClick={ifClick}></MuseumFilter>

    case "park":
      return <ParkFilter body={body} ifClick={ifClick}></ParkFilter>

    case "restaurant":
      return <RestaurantFilter body={body} ifClick={ifClick}></RestaurantFilter>

    default:
      return null
  }
}

export const FilterForm = ({ body, ifClick }) => (
  <div>
    <div>
      <Options
        title="Catégorie"
        options={locationTypeOptions[body.location]}
        locationTypeChange={ifClick}
        label="locationType"
        state={body.locationType}
      ></Options>
    </div>
    {value(ifClick, body)}
  </div>
)
