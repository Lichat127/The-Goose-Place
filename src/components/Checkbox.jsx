import clsx from "clsx"

const variants = {
  primary: "gap-2",
  secondary:
    "select-none cursor-pointer rounded-full border-4 border-yellow-200 bg-yellow-200 py-1 px-3 transition-colors duration-200 ease-in-out peer-checked:bg-yellow-400 peer-checked:border-yellow-400 peer-checked:text-white hover:bg-yellow-300",
}
const peers = {
  primary: "border-2 checked:border-yellow-400 outline-none px-3 py-2",
  secondary: "peer hidden",
}

export const Checkbox = ({
  className,
  variant = "primary",
  peer = "primary",
  label,
  checked,
  ...otherProps
}) => (
  <div className="flex m-1">
    <input
      type="checkbox"
      className={clsx(peers[peer], className)}
      id={label}
      checked={checked}
      {...otherProps}
    />
    <label htmlFor={label} className={clsx(variants[variant], className)}>
      {label}
    </label>
  </div>
)
