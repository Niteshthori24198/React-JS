import React, { useRef } from 'react'

function RefComponent() {


    const Ref = useRef()

    console.log(Ref)

    return (

        <div>

            <input type="text" ref={Ref}/>
            <button onClick={()=>Ref.current.focus()}>Focus on Input</button>

        </div>
        
    )
}

export default RefComponent
