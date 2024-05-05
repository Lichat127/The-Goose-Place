import { Options } from "@/components/Options"
import { averagePriceOptions, starNumberOptions } from "@/pages/constants"

export const RestaurantFilter = ({ body, ifClick }) => (
  <div>
    <div>
      <Options
        title="Nombre d'étoile"
        options={starNumberOptions}
        locationTypeChange={ifClick}
        label="locationStarNumber"
        state={body.locationStarNumber}
      ></Options>
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
