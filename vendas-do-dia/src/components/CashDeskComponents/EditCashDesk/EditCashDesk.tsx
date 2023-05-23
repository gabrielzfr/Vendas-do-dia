import { useState } from "react";
import { CashDeskModal } from "../CashDeskModal";
import { TotalValueInput } from "../TotalValueInput";
import { useCashdeskValue } from "../../../common/state/hooks/CashDeskHooks/cashdesk/useCashDeskValue";
import { useSetCashdeskValue } from "../../../common/state/hooks/CashDeskHooks/cashdesk/useSetCashdeskValue";
import { useCashDeskDepositValue } from "../../../common/state/hooks/CashDeskHooks/deposit/useCashDeskDepositValue";
import { useCashDeskWithdrawValue } from "../../../common/state/hooks/CashDeskHooks/withdraw/useCashDeskWithdrawValue";
import { useSetCashDeskDeposit } from "../../../common/state/hooks/CashDeskHooks/deposit/useSetCashDeskDeposit";
import { useSetCashDeskWithdraw } from "../../../common/state/hooks/CashDeskHooks/withdraw/useSetCashDeskWithdraw";

interface EditCashDeskProps {
  setIsEditingCashDesk: (type: boolean) => void;
}
export function EditCashDesk({ setIsEditingCashDesk }: EditCashDeskProps) {
  const editCahsdeskValue = useSetCashdeskValue()
  const editDepositValue = useSetCashDeskDeposit()
  const editWithdrawValue = useSetCashDeskWithdraw()
  
  const cashdeskValue = useCashdeskValue();
  const depositValue= useCashDeskDepositValue();

  const withdraw = useCashDeskWithdrawValue();


  const [inputCashdeskValue, setInputCashdeskValue] = useState(
    cashdeskValue ? String(cashdeskValue) : ""
  );

  const [inputDepositValue, setInputDepositValue] = useState(
    depositValue ? String(depositValue) : ""
  );

  const [inputWithdrawValue, setInputWithdrawValue] = useState(
    withdraw ? String(withdraw) : ""
  );

  console.log(inputDepositValue)
  async function handleConfirmEdit() {
    editCahsdeskValue(Number(inputCashdeskValue))

    editDepositValue(Number(inputDepositValue))

    editWithdrawValue(Number(inputWithdrawValue) > 0 ? -Number(inputWithdrawValue) : Number(inputWithdrawValue))

    setIsEditingCashDesk(false)
  }

  return (
    <CashDeskModal title="Editando Caixa" goBack={setIsEditingCashDesk}>
      <TotalValueInput
        title="Total no Caixa"
        size="g"
        totalValue={inputCashdeskValue}
        setTotalValue={setInputCashdeskValue}
      />
      <div className="flex items-center justify-between gap-1">
        <TotalValueInput
          title="Total da Entrada"
          size="p"
          totalValue={inputDepositValue}
          setTotalValue={setInputDepositValue}
          type="green"
        />
        <TotalValueInput
          title="Total da Retirada"
          size="p"
          totalValue={inputWithdrawValue}
          setTotalValue={setInputWithdrawValue}
          type="gray"
        />
      </div>
      <button className="bg-aquaBlue text-black font-semibold py-5 text-3xl hover:opacity-75 transition-opacity px-8 h-[5rem]"
        onClick={handleConfirmEdit}
      >
        Confirmar Edição
      </button>
    </CashDeskModal>
  );
}
