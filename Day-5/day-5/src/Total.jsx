

export default function Total({ cart }) {

    let totalprice = cart.reduce((acc, cur) => acc + cur.price * cur.quantity, 0)

    return <h2>Total : {totalprice}</h2>
}