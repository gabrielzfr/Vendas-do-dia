import { useCallback, useState } from "react";
import { useCashdeskValue } from "../../../common/state/hooks/CashDeskHooks/cashdesk/useCashDeskValue";
import { useMergeSalestoCashdesk } from "../../../common/state/hooks/CashDeskHooks/cashdesk/useMergeSalestoCashdesk";
import { useCashDeskDepositValue } from "../../../common/state/hooks/CashDeskHooks/deposit/useCashDeskDepositValue";
import { useSetShowCashDeskDeposit } from "../../../common/state/hooks/CashDeskHooks/deposit/useSetShowCashDeskDeposit";
import { useCashDeskWithdrawValue } from "../../../common/state/hooks/CashDeskHooks/withdraw/useCashDeskWithdrawValue";
import { useSetShowCashDeskWithdraw } from "../../../common/state/hooks/CashDeskHooks/withdraw/useSetShowCashDeskWithdraw";
import { useMoneyTotalSalesValue } from "../../../common/state/selectors/hooks/useMoneyTotalSalesValue";
import { CashDeskModal } from "../CashDeskModal";
import { TotalValue } from "../TotalValue";
import html2canvas from "html2canvas";
import { Loading } from "../../Loading";


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

  const [isTakingPrint, setIsTakingPrint] = useState(false)
  const [copyImageError, handleCopyImageError] = useState(false)

  const takeReportPrint = useCallback(async () => {
    await setIsTakingPrint(true);
    const canvas = await html2canvas(document.querySelector("[data-cashdesk]")!, {
      allowTaint: true,
      removeContainer: false,
    });
    const base64Image = canvas.toDataURL("image/png");
    setTimeout(() => setIsTakingPrint(false), 500);

    return base64Image;
  }, [])
  const copyCashdeskReportImage = useCallback(async () => {
    const ReportPrint = await takeReportPrint();
    const image = await fetch(ReportPrint);
    const blobImage = await image.blob();
    try {
      try {
        await navigator.clipboard.write([
          new ClipboardItem({
            "image/png": blobImage,
          }),
        ]);
      } finally {
        handleCopyImageError(false);
      }
    } catch (err) {
      handleCopyImageError(true);
      throw Error(String(err));
    }
  }, [])
  return (
    <CashDeskModal title="Caixa" setEditing={setIsEditingCashDesk}>
    <div className="flex flex-col sm:gap-8 gap-5 bg-blackBg p-4 rounded-none" data-cashdesk>
      <TotalValue title="Total no Caixa" size="g" totalValue={cashdeskValue + depositValue + withdrawValue}/>
      <div className="flex items-center justify-between md:gap-1 sm:flex-row flex-col gap-5 ">
          <TotalValue title="Total da Entrada" size="p" totalValue={depositValue + moneySales} addButton={setShowDeposit} type="green"/>
          <TotalValue title="Total da Retirada" size="p" totalValue={withdrawValue} addButton={setShowWithdraw} type="gray"/>
      </div>
    </div>
    <button
        className="bg-aquaBlue text-black font-semibold py-5 sm:text-3xl text-2xl hover:opacity-75 transition-opacity px-8 h-[5rem] flex items-center justify-center"
        onClick={copyCashdeskReportImage}
    >
        {isTakingPrint ? <Loading /> : 'Copiar Relátorio do Caixa'}
      </button>
    </CashDeskModal>
  );
}
