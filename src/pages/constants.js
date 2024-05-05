export const locationOptions = [
  { type: "bar", img: "/Goose/bar.png", label: "Bar" },
  { type: "museum", img: "/Goose/museum.png", label: "Musée" },
  { type: "park", img: "/Goose/park.png", label: "Parc" },
  { type: "restaurant", img: "/Goose/restaurant.png", label: "Restaurant" },
]
export const locationFilterOptions = [
  { type: "", img: "/Goose/naked.png", label: "Tout" },
  { type: "bar", img: "/Goose/bar.png", label: "Bar" },
  { type: "museum", img: "/Goose/museum.png", label: "Musée" },
  { type: "park", img: "/Goose/park.png", label: "Parc" },
  { type: "restaurant", img: "/Goose/restaurant.png", label: "Restaurant" },
]
export const isFreeOptions = [
  { label: "Payant", value: false },
  { label: "Gratuit", value: true },
]
export const isPublicOptions = [
  { label: "Privé", value: false },
  { label: "Public", value: true },
]
export const artTypeOptions = [
  { label: "Peinture", value: "paint" },
  { label: "Sculpture", value: "sculpture" },
]
export const averagePriceOptions = [
  { label: "€", value: "cheap" },
  { label: "€€", value: "mid" },
  { label: "€€€", value: "expensive" },
  { label: "€€€€", value: "luxury" },
]
export const starNumberOptions = [
  { label: "1", value: "1" },
  { label: "2", value: "2" },
  { label: "3", value: "3" },
  { label: "4", value: "4" },
  { label: "5", value: "5" },
]
export const formFieldOptions = [
  { name: "name", label: "Nom" },
  { name: "address", label: "Adresse" },
  { name: "city", label: "Ville" },
  { name: "zip", label: "Code postal" },
  { name: "country", label: "Pays" },
]
export const locationTypeOptions = {
  bar: [
    { label: "Bar à vin", value: "wine" },
    { label: "Bar à cocktail", value: "cocktail" },
    { label: "PUB", value: "pub" },
  ],
  museum: [
    { label: "Baroque", value: "baroc" },
    { label: "Cubisme", value: "cubism" },
    { label: "Surréalisme", value: "surrealism" },
    { label: "Pop Art", value: "popart" },
  ],
  park: [
    { label: "Floral", value: "floral" },
    { label: "Forestier", value: "forestier" },
    { label: "Attraction", value: "attraction" },
  ],
  restaurant: [
    { label: "Italienne", value: "italienne" },
    { label: "Française", value: "french" },
    { label: "Asiatique", value: "asiatic" },
    { label: "Burger", value: "burger" },
  ],
}
