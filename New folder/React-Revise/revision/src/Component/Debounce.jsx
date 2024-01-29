import React from 'react'
import UseDebounce from '../useDebounce'

function Debounce() {

    const debounce = UseDebounce()

    const makereq = () => {
        console.log('Req made')
    }

    return (
        <>

            <button onClick={() => debounce(makereq, 3000)}>Click</button>

        </>

    )
}

export default Debounce
