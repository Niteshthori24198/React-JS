export default function Button({ btntext, handlechange }) {

    let val=btntext==='Inc'?1:-1

    return <button onClick={(e)=>handlechange(val)}>{btntext}</button>

}