import { CreditCard, CurrencyCircleDollar, Money } from "phosphor-react";
import { FormEvent, useContext, useState } from "react";
import { useAddSale } from "../../../common/state/hooks/useAddSale";
import SaleTypeButton from "../SaleTypeButton";
import PixIcon from "../../Icons/PixIcon";
import { SalesButtons } from "../SalesButtons";
export function AddSale() {
  const  AddNewSale = useAddSale()

  const [saleValue, setSaleValue] = useState("");

  function HandleAddSale(e: FormEvent) {
    AddNewSale(saleValue, e);
    setSaleValue("");
  }

  return (
    <aside className="flex items-center flex-col justify-center gap-10 sm:mb-5 sm:w-[21.5rem] w-[75%]">
      <h1 className="font-semibold text-[2.6rem] text-center">
        Adicionar Venda
      </h1>
      <form action="submit" className="flex flex-col items-center gap-10">

        <SalesButtons />
        <input
          type="submit"
          value="Adicionar Venda"
          className="w-full sm:h-[4.5rem] h-[6rem] bg-aquaBlue sm:text-2xl text-4xl cursor-pointer font-bold hover:opacity-80 transition-opacity"
          onClick={HandleAddSale}
        />
      </form>
    </aside>
  );
}
