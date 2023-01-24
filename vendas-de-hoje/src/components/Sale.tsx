import { CreditCard, CurrencyCircleDollar, Money, X } from "phosphor-react"


interface SaleProps {
    icon: string
    value: number
}
export function Sale(props: SaleProps) {
    return (
        <li
        className="w-[100%] bg-blackBg h-28 px-7 flex  items-center justify-center pr-2">
        {
        props.icon == 'Money' ?
        <Money size={120} className="text-aquaBlue" /> :
        props.icon == 'CreditCard' ? 
        <CreditCard size={120} className="text-aquaBlue" /> :
        <CurrencyCircleDollar size={120} className="text-aquaBlue" />
        }
        
        <div className="text-center w-[calc(100%-101px)]">
            <p className=" text-[5.2rem] w-">{props.value}</p>
        </div>
        <button>
            <X size={70} />
        </button>
    </li>   
    )
}