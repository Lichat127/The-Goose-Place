import { Checkbox } from "@/components/Checkbox"

export const Options = ({
  title,
  options,
  state,
  locationTypeChange,
  label,
  uniqueAnswer = false,
}) => {
  const isChecked = (option) => {
    if (state === null) {
      return false
    }

    return uniqueAnswer ? state === option.value : state[option.value]
  }

  return (
    <div>
      <div>
        <h2>{title}</h2>
        <div className="flex justify-evenly flex-wrap">
          {options.map((option, key) => (
            <Checkbox
              key={key}
              peer="secondary"
              variant="secondary"
              checked={isChecked(option)}
              onChange={() => {
                locationTypeChange(label, option.value)
              }}
              label={option.label}
            ></Checkbox>
          ))}
        </div>
      </div>
    </div>
  )
}
