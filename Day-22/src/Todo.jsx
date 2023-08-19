import { memo, useMemo } from "react"


// we compare only required values which changes frequesntly and then re render accordingly..we can add any feild that we want to compare before re render.

// const customCheck = (prev, curr) => {
//     return prev.title === curr.title && prev.status === curr.status
// }


// export const Todo = memo(({ id, title, status, handletoggle }) => {
//     let i = 0
//     while (i < 100000000) {
//         i++
//     }

//     return <div>
//         <p>Title : {title}</p>
//         <p>Status : {status ? "Done" : "Left"}</p>
//         <button onClick={() => handletoggle(id)}>Toggle</button>
//     </div>

// },

//     customCheck

// )



// we can useCallback hook to handle same thing in much better way.... bcz earlier if we want to compare function then still it will re render bcz in js function is also an obj and we know : {}==={} always false and causes re render. 

// but if we use useCallback then we can put it in inside it. We have one dependancy array where we can add value which works opposite to useEffect i.e. means when the dependancy changes in that case useCallback stop working and it will causes comparing again and hence causes re render again. so here dependancy value indicates when our callback stops, if nothing is passed then it executes every time and will not compare the thing written inside it and did not causes re render.



// useMemo : if we have complex operation which always gives same vallue and we don't want to calculate it again then we can use it. again it works opposite to useEffect and same as useCallback works.



const heavytask = () => {
    let i = 0
    while (i < 1000000000) {
        i++
    }
}


export const Todo = memo(({ id, title, status, handletoggle }) => {

    useMemo(() => {
        
        heavytask()

    }, [])

    return <div>
        <p>Title : {title}</p>
        <p>Status : {status ? "Done" : "Left"}</p>
        <button onClick={() => handletoggle(id)}>Toggle</button>
    </div>

})