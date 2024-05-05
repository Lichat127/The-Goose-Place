import { Options } from "@/components/Options"
import { averagePriceOptions } from "@/pages/constants"

export const BarFilter = ({ body, ifClick }) => (
  <div>
    <div>
      <Options
        title="Prix moyen"
        options={averagePriceOptions}
        locationTypeChange={ifClick}
        label="locationAveragePrice"
        state={body.locationAveragePrice}
      ></Options>
    </div>
  </div>
)
