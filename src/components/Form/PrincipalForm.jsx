import { FormField } from "@/components/FormField"
import { formFieldOptions } from "@/pages/constants"

export const PrincipalForm = () => (
  <div className="w-1/2 mx-2">
    {formFieldOptions.map((formField, key) => (
      <FormField
        key={key}
        name={formField.name}
        placeholder={`Enter the ${formField.name}`}
        label={formField.label}
      />
    ))}
  </div>
)
