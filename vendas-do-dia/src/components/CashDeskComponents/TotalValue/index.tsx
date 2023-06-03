import classNames from "classnames"
import { Plus } from "phosphor-react"
import { SetterOrUpdater } from "recoil"

interface TotalValueProps {
    title: string,
    totalValue: number
    size: 'g' | 'p'
    type?: 'normal' | 'green' | 'gray'
    addButton?:  SetterOrUpdater<boolean>
}

export function TotalValue({title = '', totalValue = 0, size = 'p', type = 'normal', addButton}: TotalValueProps) {
  return (
    <div className={classNames("flex flex-col justify-center w-full gap-2 ", {
        'sm:max-w-[23rem]' : size == 'p',
        'sm:max-w-none ': size == 'g'
    })}>
    <div className="flex justify-between w-full">
        <h2 className={classNames("  font-bold", {
            'sm:text-3xl text-xl': size == 'g',
            'text-xl': size == 'p',
            'text-green-500': type == 'green',
            'text-grayPlaceholde3r': type != 'green'
        })}>
        {title}
        </h2>

        {
            addButton && 
                <button
                  type="button"
                  onClick={() => addButton(true)}
                >
                    <Plus />
                </button>
        }
    </div>
    <div className={classNames('flex bg-grayBg h-44  items-center  w-full overflow-x-auto', {
         'sm:h-44 sm:gap-6 sm:px-8 h-[7rem] gap-5 px-3': size == 'g',
         'h-[6.2rem] gap-5 px-3': size == 'p',
    })}>
      <span className="w">
        <strong className={classNames(" font-semibold ", {
            'sm:text-9xl text-[3.8rem]': size == 'g',
            'text-[3.8rem]': size == 'p',
            'text-green-500': type == 'green','text-aquaBlue': type == 'normal','text-grayPlaceholde3r': type == 'gray',
        })}>
          R$
        </strong>
      </span>
      <span className={classNames("flex-1 text-center font-normal", {
        'sm:text-9xl text-[3.8rem]': size == 'g',
        'text-[3.8rem]': size == 'p',
        'text-green-500': type == 'green','text-white': type == 'normal','text-grayPlaceholde3r': type == 'gray',
      })}>
          {totalValue == 0 ? '00,00' : totalValue.toLocaleString("pt-br", {
            minimumFractionDigits: 2,
          })}
      </span>
    </div>
  </div>
  )
}