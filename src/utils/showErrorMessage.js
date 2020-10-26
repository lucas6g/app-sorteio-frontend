export default function(errorArray){
const errors = {}
  errorArray.inner.forEach((error) => {
      errors[error.path] = error.message
  })

  return errors
}

