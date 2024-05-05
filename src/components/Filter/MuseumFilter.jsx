import { Options } from "@/components/Options"
import { Slider } from "@/components/Slider"
import { artTypeOptions, isFreeOptions } from "@/pages/constants"

export const MuseumFilter = ({ body, ifClick }) => (
  <div>
    <div>
      <Options
        title="Type d'art"
        options={artTypeOptions}
        locationTypeChange={ifClick}
        label="locationArtType"
        state={body.locationArtType}
      ></Options>
      <Options
        title="Payant ?"
        options={isFreeOptions}
        locationTypeChange={ifClick}
        label="locationIsFree"
        state={body.locationIsFree}
      ></Options>
      {!body.locationIsFree && (
        <div>
          <Slider body={body} ifClick={ifClick}></Slider>
        </div>
      )}
    </div>
  </div>
)
