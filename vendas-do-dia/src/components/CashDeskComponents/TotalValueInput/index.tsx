import classNames from "classnames"
import { Plus } from "phosphor-react"
import { useState } from "react"
import { SetterOrUpdater } from "recoil"

interface TotalValueInputProps {
  title: string,
  totalValue: string
  setTotalValue: (type: string) => void
  size?: 'g' | 'p'
  type?: 'normal' | 'green' | 'gray'
}


export function TotalValueInput({title = '', totalValue = '', setTotalValue = () => {}, size = 'p', type = 'normal'}: TotalValueInputProps) {
  return (
    <div className={classNames("flex flex-col justify-center w-full gap-2", {
        'max-w-[21.5rem]' : size == 'p',
    })}>
    <div className="flex justify-between w-full">
        <h2 className={classNames("  font-bold", {
            'text-3xl': size == 'g',
            'text-xl': size == 'p',
            'text-green-500': type == 'green',
            'text-grayPlaceholde3r': type != 'green'
        })}>
        {title}
        </h2>
    </div>
    <div className={classNames('flex bg-grayBg h-44  items-center  w-full ', {
         'h-44 gap-6 px-8': size == 'g',
         'h-[6.2rem] gap-5 px-3': size == 'p',
    })}>
      <span className="w">
        <strong className={classNames(" font-semibold ", {
            'text-9xl': size == 'g',
            'text-[3.8rem]': size == 'p',
            'text-green-500': type == 'green','text-aquaBlue': type == 'normal','text-grayPlaceholde3r': type == 'gray',
        })}>
          R$
        </strong>
      </span>
      <input className={classNames("w-full text-start font-normal bg-transparent placeholder:text-center focus:outline-none"
      , {
        'text-9xl': size == 'g',
        'text-[3.8rem]': size == 'p',
        'text-green-500 placeholder:text-green-700': type == 'green',
        'text-white placeholder:text-green-white': type == 'normal','text-grayPlaceholde3r ': type == 'gray'
      }
      )} 
        type="number" 
        value={totalValue} 
        onChange={e => {setTotalValue(e.target.value)}} 
        placeholder="00,00"
      />
    </div>
  </div>
  )
}