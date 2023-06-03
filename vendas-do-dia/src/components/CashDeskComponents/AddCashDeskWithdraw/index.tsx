import { useState } from "react";
import { useSetShowCashDeskWithdraw } from "../../../common/state/hooks/CashDeskHooks/withdraw/useSetShowCashDeskWithdraw";
import { CashDeskModal } from "../CashDeskModal";
import { TotalValueInput } from "../TotalValueInput";
import { useAddWithdraw } from "../../../common/state/hooks/CashDeskHooks/withdraw/useAddWithdraw";

export function AddCashDeskWithdraw() {
  const setShowWithdraw = useSetShowCashDeskWithdraw()

  const [withdrawInputValue, setWithdrawInputValue] = useState('')

  const addWithdraw = useAddWithdraw()

  return (
    <CashDeskModal title="Adicionando Retirada" goBack={setShowWithdraw}>
            <div className="w-full h-full flex flex-col gap-14 sm:justify-start justify-center">  
        <TotalValueInput title="Total da Retirada" totalValue={withdrawInputValue} setTotalValue={setWithdrawInputValue} size="g" type="gray"/>

        <button className="bg-aquaBlue text-black font-semibold py-5 text-3xl hover:opacity-75 transition-opacity px-8 h-[5rem]"
          onClick={() => {
            addWithdraw(Number(withdrawInputValue) > 0 ? -Number(withdrawInputValue): Number(withdrawInputValue))
            setShowWithdraw(false)
          }}
        >
          Confirmar Edição
        </button>
      </div>
    </CashDeskModal>
  )
}