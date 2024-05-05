import clsx from "clsx"
import { ErrorMessage, Field } from "formik"
import { twMerge } from "tailwind-merge"

export const FormDropdown = ({
  className,
  name,
  label,
  placeholder,
  value,
  options,
  ...otherProps
}) => (
  <label className={twMerge(clsx("flex flex-col gap-2", className))}>
    <span>{label}</span>
    <Field
      as="select"
      name={name}
      className="border-2 focus:border-indigo-400 outline-none px-3 py-2"
      placeholder={placeholder || label}
      value={value}
      {...otherProps}
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </Field>
    <ErrorMessage
      component="span"
      className="text-sm text-red-500"
      name={name}
    />
  </label>
)
