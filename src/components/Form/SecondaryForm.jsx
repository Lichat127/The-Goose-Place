import { BarForm } from "@/components/Form/BarForm"
import { MuseumForm } from "@/components/Form/MuseumForm"
import { ParkForm } from "@/components/Form/ParkForm"
import { RestaurantForm } from "@/components/Form/RestaurantForm"
import { Options } from "@/components/Options"
import { locationTypeOptions } from "@/pages/constants"
import { ErrorMessage } from "formik"

const value = (ifClick, body) => {
  switch (body.location) {
    case "bar":
      return <BarForm body={body} ifClick={ifClick}></BarForm>

    case "museum":
      return <MuseumForm body={body} ifClick={ifClick}></MuseumForm>

    case "park":
      return <ParkForm body={body} ifClick={ifClick}></ParkForm>

    case "restaurant":
      return <RestaurantForm body={body} ifClick={ifClick}></RestaurantForm>

    default:
      return null
  }
}

export const SecondaryForm = ({ body, ifClick }) => (
  <div className="w-1/2 mx-2">
    <div>
      <Options
        title="Catégorie"
        options={locationTypeOptions[body.location]}
        locationTypeChange={ifClick}
        label="locationType"
        state={body.locationType}
        uniqueAnswer={true}
      ></Options>
      <ErrorMessage
        component="span"
        className="text-sm text-red-500"
        name="locationType"
      ></ErrorMessage>
    </div>
    {value(ifClick, body)}
  </div>
)
