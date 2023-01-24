import { CreditCard, CurrencyCircleDollar, Money, X } from "phosphor-react"


interface SaleProps {
    saleType: string
    value: number
    id: number
    deleteSale: (type: number) => void
}
export function Sale(props: SaleProps) {
    return (
        <li
        className="w-[100%] bg-blackBg h-28 px-7 flex  items-center justify-center pr-2" data-key={props.id}>
        {
        props.saleType == 'Money' ?
        <Money size={120} className="text-aquaBlue" /> :
        props.saleType == 'CreditCard' ? 
        <CreditCard size={120} className="text-aquaBlue" /> :
        <CurrencyCircleDollar size={120} className="text-aquaBlue" />
        }
        
        <div className="text-center w-[calc(100%-101px)]">
            <p className=" text-[5.2rem] w-">{props.value.toLocaleString('pt-br', {minimumFractionDigits: 2})}</p>
        </div>
        <button onClick={() => props.deleteSale(props.id)}>
            <X size={70} />
        </button>
    </li>   
    )
}