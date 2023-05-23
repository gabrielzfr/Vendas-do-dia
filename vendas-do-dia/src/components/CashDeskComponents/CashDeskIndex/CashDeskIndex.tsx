import { useCashdeskValue } from "../../../common/state/hooks/CashDeskHooks/cashdesk/useCashDeskValue";
import { useMergeSalestoCashdesk } from "../../../common/state/hooks/CashDeskHooks/cashdesk/useMergeSalestoCashdesk";
import { useCashDeskDepositValue } from "../../../common/state/hooks/CashDeskHooks/deposit/useCashDeskDepositValue";
import { useSetShowCashDeskDeposit } from "../../../common/state/hooks/CashDeskHooks/deposit/useSetShowCashDeskDeposit";
import { useCashDeskWithdrawValue } from "../../../common/state/hooks/CashDeskHooks/withdraw/useCashDeskWithdrawValue";
import { useSetShowCashDeskWithdraw } from "../../../common/state/hooks/CashDeskHooks/withdraw/useSetShowCashDeskWithdraw";
import { useMoneyTotalSalesValue } from "../../../common/state/selectors/hooks/useMoneyTotalSalesValue";
import { CashDeskModal } from "../CashDeskModal";
import { TotalValue } from "../TotalValue";


interface CashDeskIndexProps {
  setIsEditingCashDesk: (type: boolean) => void;
}
export function CashDeskIndex({ setIsEditingCashDesk }: CashDeskIndexProps) {
  const cashdeskValue = useCashdeskValue();

  const withdrawValue = useCashDeskWithdrawValue()

  const depositValue = useCashDeskDepositValue()
  const MergeSalestoCashdesk = useMergeSalestoCashdesk();

  const setShowWithdraw = useSetShowCashDeskWithdraw()

  const setShowDeposit = useSetShowCashDeskDeposit()

  const moneySales = useMoneyTotalSalesValue()
  return (
    <CashDeskModal title="Caixa" setEditing={setIsEditingCashDesk}>

    <TotalValue title="Total no Caixa" size="g" totalValue={cashdeskValue + depositValue + withdrawValue}/>
    <div className="flex items-center justify-between md:gap-1 md:flex-row flex-col gap-12">
        <TotalValue title="Total da Entrada" size="p" totalValue={depositValue + moneySales} addButton={setShowDeposit} type="green"/>
        <TotalValue title="Total da Retirada" size="p" totalValue={withdrawValue} addButton={setShowWithdraw} type="gray"/>
    </div>
    <button
        className="bg-aquaBlue text-black font-semibold py-5 sm:text-3xl text-2xl hover:opacity-75 transition-opacity px-8 h-[5rem]"
        
    >
        Copiar Relátorio do Caixa
      </button>
    </CashDeskModal>
  );
}
