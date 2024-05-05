import Image from "next/image"

export const Error = ({ title, label, children }) => (
  <div className="flex justify-center items-center text-center">
    <div className="flex items-center">
      <Image
        src={"/Goose/sad.png"}
        alt={`sad goose LOGO`}
        width={300}
        height={200}
        quality={100}
        priority
      />
      <div className="flex flex-col ml-5 mt-20">
        <div>
          <h1 className="font-bold text-black text-5xl">{title}</h1>
          <p className="font-bold text-black text-2xl">{label}</p>
        </div>
        <div className="mt-12"> {children}</div>
      </div>
    </div>
  </div>
)
