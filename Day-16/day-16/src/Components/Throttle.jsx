import useThrottle from "../Hooks/useThrottle";


export default function Throttle() {

    const makeReq = () => {
        console.log('Network Request');
    }

    const throttle = useThrottle()

    return <div>
        <button onClick={() => throttle(makeReq, 3000)}>Click Throtle</button>
    </div>

}