
const isEmptyObject = (obj) => {
    for (var i in obj) return false;
    return true
    
}

const isUndefined = (error) => {
    if (error === undefined) return true
    return false
}

const isEmpty = (error) => {
    if (isUndefined(error)) return true
    else if(isEmptyObject(error)) return true
    return false

}

export { isEmpty, isEmptyObject, isUndefined };