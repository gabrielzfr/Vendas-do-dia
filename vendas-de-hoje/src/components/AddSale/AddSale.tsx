import { FormEvent, useState } from "react";
import { SaleType, SaleTypeButton } from "./SaleTypeButton";

interface AddSaleProps {
    setSales: (type: ({type: SaleType; value: number; }[])) => void
    sales: {type: SaleType; value: number; }[]
}

export function AddSale(props: AddSaleProps) {
    const [selected, setSelected] = useState<SaleType>('Money')
    const [saleValue, setSaleValue] = useState('')
    
    async function RegisterSale(e: FormEvent) {
        e.preventDefault()
        if (Number(saleValue) == 0 || saleValue == '') {
            alert('Digite uma venda válida')
        } else {
            props.setSales([...props.sales, {type: selected, value: Number(saleValue)}])
            localStorage.setItem('Sales', JSON.stringify([...props.sales, {type: selected, value: Number(saleValue)}]))
            setSaleValue('')
        }
        
        
    }

    return (
        <aside className="flex items-center flex-col justify-center gap-12 mb-5">
            <h1 className="font-semibold text-[2.6rem]">Adicionar a Lista</h1>
            <form 
            action="submit"
            className="flex flex-col items-center gap-9"
            >
                <span className="w-[21.5rem] h-[7.25rem] bg-grayBg px-3 text-7xl flex items-center gap-5 ">
                    <label className="text-aquaBlue">R$</label>
                    <input 
                        name="value"
                        value={saleValue}
                        onChange={(e) => setSaleValue(e.target.value)}
                        type="number" 
                        className=" h-full bg-transparent text-white w-full placeholder:text-grayPlaceholde3r focus:outline-none "
                        placeholder="00,00" 
                        
                    />
                </span>
                <div className="flex flex-col items-start justify-start w-[21.5rem] gap-11 ">
                    <SaleTypeButton 
                        selected={selected} 
                        icon={'Money'} 
                        title={'Dinheiro'} 
                        setSelected={setSelected}
                    /> 
                    <SaleTypeButton 
                        selected={selected} 
                        icon={'CreditCard'} 
                        title={'Cartão'}
                        setSelected={setSelected}

                    /> 
                    <SaleTypeButton 
                        selected={selected}
                        icon={'Pix'} 
                        title={'Pix'}
                        setSelected={setSelected}

                     /> 
                </div>
                <input 
                type="submit" value="Adicionar Venda"
                className="w-[21rem] h-[4.5rem] bg-aquaBlue text-2xl cursor-pointer font-bold hover:opacity-80 transition-opacity
                    "
                onClick={RegisterSale}
                    />
            </form>
        </aside>
    )
}