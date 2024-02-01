export default function sortByName(arr) {
  const sortedArray = arr.sort(function(a, b) {

    const itemA = a.name.toLowerCase()
    const itemB = b.name.toLowerCase()

    if (itemA < itemB) {
      return -1
    } else if (itemA > itemB) {
      return 1
    } else {
      return 0
    }
  })

  return sortedArray
}