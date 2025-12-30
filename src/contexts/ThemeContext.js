import {createContext, useState} from 'react'

export const ThemeContext = createContext();

export default function ThemeContextProvider({children}) {
  //state rep data to be shared between different components
 
    const [isLightTheme, setIsLightTheme]= useState(true);
    const light= {text:'#555', ui:'#ddd', bg:'#eee'};
    const dark={text:'#ddd', ui:'#333', bg:'#555'};

 
    return (
     <ThemeContext.Provider
     value={{
      isLightTheme,
      light,
      dark,
      setIsLightTheme
     }}
     >
      {children}
     </ThemeContext.Provider>
    );
  }


