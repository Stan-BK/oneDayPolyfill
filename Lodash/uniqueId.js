// _.uniqueId([prefix=''])
const uniqueId = 0
function MyuniqueId(prefix) {
  return prefix != undefined ? prefix + uniqueId++ : uniqueId++
}