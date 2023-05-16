import { Pencil, Wallet, X } from "phosphor-react";
import { useState } from "react";
import { useCashdeskValue } from "../../../common/state/hooks/useCashdeskValue";
import { useMergeSalestoCashdesk } from "../../../common/state/hooks/useMergeSalestoCashdesk";
import { useSetShowComponents } from "../../../common/state/hooks/useSetShowComponents";

interface CashDeskIndexProps {
    setIsEditingCashDesk: (type: boolean) => void
}
export function CashDeskIndex({setIsEditingCashDesk}: CashDeskIndexProps) {
    const setShows = useSetShowComponents()
    const CashdeskValue = useCashdeskValue()
    const MergeSalestoCashdesk = useMergeSalestoCashdesk()
  return (
        <article className="p-2 pb-10 md:w-[47.5rem] w-[97%]  bg-blackBg flex flex-col items-center gap-9 md:px-[2.5rem] border-aquaBlue border ">
            <div className="flex justify-between w-full px-4 pt-3">
                <span className="w-[128px] flex justify-start ">
                    <button 
                        className="flex items-center hover:text-aquaBlue transition-colors"
                        role="editCashdesk"
                        onClick={() => setIsEditingCashDesk(true)}
                    >
                        <Pencil size={45} />
                        <p 
                        className="text-xl font-semibold"
                        >
                            Editar
                            </p>
                    </button>
                </span>
                <span className="flex justify-center items-center gap-2 text-aquaBlue">
                    <Wallet size={54}/>
                    <h1 className="text-3xl font-bold">Caixa</h1>
                </span>
                <span className="w-[128px] flex items-center justify-end">
                    <button onClick={() => setShows(shows => ({
                        ...shows, 
                        CashDeskComponent: {
                            isShow: false
                        }
                    }))}
                    className="  hover:text-aquaBlue transition-colors"
                    >
                        <X size={45} weight="bold"/>
                    </button>
                </span>
            </div>

            <span className=" flex flex-col items-center justify-center gap-4 w-[90%]">
                <div className="flex bg-grayBg h-44  justify-center gap-6 items-center  w-full">
                    <span className="">
                        <strong className="text-aquaBlue font-semibold text-[7.5rem]">
                            R$
                        </strong>
                    </span>
                    <span className="overflow-x-auto">
                        <p className=" text-[7.5rem] font-normal ">
                            {CashdeskValue.toLocaleString('pt-br', {minimumFractionDigits: 2})}
                        </p>
                    </span>
                </div>  
                <h2 className="text-grayPlaceholde3r text-2xl font-bold">
                    Total no Caixa
                </h2>
            </span>

            <button className="bg-aquaBlue text-black font-semibold py-5 text-3xl hover:opacity-75 transition-opacity px-8 h-[5rem]" onClick={MergeSalestoCashdesk}>
            Adicionar Vendas Do Dia ao Caixa
            </button>
        </article>
  )
}