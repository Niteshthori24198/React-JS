import React from 'react'

import { forwardRef } from 'react'

export const Pincomponent = forwardRef(({keyHandler, maxChar }, ref) => {

   
    return (

        <>
            <input type="text" maxLength={maxChar} ref={ref} onKeyUp={(e) => keyHandler(e)} />
        </>
    )
})


