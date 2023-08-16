import useDebounce from "../Hooks/useDebounce";

export default function Debounce() {


    const debounce = useDebounce()

    const makeReq = () => {
        console.log('Request sent');
    }


    return <div>
        <button onClick={()=>debounce(makeReq,2000)}>Click here</button>
    </div>

}