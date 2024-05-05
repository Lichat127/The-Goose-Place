import { Button } from "@/components/Button"
import { Form } from "@/components/Form"
import { PopUp } from "@/components/PopUp"
import { PrincipalForm } from "@/components/Form/PrincipalForm"
import { SecondaryForm } from "@/components/Form/SecondaryForm"
import {
  locationTypeValidator,
  locationNameValidator,
  locationAddressValidator,
  locationCityValidator,
  locationZipValidator,
  locationCountryValidator,
  locationValidator,
  locationStarNumberValidator,
  locationArtTypeValidator,
  locationIsFreeValidator,
  locationIsPublicValidator,
  locationAveragePriceValidator,
  locationPriceValidator,
} from "@/validators"
import axios from "axios"
import { ErrorMessage, Formik } from "formik"
import { useRouter } from "next/router"
import { useState } from "react"
import * as yup from "yup"
import { LocationTypeMenu } from "@/components/LocationTypeMenu"
import { locationOptions } from "@/pages/constants"

const initialValues = {
  location: "",
  name: "",
  address: "",
  city: "",
  zip: "",
  country: "",
  locationType: "",
  locationStarNumber: "",
  locationArtType: "",
  locationIsFree: false,
  locationIsPublic: false,
  locationAveragePrice: "",
  locationPrice: "",
}
const validationSchema = yup.object({
  location: locationValidator,
  name: locationNameValidator,
  address: locationAddressValidator,
  city: locationCityValidator,
  zip: locationZipValidator,
  country: locationCountryValidator,
  locationType: locationTypeValidator,
  locationStarNumber: locationStarNumberValidator,
  locationArtType: locationArtTypeValidator,
  locationIsFree: locationIsFreeValidator,
  locationIsPublic: locationIsPublicValidator,
  locationAveragePrice: locationAveragePriceValidator,
  locationPrice: locationPriceValidator,
})
const CreateLocationPage = () => {
  const router = useRouter()
  const [popup, setPopup] = useState({
    validationPopUp: false,
    errorPopUp: false,
  })
  const handleSubmit = async (
    {
      location,
      name,
      address,
      city,
      zip,
      country,
      locationType,
      locationStarNumber,
      locationArtType,
      locationIsFree,
      locationIsPublic,
      locationAveragePrice,
      locationPrice,
    },
    { resetForm },
  ) => {
    const body = {
      location,
      name,
      address,
      city,
      zip,
      country,
      locationType,
      locationStarNumber: location === "restaurant" ? locationStarNumber : null,
      locationAveragePrice:
        location === "restaurant" || location === "bar"
          ? locationAveragePrice
          : null,
      locationArtType: location === "museum" ? locationArtType : null,
      locationIsPublic: location === "park" ? locationIsPublic : null,
      locationIsFree:
        location === "museum" || location === "park" ? locationIsFree : null,
      locationPrice:
        location === "museum" || location === "park" ? locationPrice : null,
    }

    await axios
      .post("http://localhost:3000/api/locations", body)
      .then(() => togglePopUp("validationPopUp"))
      .catch(() => togglePopUp("errorPopUp"))

    resetForm()
  }
  const togglePopUp = (label) => {
    setPopup((prevState) => ({
      ...prevState,
      [label]: !popup[label],
    }))
  }

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      {({ values, setFieldValue }) => (
        <Form>
          {popup.validationPopUp && (
            <PopUp
              title="L'adresse à correctement été enregistrée !"
              onSubmit={() => router.push("/")}
              onClose={() => togglePopUp("validationPopUp")}
              labelButton="Retourner à l'accueil"
            />
          )}

          {popup.errorPopUp && (
            <PopUp
              title="Erreur !"
              onSubmit={() => router.push("/")}
              onClose={() => togglePopUp("errorPopUp")}
              labelButton="Retourner à l'accueil"
            >
              Une erreur est survenu, nous nous excusons pour le dérangement
              occasioné.
            </PopUp>
          )}

          <div className="flex flex-col items-center">
            <label>Type de lieu</label>
            <LocationTypeMenu
              options={locationOptions}
              ifClick={setFieldValue}
              state={values.location}
              label="location"
            ></LocationTypeMenu>
            <ErrorMessage
              component="span"
              className="text-sm text-red-500"
              name="location"
            ></ErrorMessage>
          </div>

          <div className="flex items-start">
            <PrincipalForm></PrincipalForm>

            {values.location && (
              <SecondaryForm
                ifClick={setFieldValue}
                body={values}
              ></SecondaryForm>
            )}
          </div>
          <Button type="submit">Create</Button>
        </Form>
      )}
    </Formik>
  )
}

export default CreateLocationPage
