import { Wallet } from "phosphor-react";
import { useSalesValue } from "../../common/state/hooks/useSalesValue";
import { useSetShowComponents } from "../../common/state/hooks/useSetShowComponents";
import { Sale } from "./Sale";
import { Sales } from "./Sales";


export function DaySales() {
    const setShows = useSetShowComponents()

    return (
        <section className="flex flex-col items-center gap-6 ">
        <h1 className="sm:text-7xl text-5xl font-semibold text-center">
            Vendas do Dia
        </h1>
        <Sales />
        <div className="flex justify-between w-full">
        <span className="w-[20%] flex justify-center">
                <button className="">
                <Wallet 
                    className="text-aquaBlue " 
                    size={65} 
                    onClick={() => 
                        setShows(shows => ({
                            ...shows,
                            CashDeskComponent: {
                                isShow: true
                            }
                        }))
                    }
                />
                </button>
            </span>
            <input 
            type="button" 
            value="Gerar Relátorio"
            className="bg-aquaBlue font-semibold sm:w-[32rem] h-[5rem] text-4xl cursor-pointer hover:opacity-80 transition-opacity w-[90%] hidden sm:block text-blackBg"
            onClick={
                () => setShows(shows => ({
                    ...shows,
                    ReportComponent: {
                        isShow: true
                    }
                }))
            }
            />
            <span className="w-[20%] ">
            </span>
        </div>
    </section>
    )
}