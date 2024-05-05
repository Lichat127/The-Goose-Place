import { Button } from "@/components/Button"
import { Error } from "@/components/Error"
import { useRouter } from "next/router"

export default function Page404() {
  const router = useRouter()

  return (
    <div>
      <div>
        <Error title="404" label="Oups, une erreur est survenue !">
          <Button
            onClick={() => {
              router.push("/")
            }}
          >
            Retourner à l'accueil
          </Button>
        </Error>
      </div>
    </div>
  )
}
