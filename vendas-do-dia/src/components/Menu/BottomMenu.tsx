import { ListPlus, Money, Scroll } from "phosphor-react";
import { useContext } from "react";
import { ShowComponentsContext } from "../../common/contexts/ShowComponents/ShowComponents";
import { NavItems } from "../../common/types/NavItems";
import { MenuItem } from "./MenuItem";





export function BottomMenu() {
  const {showSales, setShowSales, showAddSales, setShowAddSales, showReport, setShowReport} = useContext(ShowComponentsContext)

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
  return (
    <nav className="w-full bottom-0 fixed bg-blackBg rounded-none h-20 px-6 sm:hidden z-40">
      <ul className="flex justify-between">
        <MenuItem title="Vendas" icon={<Money size={50}/>} showComponent={showSales} setShowComponent={setShows} buttonValue={'sales'}/>
        <MenuItem title="Nova Venda" icon={<ListPlus size={50} />} setShowComponent={setShows} showComponent={showAddSales} buttonValue={'addSales'}/>
        <MenuItem title="Relátorio" icon={<Scroll size={50} />} setShowComponent={setShows} showComponent={showReport} buttonValue={'report'}/>

      </ul>
    </nav>
  );
}
