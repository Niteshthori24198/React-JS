import React from "react";

export default function Inputbox(){

    const ref =  React.useRef([])

    console.log(ref)

    const handlefocus = (e,id)=>{
        console.log(e.target.value)
        ref.current[id].focus()

    }

    return <>
    
    <input ref={(ele)=>{
        ref.current[0]=ele
    }} onKeyUpCapture={(e)=>handlefocus(e,0)} />

    <input ref={(ele)=>{
        ref.current[1]=ele
    }} onKeyUpCapture={(e)=>handlefocus(e,1)}  />

    <input ref={(ele)=>{
        ref.current[2]=ele
    }} onKeyUpCapture={(e)=>handlefocus(e,2)}  />

    <input ref={(ele)=>{
        ref.current[3]=ele
    }} onKeyUpCapture={(e)=>handlefocus(e,3)}  />

    </>

}