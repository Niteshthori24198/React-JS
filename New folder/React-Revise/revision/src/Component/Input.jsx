import React from 'react'

function Input() {

    const ref = React.useRef([]);

    const handlefocus = (e, id) => {
       ref.current[(id+1)%4].focus()
    }



    return (
        <>

            <input type="text" ref={(ele) => {
                ref.current[0] = ele;
            }}  onKeyUpCapture={(e)=>handlefocus(e,0)}  />
            <input type="text" ref={(ele) => {
                ref.current[1] = ele;
            }} onKeyUpCapture={(e)=>handlefocus(e,1)} />
            <input type="text" ref={(ele) => {
                ref.current[2] = ele;
            }} onKeyUpCapture={(e)=>handlefocus(e,2)} />
            <input type="text" ref={(ele) => {
                ref.current[3] = ele;
            }} onKeyUpCapture={(e)=>handlefocus(e,3)} />


        </>
    )
}

export default Input
