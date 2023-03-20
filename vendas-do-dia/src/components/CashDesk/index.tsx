import { Pencil, Wallet, X } from "phosphor-react";
import { useState } from "react";
import { useSetShowComponents } from "../../common/state/hooks/useSetShowComponents";
import { CashDeskIndex } from "./CashDeskIndex";
import { EditCashDesk } from "./EditCashDesk";

export function CashDesk() {
  const [isEditingCashDesk, setIsEditingCashDesk] = useState(false);
  const setShows = useSetShowComponents();
  return (
    <span className="fixed z-10 w-[100%]   bg-black bg-opacity-60 flex  h-full justify-center sm:items-center">
      {isEditingCashDesk ? 
        <EditCashDesk setIsEditingCashDesk={setIsEditingCashDesk} />
       :
        <CashDeskIndex setIsEditingCashDesk={setIsEditingCashDesk} />
      }
    </span>
  );
}
