import { ArrowUUpLeft, Pencil, Wallet, X } from "phosphor-react"
import { ReactNode } from "react"
import { useSetShowComponents } from "../../../common/state/hooks/ShowComponentsHooks/useSetShowComponents"

interface Props {
    children: ReactNode
    title: string
    goBack?: (type: boolean) => void
    setEditing?: (type: boolean) => void
}
export function CashDeskModal({children, title = '', goBack, setEditing = () => {}}: Props) {
  const setShows = useSetShowComponents();
  return (
    <article className=" md:max-w-[55rem] w-full  bg-blackBg flex flex-col sm:gap-9 gap-5 sm:px-12 px-8 py-6 sm:border-aquaBlue sm:border overflow-scroll pb-20 justify-start sm:justify-center">
      <header className="flex justify-between w-full">
        <button
          className="items-center hover:text-aquaBlue transition-colors justify-start w-[45px] flex invisible sm:visible"
          type="button"
          onClick={goBack ? () => goBack(false) : () => setEditing(true)}
          >
          {goBack ? 
            <ArrowUUpLeft size={45} />
            : (
              <div className="flex items-center">
              <Pencil size={45} />
              <span className="text-xl font-semibold ">Editar</span>
            </div>
          )
        }
        </button>
        <span className="flex justify-center items-center gap-2 text-aquaBlue">
          <Wallet size={54} />
          <h1 className="sm:text-3xl font-bold text-2xl">{title}</h1>
          

        </span>
          <button
            className="flex items-center justify-end hover:text-aquaBlue transition-colors invisible sm:visible"
            onClick={() =>
              setShows((shows) => ({
                ...shows,
                CashDeskComponent: {
                  isShow: false,
                },
              }))
            }
          >
            <X size={45} weight="bold" />
          </button>
      </header>
        {children}
        <button
        className="bg-aquaBlue text-black font-semibold py-5 sm:text-3xl text-2xl hover:opacity-75 transition-opacity px-8 items-center justify-center gap-1 sm:hidden flex pr-16"
        onClick={goBack ? () => goBack(false) : () => setEditing(true)}
        
    >
        {goBack ? <ArrowUUpLeft size={30}/> : <Pencil size={30}/>}
        {goBack ? 'Voltar' : 'Editar'}
        
      </button>
    </article>
  )
}