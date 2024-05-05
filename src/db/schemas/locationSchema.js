import { Schema } from "mongoose"

export const locationSchema = new Schema({
  location: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  zip: {
    type: Number,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  locationType: {
    type: String,
  },
  locationStarNumber: {
    type: String,
  },
  locationAveragePrice: {
    type: String,
  },
  locationArtType: {
    type: String,
  },
  locationIsPublic: {
    type: Boolean,
  },
  locationIsFree: {
    type: Boolean,
  },
  locationPrice: {
    type: String,
  },
})
