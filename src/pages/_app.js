import "@/styles/globals.css"
import Image from "next/image"
import Link from "next/link"

const App = ({ Component, pageProps }) => (
  <main className="flex flex-col">
    <header className="border-b-2 border-b-stone-200 bg-stone-300">
      <div className="mx-auto max-w-5xl p-4 flex justify-between items-center">
        <Link href="/">
          <Image
            src={"/logo.png"}
            alt="The goose place"
            width="120"
            height="100"
            quality={100}
            priority
          />
        </Link>
        <nav>
          <ul className="flex gap-4">
            <li className="">
              <Link href="/locations/create">Ajouter</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
    <section>
      <div className="mx-auto max-w-5xl p-4">
        <Component {...pageProps} />
      </div>
    </section>
  </main>
)

export default App
