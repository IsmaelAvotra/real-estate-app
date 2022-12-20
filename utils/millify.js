export const millify = (number) => {
  if (number < 1000) {
    return number.toString()
  }
  if (number < 1000000) {
    return (number / 1000).toFixed() + 'k'
  }
  let abbreviated = (number / 1000000).toFixed() + 'M'
  return abbreviated
}
