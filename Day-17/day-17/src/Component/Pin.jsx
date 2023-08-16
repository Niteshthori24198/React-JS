import { useRef, useState } from "react"

import PropTypes from 'prop-types'

import {PinComponent} from "./PinComponent"

export default function Pin({ length, maxChar }) {

    const inputRef = useRef([])



    const [len] = useState(new Array(length).fill(0))


    const handleFocus = (e, i) => {

        if (e.target.value.length === maxChar && i < length - 1) {
            inputRef.current[i + 1].focus()
        }

    }

    const handleBackspace = (e, i) => {

        if (e.target.value.length === 0 && i > 0) {
            inputRef.current[i - 1].focus()
        }

    }

    const keyHandler = (e, i) => {

        if (e.keyCode === 8) {
            handleBackspace(e, i)
        } else {
            handleFocus(e, i)
        }
    }


    const pasteHandler = (e) => {

        const data = e.clipboardData.getData("Text").split('').filter((e, i) => i < length)

        data.forEach((ele, i) => {

            inputRef.current[i].value = data[i]

            if (e.target.value.length === maxChar && i < data.length - 1) {
                inputRef.current[i + 1].focus()
            }
        });
    }


    return <div onPaste={(e) => pasteHandler(e)}>
        {
            len.map((el, i) => {

                return <PinComponent key={i} ref={(e)=>inputRef.current[i]=e} maxChar={maxChar} keyHandler={(e)=>keyHandler(e,i)} />

            })
        }


    </div>
}


// we can specify additional property


Pin.propTypesropTypes = {

    length: PropTypes.number.isRequired,
    maxChar: PropTypes.number.isRequired

}