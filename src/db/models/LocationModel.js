import mongoose from "mongoose"
import { locationSchema } from "../schemas/locationSchema"

export const LocationModel =
  mongoose.models.Location || mongoose.model("Location", locationSchema)
