import {
  ArrowUUpLeft,
  CheckCircle,
  CircleNotch,
  ClipboardText,
  CreditCard,
  CurrencyCircleDollar,
  Money,
  Star,
  Wallet,
  X,
  XCircle,
} from "phosphor-react";
import html2canvas from "html2canvas";
import { SaleItemReport } from "./SaleItemReport";
import { useState, useTransition } from "react";
import classNames from "classnames";
import { useTotalSalesSelector } from "../../common/state/selectors/hooks/useTotalSalesSelector";
import { useSetShowComponents } from "../../common/state/hooks/useSetShowComponents";
import {PixIcon} from "../Icons/PixIcon";

export function Report() {
  const [isPending, startTransition] = useTransition()

  const [copyImageError, handleCopyImageError] = useState<null | boolean>(null);

  const {
    totalCreditSales,
    totalMoneySales,
    totalPixSales,
    totalSales,
    totalCashdesk,
  } = useTotalSalesSelector();

  const setShowReport = useSetShowComponents();

  async function takeReportPrint() {
    const canvas = await html2canvas(document.querySelector("[data-report]")!, {
      allowTaint: true,
      removeContainer: false,
    });
    const base64Image = canvas.toDataURL("image/png");
    return base64Image;
  }

  async function copyReportImage() {
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
  }

  function CloseReportComponent() {
    setShowReport(shows => ({
      ...shows,
      ReportComponent: {
        isShow: false,
      },
    }));
  }

  return (
    <span
      className="fixed z-10 w-[100%]   bg-black bg-opacity-60 flex  h-full justify-center sm:items-center"
    >
      <div className="sm:w-[32rem] sm:h-[90%] w-full h-[calc(100vh-5rem)] bg-blackBg text-center mm:p-5 flex flex-col gap-6 overflow-y-scroll ">
        {copyImageError == null ? (
          <>
            <div
              className="flex flex-col gap-7 bg-blackBg rounded-none"
              data-report
            >
              <div className="flex sm:justify-between justify-center items-center w-full text-center">
                <span className="w-[40px] sm:block hidden"></span>
                <h1 className="text-4xl font-bold">Relátorio</h1>
                <button
                  className={classNames(
                    "cursor-pointer hover:opacity-70 transition-opacity sm:block hidden",
                    {
                      "text-blackBg": isPending,
                    }
                  )}
                  onClick={CloseReportComponent}
                >
                  <X size={40} weight={"bold"} />
                </button>
              </div>
              <div className="flex flex-col items-center gap-6 bg-blackBg rounded-none">
                <SaleItemReport
                  icon={<Money size={65} />}
                  title="Dinheiro"
                  value={totalMoneySales}
                />
                <SaleItemReport
                  icon={<CreditCard size={65} />}
                  title="Cartão"
                  value={totalCreditSales}
                />
                <SaleItemReport
                  icon={<PixIcon size={55} isAquaBlue/>}
                  title="Pix"
                  value={totalPixSales}
                />
                <SaleItemReport
                  icon={<Star size={45} weight={"fill"} />}
                  title="Total"
                  value={totalSales}
                />
                <SaleItemReport
                  icon={<Wallet size={50} />}
                  title="Caixa"
                  value={totalCashdesk}
                />
              </div>
            </div>
            <button
              type="button"
              className="cursor-pointer w-[15rem]  bg-aquaBlue self-center text-[1.5rem] font-bold hover:opacity-70 transition-opacity p-5 text-zinc-100 flex justify-center "
              disabled={isPending}
              onClick={ () => {
                startTransition(() => {
                  copyReportImage()
                }) 
              }}
            >
              {isPending ? (
                <CircleNotch className="animate-spin" size={34} />
              ) : (
                "Copiar Relátorio"
              )}
            </button>
          </>
        ) : copyImageError ? (
          <>
            <span className="text-end">
              <button
                onClick={CloseReportComponent}
                className="sm:inline hidden"
              >
                <X size={40} weight={"bold"} />
              </button>
            </span>
            <div className="flex flex-col items-center gap-12 h-full justify-center pb-[5rem]">
              <span className="flex flex-col items-center">
                <XCircle className="text-red-500 sm:text-[18rem] text-[15rem]" />
                <h1 className="text-5xl">Ocorreu um Erro!</h1>
              </span>
              <p className="text-xl">
                Ocorreu um erro ao gerar seu Relátorio. <br /> Por favor Tente
                novamente!
              </p>
              <button
                className="flex items-center text-4xl border-red-500 border text-red-500 p-3"
                onClick={() => handleCopyImageError(null)}
              >
                <ArrowUUpLeft size={40} />
                Voltar
              </button>
            </div>
          </>
        ) : (
          <>
            <span className="text-end">
              <button
                onClick={CloseReportComponent}
                className="sm:inline hidden"
              >
                <X size={40} weight={"bold"} />
              </button>
            </span>
            <div className="flex flex-col items-center sm:gap-12 gap-8 h-full  justify-center sm:pb-[5rem]">
              <span className="flex flex-col items-center">
                <CheckCircle className="text-green-500 sm:text-[18rem] text-[15rem]" />
                <h1 className="text-5xl">Tudo Certo!</h1>
              </span>
              <span className="flex flex-col gap-4">
                <p className="text-xl">
                  Uma imagem do relátorio foi copiada para sua Aréa de
                  Transferência.
                </p>
                <p className="text-xl">
                  Basta Apenas{" "}
                  <span
                    className="inline-flex items-center align-bottom
                        "
                  >
                    <ClipboardText className="" /> <strong>Colar</strong>{" "}
                  </span>{" "}
                  para Anexá-la.
                </p>
              </span>
              <button
                className="flex items-center text-4xl border-green-500 border text-green-500 p-3"
                onClick={() => handleCopyImageError(null)}
              >
                <ArrowUUpLeft size={40} />
                Voltar
              </button>
            </div>
          </>
        )}
      </div>
    </span>
  );
}
