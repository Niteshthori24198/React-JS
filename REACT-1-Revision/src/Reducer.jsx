export function Reducer(data, action) {

    console.log("==>", data, action)

    let value = action()
    data = value[0]

    if (value[1] === 1) {
        return data + value[1]
    } else if (value[1] === -1) {
        return data + value[1]
    } else {
        return data
    }


}