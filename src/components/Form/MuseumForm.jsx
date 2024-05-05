import { Checkbox } from "@/components/Checkbox"
import { FormField } from "@/components/FormField"
import { Options } from "@/components/Options"
import { artTypeOptions } from "@/pages/constants"
import { ErrorMessage } from "formik"

export const MuseumForm = ({ body, ifClick }) => (
  <div>
    <div>
      <Options
        title="Type d'art"
        options={artTypeOptions}
        locationTypeChange={ifClick}
        label="locationArtType"
        state={body.locationArtType}
        uniqueAnswer={true}
      ></Options>
      <ErrorMessage
        component="span"
        className="text-sm text-red-500"
        name="locationArtType"
      ></ErrorMessage>
      <Checkbox
        onChange={() => ifClick("locationIsFree", !body.locationIsFree)}
        label="Gratuit ?"
        state={body.locationIsFree}
      ></Checkbox>
      <ErrorMessage
        component="span"
        className="text-sm text-red-500"
        name="locationIsFree"
      ></ErrorMessage>
      {!body.locationIsFree && (
        <div>
          <FormField
            name="locationPrice"
            placeholder="Enter the exact price"
            label="Prix"
          ></FormField>
        </div>
      )}
    </div>
  </div>
)
