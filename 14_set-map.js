const map = new Map()

map.set("key", "value")

console.log(map.get("key")) // value


const newMap = new Map()
const objectKey = {
    id: 4
}

newMap.set(objectKey, "newValue")

console.log(newMap.get(objectKey)) // newValue









const set = new Set()

set.add(4)
set.add(5)
set.add(5)
set.add(7)
set.add(4)
set.add(8)
set.add(9)

console.log(set) // Set { 4, 5, 7, 8, 9 }
