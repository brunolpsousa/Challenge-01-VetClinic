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
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  date_of_birth: {
    type: Date,
    required: true,
  },
  zip_code: {
    type: String,
    required: true,
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
        required: true,
      },
      carry: {
        type: String,
        trim: true,
        enum: {
          // Extra small, Small, Medium, Large, Extra large
          values: ['xs', 's', 'm', 'l', 'xl', null],
          message: '{VALUE} is not supported',
        },
        required: true,
      },
      weight: {
        type: Number,
        required: true,
      },
      date_of_birth: {
        type: Date,
        required: true,
      },
    },
  ],
})
export default model('Tutor', TutorSchema)
