
import React, {createContext} from 'react'

export const Countercontext = createContext()


export default function CountercontextProvider({children}){

    const [count,setcount] = React.useState(0)

    const handleupdatecount = (c)=>{
        setcount(count+c)
    }

    return <Countercontext.Provider value={{count,handleupdatecount}}>
        {children}
    </Countercontext.Provider>

}