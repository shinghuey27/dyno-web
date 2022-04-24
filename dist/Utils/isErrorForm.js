import { isEmpty } from "./isEmpty"

const isErrorForm = (name, error) => {
    if (name in error) return true
    return false
}


const isBoolean = (error) => {
    if (typeof error == 'boolean') return true
    return false;
}

const renderError = (name, error) => {    
    if (isBoolean(error)) return true    
    if (isEmpty(error)) return false    
    if (isErrorForm(name, error)) return true
    return false
}


export { renderError }