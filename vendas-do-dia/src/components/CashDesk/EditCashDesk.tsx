import { ArrowUUpLeft, Pencil, Wallet, X } from "phosphor-react";
import { useState } from "react";
import { useRemoveCashdeskValue } from "../../common/state/hooks/useRemoveCashdeskValue";
import { useSetCashdeskValue } from "../../common/state/hooks/useSetCashDeskValue";
import { useSetShowComponents } from "../../common/state/hooks/useSetShowComponents";

interface EditCashDeskProps {
    setIsEditingCashDesk: (type: boolean) => void
}
export function EditCashDesk({setIsEditingCashDesk}: EditCashDeskProps) {
    const setShows = useSetShowComponents()
    const removeCashDeskValue = useRemoveCashdeskValue()
    const setCashdeskValue = useSetCashdeskValue()
    const [editValue, setEditValue] = useState('')

    function handleRemoveCashdeskValue() {
        removeCashDeskValue(Number(editValue))
        setIsEditingCashDesk(false)
        
    }
    function handleSetCashdeskValue() {
        setCashdeskValue(Number(editValue))
        setIsEditingCashDesk(false)
        
    }
  return (
        <article className="p-2 pb-10 md:w-[47.5rem] w-[97%] bg-blackBg flex flex-col items-center gap-9 md:px-[2.5rem] border-aquaBlue border">
            <div className="flex justify-between w-full px-4 pt-3">
                    <button 
                        onClick={() => setIsEditingCashDesk(false)}
                        className="flex items-center hover:text-aquaBlue transition-colors"
                        role="editCashdesk"
                    >
                        <ArrowUUpLeft size={45} />
                    </button>
                <span className="flex justify-center items-center gap-2 text-aquaBlue">
                    <Wallet size={54}/>
                    <h1 className="text-3xl font-bold">Editando Caixa</h1>
                </span>
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
            </div>

            <span className="w-full flex flex-col items-center justify-center gap-4">
                <div className="flex bg-grayBg h-44  justify-center gap-6 p-4 items-center w-[90%]">
                    <label className="w-full">
                        <strong className="text-aquaBlue font-semibold text-[7.5rem]">
                            R$
                        </strong>
                    </label>
                    <span>
                        <input type={"number"} className=" text-[7.5rem] font-normal bg-transparent w-full "
                        placeholder="00,00" value={editValue} onChange={e => setEditValue(e.target.value)}
                        />
                    </span>
                </div>  
                <h2 className="text-grayPlaceholde3r text-2xl font-bold">
                    Total no Caixa
                </h2>
            </span>

            <div className="flex gap-3">
                <button className="bg-aquaBlue text-black font-semibold py-5 text-3xl hover:opacity-75 transition-opacity px-8 h-[5rem]" onClick={handleRemoveCashdeskValue}>
                Retirar Valor
                </button>
                <button className="bg-aquaBlue text-black font-semibold py-5 text-3xl hover:opacity-75 transition-opacity px-8 h-[5rem]" onClick={handleSetCashdeskValue}>
                Confirmar
                </button>
            </div>
        </article>
  )
}