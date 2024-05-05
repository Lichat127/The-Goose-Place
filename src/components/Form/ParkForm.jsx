import { Checkbox } from "@/components/Checkbox"
import { FormField } from "@/components/FormField"
import { ErrorMessage } from "formik"

export const ParkForm = ({ body, ifClick }) => (
  <div>
    <Checkbox
      onChange={() => ifClick("locationIsPublic", !body.locationIsPublic)}
      label="Public ?"
      state={body.locationIsPublic}
    ></Checkbox>
    <ErrorMessage
      component="span"
      className="text-sm text-red-500"
      name="locationIsPublic"
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
)
