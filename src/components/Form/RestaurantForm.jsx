import { Options } from "@/components/Options"
import { starNumberOptions, averagePriceOptions } from "@/pages/constants"
import { ErrorMessage } from "formik"

export const RestaurantForm = ({ body, ifClick }) => (
  <div>
    <div>
      <Options
        title="Nombre d'étoiles"
        options={starNumberOptions}
        locationTypeChange={ifClick}
        label="locationStarNumber"
        state={body.locationStarNumber}
        uniqueAnswer={true}
      ></Options>
      <ErrorMessage
        component="span"
        className="text-sm text-red-500"
        name="locationStarNumber"
      ></ErrorMessage>
      <Options
        title="Prix moyen"
        options={averagePriceOptions}
        locationTypeChange={ifClick}
        label="locationAveragePrice"
        state={body.locationAveragePrice}
        uniqueAnswer={true}
      ></Options>
      <ErrorMessage
        component="span"
        className="text-sm text-red-500"
        name="locationAveragePrice"
      ></ErrorMessage>
    </div>
  </div>
)
