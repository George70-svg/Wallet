export const capitalizeFirstLetter = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

export const limitString = (str: string, limit: number) => {
  if (str.length > limit) {
    return str.substring(0, limit) + '...'
  } else {
    return str
  }
}
