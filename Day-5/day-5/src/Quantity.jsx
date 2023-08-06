import Button from "./Button"

export default function Quantity({quantity,handleQuantityChange,id}){

    const handleclick = (val)=>{
        handleQuantityChange(id,val)
    }

    return <div>

        <Button text="-" handleclick={handleclick} />

        <span>{quantity}</span>

        <Button text="+" handleclick={handleclick} />

    </div>

}