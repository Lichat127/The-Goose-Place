export const Slider = ({ body, ifClick }) => {
  const width = body.locationPriceMax - body.locationPriceMin + 1

  return (
    <div>
      <p>Prix</p>
      <div className="my-30 w-full flex">
        <div>
          <span>Min</span>
          <input
            type="number"
            min={1}
            max={body.locationPriceMax}
            value={body.locationPriceMin}
            onChange={(event) => {
              ifClick("locationPriceMin", event.target.value)
            }}
          ></input>
        </div>
        <div>-</div>
        <div>
          <span>Max</span>
          <input
            type="number"
            min={body.locationPriceMin}
            max={100}
            value={body.locationPriceMax}
            onChange={(event) => {
              ifClick("locationPriceMax", event.target.value)
            }}
          ></input>
        </div>
      </div>
      <div className="relative h-5 rounded-full bg-gray-300">
        <div
          className="absolute h-5 bg-yellow-400 rounded-full"
          style={{ width: `${width}%`, left: `${body.locationPriceMin - 1}%` }}
        ></div>
      </div>
    </div>
  )
}
