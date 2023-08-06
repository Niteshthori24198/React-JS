import React from "react"
import Label from "./Label"
import Quantity from "./Quantity"
import Total from "./Total"

export default function Cart({ cartitems }) {

    const [cartitem, setcartitems] = React.useState(cartitems)

    const handleQuantityChange = (id,val)=>{


        let temp = cartitem.map((e)=>{
            if(e.id===id){

                return {...e , quantity:e.quantity+val}

            }
            return e
        })

        setcartitems(()=>[...temp])

    }

    return <>

        {cartitem.map((e) => {
            return <div key={e.id}>

                <Label title={e.title} price={e.price} />

                <Quantity quantity={e.quantity} handleQuantityChange={handleQuantityChange} id={e.id} />

            </div>
        })}

        <Total cart={cartitem}/>

    </>

}