import React from 'react'

function Button({ children, btncss, bg="defaultClr" }) {

    return (
        <button onClick={()=>window.location.reload()} className={`${btncss} ${bg}`}>{children}</button>
    )
}

export default Button
