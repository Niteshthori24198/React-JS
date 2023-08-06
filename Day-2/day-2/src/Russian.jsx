export default function Russian(data) {

    const Rd = data.data;

    return <div className="Russia">

        {Rd.map((ele) => {

            return <div key={ele.id}>

                <img src={ele.image} alt="Russian" />
                <h3>{ele.Name}</h3>
                <button onClick={() => alert('Booked Successfully. Pay 6000 onsite.')}>Book Now</button>

            </div>

        })}

    </div>


}