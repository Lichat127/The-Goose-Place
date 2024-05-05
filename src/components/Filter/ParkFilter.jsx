import { Options } from "@/components/Options"
import { Slider } from "@/components/Slider"
import { isFreeOptions, isPublicOptions } from "@/pages/constants"

export const ParkFilter = ({ body, ifClick }) => (
  <div>
    <div>
      <Options
        title="Public ?"
        options={isPublicOptions}
        locationTypeChange={ifClick}
        label="locationIsPublic"
        state={body.locationIsPublic}
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
