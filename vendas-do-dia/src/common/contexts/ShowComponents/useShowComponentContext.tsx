import { useContext } from "react"
import { NavItems } from "../../types/NavItems"
import { ShowComponentsContext } from "./ShowComponents"

export const useShowComponentsContext = () => {
    const {setShowAddSales, setShowReport, setShowSales, showAddSales, showReport, showSales} = useContext(ShowComponentsContext)

    function setShows(buttonValue: NavItems) {
        switch (buttonValue) {
          case 'sales':
            setShowSales(true)
            setShowAddSales(false)
            setShowReport(false)
            break;
          case 'addSales':
            setShowSales(false)
            setShowAddSales(true)
            setShowReport(false)
            break
          case 'report':
            setShowSales(false)
            setShowAddSales(false)
            setShowReport(true)
            break;
        }
      }
    

    return {
        showSales,
        setShowSales,
        showAddSales,
        setShowAddSales,
        showReport,
        setShowReport,
        setShows
    }
}