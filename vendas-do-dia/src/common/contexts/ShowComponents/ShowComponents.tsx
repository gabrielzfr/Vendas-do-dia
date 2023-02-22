import { createContext, ReactNode, useEffect, useState } from "react";

interface ShowComponentsProviderProps {
  children: ReactNode;
}

interface ShowComponentsContextProps {
  showSales: boolean;
  setShowSales: React.Dispatch<React.SetStateAction<boolean>>;
  showAddSales: boolean;
  setShowAddSales: React.Dispatch<React.SetStateAction<boolean>>;
  showReport: boolean;
  setShowReport: React.Dispatch<React.SetStateAction<boolean>>;
}

let windowWidth = window.innerWidth

const initialValue = {
  showSales: true,
  setShowSales: () => {},
  showAddSales:  windowWidth > 590,
  setShowAddSales: () => {},
  showReport: false,
  setShowReport: () => {},
};

export const ShowComponentsContext =
  createContext<ShowComponentsContextProps>(initialValue);

ShowComponentsContext.displayName = "ShowComponents";

export function ShowComponentsProvider({children}: ShowComponentsProviderProps) { 
    const [showSales, setShowSales] = useState(initialValue.showSales);
    const [showAddSales, setShowAddSales] = useState(initialValue.showAddSales);
    const [showReport, setShowReport] = useState(initialValue.showReport);
    
    function updatePageWidth() {
      windowWidth = window.innerWidth;
      if (windowWidth < 590 ) {
        setShowSales(false)
        setShowAddSales(true)
      } 
      else {
        setShowSales(true)
        setShowAddSales(true)
      }
    }
  
    useEffect(() => {
        window.addEventListener('resize',updatePageWidth);
        return () => window.removeEventListener('resize', updatePageWidth);
      }, [windowWidth]);


  return (
    <ShowComponentsContext.Provider
      value={{
        showSales,
        setShowSales,
        showAddSales,
        setShowAddSales,
        showReport,
        setShowReport,
      }}
    >
      {children}
    </ShowComponentsContext.Provider>
  );
}
