import { forwardRef } from "react"


export const PinComponent = forwardRef(({maxChar , keyHandler} , ref)=> {
    return <input type="text" maxLength={maxChar} onKeyUp={(e)=>keyHandler(e)} ref={ref} />
})