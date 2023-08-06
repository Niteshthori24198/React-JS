export default function Button({text,handleclick}){

    let val=text==='+'?1:-1;
    return <>
        <button onClick={(e)=>handleclick(val)}>{text}</button>
    </>
}