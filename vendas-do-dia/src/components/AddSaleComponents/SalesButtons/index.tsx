import { CreditCard, Money } from "phosphor-react";
import SaleTypeButton from "../SaleTypeButton";
import {PixIcon} from "../../Icons/PixIcon";
import { useSelectedSaleTypeValue } from "../../../common/state/hooks/SelectedSaleHooks/useSelectedSaleTypeValue";


export function SalesButtons() {
  const selectedSaleType = useSelectedSaleTypeValue()
  return (
    <div className="flex sm:flex-col items-start sm:justify-start justify-between w-full gap-11 ">
    <SaleTypeButton type={"Money"} title={"Dinheiro"} icon={<Money size={76} />} />
    <SaleTypeButton type={"CreditCard"} title={"Cartão"} icon={<CreditCard size={76} />}/>
    <SaleTypeButton type={"Pix"} title={"Pix"} icon={<PixIcon size={76} isAquaBlue={selectedSaleType == 'Pix'}/>} />
  </div>
  )
}

