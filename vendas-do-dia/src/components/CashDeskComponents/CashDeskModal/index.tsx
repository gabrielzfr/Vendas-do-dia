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
    <article className=" md:max-w-[50rem] w-full  bg-blackBg flex flex-col gap-12 px-12 py-6 sm:border-aquaBlue sm:border">
      <header className="flex justify-between w-full">
        <button
          className="flex items-center hover:text-aquaBlue transition-colors   justify-start w-[45px]"
          type="button"
          onClick={goBack ? () => goBack(false) : () => setEditing(true)}
          >
          {goBack ? 
            <ArrowUUpLeft size={45} />
            : (
              <div className="flex items-center">
              <Pencil size={45} />
              <span className="text-xl font-semibold sm:block hidden">Editar</span>
            </div>
          )
        }
        </button>
        <span className="flex justify-center items-center gap-2 text-aquaBlue">
          <Wallet size={54} />
          <h1 className="text-3xl font-bold">{title}</h1>
          

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
    </article>
  )
}