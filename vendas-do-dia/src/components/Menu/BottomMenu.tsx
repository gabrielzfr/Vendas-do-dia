import { ListPlus, Money, Scroll } from "phosphor-react";
import { useContext } from "react";
import { ShowComponentsContext } from "../../common/contexts/ShowComponents/ShowComponents";
import { NavItems } from "../../common/types/NavItems";
import { MenuItem } from "./MenuItem";





export function BottomMenu() {
  const {showSales, showAddSales, showReport} = useContext(ShowComponentsContext)

  return (
    <nav className="w-full bottom-0 fixed bg-blackBg rounded-none h-20 px-6 sm:hidden z-40">
      <ul className="flex justify-between">
        <MenuItem title="Vendas" icon={<Money size={50}/>} buttonValue={'sales'} showComponent={showSales}/>
        <MenuItem title="Nova Venda" icon={<ListPlus size={50} />} buttonValue={'addSales'} showComponent={showAddSales}/>
        <MenuItem title="Relátorio" icon={<Scroll size={50} />} buttonValue={'report'} showComponent={showReport}/>

      </ul>
    </nav>
  );
}
