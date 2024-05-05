import { Button } from "@/components/Button"

export const PopUp = ({ title, onSubmit, onClose, children, labelButton }) => (
  <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
    <div className="bg-white rounded-lg p-5 w-96">
      <div className="flex justify-end text-2xl">
        <Button onClick={() => onClose()} variant="none">
          X
        </Button>
      </div>
      <div className="mb-8">
        <div className="font-bold text-black ml-5 text-xl  text-center">
          {title}
        </div>
        <div>{children}</div>
      </div>
      <div className="flex justify-evenly">
        <Button onClick={() => onSubmit()}>{labelButton}</Button>
      </div>
    </div>
  </div>
)
