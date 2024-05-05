import * as yup from "yup"

export const locationValidator = yup
  .string()
  .required()
  .oneOf(["bar", "museum", "park", "restaurant"])
  .label("Type de lieu")
export const locationNameValidator = yup.string().min(3).required().label("Nom")
export const locationAddressValidator = yup
  .string()
  .min(3)
  .required()
  .label("Adresse")
export const locationCityValidator = yup
  .string()
  .min(3)
  .required()
  .label("Ville")
export const locationZipValidator = yup
  .string()
  .matches(/^\d{5}$/u, "Le code postal doit être composé de 5 chiffres")
  .required()
  .label("Code postal")
export const locationCountryValidator = yup
  .string()
  .min(3)
  .required()
  .label("Pays")
export const locationTypeValidator = yup
  .string()
  .nullable()
  .oneOf([
    "wine",
    "cocktail",
    "pub",
    "baroc",
    "cubism",
    "surrealism",
    "popart",
    "floral",
    "forestier",
    "attraction",
    "italienne",
    "french",
    "asiatic",
    "burger",
  ])
  .label("Catégorie")
export const locationStarNumberValidator = yup
  .string()
  .nullable()
  .oneOf(["1", "2", "3", "4", "5"])
  .label("Nombre d'étoile")
export const locationArtTypeValidator = yup
  .string()
  .nullable()
  .oneOf(["paint", "sculpture"])
  .label("Type d'art")
export const locationIsFreeValidator = yup
  .boolean()
  .nullable()
  .default(false)
  .label("Gratuit")
export const locationIsPublicValidator = yup
  .boolean()
  .nullable()
  .default(false)
  .label("Public")
export const locationAveragePriceValidator = yup
  .string()
  .nullable()
  .oneOf(["cheap", "mid", "expensive", "luxury"])
  .label("Prix moyen")
export const locationPriceValidator = yup
  .number()
  .nullable()
  .label("Prix exact")
