import { ListPlus, Money, Scroll, Wallet } from "phosphor-react";
import { MenuItem } from "./MenuItem";
import { useShowComponentsValue } from "../../common/state/hooks/ShowComponentsHooks/useShowComponentsValue";

export function BottomMenu() {
  const showComponents = useShowComponentsValue()

  return (
    <nav className="w-full bottom-0 fixed bg-blackBg rounded-none h-20 px-6 sm:hidden z-40">
      <ul className="flex justify-between">
        <MenuItem title="Vendas" icon={<Money size={50}/>} buttonValue={'sales'} showComponent={showComponents.SalesComponent.isShow}/>
        <MenuItem title="Nova Venda" icon={<ListPlus size={50} />} buttonValue={'addSales'} showComponent={showComponents.AddSalesComponent.isShow}/>
        <MenuItem title="Relátorio" icon={<Scroll size={50} />} buttonValue={'report'} showComponent={showComponents.ReportComponent.isShow}/>
        <MenuItem title="Caixa" icon={<Wallet size={50} />} buttonValue={'cashdesk'} showComponent={showComponents.CashDeskComponent.isShow}/>

      </ul>
    </nav>
  );
}
