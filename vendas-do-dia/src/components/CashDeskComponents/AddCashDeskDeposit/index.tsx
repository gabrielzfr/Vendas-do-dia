
import { useState } from "react";
import { useSetShowCashDeskDeposit } from "../../../common/state/hooks/CashDeskHooks/deposit/useSetShowCashDeskDeposit";
import { CashDeskModal } from "../CashDeskModal";
import { TotalValueInput } from "../TotalValueInput";
import { useAddDeposit } from "../../../common/state/hooks/CashDeskHooks/deposit/useAddDeposit";

export function AddCashDeskDeposit() {
  const setShowDeposit = useSetShowCashDeskDeposit()

  const [depositValue, setDepositValue] = useState('')

  const addDeposit = useAddDeposit()

  return (
    <CashDeskModal title="Adicionando Entrada" goBack={setShowDeposit}>
      <div className="w-full h-full flex flex-col gap-14">  
        <TotalValueInput title="Total da Entrada" totalValue={depositValue} setTotalValue={setDepositValue} size="g" type="green"/>

        <button className="bg-aquaBlue text-black font-semibold py-5 text-3xl hover:opacity-75 transition-opacity px-8 h-[5rem]"
          onClick={() => {
            addDeposit(Number(depositValue))
            setShowDeposit(false)
          }}
        >
          Confirmar Edição
        </button>
      </div>

    </CashDeskModal>
  );
}