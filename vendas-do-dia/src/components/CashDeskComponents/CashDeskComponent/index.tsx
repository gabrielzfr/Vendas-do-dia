import { useState } from "react";
import { CashDeskIndex } from "../CashDeskIndex/CashDeskIndex";
import { EditCashDesk } from "../EditCashDesk/EditCashDesk"; 
import { AddCashDeskDeposit } from "../AddCashDeskDeposit";
import { AddCashDeskWithdraw } from "../AddCashDeskWithdraw";
import { useShowCashDeskDepositValue } from "../../../common/state/hooks/CashDeskHooks/deposit/useShowCashDeskDepositValue";
import { useShowCashDeskWithdrawValue } from "../../../common/state/hooks/CashDeskHooks/withdraw/useShowCashDeskWithdrawValue";


export function CashDesk() {
  const [isEditingCashDesk, setIsEditingCashDesk] = useState(false);
  const showWithdraw = useShowCashDeskWithdrawValue()
  const showDeposit = useShowCashDeskDepositValue()
  return (
    <div className="fixed z-10 w-[100%]   bg-black bg-opacity-60 flex  h-full justify-center sm:items-center">
      {isEditingCashDesk ? 
        <EditCashDesk setIsEditingCashDesk={setIsEditingCashDesk} />
       : 
       showDeposit ? 
        <AddCashDeskDeposit /> :
        showWithdraw ?
        <AddCashDeskWithdraw /> :
        <CashDeskIndex setIsEditingCashDesk={setIsEditingCashDesk} />
      }
    </div>
  );
}
