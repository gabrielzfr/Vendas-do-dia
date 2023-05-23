import { CreditCard, CurrencyCircleDollar, Money } from "phosphor-react";
import { FormEvent, useContext, useState } from "react";
import SaleTypeButton from "../SaleTypeButton";
import {PixIcon} from "../../Icons/PixIcon";
import { SalesButtons } from "../SalesButtons";
import { useAddSale } from "../../../common/state/hooks/SalesHooks/useAddSale";
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
        <span className=" w-full sm:h-[7.25rem] h-[9rem] bg-grayBg px-3 sm:text-7xl text-[5rem] justify-center flex items-center gap-5">
          <label className="text-aquaBlue w-[30%] text-center">R$</label>
          <input
            name="value"
            value={saleValue}
            onChange={(e) => setSaleValue(e.target.value)}
            type="number"
            className=" h-full w-[70%] bg-transparent text-white placeholder:text-grayPlaceholde3r focus:outline-none text-start"
            placeholder="00,00"
          />
        </span>
        <SalesButtons />
        <input
          type="submit"
          value="Adicionar"
          className="w-full sm:h-[4.5rem] h-[6rem] bg-aquaBlue sm:text-2xl text-4xl cursor-pointer font-bold hover:opacity-80 transition-opacity text-blackBg"
          onClick={HandleAddSale}
        />
      </form>
    </aside>
  );
}
