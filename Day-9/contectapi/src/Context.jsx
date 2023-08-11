// context API : it has three steps 
// 1. Create context
// 2. Provide context
// 3. Consume context 

import React, { createContext } from 'react';

// step -1 : create context

export const appcontext = createContext()

console.log(appcontext)


// step -2 : provide context : we wrap out out application inside global context
// <appcontext.Provider><appcontext.Provider />


const lang = {
  eng:'en',
  russian:'ru',
  zerman:'zr',
  spanish:'sp',
  hindi:'Hi',
  punjabi:'pj'
}


const AppcontextProvider = ({ children }) => {


  const [language , setlanguage] = React.useState(lang.eng)

  const handleupdatelanguage = (selectedlanguage)=>{
    let newlanguage = lang[selectedlanguage] || lang.eng;
    setlanguage(newlanguage)
  }

  return <appcontext.Provider value={{language , handleupdatelanguage}}> {/* i can pass any value from here and can be accessed anywhere*/ }

    {children} 

    {/* it's App component */}

  </appcontext.Provider>
}


export default AppcontextProvider