import Schema from 'async-validator'
// console.log(Schema)
const descriptor = {
  name: {
    type: String,
    required: true,
  },
  age: {
    type: 'number',
    required: true,
  },
}

const validator = new Schema.default(descriptor)
validator.validate({ name: 123 }, (errors, fields) => {
  if (errors) {
    // validation failed, errors is an array of all errors
    // fields is an object keyed by field name with an array of
    // errors per field
    console.log(errors)
    return handleErrors(errors, fields)
  }
  // validation passed
})
