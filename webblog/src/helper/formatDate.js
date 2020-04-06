export const blogFormatDate = date => {
  const localDate = "en-US"

  const options = {
    month: "long",
    day: "2-digit",
    year: "numeric"
  }

  const formatedDate = new Date(date).toLocaleDateString(localDate, options)

  return formatedDate
}
