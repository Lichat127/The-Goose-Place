import { Options } from "@/components/Options"
import { averagePriceOptions } from "@/pages/constants"
import { ErrorMessage } from "formik"

export const BarForm = ({ body, ifClick }) => (
  <div>
    <div>
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
