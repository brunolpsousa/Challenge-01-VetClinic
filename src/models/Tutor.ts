import { Schema, model } from 'mongoose'

const TutorSchema = new Schema({
  name: {
    type: String,
    required: [true, 'must provide name'],
    trim: true,
    maxlength: [30, 'maximum 30 characters'],
  },
  phone: {
    type: String,
    default: null,
  },
  email: {
    type: String,
    default: null,
  },
  date_of_birth: {
    type: Date,
    default: null,
  },
  zip_code: {
    type: String,
    default: null,
  },
  pets: [
    {
      name: {
        type: String,
        required: [true, 'must provide name'],
        trim: true,
        maxlength: [30, 'maximum 30 characters'],
      },
      species: {
        type: String,
        trim: true,
        default: null,
      },
      carry: {
        type: String,
        trim: true,
        enum: {
          // Extra small, Small, Medium, Large, Extra large
          values: ['es', 's', 'm', 'l', 'el', null],
          message: '{VALUE} is not supported',
        },
        default: null,
      },
      weight: {
        type: Number,
        default: null,
      },
      date_of_birth: {
        type: Date,
        default: null,
      },
    },
  ],
})
export default model('Tutor', TutorSchema)
