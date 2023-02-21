import { X } from "phosphor-react";
import html2canvas from 'html2canvas';
import { SaleItemReport } from "./SaleItemReport";
import { useContext, useState } from "react";
import classNames from "classnames";
import { SalesContext } from "../../common/contexts/Sales/SalesProvider";
import { useSalesContext } from "../../common/contexts/Sales/useSales";

interface ReportProps {
    setShowReport: (type: boolean) => void
}


export function Report(props: ReportProps) {
    const [takingPrint, isTakingPrint] = useState(false)

    const [reportErrorMessage, setReportErrorMessage] = useState('')

    const {creditSalesTotal, moneySalesTotal, pixSalesTotal, salesTotal } = useSalesContext()

    

    

    async function takeReportPrint() {
        await isTakingPrint(true)
        const canvas = await html2canvas(document.querySelector('[data-report]')!, {
            allowTaint: true,
            removeContainer: false
        })
        const base64Image = canvas.toDataURL('image/png');
        setTimeout(() => isTakingPrint(false), 1000)

        return base64Image
    }

    async function copyReportImage() {
        const ReportPrint = await takeReportPrint()
        const image = await fetch(ReportPrint)
        const blobImage = await image.blob()
        try {
            try {

                await navigator.clipboard.write([
                new ClipboardItem({
                    'image/png': blobImage 
                })
                ])
            } finally  {
            setReportErrorMessage('Imagem do relátorio copiado para área de transferência')
            } 
        } catch (err) {
            setReportErrorMessage('Ocorreu um erro a gerar o Relatorio. Tente novamente!')
            throw Error(String(err))
        } 
          
    }

    function CloseReport() {
        setReportErrorMessage('a')
        props.setShowReport(false)
    }

    return (
        <span className="fixed z-10 w-[100%]  bg-black bg-opacity-60 flex  h-full justify-center sm:items-center" id="report">
            <div className="sm:w-[32rem] sm:h-[90%] w-full h-[89vh] bg-blackBg text-center mm:p-4 flex flex-col gap-6 overflow-y-scroll">
                <div className="flex flex-col gap-7 bg-blackBg rounded-none" data-report>
                    
                        <div className="flex sm:justify-between justify-center items-center w-full text-center">
                            <span className="w-[40px] sm:block hidden">
                                
                            </span>
                            <h1 className="text-4xl font-bold">
                                Relátorio
                            </h1>
                            <button
                                className={classNames("cursor-pointer hover:opacity-70 transition-opacity sm:block hidden", {
                                    'text-blackBg': takingPrint
                                })}
                                onClick={CloseReport}
                            >
                                <X  size={40} weight={'bold'}/>
                            </button>
                        </div>
                    <div className="flex flex-col items-center gap-6 bg-blackBg rounded-none" >
                        <SaleItemReport saleType="Money" title="Dinheiro"
                        value={moneySalesTotal} />
                        <SaleItemReport saleType="CreditCard" title="Cartão" value={creditSalesTotal} />
                        <SaleItemReport saleType="Pix" title="Pix" value={pixSalesTotal} />
                        <SaleItemReport saleType="Total" title="Total" value={salesTotal} />
                    </div>
                </div>
                <input 
                type="button" 
                value="Copiar Relátorio" 
                className="cursor-pointer w-[15rem]  bg-aquaBlue self-center text-[1.5rem] font-bold hover:opacity-70 transition-opacity p-5"
                onClick={copyReportImage}
                />
                {reportErrorMessage == '' ? '' : 
                <p><strong>
                   {reportErrorMessage} 
                </strong></p>}
            </div>
        </span>
    )
}