import { Button } from "@/components/Button"
import Image from "next/image"
import { useState } from "react"

export const LocationTypeMenu = ({
  options,
  ifClick,
  state,
  label = "selectedLocation",
}) => {
  const [selected, setSelected] = useState(state)
  const handleButtonClick = (locationType) => {
    ifClick(label, locationType)
    setSelected(locationType)
  }

  return (
    <div>
      {options.map((option, key) => (
        <Button
          key={key}
          variant={selected === option.type ? "none" : "transparent"}
          onClick={() => handleButtonClick(option.type)}
          type="button"
        >
          <Image
            className="pointer-events-none"
            src={option.img}
            alt={`${option.label} LOGO`}
            width={60}
            height={50}
            quality={100}
            priority
          />
          {option.label}
        </Button>
      ))}
    </div>
  )
}
