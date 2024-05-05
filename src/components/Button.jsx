import clsx from "clsx"

const variants = {
  primary: "bg-yellow-400 hover:bg-yellow-500 text-white rounded-lg m-2",
  none: "text-black",
  transparent: "opacity-50 text-black",
}
const sizes = {
  md: "text-sm px-2 py-1",
  lg: "text-lg font-semibold px-4 py-3",
}
export const Button = ({
  className,
  variant = "primary",
  size = "lg",
  children,
  type = "button",
  ...otherProps
}) => (
  <button
    className={clsx(variants[variant], sizes[size], className)}
    type={type}
    {...otherProps}
  >
    {children}
  </button>
)
